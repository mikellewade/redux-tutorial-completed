import React from 'react'
import '../item.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../features/cartSlice'

function Item(props) {
  const dispatch = useDispatch()
  const cart = useSelector(store => store.cart)

  const inCart = cart.cartItems.filter( item => props.item.id === item.id).length 
  
  const removeHandler = (item) => {
    dispatch(removeCart(item))
  }

  const addToCart = (item) => {
    dispatch(addCart(item))
  }
  return (
    <div className='itemContainer'>
        <img className="itemImage" src={props.item.images[0]}/>
        <div>{props.item.title}</div>
        <div>${props.item.price}.00</div>
        {inCart > 0 ?  <button style={ {"marginTop": "5px"}} onClick={() => removeHandler(props.item.id)}>Remove</button> :  <button style={ {"marginTop": "5px"}} onClick={() => addToCart(props.item)}>Add</button>}
        {/* <button style={ {"marginTop": "5px"}} onClick={() => addToCart(props.item)}>{inCart}</button> */}
    </div>
  )
}

export default Item