import React from 'react'
import {FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
      <div className="footer-info pt-40 pb-9 flex flex-col items-center">
        <div className="icons flex space-x-10 items-center mb-10">
          <FaFacebookSquare/>
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />

        </div>
        <div className="footer-info flex space-x-5 items-center mb-10">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <div className="copyright details flex space-x-2 items-center mb-10">
          <p>2021</p>
          <p>Movie Box by Ciku</p>
        </div>
      </div>
    </>
  )
}
