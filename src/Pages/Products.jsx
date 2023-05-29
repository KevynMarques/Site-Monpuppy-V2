import React from 'react'
import Header from '../Components/Header/index'
import Products from "../Components/Products"

const PageLulu = () => { 
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
     <Products /> 
   </>
  )
}

export default PageLulu