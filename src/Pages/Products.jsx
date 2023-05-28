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
     <Products /> 
   </>
  )
}

export default PageLulu