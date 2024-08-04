import React from 'react'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"

function Footer() {
  return (
   <>
    <footer className='d-flex gap-3 justify-content-center p-3'>
        <a href="https://facebook.com">
            <img style={{width:"30px"}} src={facebook} alt="" />
        </a>
        <a href="https://instagram.com">
            <img style={{width:"30px"}} src={instagram} alt="" />
        </a>
        <a href="https://twitter.com">
            <img style={{width:"30px"}} src={twitter} alt="" />
        </a>
    </footer>
   </>
  )
}

export default Footer