import React from 'react'
import { Layout } from 'antd';
import Navigation from '../Menu/Navigation';
import "../../styles/Navigation.css"

const { Content } = Layout

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
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