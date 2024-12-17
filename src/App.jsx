import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/about'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App ;
