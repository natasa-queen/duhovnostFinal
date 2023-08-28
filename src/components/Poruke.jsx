import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../assets/css/poruke.scss'


const Poruke = () => {

    const data = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "poruke"}}) {
            totalCount
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    title
                  }
                  html
                }
              }
            }
          }
        }
      `)


    const quotes = data.allFile.edges;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].node;


    return(
        <div className="poruka-box">
            <div className="">
                <div className="">
                    <div className="">

                        <figure className="quote text-end">
                            <blockquote className="blockquote">
                                <p dangerouslySetInnerHTML={{ __html: randomQuote.childMarkdownRemark.html }} />
                            </blockquote>

                            <figcaption className="blockquote-footer">
                                {randomQuote.childMarkdownRemark.frontmatter.title}
                            </figcaption>
                        </figure>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Poruke

