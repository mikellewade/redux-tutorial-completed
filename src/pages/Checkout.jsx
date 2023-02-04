import React from 'react'
import CheckoutItem from '../components/CheckoutItem'
import data from '../Data'

function Checkout() {
  const checkoutItems = data.products.map( (item, index) => {
      return <CheckoutItem key={index} item={item} />
  })
  return (
    <>
    <h1>Checkout Items</h1>
    <h1>Total: ${0}</h1>
    <div className='checkoutContainer'>
      {checkoutItems.length !== 0 ? checkoutItems : <h1>No Items... WTH Buy Something :(</h1>}
    </div>
    </>
  )
}

export default Checkout