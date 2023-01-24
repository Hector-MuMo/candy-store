import React from 'react'
import { HeadFC, Link, PageProps } from "gatsby"
import MainLayout from '../components/layouts/MainLayout'
import Footer from '../components/Footer/Footer'

const About: React.FC<PageProps> = () => {
    return (
        <MainLayout>
            <div className='h-full'>
                <h1>About Me</h1>
                <Link to="/">Home</Link>
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
                <Footer />
            </div>
        </MainLayout>
    )
}

export const Head: HeadFC = () => <title>About Section</title>

export default About