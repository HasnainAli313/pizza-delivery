import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import ExploreFoods from './components/ExploreFoods';
import FoodMenu from './components/FoodMenu';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ExploreFoods></ExploreFoods>
      <FoodMenu></FoodMenu>
      <Footer/>
    </>
  )
}

export default App
