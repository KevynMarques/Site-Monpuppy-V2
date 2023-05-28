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
    fontSize: '14px',
    lineHeight: '16px',
  }
  
  const TitleWhite = { 
    color: 'white',
    fontSize: '22px',
    marginTop: '8px',
    lineHeight: '29px',
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