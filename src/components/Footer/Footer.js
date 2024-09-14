import React from "react"
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        < div className='container'>

            <div className="footernav1">

                <div className="info">
                    <a href="">ABOUT US</a>
                    <a href="">AWARDS</a>
                    <a href="">HELP</a>
                </div>

                <div className="contact">

                    <h5>CONTACT US</h5>
                    <a href="random123email.gmail.com">random123email.gmail.com</a>
                    <a href="">9811503262</a>
                </div>

            </div>

            <div className="footernav2">
                
                <div className="socials">
                    <a href="https://facebook.com" > <FaFacebook  style={{color:'black',fontSize:'1.5rem'}}/> </a>
                    <a href="https://twitter.com"  > <FaTwitter   style={{color:'black',fontSize:'1.5rem'}}/> </a>
                    <a href="https://instagram.com"> <FaInstagram style={{color:'black',fontSize:'1.5rem'}}/> </a>
                </div>

                <div className='legal'>
                    <p>© all rights reserved</p>
                    <p>made with &#10084; by gorkhcoder</p>
                </div>

            </div>

        </div>      
   
    </>
  )
}

export default Footer