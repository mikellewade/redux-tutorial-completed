import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { amountTotal } from './features/cartSlice'

function App() {
  const dispatch = useDispatch()
  const cart = useSelector(store => store.cart)

  useEffect(() => {
    dispatch(amountTotal())
  }, [cart.cartItems])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
