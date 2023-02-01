import React, { useEffect } from 'react'
import { Button, Card } from 'antd'
import { PlusOutlined } from "@ant-design/icons"
import { getId } from "../../app/product/productSlice"
import { selectProductId } from "../../app/product/productSlice"
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, updateBuyingAmount } from "../../app/productsInCar/productsInCarSlice"
import productsList from "../../productsList.json"
import { Link } from "gatsby"

const { Meta } = Card

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const productId = useSelector(selectProductId)
    const dispatch = useDispatch()

    const handleAddProduct = () => {
        dispatch(getId(product.id))
    }

    useEffect(() => {
        //Add product logic - Find the product on the list of products and if is in it add new product through redux action
        let newProduct: Product | undefined = productsList.find(product => product.id === productId)
        if (newProduct) {
            newProduct = { ...newProduct, buyingAmount: 1 }
            dispatch(addProduct(newProduct))
        }
    }, [productId]);

    return (
        <Card
            key={product.id}
            cover={<img style={{ width: "150px" }} src={product.img} alt={product.name} />}
            actions={[
                <Button icon={<PlusOutlined />} onClick={handleAddProduct}>Agregar al carrito</Button>
            ]}
            title={<Link to={`/products/${product.id}`}>{product.name}</Link>}
        >
            <Meta title={`$${product.price}`} description={product.category} />
        </Card>
    )
}

export default ProductCard