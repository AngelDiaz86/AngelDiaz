import React ,{ useEffect, useState } from 'react'
import { GetPersonajes } from '../../api'
import Tarjetas from '../Tarjetas/Tarjetas';
import './Personajes.css'
export default function Personajes() {

    

    const [Personajes, setPersonajes] = useState([]);
    useEffect(() => {
      const fechData = async () => {
        try{
            const data = await GetPersonajes();
            console.log(data);
            setPersonajes(data);
            
        }catch(error){
            console.error("Error al obtenes personaajes, error");
        }
      };
    
      fechData();
      
    },[]);

    console.log("Mostrar personajes", Personajes);
  return (
    <div className='TarjetasContainer'>
        {Personajes.map((Personajes,index)=>(<Tarjetas key={Personajes.id} Data={Personajes}/>))}
        
        </div>
  )
}