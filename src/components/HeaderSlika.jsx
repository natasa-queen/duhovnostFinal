import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image"

import '../assets/css/header-slika.scss'


const HeaderSlika = () => {

    const data = useStaticQuery(graphql`
         query {
            slika1: file(relativePath: {eq: "nati1.jpg"}) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }

            slika2: file(relativePath: {eq: "nati2.jpg"}) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }



        }
    `)

    const images = withArtDirection(getImage(data.slika1), [
        {
            media: "(max-width: 650px)",
            image: getImage(data.slika2),
        },
    ])

    return(
        <>

            <GatsbyImage
                image={images}
                alt='slika'
                className='header-slika'
            />

        </>
    )
}
export default HeaderSlika

