import React from 'react'
import Hero from './components/Hero'
import Connect from './components/Connect'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Testimonial from './components/Testimonial'
import About from './components/Places'
import Payment from './components/Payment'
import Create from './components/Create' 
import Google from './components/Google' 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
export default function App() {
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/places" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/connect" element={<Connect/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/google" element={<Google/>}/>
      </Routes>
    </Router>
    </>
  );
}