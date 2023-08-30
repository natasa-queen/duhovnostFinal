import React, {useEffect, useState} from "react";
import { graphql, useStaticQuery } from "gatsby";
import '../assets/css/pesme-bg.scss'

import AOS from 'aos'


const BackgroundChanger = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/png/" }, relativeDirectory: { eq: "pesme-bg" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const randomImageUrls = data.allFile.edges.map(edge => edge.node.publicURL);

  const [backgroundImage] = useState(
      randomImageUrls[Math.floor(Math.random() * randomImageUrls.length)]
  );


  useEffect( () => {
    AOS.init({duration:1500})
  }, [])


  return (
      <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
          className="background"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.3}}

      />
  );
};

export default BackgroundChanger;

