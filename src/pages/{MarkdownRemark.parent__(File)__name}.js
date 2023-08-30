
import React, {useEffect} from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

import '../assets/css/pesma-izgled.scss'

import AOS from 'aos'


import BackgroundChanger from '../components/PesmeBg'


export default function Pesma({ data }) {

    const title = data.markdownRemark.frontmatter.title
    const datum = data.markdownRemark.frontmatter.date
    const objavljeno = data.markdownRemark.frontmatter.objavljeno
    const html = data.markdownRemark.html

    useEffect( () => {
        AOS.init({duration:1500})
    }, [])

    return(
        <Layout>

            <div className='pesma-kontejner shadow-5 '>

                {/*<BackgroundChanger />*/}

                <div className='inner-kontejner'>
                    <div className="naslov-datum ">
                        <h1 className='naslov'  data-aos="fade-down">{title}</h1>
                        <h3 className='datum'  data-aos="fade-right"><em>{datum}</em></h3>
                        <h3 className='objavljeno'  data-aos="fade-left">{objavljeno}</h3>
                    </div>

                    <div className='tekst-kontejner'>
                        <BackgroundChanger className='pozadina' />

                        <div dangerouslySetInnerHTML={{__html: html}} className='tekst-pesme text-light' />
                    </div>

                    <Link className="btn btn-primary  bg-primary bg-gradient dugme-nazad" to="/" role="button">Nazad</Link>
                </div>

            </div>
        </Layout>
    )
}


export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY.")
        title
        objavljeno
      }
    }
  }
`


















// import React from 'react'
// import { graphql, Link } from 'gatsby'
// import Layout from '../components/Layout'
//
// import '../assets/css/pesma-izgled.scss'
//
// import BackgroundChanger from '../components/PesmeBg'
//
//
// export default function Pesma({ data }) {
//
//     const title = data.markdownRemark.frontmatter.title
//     const datum = data.markdownRemark.frontmatter.date
//     const objavljeno = data.markdownRemark.frontmatter.objavljeno
//     const html = data.markdownRemark.html
//
//     return(
//         <Layout>
//
//             <div className='pesma-kontejner shadow-5'>
//
//                 <BackgroundChanger />
//
//                 <div className="naslov-datum ">
//                     <h1 className='naslov'>{title}</h1>
//                     <h3 className='datum'><em>{datum}</em></h3>
//                     <h3 className='objavljeno'>{objavljeno}</h3>
//                 </div>
//
//                 <div dangerouslySetInnerHTML={{__html: html}} className='tekst-pesme' />
//
//                 <Link className="btn btn-primary  bg-primary bg-gradient dugme-nazad" to="/" role="button">Nazad</Link>
//
//             </div>
//         </Layout>
//     )
// }
//
//
// export const query = graphql`
//   query ($id: String!) {
//     markdownRemark(id: {eq: $id}) {
//       id
//       html
//       frontmatter {
//         date(formatString: "DD.MM.YYYY.")
//         title
//         objavljeno
//       }
//     }
//   }
// `
