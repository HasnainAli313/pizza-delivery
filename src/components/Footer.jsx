import React from 'react'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"

function Footer() {
  return (
   <>
    <footer>
        <a href="">
            <img src={facebook} alt="" />
        </a>
        <a href="">
            <img src={instagram} alt="" />
        </a>
        <a href="">
            <img src={twitter} alt="" />
        </a>
    </footer>
   </>
  )
}

export default Footer