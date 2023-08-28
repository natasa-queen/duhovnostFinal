import * as React from "react"
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import '../assets/css/main.css'
import Header from '../components/Header'
import ListaPesama from '../components/ListaPesama'


export default function Home() {
  return(
      <Layout>

          <Header />

          <ListaPesama />

      </Layout>
  )
}

export const Head = () => {
  return(
      <>
        <Seo title="Pocetna" />
      </>
  )
}
