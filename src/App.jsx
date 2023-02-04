import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Products from './pages/Products'
import Navbar from './components/Navbar'

function App() {

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
