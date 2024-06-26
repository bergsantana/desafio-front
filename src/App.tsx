import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Product } from './interfaces/Product'
import { CartContext } from './context/CartContext'
import { AnimatePresence } from 'framer-motion'
import { PriceFilterContext } from './context/PriceFilterContext'
import { SearchFilterContext } from './context/SearchFilterContext'



export const defaultCartState =  {
  product: {
  id: 0,
  title: '',
  description: '',
  image: '',
  price: 0,
  rating: {count: 0, rate: 0}},
  qty: 0
}

function App() {
  const [ cart, setProducts ] = useState<{ product: Product, qty: number}[]>([defaultCartState])
  const [ minMax, setMinMax ] = useState<{ minMax: number[]}>( { minMax: [1, 1000] } )
  const [ searchStr, setSearchStr] = useState< {searchStr: string}>( {searchStr: ''})
 
  return (
    <CartContext.Provider value={{ cart, setProducts}}>
      <PriceFilterContext.Provider value={{minMax, setMinMax }}>
        <SearchFilterContext.Provider value={{ searchStr, setSearchStr}}>
          <div className='
            lg:h-screen
            bg-gray-100  overflow-scroll max-h-screen  h-screen  grid grid-cols-1 grid-rows-home  '>
            <Header     />
            <AnimatePresence mode='wait'> 
              <Outlet />
            </AnimatePresence>
            <div className='lg:h-full h-36 '>

              <Footer />
            </div>
          </div>

        </SearchFilterContext.Provider>
      </PriceFilterContext.Provider>
    </CartContext.Provider>
  )
}

export default App
