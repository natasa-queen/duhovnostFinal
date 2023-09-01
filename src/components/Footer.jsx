import React from 'react'
import '../assets/css/footer.scss'

import { RWebShare } from "react-web-share";



const Footer = () => {

  const currentYear = new Date().getFullYear();

  return(
      <footer className="text-center text-white" >
        <div className="container pt-1">
          <section className="mb-1 d-flex align-items-center justify-content-evenly">
            <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.facebook.com/natasa.tofil"
                role="button"
                data-mdb-ripple-color="dark"
            ><i className="fab fa-facebook-f"></i
            ></a>

            <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.instagram.com/natasa_tofil/"
                role="button"
                data-mdb-ripple-color="dark"
            ><i className="fab fa-instagram"></i
            ></a>

            <div>
              <RWebShare
                  data={{
                    text: "Natasina Duhovnost u stihovima",
                    url: "https://duhovnost.netlify.app",
                    title: "Duhovnost u stihovima",
                  }}
                  onClick={() => console.log("shared successfully!")}
              >
                <button className='podeli-dugme'>Podijeli 🔗</button>
              </RWebShare>
            </div>
          </section>
        </div>

        <div className="text-center text-dark p-2 fbox">
          <em>© {currentYear} N.T.</em>
        </div>
      </footer>
  )
}
export default Footer

