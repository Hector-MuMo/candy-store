import { Badge, Button, Space, Grid } from 'antd'
import Drawer from 'antd/es/drawer';
import React, { useState } from 'react'
import MenuOptions from './MenuOptions';
import { ShoppingCartOutlined } from '@ant-design/icons';
import "../../styles/Navigation.css"
import ProductsOnCar from '../Products/ProductsOnCar';
import { useSelector } from 'react-redux';
import { selectProductsInCar } from "../../app/productsInCar/productsInCarSlice"

const { useBreakpoint } = Grid

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isMenu, setIsMenu] = useState(true);
    const { md } = useBreakpoint()
    const productsInCar = useSelector(selectProductsInCar)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
        setIsMenu(true)
    }

    const handleClose = () => {
        setShowMenu(false)
    }

    const handleShoppingCar = () => {
        setShowMenu(!showMenu)
        setIsMenu(false)
    }

    return (
        <nav className="menuBar bg-sky-300">
            <div className="logo">
                <a href="">logo</a>
            </div>
            {md ?
                <div className='w-full flex justify-between items-center'>

                    <div className="menuCon">
                        <div className="rightMenu">
                            <MenuOptions />
                        </div>
                        <Button className="barsMenu" type="primary" onClick={handleShowMenu}>
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
                        <Button className="barsMenu" type="primary" onClick={handleShowMenu}>
                            <span className="barsBtn"></span>
                        </Button>
                    </div>
                </div>
            }
            <Drawer width={320} title={isMenu ? "Menú" : "Productos en tu carrito"} placement="right" onClose={handleClose} open={showMenu} >
                {isMenu ?
                    <MenuOptions />
                    :
                    <ProductsOnCar />
                }
            </Drawer>
        </nav>
    )
}

export default Navigation