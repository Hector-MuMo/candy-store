import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
import AddressForm from "../Forms/AddressForm"
import DeliveryForm from '../Forms/DeliveryForm';

interface CheckoutStepsProps {
    deliverySelection: (value: string) => void
}

const CheckoutSteps = ({ deliverySelection }: CheckoutStepsProps) => {
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
            content: <AddressForm next={next} prev={prev} />,
        },
        {
            title: 'Tipo de Envío',
            content: <DeliveryForm next={next} prev={prev} deliverySelection={deliverySelection} />,
        },
        {
            title: 'Pago',
            content: 'Opciones de pago',
        },
        {
            title: 'Confirmación',
            content: 'Resumen y confirmación',
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));


    return (
        <div className='p-5'>
            <Steps current={current} items={items} direction="horizontal" />
            <div className='border-sky-300 border-2 p-2 rounded-md'>{steps[current].content}</div>
            {<div style={{ marginTop: 24 }}>
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}

            </div>}
        </div>
    );
}

export default CheckoutSteps