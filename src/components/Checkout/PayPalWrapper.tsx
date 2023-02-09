import React from 'react'
import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js"
import { Button, Row, Spin, notification } from 'antd';


interface PayPalWrapperProps {
    amount: string,
    currency: string,
    prev: () => void
}

const PayPalWrapper = ({ amount, currency, prev }: PayPalWrapperProps) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer()
    const [api, contextHolder] = notification.useNotification();

    React.useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options
            }
        })
    }, []);

    return (
        <div>
            {contextHolder}
            {isPending
                ?
                <Spin />
                :
                <>

                    <Row className='flex-col my-5 items-center' justify="center">
                        <p className='text-rose-400'>
                            Revisa tu carrito por última vez y realiza tu pago.
                        </p>
                        <p className='text-sky-400'>
                            Al confirmarse el pago serás redirigido al inicio
                        </p>
                    </Row>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        disabled={false}
                        forceReRender={[amount, currency]}
                        fundingSource={undefined}
                        createOrder={(data, actions) => {
                            return actions.order
                                .create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: currency,
                                                value: amount,
                                            },
                                        },
                                    ],
                                })
                                .then((orderId) => {
                                    // Your code here after create the order
                                    console.log("Se creó la orden:", orderId)
                                    return orderId;
                                });
                        }}
                        onError={(error) => {
                            console.log("Ocurrió un error en la transacción", error);

                            (() => {
                                api['error']({
                                    message: '❌ Error al pagar',
                                    description:
                                        'Ocurrió una error con la transacción. Revisa que la tarjeta utilizada sea valida.',
                                });
                            })();

                        }}
                        onCancel={(data, actions) => {
                            console.log("😅 Se canceló la transacción", actions);
                            console.log("Esta es la info", data);

                            (() => {
                                api['warning']({
                                    message: '😅 Pago Cancelado',
                                    description:
                                        'Creemos que fue por accidente, puedes intentarlo las veces que quieras 🤗',
                                });
                            })();
                        }}
                        onApprove={function (data, actions: any) {
                            if (actions.order)
                                return actions.order.capture().then(function () {
                                    // Your code here after capture the order
                                    console.log("Se capturó la orden exitosamente", actions)
                                    console.log("Esta es la info", data)
                                });
                        }}
                    />

                    <Row>
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    </Row>
                </>
            }
        </div>
    )
}

export default PayPalWrapper