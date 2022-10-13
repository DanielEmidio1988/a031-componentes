import React from 'react'

export function InfosUsuario(props){
    const nomeUsuario = "Daniel"


    return(

        <div class="img-usuario">
        <img src={props.usuario1.imagemUsuario} alt="Imagem usuario" />
        <h4>{props.usuario1.nome}</h4>
        </div>
          
)
}