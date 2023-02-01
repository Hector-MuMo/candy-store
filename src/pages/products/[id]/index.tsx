import React, { useState, useEffect } from 'react'
import { Button, Col, Image, InputNumber, Row, Typography } from 'antd'
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import MainLayout from '../../../components/layouts/MainLayout'
import productsList from "../../../productsList.json"
import type { PageProps } from "gatsby"
import { useDispatch } from 'react-redux'
import { getId, updateAmount } from "../../../app/product/productSlice"
import { addProduct, updateBuyingAmount } from "../../../app/productsInCar/productsInCarSlice"
import { navigate } from "gatsby"

const { Title } = Typography


const ProductDesciptionPage = ({ params }: PageProps) => {
    const [product, setProduct] = useState<Product>();
    const [productId] = useState(params.id);
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch()

    const handleAmountChange = (value: number | null) => {
        if (value === null) {
            setAmount(1)
        } else {
            setAmount(value)
        }
    }

    const handleUpdateCar = () => {
        dispatch(getId(productId))
        dispatch(updateAmount(amount))
        dispatch(addProduct(product))
        dispatch(updateBuyingAmount({ id: productId, amount }))
    }

    const handleIncrement = () => {
        if (amount > 99) {
            setAmount(99)
        } else {
            setAmount(amount + 1)
        }
    }

    const handleDecrement = () => {
        if (amount < 1) {
            setAmount(1)
        } else {
            setAmount(amount - 1)
        }
    }

    useEffect(() => {
        const result = productsList.find(product => product.id === productId)
        if (result)
            setProduct(result)
    }, [productId]);


    return (
        <MainLayout>
            <Row className='bg-red-300 flex justify-center' >
                {product ?

                    <Col span={20} className="flex flex-col justify-center gap-4 my-5">
                        <Row className='flex justify-center ' >
                            <figure className='max-w-[500px] bg-white border-4 border-sky-300 rounded-xl'>
                                <Image
                                    className='p-10'
                                    src={product.img}
                                    alt={product.name}
                                    fallback={"https://m.media-amazon.com/images/I/71Dsgv0x+mL.jpg"}
                                />
                            </figure>
                        </Row >
                        <Row className='w-full flex justify-center'>
                            <div className='inline-flex justify-center w-[80%]'>
                                <div className='w-[120px] bg-white hover:border-4 hover:border-sky-300 m-2 rounded-xl overflow-hidden'>
                                    <Image
                                        className='w-full h-full'
                                        src={product.img}
                                        alt={product.name}
                                        preview={false}
                                        fallback={"https://m.media-amazon.com/images/I/71Dsgv0x+mL.jpg"}
                                    />
                                </div>
                                <div className='w-[120px] bg-white hover:border-4 hover:border-sky-300 m-2 rounded-xl overflow-hidden'>
                                    <Image
                                        src={product.img}
                                        alt={product.name}
                                        preview={false}
                                        fallback={"https://m.media-amazon.com/images/I/71Dsgv0x+mL.jpg overflow-hidden"}
                                    />
                                </div>
                                <div className='w-[120px] bg-white hover:border-4 hover:border-sky-300 m-2 rounded-xl overflow-hidden'>
                                    <Image
                                        src={""}
                                        alt={product.name}
                                        preview={false}
                                        fallback={"https://m.media-amazon.com/images/I/71Dsgv0x+mL.jpg"}
                                    />
                                </div>
                            </div>
                        </Row>
                        <Row className='flex flex-col'>
                            <Title level={2}>{product.name}</Title>
                            <p>
                                {product.description}
                            </p>
                            <div className='flex flex-col'>
                                <Title level={3} className="mt-3">${product.price}</Title>
                                <span><span className='font-bold'>Marca:</span>  {product.brand}</span>
                                <span> <span className='font-bold'>Tipo de producto:</span>  {product.category}</span>
                                <span className='font-bold'>Cantidad</span>
                                <div className='flex items-center'>
                                    <Button
                                        className='bg-white'
                                        icon={<PlusOutlined />}
                                        onClick={handleIncrement}
                                    />
                                    <InputNumber
                                        className='w-12 m-0 text-center'
                                        controls={false}
                                        min={1}
                                        max={99}
                                        value={amount}
                                        onChange={handleAmountChange}
                                    />
                                    <Button
                                        className='bg-white'
                                        icon={<MinusOutlined />}
                                        onClick={handleDecrement}
                                    />
                                </div>
                            </div>
                        </Row>
                        <Row align='middle' justify="center">
                            <Button
                                className='bg-orange-400 border-orange-400 text-white mr-1'
                                onClick={handleUpdateCar}
                            >
                                Agregar al carrito
                            </Button>
                            <Button
                                className='bg-rose-400 border-rose-400 text-white ml-1 '
                                onClick={() => navigate("/checkout")}
                            >
                                Comprar
                            </Button>
                        </Row>
                    </Col>

                    :
                    <>
                        <p>Producto no disponible</p>
                    </>
                }

            </Row>
        </MainLayout>
    )
}

export default ProductDesciptionPage