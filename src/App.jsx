import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'
import Hero from './components/Hero'
import About from './components/about'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
    </>
  )
}

export default App ;
