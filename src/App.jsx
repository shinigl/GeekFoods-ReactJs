import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import QuotePage from './components/QuotePage'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Testimonials/>
      {/* <QuotePage/> */}

      <Footer/>
    </>
  )
}

export default App ;
