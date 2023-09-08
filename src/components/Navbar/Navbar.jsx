import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
      <div className='navbar'>
         
          <div className='nombre'> Rick And Morty</div>
          <div className='botonesNavBar'>
            
              <NavLink to="/" className='botonNavBar'>PERSONAJES</NavLink>
            
              <NavLink to="/episodes" className='botonNavBar'>EPISODIOS</NavLink>
          </div>
      </div>
    )
  }