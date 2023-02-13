import React from 'react'
import { Row, Grid, Col, Collapse, List, Avatar, Badge, Button, Divider } from 'antd'
import { useSelector } from 'react-redux'
import { selectProductsInCar } from '../app/productsInCar/productsInCarSlice'
import { HeadFC, Link } from 'gatsby'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { calculateSubtotalInCar, calculateTotalProduct, calculateTotal } from '../assets/utils/calculationInCar'
import CheckoutSteps from '../components/Checkout/CheckoutSteps'
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import Logo from "../images/logotipo-variantes/Main-2.png"

const { useBreakpoint } = Grid
const { Panel } = Collapse;

const CheckoutPage = () => {
    const productsInCar = useSelector(selectProductsInCar)
    const { md } = useBreakpoint()
    const [deliveryCost, setDeliveryCost] = React.useState(0);
    const [productsPrice, setProductsPrice] = React.useState(0);
    const [totalPrice, setTotalPrice] = React.useState(0);

    const handleDeliverySelection = (value: string) => {
        switch (value) {
            case "normal":
                setDeliveryCost(120)
                return
            case "free":
                setDeliveryCost(0)
            default:
                break;
        }
    }

    React.useEffect(() => {
        const subtotal = calculateSubtotalInCar(productsInCar)
        const total = calculateTotal(productsInCar, deliveryCost)
        setProductsPrice(subtotal)
        setTotalPrice(total)
    }, [productsInCar, deliveryCost]);

    return (
        <PayPalScriptProvider options={{
            "client-id": "test",
            components: "buttons",
            currency: "MXN"
        }}>
            <div>
                {md
                    ?
                    <Row style={{ height: "100vh" }}>
                        <Col span={16} className="flex flex-col items-center">
                            <div style={{ margin: "0 1rem 0 1rem", maxWidth: "1024px" }}>
                                <Row justify="center" className=' py-5'>
                                    <figure className='w-[200px] bg-rose-300 rounded-full p-2'>
                                        <img src={Logo} alt="logo" />
                                    </figure>
                                </Row>
                                <CheckoutSteps deliverySelection={handleDeliverySelection} finalPrice={totalPrice} />
                                <Row justify="start">
                                    <Button className='my-5 bg-rose-400 text-white'><Link to="/products">Regresar a la tienda</Link></Button>
                                </Row>
                            </div>
                        </Col>
                        <Col span={8} className="bg-sky-300">
                            <Row className='w-full mt-8' justify="center"  >
                                <List
                                    className='w-11/12 p-2'
                                    rowKey={"id"}
                                    itemLayout="vertical"
                                    dataSource={productsInCar}
                                    renderItem={(item) => (
                                        <List.Item
                                            key={item.id}
                                            extra={<p className='text-base font-medium'>${calculateTotalProduct(item)}</p>}
                                        >
                                            <List.Item.Meta
                                                avatar={
                                                    <Badge count={item.buyingAmount}>
                                                        <Avatar size={64} src={item.img} />
                                                    </Badge>
                                                }
                                                title={<Link to={`/products/${item.id}`}>{item.name}</Link>}
                                            />
                                        </List.Item>
                                    )}
                                >
                                    <Divider />
                                    <Row className='mx-3 font-bold'>
                                        <Col span={18}>
                                            <p className='text-lg'>Subtotal:</p>
                                        </Col>
                                        <Col span={6}>
                                            <p className='text-lg'>${productsPrice}</p>
                                        </Col>
                                    </Row>
                                    <Row className='mx-3 font-bold'>
                                        <Col span={18}>
                                            <p className='text-lg'>Envio:</p>
                                        </Col>
                                        <Col span={6}>
                                            <p className='text-lg'>${deliveryCost}</p>
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row className='mx-3 font-bold'>
                                        <Col span={18}>
                                            <p className='text-lg'>Total a pagar:</p>
                                        </Col>
                                        <Col span={6}>
                                            <p className='text-lg'>${totalPrice}</p>
                                        </Col>
                                    </Row>
                                </List>
                            </Row>
                        </Col>
                    </Row>
                    :
                    <div style={{ height: "100vh" }}>
                        <Row className='py-5' justify="center">
                            <figure className='w-[120px] bg-rose-300 rounded-full p-2'>
                                <img src={Logo} alt="logo" />
                            </figure>
                        </Row>
                        <Row justify="center">
                            <Col className="flex flex-col items-center w-11/12">
                                <Collapse className='w-full m-2'>
                                    <Panel header={
                                        <p className='font-bold'>
                                            <ShoppingCartOutlined style={{ marginRight: "10px", fontSize: "24px" }} />
                                            Resumen del pedido
                                        </p>
                                    }
                                        key="1"
                                        className='bg-sky-300 '
                                    >

                                        <List
                                            rowKey={"id"}
                                            itemLayout="vertical"
                                            dataSource={productsInCar}
                                            renderItem={(item) => (
                                                <List.Item
                                                    key={item.id}
                                                    extra={<p className='text-base font-medium'>${calculateTotalProduct(item)}</p>}
                                                >
                                                    <List.Item.Meta
                                                        avatar={
                                                            <Badge count={item.buyingAmount}>
                                                                <Avatar size={64} src={item.img} />
                                                            </Badge>
                                                        }
                                                        title={<Link to={`/products/${item.id}`}>{item.name}</Link>}
                                                    />
                                                </List.Item>
                                            )}
                                        >
                                            <Divider />
                                            <Row className='mx-3 font-bold'>
                                                <Col span={20}>
                                                    <p className='text-lg'>Subtotal:</p>
                                                </Col>
                                                <Col span={4}>
                                                    <p className='text-lg'>${calculateSubtotalInCar(productsInCar)}</p>
                                                </Col>
                                            </Row>
                                            <Row className='mx-3 font-bold'>
                                                <Col span={20}>
                                                    <p className='text-lg'>Envio:</p>
                                                </Col>
                                                <Col span={4}>
                                                    <p className='text-lg'>${deliveryCost}</p>
                                                </Col>
                                            </Row>
                                            <Divider />
                                            <Row className='mx-3 font-bold'>
                                                <Col span={20}>
                                                    <p className='text-lg'>Total a pagar:</p>
                                                </Col>
                                                <Col span={4}>
                                                    <p className='text-lg'>${calculateTotal(productsInCar, deliveryCost)}</p>
                                                </Col>
                                            </Row>
                                        </List>
                                    </Panel>
                                </Collapse>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col span={22} >
                                <CheckoutSteps deliverySelection={handleDeliverySelection} finalPrice={totalPrice} />
                                <Row>
                                    <Button className='my-5 bg-rose-400 text-white'><Link to="/products">Regresar a la tienda</Link></Button>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                }
            </div>
        </PayPalScriptProvider>
    )
}

export default CheckoutPage

export const Head: HeadFC = () => {

    return (
        <>
            <title>Checkout</title>

        </>
    )
}