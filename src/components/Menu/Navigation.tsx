import React, { useState } from 'react'
import { Badge, Button, Space, Grid, notification } from 'antd'
import Drawer from 'antd/es/drawer';
import MenuOptions from './MenuOptions';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ProductsInCar from '../Products/ProductsInCar';
import { useSelector } from 'react-redux';
import { selectProductsInCar } from "../../app/productsInCar/productsInCarSlice"
import { navigate } from 'gatsby';
import logo from "../../images/logotipo-variantes/Logo-horizontal-1.png"
import "../../styles/Navigation.css"

const { useBreakpoint } = Grid

const Navigation = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [isMenu, setIsMenu] = useState(true);
    const { md } = useBreakpoint()
    const productsInCar = useSelector(selectProductsInCar)
    const [api, contextHolder] = notification.useNotification();

    const handleShowDrawer = () => {
        setShowDrawer(!showDrawer)
        setIsMenu(true)
    }

    const handleClose = () => {
        setShowDrawer(false)
    }

    const handleShoppingCar = () => {
        setShowDrawer(!showDrawer)
        setIsMenu(false)
    }

    const handleBuy = () => {
        if (productsInCar && productsInCar.length > 0) {
            navigate("/checkout")
        } else {
            console.log("carrito vacio");

            (() => {
                api['warning']({
                    message: '🛒 Carrito Vacío',
                    description:
                        'Agrega algunos productos a tu carrito para proceder al pago 🤗',
                });
            })();
        }
    }

    return (
        <nav className="menuBar bg-white">
            {contextHolder}
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            {md ?
                <div className='w-full flex justify-between items-center'>
                    <div className="menuCon">
                        <div className="rightMenu">
                            <MenuOptions />
                        </div>
                        <Button className="barsMenu" type="primary" onClick={handleShowDrawer}>
                            <span className="barsBtn"></span>
                        </Button>
                    </div>
                    <div className='mx-2'>
                        <Space size="middle">
                            <Badge count={productsInCar.length}>
                                <Button className='carMenu' icon={<ShoppingCartOutlined />} onClick={handleShoppingCar}>
                                </Button>
                            </Badge>
                        </Space>
                    </div>
                </div>
                :
                <div className='w-full flex justify-end items-center'>
                    <div className='mr-2'>
                        <Space size="middle">
                            <Badge count={productsInCar.length}>
                                <Button className='carMenu' icon={<ShoppingCartOutlined />} onClick={handleShoppingCar}>
                                </Button>
                            </Badge>
                        </Space>
                    </div>
                    <div className="menuCon">
                        <div className="rightMenu">
                            <MenuOptions />
                        </div>
                        <Button className="barsMenu" type="primary" onClick={handleShowDrawer}>
                            <span className="barsBtn"></span>
                        </Button>
                    </div>
                </div>
            }
            <Drawer
                width={320}
                title={isMenu ? "Menú" : "Productos en tu carrito 🛒"}
                placement="right"
                onClose={handleClose}
                open={showDrawer}
                style={{ color: "#4d1227", fontFamily: "Bebas Neue, serif" }}
                footer={
                    isMenu ? null
                        :
                        <div className="flex justify-end">
                            <Button className='bg-sky-300' onClick={handleBuy}>Completar compra</Button>
                        </div>
                }
            >
                {isMenu ?
                    <MenuOptions />
                    :
                    <ProductsInCar />
                }
            </Drawer>
        </nav>
    )
}

export default Navigation