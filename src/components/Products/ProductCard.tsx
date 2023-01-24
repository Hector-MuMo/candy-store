import React from 'react'
import { Button, Card } from 'antd'
import { PlusOutlined } from "@ant-design/icons"
import { getId } from "../../app/productId/productSlice"
import { useDispatch } from 'react-redux'

const { Meta } = Card

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const dispatch = useDispatch()

    const handleAddProduct = () => {
        dispatch(getId(product.id))
    }

    return (
        <Card
            key={product.id}
            cover={<img style={{ width: "150px" }} src={product.img} alt={product.name} />}
            actions={[
                <Button icon={<PlusOutlined />} onClick={handleAddProduct}>Agregar al carrito</Button>
            ]}
            title={product.name}
        >
            <Meta title={`$${product.price}`} description={product.category} />

        </Card>
    )
}

export default ProductCard