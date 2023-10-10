import { useState } from 'react'

import Nav from './components/Nav/Nav'
import Hero from './components/Home/Hero'
import Home from './components/Home/Home'
import Footer from './Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
