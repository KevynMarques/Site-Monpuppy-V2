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
             <div className='Container-Topics'>
             <div className='Container-Topic-Namber'>1</div>
               <div className='Container-Topic-Generic'> 
               <p>Você seleciona a raça dos seus sonhos e preenche o formulário de contato (leva 15s)</p>
                </div>         
               </div> 


               <div className='Container-Topics'>
             <div className='Container-Topic-Namber'>2</div>
               <div className='Container-Topic-Generic'> 
               <p>Nós retornamos, recolhemos informações e
                 enviamos um orçamento após localizar o melhor canil para sua solicitação e condições desejadas.</p>
                </div>         
               </div> 

               <div className='Container-Topics'>
             <div className='Container-Topic-Namber'>3</div>
               <div className='Container-Topic-Generic'> 
               <p>Intermediamos o pagamento e a entrega e a Monpuppy 
                emite um número de pedido para você acompanhar.</p>
                </div>         
               </div>


               <div className='Container-Topics'>
             <div className='Container-Topic-Namber'>4</div>
               <div className='Container-Topic-Generic'> 
               <p>
               Em alguns dias, o canil enviará o seu cãozinho através do transporte especializado 
               em animais para a sua capital.
               </p>
                </div>         
               </div>


               <div className='Container-Topics'>
             <div className='Container-Topic-Namber'>5</div>
               <div className='Container-Topic-Generic'> 
               <p>Todos os cãezinhos comprados através da plataforma ganham um pingente rastreador para te ajudar.</p>
                </div>         
               </div>


               <div className='Container-Topics'>
             <div className='Container-Topic-Namber'>6</div>
               <div className='Container-Topic-Generic'> 
               <p>Quando seu puppy chegar, vocês poderão curtir juntos, 
                mas lembre-se de acessar o nosso app para verificar
                 os cuidados com o seu doguinho.</p>
                </div>         
               </div>  
               <div className='Container-Topic-Generic Lest'> 
                 <p>Somos a ponte mais eficiente e segura entre canis e pessoas que amam cachorros,
                  procurando intermediar para que cães, pessoas e empresas estejam sempre felizes.</p>
            </div>
           </div> 
      </div>
    </>
  )
}
