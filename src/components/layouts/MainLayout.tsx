import React from 'react'
import { Layout } from 'antd';
import Navigation from '../Menu/Navigation';


const { Content } = Layout

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
    return (

        <Layout className='min-h-screen relative'>
            <Navigation />
            <Content className='relative h-full bg-sky-300'>
                {children}
            </Content>
        </Layout>

    )
}

export default MainLayout