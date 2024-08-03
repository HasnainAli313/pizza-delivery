import React from 'react'
import Cart from './Cart'

function FoodMenu() {
  return (
    <section>
        <h3 className='text-center'>Food Menu</h3>
        <div className='food-menu d-flex'>
          <Cart foodTitle="Pizza" price="$2.5" />
          <Cart foodTitle="shorma" price="$3.6" />
        </div>
    </section>
  )
}

export default FoodMenu