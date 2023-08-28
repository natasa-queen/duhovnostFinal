import * as React from "react"
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import '../assets/css/main.css'
import '../assets/css/galerija.scss'






export default function Galerija() {
    return(
        <Layout>

            <div className='galerija-box'>
                <h1>Galerija</h1>
                <h3>Stranica u pripremi</h3>
            </div>

        </Layout>
    )
}

export const Head = () => {
    return(
        <>
            <Seo title="Galerija" />
        </>
    )
}