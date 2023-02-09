import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import MainLayout from "../components/layouts/MainLayout"
import { Carousel, Col, Row, Grid, Typography } from 'antd';
import Zeus from "../images/logotipo-variantes/Zeus.png"
import Prometheus from "../images/logotipo-variantes/Prometheus.png"
import IconFooter from "../images/logotipo-variantes/Big-mom-blanco-footer.png"
import "../styles/home.css"


const { useBreakpoint } = Grid
const { Title } = Typography

const IndexPage: React.FC<PageProps> = () => {
    const { md } = useBreakpoint()

    return (
        <MainLayout >
            <Row>
                <Col span={24} >
                    <Carousel autoplay >
                        <div className="bannerMam">
                        </div>
                        <div className="bannerCaesar bg-center">
                        </div>
                        <div className="bannerNose bg-center">
                        </div>
                        <div className="bannerNami bg-center">
                        </div>
                    </Carousel>
                </Col>
            </Row>
            <Row className="pb-5">
                <Col className="m-auto">
                    <Row className="items-center" justify="center">
                        <Title
                            level={2}
                            style={{ color: "#4d1227", fontFamily: "Playfair Display, serif", fontWeight: "800" }}>
                            Dulces del Mes
                        </Title>
                        <figure className="max-w-[100px] mr-2" style={{ rotate: "-15deg" }}>
                            <img src={Zeus} alt="cloud" />
                        </figure>
                    </Row>
                    <Row justify="center">
                        {md ?
                            <>
                                <div className="flex flex-col items-center my-3 text-center mx-3">
                                    <figure className="mb-2 w-[150px] h-[150px]" style={{ backgroundColor: "#4d1227", color: "white", borderRadius: "50%" }}>
                                    </figure>
                                    <p style={{ width: "100%", backgroundColor: "#4d1227", color: "white" }} className="mb-2 p-3">Nombre producto</p>
                                    <div className="m-auto w-[100px]">
                                        <span style={{ backgroundColor: "#4d1227", color: "white" }} className="block mb-2 p-1" >Marca</span>
                                        <p className="bg-green-300 text-white p-2">Precio</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center my-3  text-center mx-3">
                                    <figure className="mb-2 w-[150px] h-[150px]" style={{ backgroundColor: "#4d1227", color: "white", borderRadius: "50%" }}>
                                    </figure>
                                    <p style={{ width: "100%", backgroundColor: "#4d1227", color: "white" }} className="mb-2 p-3">Nombre producto</p>
                                    <div className="m-auto w-[100px]">
                                        <span style={{ backgroundColor: "#4d1227", color: "white" }} className="block mb-2 p-1" >Marca</span>
                                        <p className="bg-green-300 text-white p-2">Precio</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center my-3 text-center mx-3">
                                    <figure className="mb-2 w-[150px] h-[150px]" style={{ backgroundColor: "#4d1227", color: "white", borderRadius: "50%" }}>
                                    </figure>
                                    <p style={{ width: "100%", backgroundColor: "#4d1227", color: "white" }} className="mb-2 p-3">Nombre producto</p>
                                    <div className="m-auto w-[100px]">
                                        <span style={{ backgroundColor: "#4d1227", color: "white" }} className="block mb-2 p-1" >Marca</span>
                                        <p className="bg-green-300 text-white p-2">Precio</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center my-3  text-center mx-3">
                                    <figure className="mb-2 w-[150px] h-[150px]" style={{ backgroundColor: "#4d1227", color: "white", borderRadius: "50%" }}>
                                    </figure>
                                    <p style={{ width: "100%", backgroundColor: "#4d1227", color: "white" }} className="mb-2 p-3">Nombre producto</p>
                                    <div className="m-auto w-[100px]">
                                        <span style={{ backgroundColor: "#4d1227", color: "white" }} className="block mb-2 p-1" >Marca</span>
                                        <p className="bg-green-300 text-white p-2">Precio</p>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="flex flex-col items-center my-3 text-center mx-3">
                                    <figure className="mb-2 w-[100px] h-[100px]" style={{ backgroundColor: "#4d1227", color: "white", borderRadius: "50%" }}>
                                    </figure>
                                    <p style={{ backgroundColor: "#4d1227", color: "white" }} className="mb-2 p-3">Nombre producto</p>
                                    <div className="m-auto w-[100px]">
                                        <span style={{ backgroundColor: "#4d1227", color: "white" }} className="block mb-2 p-1" >Marca</span>
                                        <p className="bg-green-300 text-white p-2">Precio</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center my-3  text-center mx-3">
                                    <figure className="mb-2 w-[100px] h-[100px]" style={{ backgroundColor: "#4d1227", color: "white", borderRadius: "50%" }}>
                                    </figure>
                                    <p style={{ backgroundColor: "#4d1227", color: "white" }} className="mb-2 p-3">Nombre producto</p>
                                    <div className="m-auto w-[100px]">
                                        <span style={{ backgroundColor: "#4d1227", color: "white" }} className="block mb-2 p-1" >Marca</span>
                                        <p className="bg-green-300 text-white p-2">Precio</p>
                                    </div>
                                </div>
                            </>
                        }
                    </Row>
                </Col>
            </Row>
            <Row className="bg-sky-500">
                {md ?
                    <>
                        <Col span={10} className="flex items-center justify-end">
                            <Row className="flex flex-col items-center" justify="start">
                                <div className=" w-[200px] h-[200px] mb-5">
                                    <figure className=" m-2" style={{ rotate: "-5deg" }}>
                                        <img src={Prometheus} alt="cloud" />
                                    </figure>
                                </div>
                                <Title
                                    level={2}
                                    style={{ marginLeft: "25px", color: "#4d1227", fontFamily: "Playfair Display, serif", textAlign: "end" }}>
                                    Categorías
                                </Title>
                            </Row>
                        </Col>
                        <Col span={14}>
                            <Row className="m-auto">
                                <section className="home-categories">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </section>
                            </Row>
                        </Col>
                    </>
                    :
                    <Col className="w-full">
                        <Row className="left-1 items-center h-[100px] w-full" justify="start">
                            <div className="relative w-[100px] h-[100px]">
                                <figure className="absolute top-[-30px] w-[120px] m-2" style={{ rotate: "-5deg" }}>
                                    <img src={Prometheus} alt="cloud" />
                                </figure>
                            </div>
                            <Title
                                level={2}
                                style={{ marginLeft: "25px", color: "#4d1227", fontFamily: "Playfair Display, serif", textAlign: "end" }}>
                                Categorías
                            </Title>
                        </Row>
                        <Row className="m-auto">
                            <section className="home-categories">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </section>
                        </Row>
                    </Col>
                }
            </Row>

            {md ?
                <Row justify="center" className=" p-3" style={{ backgroundColor: "#4d1227" }}>
                    <Col >
                        <section className="home-footer">
                            <div className="bg-white "></div>
                            <div className="bg-white "></div>
                            <div className="bg-white "></div>
                            <div className="bg-white "></div>
                            <div className="bg-white "></div>
                            <div className="bg-white"></div>
                        </section>
                    </Col>
                    <Col >
                        <figure className="w-[250px] mx-16">
                            <img src={IconFooter} alt="icon-footer" />
                        </figure>
                    </Col>
                    <Col >
                        <section className="home-footer">
                            <div className="bg-white "></div>
                            <div className="bg-white "></div>
                            <div className="bg-white "></div>
                            <div className="bg-white "></div>
                            <div className="bg-white "></div>
                            <div className="bg-white"></div>
                        </section>
                    </Col>
                </Row>
                :
                <Row className="flex flex-col items-center p-3" style={{ backgroundColor: "#4d1227" }}>
                    <figure className="w-[100px] mx-3 mb-5">
                        <img src={IconFooter} alt="icon-footer" />
                    </figure>
                    <section className="home-footer">
                        <div className="bg-white "></div>
                        <div className="bg-white "></div>
                        <div className="bg-white "></div>
                        <div className="bg-white "></div>
                        <div className="bg-white "></div>
                        <div className="bg-white"></div>
                    </section>
                </Row>
            }
        </MainLayout>
    )
}

export default IndexPage

export const Head: HeadFC = () => {

    return (
        <>
            <title>Inicio</title>
        </>
    )
}
