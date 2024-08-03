import React from 'react'
import Cart from './Cart'

function FoodMenu() {
  return (
    <section>
        <h3 className='text-center'>Food Menu</h3>
        <div className='food-menu d-flex flex-wrap'>
          <Cart foodTitle="Margherita" price="$2.5" />
          <Cart foodTitle="Pizzette Montanare" price="$3.6" />
          <Cart foodTitle="Quattro Formaggi" price="$4.6" />
          <Cart foodTitle="Diavola" price="$5.6" />
          <Cart foodTitle="California-style Pizza" price="$4.6" />
          <Cart foodTitle="Miami Pizza" price="$4.6" />
        </div>
    </section>
  )
}

export default FoodMenu