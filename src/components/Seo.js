import React from 'react'
import { graphql, useStaticQuery, Script } from 'gatsby'


export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
    `)

    return data.site.siteMetadata
}

export const Seo = ({ title, description, children }) => {
    const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        // image: `${siteUrl}${image}`,
        // url: `${siteUrl}${pathname || ``}`,
        // twitterUsername,
    }

    return (
        <>
            <html lang="hr-BS" />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />

            <meta name="keywords" content="duhovnost, poezija, crkva, biblija, pjesme, stihovi" />
            {/*<meta name="viewport" content="width=device-width, initial-scale=1.0" />*/}

            {/*<meta name="image" content={seo.image} />*/}
            {/*<meta name="twitter:card" content="summary_large_image" />*/}
            {/*<meta name="twitter:title" content={seo.title} />*/}
            {/*<meta name="twitter:url" content={seo.url} />*/}
            {/*<meta name="twitter:description" content={seo.description} />*/}
            {/*<meta name="twitter:image" content={seo.image} />*/}
            {/*<meta name="twitter:creator" content={seo.twitterUsername} />*/}
            {/*<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />*/}

            {/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />*/}
            {/*<Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"} integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous" />*/}

            {/*<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />*/}

            {children}
        </>
    )
}

