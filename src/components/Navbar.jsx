import React from 'react'
import icon from "../assets/icons8-pizza-32.png"

function Navbar() {
  return (
    <nav className='navbar'>
        <div  className='icon navbar'>
            <img src={icon} alt="" />
            <h1>Pizza Delivery</h1>
        </div>
        <ul className='d-flex gap-3  p-3 list-unstyled'>
            <li>
                <a className='text-decoration-none text-danger' href='#'>Home</a>
            </li>
            <li>
                <a className='text-decoration-none text-danger' href='#about'>About</a>
            </li>
            <li>
                <a className='text-decoration-none text-danger' href='#foods'>Foods</a>
            </li>
            <li>
                <a className='text-decoration-none text-danger' href='#contact'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar