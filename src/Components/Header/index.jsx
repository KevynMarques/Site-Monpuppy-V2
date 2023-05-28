import React from 'react';
import './style.css';


function Header({style, styleH1, styleButtons}) {
    return (
      <div>
         <header>
           <div id='Container-Header' style={style}>

          <h1 className='Container-Header-Menu'style={styleH1}>Monpuppy</h1> 
          
             <div id='Container-Header-Buttons'>
                <button className='Header-Button ComoFunciona' style={styleButtons}>Como Funciona</button>
                 <button className='Header-Button Contato' style={styleButtons}>Contato</button>
                <button className='Header-Button APP' style={styleButtons} >App do Cliente</button>
                <button className='Header-Button Anuncie' style={styleButtons}>Anuncie seu Canil</button>
             </div>
          </div>
      </header>
      </div>
    );
  }
  
  export default Header;