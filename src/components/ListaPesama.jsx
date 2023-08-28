import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";

import '../assets/css/lista-pesama.scss'


const ListaPesama = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {relativeDirectory: {eq: "pesme"}}
        sort: {childMarkdownRemark: {frontmatter: {date: DESC}}}
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                date(formatString: "DD.MM.YYYY.")
              }
              html
              parent {
                ... on File {
                    id
                    name
                  }
                }
            }
          }
        }
      }
    }
  `)


  const pesme = data.allFile.edges


  return(
      <div className='lista-kontejner'>
        <h1>Duhovnost u stihovima</h1>

        <div className='lista-pesme'>

          <ul className="list-group list-group-light">
            {pesme.map(({node}) => {

              const pesmaName = node.childMarkdownRemark.parent.name

              return(
                <Link to={pesmaName}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    {/*<i className="fas fa-hands-praying"></i>*/}

                    <div className="ms-3">
                      <p className="fw-bold mb-1 naslov-pesme">{node.childMarkdownRemark.frontmatter.title}</p>
                      {/*<p className="text-muted mb-0">{node.childMarkdownRemark.frontmatter.date}</p>*/}
                    </div>
                  </div>

                 {/*<a className="btn btn-link btn-rounded btn-sm" href="#" role="button">View</a>*/}
                  <i className="fas fa-hands-praying ruke-ikona"></i>
                </li>
              </Link>
              )
            })}
          </ul>

        </div>
      </div>
  )
}

export default ListaPesama
