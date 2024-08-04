import React from 'react'
import Cart from './Cart'

function FoodMenu() {
  return (
    <section className='d-flex  bg-light flex-column justify-content-center'>
        <h3 className='text-center p-5 '>Food Menu</h3>
        <div className='food-menu d-flex justify-content-center flex-wrap '>
          <Cart foodTitle="Margherita" price="$2.5" />
          <Cart foodTitle="Pizzette Montanare" price="$3.6" />
          <Cart foodTitle="Quattro Formaggi" price="$4.6" />
          <Cart foodTitle="Diavola" price="$5.6" />
          <Cart foodTitle="California-style Pizza" price="$4.6" />
          <Cart foodTitle="Miami Pizza" price="$4.6" />
        </div>
        <h6 className='mt-3 text-danger text-center'>see all foods</h6>
    </section>
  )
}

export default FoodMenu