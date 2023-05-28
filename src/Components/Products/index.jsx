import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'
import VerticalCarousel from './CarouselVertical';

function Product () { 

  const navigate = useNavigate(); 

  return (
    <div id='Container-Main'>
        <div className='Carousel-Dog'>
      <VerticalCarousel />
         </div> 


        <div className='Container-Description'> 
         <div className='Container-Description-Tittles'>
               <h2>Sobre o Lulu da Pomerânia</h2>
                 <p>Os meninos dessa raça são bem humorados, 
                 gostam de brincadeiras e seu humor é muito agradável com 
                 crianças, perfeito para brincar sem se preocupar.
                  </p> 
            <h3>Informações Essenciais</h3> 
         </div>
            <div className='PetSize'> 
               <p className='PetSize-Porte'>Porte</p> 
               <p className='PetSize-Pequeno'>Pequeno (23~25cm)</p>   
            </div>  
               <div class="Line"></div>
      
            <div className='PetBehavior'> 
               <p className='PetBehavior-Comport'>Comportamento</p> 
               <p className='PetBehavior-text'>Requer cuidados especiais e o nível de atenção 
               dado depende do sexo. Meninos são mais independentes </p> 
            </div> 
             <div class="Line"></div>  
             <div className='Container-Cor'> 
               <p className='Pet-Cor'>Cores</p> 
               <p className='Pet-option'>xx</p> 
            </div> 
            <div class="Line"></div>  
             <div className='Container-PetSex'> 
               <p className='Sex'>Sexos Disponíveis</p> 
               <p className='SexSimbol'>xx</p> 
            </div> 
            <div class="Line"></div>  
             <div className='Container-location'> 
               <p className='location'>Localidades:</p> 
               <p className='location-text'>Todas as capitais brasileiras.</p> 
            </div> 
            <div class="Line"></div>  
             <button className='Reserv' onClick={()=>navigate("/Contato")}>
                 Reservar
             </button>
        </div>
    </div>
  )
}

export default  Product