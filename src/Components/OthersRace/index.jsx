import React from 'react'
import "./style.css"; 
import { useNavigate } from 'react-router-dom';

export default function OthersRace() { 
   const navigate = useNavigate(); 

  return (
    <div id='Container-OthersRace'>
        <h2>Outras raças</h2> 
        <div className='Container-OthersRace-Geral'>
              <div className='Dog Bulldog'>
                <p>BullDog</p>
              </div>
              <div className='Dog Rotw'>
                <p>Rottweiler</p>
              </div>
              <div className='Dog Corso'>
                  <p>Cane Corso</p>
              </div>
              <div className='Dog Pug'>
                <p>Pug</p>
              </div>
              <div className='Dog Pood'>
                 <p>Poodle</p>
              </div>
              <div className='Dog Shitz'>
                <p>Shitzu</p>
              </div>
        </div> 

             <div className='More'> 
                <button onClick={()=>navigate("/ComoFunciona")} >Saiba Mais</button>
             </div> 
    </div>   
     
  )
}
