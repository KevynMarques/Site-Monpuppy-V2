import React from 'react'
import "./style.css"

export default function index() {

    return (
        <div id='Container-Main-Contact'>
            <div className='Container-Contact'>
                <h1>Quero meu doguinho</h1>
                <h2>Nome Completo</h2>
                <div>
                    <input className='Name' type="text" />

                    <h2>Seu melhor e-mail</h2>
                    <div>
                        <input className='Name' type="text" />

                        <h2>Telefone com DDD</h2>
                        <div>
                            <input className='Name' type="text" />

                        </div>
                    </div>
                </div> 
                   <div className='Contaier-Contact-Text'>
                   Os contatos são feitos via telefone ou WhatsApp, entre às 08:00 e 18:00.<br></br>
                   <br></br>
                    Não pedimos dados bancários ou nenhum dado via telefone, por questões de segurança.
                   </div> 
                   <div className='Container-Button-Contact'>
                      <button className='Button-Contact'>
                       Receber Contato
                       </button>
                   </div>
                  
            </div>
        
            <div className='Container-Black'></div>
        </div>
    )
}
