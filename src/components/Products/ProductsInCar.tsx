import React, { useState, useEffect } from 'react'
import { Avatar, InputNumber, List, Skeleton } from 'antd'
import { Link } from 'gatsby';
import { useSelector, useDispatch } from "react-redux"
import { selectProductId, selectProductAmount } from "../../app/product/productSlice"
import { deleteProduct, selectProductsInCar, updateBuyingAmount } from "../../app/productsInCar/productsInCarSlice"

interface ActionsListProps {
    productid: string
    onDelete: (productId: string) => void
}

const ActionsList = ({ productid, onDelete }: ActionsListProps) => {
    const productsInCar = useSelector(selectProductsInCar)
    const reduxProductId = useSelector(selectProductId)
    const [totalItems, setTotalItems] = useState<number | null>(1);
    const dispatch = useDispatch()

    const handleAmountProduct = (amount: number | null) => {
        if (amount === null) {
            setTotalItems(1)
            dispatch(updateBuyingAmount({ id: productid, amount: 1 }))
        } else {
            setTotalItems(amount)
            dispatch(updateBuyingAmount({ id: productid, amount }))
        }
    }

    useEffect(() => {
        const product = productsInCar.find(product => product.id === productid)
        if (product && product.buyingAmount) {
            setTotalItems(product.buyingAmount)
        } else {
            setTotalItems(1)
        }
    }, [productsInCar]);

    return (
        <div>
            <InputNumber style={{ width: "60px" }} min={0} value={totalItems} onChange={handleAmountProduct} />
            <a className='ml-2' onClick={() => onDelete(productid)}>Eliminar</a>
        </div>
    )
}

const ProductsInCar = () => {
    const productsInCar = useSelector(selectProductsInCar)
    const dispatch = useDispatch()

    const handleDeleteProduct = (productId: string) => {
        const productToDelete = productsInCar.find(product => product.id === productId)

        if (productToDelete)
            dispatch(deleteProduct(productToDelete))
    }

    return (
        <List
            rowKey={"id"}
            itemLayout="vertical"
            dataSource={productsInCar}
            style={{ color: "#4d1227", fontFamily: "Bebas Neue, serif" }}
            renderItem={(item) => (
                <List.Item key={item.id} actions={[<ActionsList productid={item.id} onDelete={handleDeleteProduct} />]}>
                    <Skeleton avatar title={false} loading={false} active>
                        <List.Item.Meta
                            style={{ color: "#4d1227", fontFamily: "Bebas Neue, serif", }}
                            avatar={<Avatar size={64} src={item.imgs[0]} />}
                            title={<Link to={`/products/${item.id}`} >{item.name}</Link>}
                        />
                    </Skeleton>
                </List.Item>
            )}
        >
            {productsInCar && productsInCar.length < 1 ?
                <p style={{ fontFamily: "Bebas Neue, serif", fontSize: "18px" }}>No tienes productos agregados ????</p>
                : null
            }
        </List>
    )
}

export default ProductsInCar