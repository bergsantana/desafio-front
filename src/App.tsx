import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Product } from './interfaces/Product'
import { CartContext } from './context/CartContext'
import { AnimatePresence, motion } from 'framer-motion'
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
            bg-gray-300  overflow-scroll min-h-fit h-screen flex flex-col'>
            <Header hitSearch={() => {}} maxPrice={500} minPrice={0} searchStr={''}    />
            <AnimatePresence mode='wait'> 
              <Outlet />
            </AnimatePresence>
            <div className='lg:h-9'>

              <Footer />
            </div>
          </div>

        </SearchFilterContext.Provider>
      </PriceFilterContext.Provider>
    </CartContext.Provider>
  )
}

export default App
