import React from 'react'
import { Layout, Grid, Row, Button, Col, Input } from 'antd'
import MainLayout from '../../components/layouts/MainLayout'
import { FilterOutlined } from "@ant-design/icons"
import ProductCard from '../../components/Products/ProductCard'
import productsList from "../../productsList.json"
import Footer from '../../components/Footer/Footer'
import "../../styles/ProductsPage.css"

const { useBreakpoint } = Grid
const { Sider, Content } = Layout

const ProductsPage = () => {
    const { md } = useBreakpoint()

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
                <Row className='h-full bg-rose-300 py-2' justify="center">
                    <Col span={24} className="products-grid">
                        {productsList.map((product) =>
                            <ProductCard product={product} />
                        )}
                    </Col>
                </Row>
            </>
            <Footer />
        </MainLayout>
    )
}

export default ProductsPage