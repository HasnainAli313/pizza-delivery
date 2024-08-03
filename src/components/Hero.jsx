import React from 'react'

function Hero() {
  return (
    <section className='hero d-flex justify-content-center align-items-center'>
        <input className='w-25 p-1' type="text" placeholder='Search for pizza' />
        <button className=' ms-1 btn btn-danger'>Search</button>
    </section>
  )
}

export default Hero