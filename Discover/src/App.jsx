import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Navbar, Body , Mynfts } from "./components"

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Body />
        </div>
        <Mynfts />
      </div>
    </BrowserRouter>
  )
}

export default App
