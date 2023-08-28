import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/error.scss'

const Error = () => {
    return (
        <Layout>
            <div className="error-page">
                <h1>404</h1>
                <p>Page not found</p>
                <p>Ups! Nešto ne valja!</p>
            </div>
        </Layout>
    )
}

export default Error