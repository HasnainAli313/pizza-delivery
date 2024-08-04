import React from 'react'

function ExploreFoods() {
  return (
    <>
    <section>
        <h3 className='text-center p-5 '>Explore Foods</h3>
    <div className='explore-food d-flex flex-wrap gap-3 justify-content-around p-3  '>
       <div className=' text-center text-white rounded-3 pizza1 '>
        <p className='position-relative  mt-auto end-0'>Pizza</p></div>
       <div className=' text-center text-white rounded-3 pizza2 '>
        <p className='position-relative  mt-auto end-0'>Pizza</p></div>
       <div className=' text-center text-white rounded-3 pizza3 '>
        <p className='position-relative  mt-auto end-0'>Pizza</p></div>
    </div>
    </section>
    </>
  )
}

export default ExploreFoods