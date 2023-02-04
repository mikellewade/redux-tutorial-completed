import React from 'react'

function CheckoutItem(props) {
  return (
    <>
    <div className='checkoutItem'>
      <img src={props.item.images[0]} className="checkoutImage" />
      <span className='checkoutTitle'>{props.item.title}</span>
      <span className='checkoutPrice'>${props.item.price}.00</span>
      {/* <span className='checkoutAmount'>1</span> */}
      <button>remove</button>
    </div>
    </>
  )
}

export default CheckoutItem