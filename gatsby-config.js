/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {

  siteMetadata:{
    title: "Nataša",
    description: "Moj sajt za duhovnu poeziju",
    author: "@natasa",
    image: `/static/favicon.ico`,
    siteUrl: `https://duhovnost.netlify.app`,
  },


  plugins: [

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-MXDB2KYZY2",
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },


    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `md`,
        // Path to the directory
        path: `${__dirname}/content`,
      },
    },


    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Parisienne`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },



    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://duhovnost.netlify.app',
        sitemap: 'https://duhovnost.netlify.app/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },




    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //     // modulePath: `path/to/custom/script.js`, // default: undefined
    //     // enableIdentityWidget: true,
    //     // publicPath: `admin`,
    //     htmlTitle: `Moj Menadzer`,
    //     htmlFavicon: `static/favicon.ico`,
    //     // includeRobots: false,
    //   },
    // },


  ],
}
