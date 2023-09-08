import './App.css';
import React,{ Routes, Route, BrowserRouter } from "react-router-dom";


import Episodios from "./components/Episodios/Episodios";
import NavBar from "./components/Navbar/Navbar";
import header from "./components/imgnav.jpg";

import Personajes from './components/Personajes/Personajes';

function RoutesApp() {
  return (
    <>
    <div>
      <img className='img' src={header}></img>
    </div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Personajes />} />
        <Route path='/episodes' element={<Episodios />} />
      </Routes>
      


    </>
    
  );
}
function RouterWrapper() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
    
  );
}

export default RouterWrapper;
