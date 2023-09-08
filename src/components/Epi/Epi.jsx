import React from 'react';
import "./Epi.css";
import imagen2 from './imagen2.jpg'; // Importa la imagen

export default function Epi({ Data }) {
  return (
    
    <div className='Epi'>
      <img className='img2' src={imagen2} alt="Imagen" />
      <div className='text'>
        <h1>Episodio {Data.id}</h1>
        <h1>{Data.name}</h1>
        <br></br>
        <h2>Fecha de salida: {Data.air_date}</h2>
        
        <h2>Temporada: {Data.episode}</h2>
      </div>
      
    </div>
  );
}
