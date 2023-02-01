import React from 'react'
import { Button, Col, Radio, Row, Typography } from 'antd'
import type { RadioChangeEvent } from 'antd';
import { useSelector } from "react-redux"
import { selectProductsInCar } from "../../app/productsInCar/productsInCarSlice"
import { calculateSubtotalInCar } from '../../assets/utils/calculationInCar';

const { Title } = Typography

interface DeliveryFormProps {
    next: () => void,
    prev: () => void,
    deliverySelection: (value: string) => void
}

const DeliveryForm = ({ next, prev, deliverySelection }: DeliveryFormProps) => {
    const productsInCar = useSelector(selectProductsInCar)
    const [deliveryType, setDeliveryType] = React.useState(calculateSubtotalInCar(productsInCar) >= 1000 ? "free" : "normal");

    const options = [
        {
            label:
                <Row>
                    <Col span={20}>
                        <p>"Envío Nacional (3 a 6 días habiles)"</p>
                    </Col>
                    <Col span={4}>
                        <span className='font-bold'>$120</span>
                    </Col>
                </Row>,
            value: "normal"
        },
        {
            label:
                <Row>
                    <Col span={20}>
                        <p>Envío gratis en pedidos mayores a $1000 (3 a 6 días habiles)</p>
                    </Col>
                    <Col span={4}>
                        <span className='font-bold'>$0</span>
                    </Col>
                </Row>,
            value: "free",
            disabled: calculateSubtotalInCar(productsInCar) >= 1000 ? false : true
        }
    ]

    const handleDeliveryChange = ({ target: { value } }: RadioChangeEvent) => {
        setDeliveryType(value)
        deliverySelection(value)
    }

    React.useEffect(() => {
        deliverySelection(deliveryType)
    }, [deliveryType]);

    return (
        <div>
            <Title level={5}>Elige el tipo de envío</Title>
            <Radio.Group options={options} value={deliveryType} onChange={handleDeliveryChange} />
            <div className='flex justify-end my-5'>
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>
                <Button onClick={() => next()}>
                    Next
                </Button>
            </div>
        </div>
    )
}

export default DeliveryForm