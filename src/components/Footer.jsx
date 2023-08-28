import React from 'react'
import '../assets/css/footer.scss'


const Footer = () => {

  const currentYear = new Date().getFullYear();

  return(
      <footer className="text-center text-white" >
        <div className="container pt-1">
          <section className="mb-1">
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
          </section>
        </div>

        <div className="text-center text-dark p-2 fbox">
          <em>© {currentYear} N.T.</em>
        </div>
      </footer>
  )
}
export default Footer