import React from 'react'
import Header from '../Components/Header/index';
import Carousel from "../Components/CarouselHorinzontal"
import OthersRace from "../Components/OthersRace/index"



const Home = () => { 
  
  return (
    <>
       <Header />
       <Carousel /> 
       <OthersRace />
    </>
  )
}

export default Home