import React from 'react';
import "./style.css";
import { useNavigate } from 'react-router-dom';


function ButtonFixed() {
  const navigate = useNavigate();
  return (
   <div id='Container-Carousel-Horizontal'>
     <div className='Container-Carousel-Horizontal-Left'> 
      <p>Filhotes de até 45 dias*</p>
      <button onClick={() => navigate("/Produtos")}>EU QUERO</button>
     </div>
     <div className='Container-Carousel-Horizontal-Center'>
      <div></div>
     </div>
   </div>
  )
}

export default ButtonFixed;
