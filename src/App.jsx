import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import ExploreFoods from './components/ExploreFoods';
import FoodMenu from './components/FoodMenu';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ExploreFoods></ExploreFoods>
      <FoodMenu></FoodMenu>
    </>
  )
}

export default App
