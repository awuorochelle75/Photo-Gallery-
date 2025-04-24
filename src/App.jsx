import React, { useState } from "react"
import About from "./components/About"
import GalleryApp from './GalleryApp';
import Contact from "./components/Contact";
import './App.css'
import Favourites from "./components/favourites";

function App() {

  return (
    <>
      <About />
      <Contact />
      <GalleryApp />
    </>
  )
}

export default App
