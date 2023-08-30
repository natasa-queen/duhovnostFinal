import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby"; // Dodato
import '../assets/css/pesme-bg.scss'

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

  // Nasumično izaberemo sliku samo jednom prilikom prvog renderovanja komponente
  const [backgroundImage] = useState(
      randomImageUrls[Math.floor(Math.random() * randomImageUrls.length)]
  );

  return (
      <div
          className="background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
      />
  );
};

export default BackgroundChanger;







// import React, { useState, useEffect } from "react";
// import { graphql, useStaticQuery } from "gatsby"; // Dodato
// import '../assets/css/pesme-bg.scss'
//
// const BackgroundChanger = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allFile(filter: { extension: { regex: "/png/" }, relativeDirectory: { eq: "pesme-bg" } }) {
//         edges {
//           node {
//             publicURL
//           }
//         }
//       }
//     }
//   `);
//
//   const randomImageUrls = data.allFile.edges.map(edge => edge.node.publicURL);
//
//   const [backgroundImage, setBackgroundImage] = useState(
//       randomImageUrls[0]
//   );
//
//   const changeBackground = () => {
//     const randomIndex = Math.floor(Math.random() * randomImageUrls.length);
//     setBackgroundImage(randomImageUrls[randomIndex]);
//   };
//
//   useEffect(() => {
//     const interval = setInterval(changeBackground, 5000); // Promeni sliku svakih 5 sekundi
//     return () => clearInterval(interval);
//   }, []);
//
//   return (
//       <div
//           className="background"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//       />
//   );
// };
//
// export default BackgroundChanger;




