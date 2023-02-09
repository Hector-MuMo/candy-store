import React, { useState, useEffect } from 'react'
import { Avatar, InputNumber, List, Skeleton } from 'antd'
import { Link } from 'gatsby';
import { useSelector, useDispatch } from "react-redux"
import { selectProductId, selectProductAmount } from "../../app/product/productSlice"
import { deleteProduct, selectProductsInCar, updateBuyingAmount } from "../../app/productsInCar/productsInCarSlice"
import productsList from "../../productsList.json"

interface ActionsListProps {
    productid: string
    onDelete: (productId: string) => void
}

const ActionsList = ({ productid, onDelete }: ActionsListProps) => {
    const [totalItems, setTotalItems] = useState<number | null>(1);
    const productAmount = useSelector(selectProductAmount)
    const reduxProductId = useSelector(selectProductId)
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
        if (productid === reduxProductId) {
            setTotalItems(productAmount)
        }
    }, [productAmount, reduxProductId]);

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
        const productToDelete = productsList.find(product => product.id === productId)

        if (productToDelete)
            dispatch(deleteProduct(productToDelete))
    }

    return (
        <List
            rowKey={"id"}
            itemLayout="vertical"
            dataSource={productsInCar}
            renderItem={(item) => (
                <List.Item key={item.id} actions={[<ActionsList productid={item.id} onDelete={handleDeleteProduct} />]}>
                    <Skeleton avatar title={false} loading={false} active>
                        <List.Item.Meta
                            avatar={<Avatar size={64} src={item.img} />}
                            title={<Link to="/products">{item.name}</Link>}
                        />
                    </Skeleton>
                </List.Item>
            )}
        >
            {productsInCar && productsInCar.length < 1 ?
                <p>No tienes productos agregados 💔</p>
                : null
            }
        </List>
    )
}

export default ProductsInCar