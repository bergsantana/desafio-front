import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Product } from './interfaces/Product'
import { CartContext } from './context/CartContext'

function App() {
  const [ cart, setProducts ] = useState<{ product: Product, qty: number}[]>([
    {
      product: {
      id: 0,
      title: '',
      description: '',
      image: '',
      price: 0,
      rating: {count: 0, rate: 0}},
      qty: 0
}])


  return (
    <CartContext.Provider value={{ cart, setProducts}}>
      <div className='bg-gray-300    min-h-full h-fit '>
        <Header hitSearch={() => {}} maxPrice={500} minPrice={0} searchStr={''}  />
        <Outlet />
        <Footer />
      </div>
    </CartContext.Provider>
  )
}

export default App
