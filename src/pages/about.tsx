import React from 'react'
import { HeadFC, PageProps } from "gatsby"
import MainLayout from '../components/layouts/MainLayout'
import Footer from '../components/Footer/Footer'
import { Row, Typography, Grid } from 'antd'
import MainLogo from "../images/logotipo-variantes/Main-1.png"
import Manos from "../images/manos.png"
import Cora from "../images/coracon.png"
import Foco from "../images/foco.png"

const { Title } = Typography
const { useBreakpoint } = Grid

const About: React.FC<PageProps> = () => {
    const { md } = useBreakpoint();

    return (
        <MainLayout>
            <div className='h-full bg-rose-300' >
                <Row justify="center" className='py-5'>
                    <figure>
                        <img src={MainLogo} alt="logo" />
                    </figure>
                </Row>
                <Row justify="center">

                    <article className=' max-w-[85%] mb-5 p-5 rounded-md drop-shadow-md  bg-orange-300'>
                        <Title level={2} style={{ fontFamily: "Playfair Display, serif" }}>Nuestra Historia</Title>
                        <p className='text-justify text-rose-900' style={{ fontFamily: "Bebas Neue, serif", fontSize: "16px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ullam non tempore necessitatibus neque! Sunt ut, distinctio perspiciatis quo deleniti natus repudiandae voluptatem reiciendis iste accusantium in eaque consequuntur inventore at et. Doloribus libero iusto blanditiis saepe voluptatibus ad obcaecati, odit laboriosam voluptate hic quos modi veritatis suscipit tempora repellat pariatur sequi laudantium officia alias unde quidem facilis sed? Blanditiis temporibus alias quidem laboriosam velit! Facilis quam repellat sequi suscipit pariatur obcaecati ut, sapiente facere impedit, eligendi reiciendis debitis eos tempore explicabo eaque iusto possimus quis corrupti saepe ipsa voluptatum odio, ab maxime. Tempora repudiandae excepturi culpa natus eos quasi ipsa consequuntur quidem sunt temporibus minus possimus rerum quisquam recusandae vero libero impedit ipsam, ad ratione, nobis soluta. Velit placeat aperiam esse quidem reiciendis, natus facilis repellat nihil asperiores rerum atque doloribus ducimus necessitatibus! Fugit ipsam ex sed quam, minima necessitatibus excepturi dicta qui voluptate neque aperiam. Iusto ratione hic sint cupiditate eum asperiores id et minus placeat quidem incidunt quis, sapiente omnis ducimus possimus est optio suscipit totam?</p>

                        <Title level={2} style={{ fontFamily: "Playfair Display, serif", marginTop: "1rem" }}>Nuestros valores</Title>
                        <section className={md ? "flex justify-around" : "flex flex-col"}>
                            <div className='flex flex-col items-center mx-3'>
                                <figure className='w-[200px] my-5 p-8 bg-white rounded-full '>
                                    <img src={Manos} alt="manos-image" />
                                </figure>
                                <span style={{ fontFamily: "Bebas Neue, serif", fontSize: "20px" }}>Confiabilidad</span>
                                <p className='text-justify text-rose-900' style={{ fontFamily: "Bebas Neue, serif", fontSize: "16px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia praesentium id molestiae quas deserunt reprehenderit fugiat quibusdam at omnis! Numquam impedit excepturi ex eum, molestiae placeat illum quisquam aperiam.</p>
                            </div>
                            <div className='flex flex-col items-center mx-3'>
                                <figure className='w-[200px] my-5 p-8 bg-white rounded-full '>
                                    <img src={Cora} alt="pasion-image" />
                                </figure>
                                <span style={{ fontFamily: "Bebas Neue, serif", fontSize: "20px" }}>Pasión</span>
                                <p className='text-justify text-rose-900' style={{ fontFamily: "Bebas Neue, serif", fontSize: "16px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id facilis cumque officia itaque repudiandae recusandae labore eveniet illo? Reiciendis in eaque provident velit voluptate ab voluptatibus facilis tempora quidem!</p>
                            </div>
                            <div className='flex flex-col items-center mx-3'>
                                <figure className='w-[200px] my-5 p-8 bg-white rounded-full '>
                                    <img src={Foco} alt="innovacion-image" />
                                </figure>
                                <span style={{ fontFamily: "Bebas Neue, serif", fontSize: "20px" }}>Innovación</span>
                                <p className='text-justify text-rose-900' style={{ fontFamily: "Bebas Neue, serif", fontSize: "16px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ea quia iure cum? Doloribus dolores ullam sint perspiciatis similique sapiente explicabo magni, nisi vero incidunt eaque qui dolorum neque quo.</p>
                            </div>
                        </section>
                    </article>

                </Row>
            </div>
            <Footer />
        </MainLayout>
    )
}

export const Head: HeadFC = () => <title>About Section</title>

export default About