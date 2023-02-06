import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCart } from '../features/cartSlice'

function CheckoutItem(props) {
  const dispatch = useDispatch()

  const removeHandler = (id) => {
    dispatch(removeCart(id))
  }
  return (
    <>
    <div className='checkoutItem'>
      <img src={props.item.images[0]} className="checkoutImage" />
      <span className='checkoutTitle'>{props.item.title}</span>
      <span className='checkoutPrice'>${props.item.price}.00</span>
      {/* <span className='checkoutAmount'>1</span> */}
      <button onClick={() => removeHandler(props.item.id)}>remove</button>
    </div>
    </>
  )
}

export default CheckoutItem