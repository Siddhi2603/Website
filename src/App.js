import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';
import Internship from './Pages/Internship';
import Footer from './Pages/Footer';
import Blog from "./Pages/Blog";




function App() {
  return(
  <Routes>
  
    
                  <Route exact path='/' element ={<Home/>} />
                <Route exact path='/about' element ={<About/>} />
                <Route exact path='/Blog' element ={<Blog/>} />
                <Route exact path='/Services' element ={<Services/>} />
                <Route exact path='/Contact' element ={<Contact/>} />
                <Route exact path='/Navbar' element ={<Navbar/>} />
                <Route exact path='/Internship' element ={<Internship/>} />
                
             
              
  </Routes>

  );
}
export default App;