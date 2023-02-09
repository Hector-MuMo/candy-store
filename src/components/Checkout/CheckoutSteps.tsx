import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
import UserInforForm from "../Forms/UserInfoForm"
import DeliveryForm from '../Forms/DeliveryForm';
import PayPalWrapper from './PayPalWrapper';
import "../../styles/Navigation.css"

interface CheckoutStepsProps {
    deliverySelection: (value: string) => void,
    finalPrice: number
}

const CheckoutSteps = ({ deliverySelection, finalPrice }: CheckoutStepsProps) => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    const steps = [
        {
            title: 'Datos de Envío',
            content: <UserInforForm next={next} />,
        },
        {
            title: 'Tipo de Envío',
            content: <DeliveryForm next={next} prev={prev} deliverySelection={deliverySelection} />,
        },
        {
            title: 'Resumen y Pago',
            content: <PayPalWrapper amount={finalPrice.toString()} currency='MXN' prev={prev} />,
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));


    return (
        <div className='p-5 shadow-md rounded-lg'>
            <Steps current={current} items={items} direction="horizontal" />
            <Divider />
            <div className='max-w-screen-lg'>{steps[current].content}</div>
            {<div style={{ marginTop: 24 }}>
                {/* {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button onClick={() => next()}>
                        Next
                    </Button>
                )} */}
            </div>}
        </div>
    );
}

export default CheckoutSteps