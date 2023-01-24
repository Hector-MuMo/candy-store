import React, { useState, useEffect } from 'react'
import { Avatar, InputNumber, List, Skeleton } from 'antd'
import { Link } from 'gatsby';
import { useSelector, useDispatch } from "react-redux"
import { selectProductId } from "../../app/productId/productSlice"
import { addProduct, deleteProduct, selectProductsInCar } from "../../app/productsInCar/productsInCarSlice"
import productsList from "../../productsList.json"

const list = [
    {
        id: 1,
        name: "Papas kiubo caseras",
        image: "https://dulceriasinaloa.com/wp-content/uploads/2022/08/Papas-Caseras-Salsa-Negra.jpg",
        description: "Papas fritas sabor salsa casera secreta",
        totalItems: 2
    },
    {
        id: 2,
        name: "Ollitas",
        image: "https://hscomercial.mx/wp-content/uploads/2020/11/70047DD1-16F0-4E44-A383-081E9CF88864.png",
        description: "ollitas",
        totalItems: 7
    }
]

interface ActionsListProps {
    productid: string
    onDelete: (productId: string) => void
}

const ActionsList = ({ productid, onDelete }: ActionsListProps) => {
    const [totalItems, setTotalItems] = useState<number | null>(1);

    const handleAmountProduct = (amount: number | null) => {
        console.log(amount);

        if (amount === null) {
            setTotalItems(0)
        } else {
            setTotalItems(amount)
        }
    }

    return (
        <div>
            <InputNumber style={{ width: "60px" }} min={0} value={totalItems} onChange={handleAmountProduct} />
            <a className='ml-2' onClick={() => onDelete(productid)}>Eliminar</a>
        </div>
    )
}

const ProductsOnCar = () => {
    const productsInCar = useSelector(selectProductsInCar)
    const productId = useSelector(selectProductId)
    const dispatch = useDispatch()

    useEffect(() => {
        const newProduct = productsList.find(product => product.id === productId)

        if (newProduct)
            dispatch(addProduct(newProduct))

    }, [productId]);

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
                <List.Item actions={[<ActionsList productid={item.id} onDelete={handleDeleteProduct} />]}>
                    <Skeleton avatar title={false} loading={false} active>
                        <List.Item.Meta
                            avatar={<Avatar src={item.img} />}
                            title={<Link to="/products">{item.name}</Link>}
                        />
                    </Skeleton>
                </List.Item>
            )}
        >

        </List>
    )
}

export default ProductsOnCar