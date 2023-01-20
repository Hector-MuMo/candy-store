import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
    return (
        <main className="bg-red-200">
            <h1 className="text-3xl font-bold underline">Welcome to my Gatsby site!</h1>
            <Link to="/about">About</Link>
            <p>I'm making this by following the Gatsby Tutorial.</p>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => {

    return (
        <>
            <title>Home Page</title>
        </>
    )
}
