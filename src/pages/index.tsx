import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import MainLayout from "../components/layouts/MainLayout"
import { Carousel, Col, Row, Grid, Typography } from 'antd';
import Zeus from "../images/logotipo-variantes/Zeus.png"
import Prometheus from "../images/logotipo-variantes/Prometheus.png"
import Footer from "../components/Footer/Footer";
import loader from "../images/logotipo-variantes/op-loader.gif"
import useProducts from "../hooks/products/useProducts";
import chocolateCat from "../images/categories/Coleccion-Chocolates.png"
import botanasCat from "../images/categories/Coleccion-Botanas.png"
import chiclesCat from "../images/categories/Coleccion-Chicles.png"
import bombonesCat from "../images/categories/Coleccion-Bombones.png"
import galletasCat from "../images/categories/Coleccion-Galletas.png"
import paletasCat from "../images/categories/Coleccion-Paletas.png"
import "../styles/home.css"


const { useBreakpoint } = Grid
const { Title } = Typography

const IndexPage: React.FC<PageProps> = () => {
    const { md } = useBreakpoint()
    const { products } = useProducts(0, 10)
    const [loadingCarousel, setLoadingCarousel] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingCarousel(false)
        }, 1500);
        return () => clearTimeout(timer)
    }, []);

    return (
        <MainLayout >
            {
                loadingCarousel ?
                    <Row className="my-10" align="middle" justify="center">
                        <img className="rounded-lg" src={loader} alt="loader" />
                        <Title
                            level={2}
                            style={{ marginLeft: "25px", color: "#4d1227", fontFamily: "Playfair Display, serif", textAlign: "end" }}
                        >
                            Cargando...
                        </Title>
                    </Row>
                    :
                    <Row>
                        <Col span={24} >
                            <Carousel autoplay>
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
            }

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
                    <Row justify="center" >
                        <>
                            {products
                                ?
                                products.slice(0, (md ? 4 : 2)).map((product: Product) => {
                                    return (
                                        <div className="max-w-[150px] flex flex-col items-center my-3 text-center mx-3">
                                            <figure className="flex items-center p-5 mb-2 w-[150px] h-[150px]" style={{ backgroundColor: "white", border: "10px solid #4d1227", color: "white", borderRadius: "50%" }}>
                                                <Link to={`/products/${product.id}`}>
                                                    <img src={product.imgs[0]} alt={product.name} />
                                                </Link>
                                            </figure>
                                            <p style={{ width: "100%", minHeight: "90px", backgroundColor: "#4d1227", color: "white", fontFamily: "Bebas Neue, sanserif", fontSize: "16px" }} className="mb-2 p-3">
                                                {product.name}
                                            </p>
                                            <div className="m-auto w-[100px]">
                                                <span style={{ backgroundColor: "#4d1227", color: "white", fontFamily: "Bebas Neue, sanserif", fontSize: "16px" }} className="block mb-2 p-1" >
                                                    {product.brand}
                                                </span>
                                                <p className="bg-green-300 text-white p-2" style={{ fontFamily: "Bebas Neue, sanserif", fontSize: "16px" }}>
                                                    ${product.price}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div className="flex flex-col items-center my-3 text-center mx-3">
                                    <figure className="mb-2 w-[150px] h-[150px]" style={{ backgroundColor: "#4d1227", color: "white", borderRadius: "50%" }}>
                                        <img src="" alt="" />
                                    </figure>
                                    <p style={{ width: "100%", backgroundColor: "#4d1227", color: "white" }} className="mb-2 p-3">Productos No disponibles</p>
                                    <div className="m-auto w-[100px]">
                                        <span style={{ backgroundColor: "#4d1227", color: "white" }} className="block mb-2 p-1" >No disponible</span>
                                        <p className="bg-green-300 text-white p-2">$0.00</p>
                                    </div>
                                </div>
                            }
                        </>

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
                                    <div className="p-3">
                                        <img src={chocolateCat} alt="chocolateCat" />
                                    </div>
                                    <div className="p-3">
                                        <img src={botanasCat} alt="chocolateCat" />
                                    </div>
                                    <div className="p-3">
                                        <img src={chiclesCat} alt="chocolateCat" />
                                    </div>
                                    <div className="p-3">
                                        <img src={paletasCat} alt="chocolateCat" />
                                    </div>
                                    <div className="p-3">
                                        <img src={bombonesCat} alt="chocolateCat" />
                                    </div>
                                    <div className="p-3">
                                        <img src={galletasCat} alt="chocolateCat" />
                                    </div>
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
                                <div className="p-3">
                                    <img src={chocolateCat} alt="chocolateCat" />
                                </div>
                                <div className="p-3">
                                    <img src={botanasCat} alt="chocolateCat" />
                                </div>
                                <div className="p-3">
                                    <img src={chiclesCat} alt="chocolateCat" />
                                </div>
                                <div className="p-3">
                                    <img src={paletasCat} alt="chocolateCat" />
                                </div>
                                <div className="p-3">
                                    <img src={bombonesCat} alt="chocolateCat" />
                                </div >
                                <div className="p-3">
                                    <img src={galletasCat} alt="chocolateCat" />
                                </div>
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
