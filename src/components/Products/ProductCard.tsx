import React from 'react'
import { Button, Card, notification } from 'antd'
import { PlusOutlined } from "@ant-design/icons"
import { selectProductsInCar } from "../../app/productsInCar/productsInCarSlice"
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, updateBuyingAmount } from "../../app/productsInCar/productsInCarSlice"
import { Link } from "gatsby"

const { Meta } = Card

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const productsList = useSelector(selectProductsInCar)
    const [api, contextHolder] = notification.useNotification();
    const dispatch = useDispatch()

    const handleAddProduct = () => {
        const updatedProduct = { ...product, buyingAmount: 1 }
        dispatch(addProduct(updatedProduct))

        const isProductInCar = productsList.find(item => item.id === product.id ? true : false)

        if (isProductInCar) {
            (() => {
                api['warning']({
                    message: '🛒 Producto en carrito',
                    description:
                        'El producto ya está en el carrito. Prueba agregando algún otro 🤗',
                });
            })();
        }
    }

    return (
        <>
            {contextHolder}
            {product ?
                <Card
                    key={product.id}
                    cover={<img style={{ width: "150px" }} src={product.imgs[0]} alt={product.name} />}
                    actions={[
                        <Button icon={<PlusOutlined />} onClick={handleAddProduct}>Agregar al carrito</Button>
                    ]}
                    title={<Link to={`/products/${product.id}`}>{product.name}</Link>}
                >
                    <Meta title={`$${product.price}`} description={product.category} />
                </Card>
                :
                <Card title="Error al cargar el producto :c">

                </Card>
            }
        </>
    )
}

export default ProductCard