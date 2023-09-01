import React from 'react'
import '../assets/css/footer.scss'

import Dropdown from 'react-bootstrap/Dropdown';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { RWebShare } from "react-web-share";


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



  const [copied, setCopied] = React.useState(false);

  const onCopy = React.useCallback(() => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000); // Set the timeout to 2000 milliseconds (2 seconds)
  }, []);



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


            {/*<FacebookMessengerShareButton url={shareUrl} appId="YOUR_FACEBOOK_APP_ID">*/}
            {/*  <FacebookMessengerIcon size={22} round={true} />*/}
            {/*</FacebookMessengerShareButton>*/}

            {/*<ViberShareButton url="viber://forward?text=https://duhovnost.netlify.app/" >*/}
            {/*  <ViberIcon size={22} round={true} />*/}
            {/*</ViberShareButton>*/}

            {/*<WhatsappShareButton url="whatsapp://send?text=https://duhovnost.netlify.app/" >*/}
            {/*  <WhatsappIcon size={22} round={true} />*/}
            {/*</WhatsappShareButton>*/}




            {/*  <section className="kopi-text">*/}
            {/*    {copied ? <span className='kopirano'>Kopirano.</span> : null}*/}
            {/*  </section>*/}

            {/*  <section className="section">*/}
            {/*    <CopyToClipboard onCopy={onCopy} text='https://duhovnost.netlify.app'>*/}
            {/*      <button>Kopiraj link</button>*/}
            {/*    </CopyToClipboard>*/}
            {/*  </section>*/}


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




//
// const [value, setValue] = React.useState('https://duhovnost.netlify.app');
// const [copied, setCopied] = React.useState(false);
//
//
// const onClick = React.useCallback(({target: {innerText}}) => {
//   console.log(`Clicked on "${innerText}"!`);
// }, [])
//
// const onCopy = React.useCallback(() => {
//   setCopied(true);
// }, [])
//
// return (
//     <div className="app">
//
//       <section className="section">
//         <h2>1. Button</h2>
//         <CopyToClipboard onCopy={onCopy} text={value}>
//           <button>Copy to clipboard with button</button>
//         </CopyToClipboard>
//       </section>
//
//
//       <section className="section">
//         {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
//       </section>
//
//       <section className="section">
//         <textarea cols="22" rows="3" style={{marginTop: '1em'}} />
//       </section>
//     </div>
// );



















