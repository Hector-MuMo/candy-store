import React from 'react'
import { Row, Grid, Col, Collapse, List, Avatar, Badge } from 'antd'
import { useSelector } from 'react-redux'
import { selectProductsInCar } from '../app/productsInCar/productsInCarSlice'
import { Link } from 'gatsby'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { calculateSubtotalInCar, calculateTotalProduct, calculateTotal } from '../assets/utils/calculationInCar'
import CheckoutSteps from '../components/Checkout/CheckoutSteps'

const { useBreakpoint } = Grid
const { Panel } = Collapse;

const CheckoutPage = () => {
    const productsInCar = useSelector(selectProductsInCar)
    const { md } = useBreakpoint()
    const [deliveryCost, setDeliveryCost] = React.useState(0);

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

    return (
        <div>
            {md
                ?
                <Row>
                    <Col span={16}>
                        Formulario
                    </Col>
                    <Col span={8} className="bg-sky-300">
                        Lista de carrito
                    </Col>
                </Row>
                :
                <div>
                    <Row className='py-5'>
                        Logo de Tienda
                    </Row>
                    <Row justify="center">
                        <Col className="flex flex-col items-center w-11/12">
                            <Collapse className='w-full'>
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
                                                            <Avatar src={item.img} />
                                                        </Badge>
                                                    }
                                                    title={<Link to={`/products/${item.id}`}>{item.name}</Link>}
                                                />
                                            </List.Item>
                                        )}
                                    >
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
                    <Row>
                        <Col span={24} >
                            <CheckoutSteps deliverySelection={handleDeliverySelection} />
                        </Col>
                    </Row>
                </div>
            }

        </div>
    )
}

export default CheckoutPage