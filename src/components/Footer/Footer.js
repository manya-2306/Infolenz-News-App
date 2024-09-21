import React from "react"
import { Link } from "react-router-dom"; 
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        < div className='container'>

            <div className="footernav1">

                <div className="info">
                <Link to="/about-us">ABOUT US</Link>
                    <Link to="/awards">AWARDS</Link> 
                     <Link to="/help">HELP</Link> 
                     <Link to="/contact-us">CONTACT US</Link>
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