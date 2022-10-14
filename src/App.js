import React from 'react';
import { BrowserRouter as Router,Routes,Link,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './components/Navbar/style.css'
import NavbarElements from './components/Navbar/NavbarElements';
import About from './components/pages/About';
import Pricing from './components/pages/Pricing';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import Help from './components/pages/Help';
import Gallary from './components/pages/Gallary';
 import Login from './components/Login/Login';
// import { Route,Routes } from 'react-router-dom';



function App() {
  //  console.log(window.location)
  return (
    <div>
      <NavbarElements />
      <div className='container'>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/pricing" element={<Pricing />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<ContactUs />}></Route>
              <Route path="/help" element={<Help />}></Route>
              <Route path="/gallary" element={<Gallary />}></Route>
              <Route path="/login" element={<Login />}></Route>
          </Routes>
      </div>
   </div>
  )
}

export default App