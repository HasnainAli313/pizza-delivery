import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import ExploreFoods from './components/ExploreFoods';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ExploreFoods></ExploreFoods>
    </>
  )
}

export default App
