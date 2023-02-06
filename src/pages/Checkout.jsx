import React from 'react'
import CheckoutItem from '../components/CheckoutItem'
import data from '../Data'
import { useDispatch, useSelector } from 'react-redux'
import { calcTotal } from '../features/cartSlice'

function Checkout() {
  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(calcTotal())
  }, [cart.cartItems])

  const checkoutItems = cart.cartItems.map( (item, index) => {
      return <CheckoutItem key={index} item={item} />
  })


  // console.log(cart)
  return (
    <>
    <h1>Checkout Items</h1>
    <h1>Total: ${cart.total}</h1>
    <div className='checkoutContainer'>
      {checkoutItems.length !== 0 ? checkoutItems : <h1>No Items... WTH Buy Something :(</h1>}
    </div>
    </>
  )
}

export default Checkout