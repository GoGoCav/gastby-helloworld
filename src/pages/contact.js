import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Contact() {
    return (
        <Layout>
            <Link to="/" >Home</Link>
            <h1>Contact</h1>
            <p>Send us a message!</p>
        </Layout>
    )
}