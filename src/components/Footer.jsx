import React from 'react'
import '../assets/css/footer.scss'
import { Link } from 'gatsby'

import {
  FacebookIcon,
  FacebookShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareCount,
  ViberIcon,
  ViberShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";



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



            {/*<ViberShareButton title='Duhovnost' url='https://duhovnost.netlify.app/' >*/}
            {/*  <ViberIcon size={32} round={true} />*/}
            {/*</ViberShareButton>*/}

            {/*<FacebookMessengerShareButton  url='https://duhovnost.netlify.app/' >*/}
            {/*  <FacebookMessengerIcon size={32} round={true} />*/}
            {/*</FacebookMessengerShareButton>*/}

            {/*<FacebookShareCount title='Duhovnost' url='https://duhovnost.netlify.app/' >*/}
            {/*  <FacebookMessengerIcon size={32} round={true} />*/}
            {/*</FacebookShareCount>*/}
            {/*<FacebookShareCount url='https://duhovnost.netlify.app/'>*/}
            {/*  {shareCount => <span >{shareCount}</span>}*/}
            {/*</FacebookShareCount>*/}

            {/*<WhatsappShareButton title='Duhovnost' url='https://duhovnost.netlify.app/' >*/}
            {/*  <WhatsappIcon size={32} round={true} />*/}
            {/*</WhatsappShareButton>*/}




          {/*  <a*/}
          {/*      className="btn btn-link btn-floating btn-lg text-dark m-1"*/}
          {/*      href="https://www.facebook.com/sharer/sharer.php?u=https://duhovnost.netlify.app/"*/}
          {/*      target="_blank"*/}
          {/*      rel="nofollow noopener"*/}
          {/*      role="button"*/}
          {/*      data-mdb-ripple-color="dark"*/}
          {/*  > Podeli link FB*/}
          {/*</a>*/}
          {/*  <a*/}
          {/*      className="btn btn-link btn-floating btn-lg text-dark m-1"*/}
          {/*      href="viber://forward?text=https://duhovnost.netlify.app/"*/}
          {/*      target="_blank"*/}
          {/*      rel="nofollow noopener"*/}
          {/*      role="button"*/}
          {/*      data-mdb-ripple-color="dark"*/}
          {/*  > Podeli link VIBER*/}
          {/*  </a>*/}
          {/*  <a*/}
          {/*      className="btn btn-link btn-floating btn-lg text-dark m-1"*/}
          {/*      href="whatsapp://send?text=https://duhovnost.netlify.app/"*/}
          {/*      target="_blank"*/}
          {/*      rel="nofollow noopener"*/}
          {/*      role="button"*/}
          {/*      data-mdb-ripple-color="dark"*/}
          {/*  > Podeli link WHATSAPP*/}
          {/*  </a>*/}


          </section>
        </div>

        <div className="text-center text-dark p-2 fbox">
          <em>© {currentYear} N.T.</em>
        </div>
      </footer>
  )
}
export default Footer