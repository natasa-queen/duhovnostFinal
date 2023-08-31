import React from 'react'
import '../assets/css/footer.scss'

import Dropdown from 'react-bootstrap/Dropdown';

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


  const shareUrl = 'https://duhovnost.netlify.app'; // Zamijenite ovom URL-om
  const shareTitle = 'Duhovnost u stihovima';
  // const shareImageUrl = 'https://www.example.com/image.jpg'; // Zamijenite ovom URL-om slike

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


            <FacebookMessengerShareButton url={shareUrl} appId="YOUR_FACEBOOK_APP_ID">
              <FacebookMessengerIcon size={22} round={true} />
            </FacebookMessengerShareButton>

            <ViberShareButton url={shareUrl} >
              <ViberIcon size={22} round={true} />
            </ViberShareButton>

            <WhatsappShareButton url={shareUrl} >
              <WhatsappIcon size={22} round={true} />
            </WhatsappShareButton>


            {/*<Dropdown>*/}
            {/*  <Dropdown.Toggle variant="info" id="dropdown-basic">*/}
            {/*    Proslijedi stranicu*/}
            {/*  </Dropdown.Toggle>*/}

            {/*  <Dropdown.Menu className='social-ikone'>*/}
            {/*    /!*<Dropdown.Item href="viber://forward?text=https://duhovnost.netlify.app/">Viber</Dropdown.Item>*!/*/}
            {/*    /!*<Dropdown.Item href="whatsapp://send?text=https://duhovnost.netlify.app/">WhatsApp</Dropdown.Item>*!/*/}
            {/*    /!*<Dropdown.Item href="https://www.facebook.com/sharer/sharer.php?u=https://duhovnost.netlify.app/">Facebook</Dropdown.Item>*!/*/}

            {/*    <a href="#">FB</a>*/}
            {/*    <a href="#">FB</a>*/}
            {/*    <a href="https://www.facebook.com/sharer/sharer.php?u=https://duhovnost.netlify.app/">FB</a>*/}


            {/*  </Dropdown.Menu>*/}
            {/*</Dropdown>*/}


          </section>
        </div>

        <div className="text-center text-dark p-2 fbox">
          <em>© {currentYear} N.T.</em>
        </div>
      </footer>
  )
}
export default Footer