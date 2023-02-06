import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const cart = useSelector(store => store.cart)
  return (
    <div className='navbar'>
        <Link to={'/products'}>
            <span>Products</span>
        </Link>
        <Link to={'/checkout'}>
            <span>Checkout</span>
        </Link>
        <span className='cartTotal'>{cart.amount}</span>
    </div>
  )
}

export default Navbar