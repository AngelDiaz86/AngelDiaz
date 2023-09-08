
import React ,{ useEffect, useState } from 'react'
import { GetEpisodios } from '../../api'
import Epi from '../Epi/Epi';
import './Episodios.css'
export default function Episodios() {

    

    const [Episodios, setEpisodios] = useState([]);
    useEffect(() => {
      const fechData = async () => {
        try{
            const data = await GetEpisodios();
            console.log(data);
            setEpisodios(data);
            
        }catch(error){
            console.error("Error al obtenes personaajes, error");
        }
      };
    
      fechData();
      
    },[]);

    console.log("Mostrar Episodios", Episodios);
  return (
    <div className='EpisodiosContainer'>
        {Episodios.map((Episodios,index)=>(<Epi key={Episodios.id} Data={Episodios}/>))}
        
        </div>
  )
}