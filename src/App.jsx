import { useState } from 'react'
import './App.css'
import Footer from './footer'
import Home from './home'
import Collection from './collection'
import Pricing from './pricing'
import Contact from './contact'

function App() {


  return ( 
    <>
      <Home/>
      <Collection/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
