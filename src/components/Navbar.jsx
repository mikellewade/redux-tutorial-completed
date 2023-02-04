import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to={'/checkout'}>
            <span>Checkout</span>
        </Link>
        <Link to={'/products'}>
            <span>Products</span>
        </Link>
    </div>
  )
}

export default Navbar