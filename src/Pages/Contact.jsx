import React from 'react'
import Header from '../Components/Header'
import  Contact from "../Components/Contact/index"

 function Contato() { 

  
  const HeaderBlack = { 
    backgroundColor: 'black',
    height: '5vh',    
  }
  
  const buttonsWhite = {
    color: '#F5F5F5',
    backgroundColor: 'transparent',
    fontSize: '2vh', 
    lineHeight: '0.741vh',  
  }
  
  const TitleWhite = { 
    color: 'white',
    fontSize: '3vh',    
    marginTop: '0.741vh', 
    lineHeight: '2.685vh',  
    textAlign: 'center',
  }
  
  

const StyleHeaderBlack = { ...HeaderBlack}; 

  return (  
   <>
     <Header  
     style ={ StyleHeaderBlack} 
     styleH1 = {TitleWhite}
     styleButtons= {buttonsWhite}
      />
     <Contact />
   </>
  )
}

export default Contato