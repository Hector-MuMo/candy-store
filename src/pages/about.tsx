import React from 'react'
import { HeadFC, Link, PageProps } from "gatsby"

const About: React.FC<PageProps> = () => {
    return (
        <main>
            <h1>About Me</h1>
            <Link to="/">Home</Link>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

export const Head: HeadFC = () => <title>About Section</title>

export default About