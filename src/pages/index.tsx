import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import MainLayout from "../components/layouts/MainLayout"
import { Carousel, Col, Image, Row, Grid } from 'antd';
import Footer from "../components/Footer/Footer";

const { useBreakpoint } = Grid

const IndexPage: React.FC<PageProps> = () => {
    const { md } = useBreakpoint()

    return (
        <MainLayout >

            <Row className="bg-sky-300">
                <Col span={24} >
                    <Carousel autoplay >
                        <div>
                            <Image src="https://img.freepik.com/foto-gratis/cerca-candycane-lollipop-sobre-fondo-colorido-dulces_53876-31923.jpg?w=2000" preview={false} style={md ? { height: "800px", width: "3000px" } : {}} />
                        </div>
                        <div>
                            <Image src="https://img.freepik.com/foto-gratis/sabrosos-apetitosos-accesorios-fiesta-sobre-fondo-azul-brillante_1220-1696.jpg?w=2000" preview={false}
                                style={md ? { height: "800px", width: "3000px" } : {}} />
                        </div>
                    </Carousel>
                </Col>
            </Row>
            <Row className="bg-orange-300">
                <Col>
                    <section >
                        <h2 className="text-2xl">Promociones</h2>
                        <p>Disfruta de nuestras promociones como:</p>

                    </section>
                </Col>
            </Row>
            <Row className="bg-purple-300">
                <Col>
                    <section >
                        Lo mas vendido
                    </section></Col>
            </Row>
            <Row className="bg-rose-300">
                <Col>
                    <section>
                        Otros
                    </section>
                </Col>
            </Row>
            <Footer />

        </MainLayout>
    )
}

export default IndexPage

export const Head: HeadFC = () => {

    return (
        <>
            <title>Home Page</title>
        </>
    )
}
