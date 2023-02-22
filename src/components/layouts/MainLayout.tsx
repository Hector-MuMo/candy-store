import React from 'react'
import { Layout } from 'antd';
import Navigation from '../Menu/Navigation';
import "../../styles/Navigation.css"
import { useSelector, useDispatch } from "react-redux"
import { selectProductsInCar, getLocalStorageCar } from '../../app/productsInCar/productsInCarSlice';


const { Content } = Layout

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
    const productsList = useSelector(selectProductsInCar)
    const dispatch = useDispatch()

    React.useEffect(() => {
        let localCar = localStorage.getItem("productsList")
        if (localCar) {
            localCar = JSON.parse(localCar)
            dispatch(getLocalStorageCar(localCar))
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem("productsList", JSON.stringify(productsList))
    }, [productsList]);

    return (

        <Layout className='min-h-screen relative'>
            <Navigation />
            <Content className='main-container relative bg-white' style={{ fontFamily: "Bebas Neue, serif" }}>
                {children}
            </Content>
        </Layout>

    )
}


export default MainLayout