import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-300    min-h-full h-fit '>
      <Header hitSearch={() => {}} maxPrice={500} minPrice={0} searchStr={''}  />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
