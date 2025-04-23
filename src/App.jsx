import React, { useState } from "react"
import Header from "./components/Header.jsx"
import './App.css'
import Searchbar from "./components/Searchbar.jsx"

function App() {
  const [title] = useState("PhoGalleria");



  return (
    <>
      <Header headtext={title} />
      <Searchbar />
    </>
  )
}

export default App
