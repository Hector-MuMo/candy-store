import React from 'react'
import { Grid, Row, Button, Col, Input, Typography } from 'antd'
import MainLayout from '../../components/layouts/MainLayout'
import { FilterOutlined } from "@ant-design/icons"
import ProductCard from '../../components/Products/ProductCard'
import productsList from "../../productsList.json"
import Footer from '../../components/Footer/Footer'
import useProducts from '../../hooks/products/useProducts'
import loader from "../../images/logotipo-variantes/op-loader.gif"
import "../../styles/ProductsPage.css"

const { useBreakpoint } = Grid
const { Title } = Typography

const ProductsPage = () => {
    const { md } = useBreakpoint()
    const { products, isLoading } = useProducts(0, 10)

    return (
        <MainLayout>
            <h1 className='text-3xl bg-orange-300 p-2 '>Productos</h1>
            <>
                <Row align="middle" justify="center" wrap={true} className="bg-purple-300 py-2 m-0">
                    <Col>
                        <Button icon={<FilterOutlined />}>Filtrar</Button>
                    </Col>
                    <Col>
                        <Input type='search' placeholder='Buscar producto' />
                    </Col>
                </Row>
                <Row className='min-h-screen bg-rose-300 py-2' justify="center">
                    {
                        isLoading ?
                            <div className='mt-10'>
                                <figure className='w-[200px] rounded-md'>
                                    <img src={loader} alt="loader" />
                                </figure>
                                <Title
                                    level={2}
                                    style={{ marginLeft: "25px", color: "#4d1227", fontFamily: "Playfair Display, serif", textAlign: "end" }}
                                >
                                    Cargando...
                                </Title>
                            </div>
                            :
                            <Col span={(md ? 20 : 24)} className="products-grid">
                                {products && products.length > 0 ?
                                    products.map((product) =>
                                        <ProductCard product={product} />
                                    )
                                    :
                                    <Title level={1} className="m-10">No se pueden cargar los productos. Prueba más tarde</Title>
                                }
                            </Col>
                    }
                </Row>
            </>
            <Footer />
        </MainLayout>
    )
}

export default ProductsPage

