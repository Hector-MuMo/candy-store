import React from 'react'
import { Col, Row, Grid } from 'antd'
import IconFooter from "../../images/logotipo-variantes/Big-mom-blanco-footer.png"

const { useBreakpoint } = Grid

const Footer = () => {
    const { md } = useBreakpoint()

    return (
        <>
            {
                md ?
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
        </>
    )
}

export default Footer