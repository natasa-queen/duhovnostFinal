import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/error.scss'

const Error = () => {
    return (
        <Layout>
            <div className="error-page">
                <h1>404</h1>
                <h3>Page not found</h3>
                <h3>Ups! Nešto ne valja!</h3>
            </div>
        </Layout>
    )
}

export default Error