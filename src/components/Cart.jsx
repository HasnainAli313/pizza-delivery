import React from 'react'
import sample from "../assets/sample.jpg"


function Cart(props) {
  return (
    <>
          <div className='bg-light d-flex gap-4 m-1 align-items-center rounded-3 p-2 w-50'>
                <div>
                    <img style={{height:"90px",width:"90px" , borderRadius:"10px"}} src={sample} alt="" />
                </div>

                <div>
                <h4>{props.foodTitle}</h4>
                <h5>{props.price}</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <button className='btn btn-danger p-1'>Order Now</button>
                </div>
            </div>
    </>
  )
}

export default Cart