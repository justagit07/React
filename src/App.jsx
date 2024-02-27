import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Fotter'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>

    <Header/>
    <Outlet/>
    <Footer/>
  

    </>
  )
}

export default App
