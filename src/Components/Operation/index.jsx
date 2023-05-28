import React from 'react'
import Header from '../Header/index'
import "./style.css";

export default function index() {
  return (
    <>
      <Header />
      <div id='Container-Balls'>
        <div className='Container-Balls-BabyBlue'>
        </div>
        <div className='Container-Balls-Orange'>
        </div>
      </div>
      <div id='Container-Text'>
        <div className='Container-Text-BallBlue'></div>
        <div className='Container-Text-Ast'></div>
        <div className='Container-Text-Description'>
          Trabalhamos apenas com filhotes, para garantir uma
          adaptação plena e amorosa para os
          cães em seus novos lares.
        </div>
        <div className='Container-Text-BallPurple'></div>
           <div id='Container-Tittle'> 
             <h2>Veja passo-a-passo como funciona</h2>
           </div>
      </div>
    </>
  )
}
