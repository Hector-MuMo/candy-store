import React, { useState } from 'react';
import { Button, Form, Input, message, Steps, theme, Typography } from 'antd';
import { Link } from "gatsby"

const { Title } = Typography

interface AddressFormProps {
    next: () => void,
    prev: () => void
}

const AddressForm = ({ next, prev }: AddressFormProps) => {
    const [form] = Form.useForm();

    const handleNextStep = () => {
        form.validateFields().then(formData => {
            console.log(formData)
            next()
        }).catch(errors => { console.log(errors) })
    }

    return (
        <>
            <p className='mb-5'>Si tienes una cuenta <Link to="/" className='text-sky-300'>Inicia sesión</Link></p>
            <Form form={form}>
                <Title level={5}>Datos de Envío</Title>
                <Form.Item
                    name="name"
                    label="Nombre"
                    rules={[
                        {
                            required: true,
                            message: 'Ingresa el nombre de quien recibirá el pedido',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Apellidos"
                    rules={[
                        {
                            required: true,
                            message: 'No olvides tus apellidos',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="street"
                    label="Calle y Número"
                    rules={[
                        {
                            required: true,
                            message: 'No sabemos a donde llegará :C',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="suburb"
                    label="Colonia"
                    rules={[
                        {
                            required: true,
                            message: 'También necesitamos saber esto :S',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="city"
                    label="Ciudad"
                    rules={[
                        {
                            required: true,
                            message: 'Todo cuenta para que tu pedido llegue sin problemas',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="state"
                    label="Estado"
                    rules={[
                        {
                            required: true,
                            message: 'Todo cuenta para que tu pedido llegue sin problemas',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="zip"
                    label="C.P."
                    rules={[
                        {
                            required: true,
                            message: 'Esto ayuda mucho al repartidor',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Teléfono"
                    rules={[
                        {
                            required: true,
                            message: 'Prometemos no contactarte a menos que sea necesario',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
            <div className='flex justify-end mt-8 mb-2'>
                <Button onClick={handleNextStep}>
                    Next
                </Button>
            </div>
        </>
    )
}

export default AddressForm