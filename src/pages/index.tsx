import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import MainLayout from "../components/layouts/MainLayout"
import { Carousel, Col, Row, Grid, Typography } from 'antd';
import Zeus from "../images/logotipo-variantes/Zeus.png"
import Prometheus from "../images/logotipo-variantes/Prometheus.png"
import Footer from "../components/Footer/Footer";
import "../styles/home.css"


const { useBreakpoint } = Grid
const { Title } = Typography

const IndexPage: React.FC<PageProps> = () => {
    const { md } = useBreakpoint()

    return (
        <MainLayout >
            <Row>
                <Col span={24} >
                    <Carousel >
                        <div className="bannerMam relative">
                            <Title className="carousel-title-1">
                                LOS MEJORES DULCES DE LOS 4 MARES
                            </Title>
                        </div>
                        <div className="bannerCaesar relative">
                            <Title className="carousel-title-2">
                                DULCES QUE TE HARAN SENTIR EN OTRO MUNDO
                            </Title>
                        </div>
                        <div className="bannerNose relative">
                            <Title className="carousel-title-3">
                                LA FUERZA COMBINADA CON LA DULZURA
                            </Title>
                        </div>
                        <div className="bannerNami relative">
                            <Title className="carousel-title-4">
                                EL LADO TIERNO DE LOS DULCES
                            </Title>
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
                        <Col span={14} className="m-auto ">
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

            <Footer />
        </MainLayout >
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
