import React, { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"
import { updateUserInfo, selectUserInfo } from "../../app/userInfo/userInfoSlice"

const { Title } = Typography

interface UserInfoFormProps {
    next: () => void,
}

const UserInfoForm = ({ next }: UserInfoFormProps) => {
    const user = useSelector(selectUserInfo)
    const dispatch = useDispatch()
    const [form] = Form.useForm();


    const handleNextStep = () => {
        form.validateFields().then(formData => {
            console.log(formData)
            const user: User = {
                name: formData.name,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                address: {
                    street: formData.street,
                    suburb: formData.suburb,
                    zip: formData.zip,
                    city: formData.city,
                    state: formData.state
                }
            }
            dispatch(updateUserInfo(user))
            next()
        }).catch(errors => { console.log(errors) })
    }

    return (
        <>
            {/* <p className='mb-5'>Si tienes una cuenta <Link to="/profile" className='text-sky-300'>Inicia sesión</Link></p> */}
            <Form layout="vertical" form={form} initialValues={{
                name: user.name ?? "",
                lastName: user.lastName ?? "",
                email: user.email ?? "",
                phone: user.phone ?? "",
                street: user.address?.street ?? "",
                suburb: user.address?.suburb ?? "",
                zip: user.address?.zip ?? "",
                city: user.address?.city ?? "",
                state: user.address?.state ?? ""
            }}>
                <Title level={5}>Datos de Envío</Title>
                <Form.Item
                    className='mb-2'
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
                    className='mb-2'
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
                    className='mb-2'
                    name="email"
                    label="Correo electronico"
                    rules={[
                        {
                            required: true,
                            message: 'Prometemos no llenar tu correo de spam',
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className='mb-2'
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
                <Form.Item
                    className='mb-2'
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
                    className='mb-2'
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
                    className='mb-2'
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
                    className='mb-2'
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
                    className='mb-2'
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

            </Form>
            <div className='flex justify-end mt-6'>
                <Button className='bg-sky-300 text-white' onClick={handleNextStep}>
                    Next
                </Button>
            </div>
        </>
    )
}

export default UserInfoForm