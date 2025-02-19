import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'

const App = () => {
  return (
    <>
    <Hero />
    <Services/>
    <About/>
    </>
  )
}

export default App