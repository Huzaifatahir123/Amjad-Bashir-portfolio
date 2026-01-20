import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Work from './components/Work';
import Contact from "./components/Contact"
import {Toaster} from 'react-hot-toast'
import Footer from './components/footer';


const App = () => {
  const [dark,setdark] = useState(true);
  useEffect(()=>{
    const root  = document.documentElement;
    dark ? root.classList.add("dark"):root.classList.remove("dark");
  },[dark])
  return (
    <>
    <Toaster />
    <Navbar theme = {dark} settheme ={setdark} />
    <Hero theme = {dark} settheme ={setdark} />
    <About theme = {dark} settheme ={setdark} />
    <Service theme = {dark} settheme ={setdark} />
    <Work  theme = {dark} settheme ={setdark}/>
    <Contact theme = {dark} settheme ={setdark} />
    <Footer  theme = {dark} settheme ={setdark}/>
    </>
  )
}

export default App