import React from "react";
import { InfosUsuario } from "./InfosUsuario";

export function CardVideo(props){
  // const titulo = "Título: Labenu";
  console.log(props.video.titulo)
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  const usuario1 = {
    
  }

  const usuario2 = {
    
  }

    return(
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={props.video.imagem} alt="" />
              <h4>{props.video.titulo}</h4>
              <InfosUsuario usuario1={props.video}/>
            </div>

            
          
    )
}