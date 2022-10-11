import React from 'react'

export function InfosUsuario(){
    const nomeUsuario = "Daniel"


    return(

        <div class="img-usuario">
        <img src="https://media-exp1.licdn.com/dms/image/D4D03AQGZLsmVQh1-Jw/profile-displayphoto-shrink_400_400/0/1664313008886?e=1671062400&v=beta&t=bYaqG4AbPQJcj3eLWrgji_98RYUdilJKj8iqvKTRKFc" alt="Imagem usuario" />
        <h4>{nomeUsuario}</h4>
        </div>
          
)
}