import React from "react";
import { CardVideo } from "./Components/CardVideo";
import "./styles.css";


export default function App() {

  const video1 = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "TESTE",
    nome: "Lucas",
    imagemUsuario: "https://media-exp1.licdn.com/dms/image/D4D03AQGZLsmVQh1-Jw/profile-displayphoto-shrink_400_400/0/1664313008886?e=1671062400&v=beta&t=bYaqG4AbPQJcj3eLWrgji_98RYUdilJKj8iqvKTRKFc"
  }

  const video2 = {
    imagem: "https://picsum.photos/400/400?a=2",
    titulo: "TituloDiferente",
    nome: "Daniel",
    imagemUsuario: "https://media-exp1.licdn.com/dms/image/D4D03AQGZLsmVQh1-Jw/profile-displayphoto-shrink_400_400/0/1664313008886?e=1671062400&v=beta&t=bYaqG4AbPQJcj3eLWrgji_98RYUdilJKj8iqvKTRKFc"
  }

  const video3 = {
    imagem: "https://picsum.photos/400/400?a=3",
    titulo: "TituloMaisDiferente",
    nome: "Chiquinho",
    imagemUsuario: "https://media-exp1.licdn.com/dms/image/D4D03AQGZLsmVQh1-Jw/profile-displayphoto-shrink_400_400/0/1664313008886?e=1671062400&v=beta&t=bYaqG4AbPQJcj3eLWrgji_98RYUdilJKj8iqvKTRKFc"
  }

  const video4 = {
    imagem: "https://picsum.photos/400/400?a=4",
    titulo: "TituloMaisDiferente",
    nome: "Zezinho",
    imagemUsuario: "https://media-exp1.licdn.com/dms/image/D4D03AQGZLsmVQh1-Jw/profile-displayphoto-shrink_400_400/0/1664313008886?e=1671062400&v=beta&t=bYaqG4AbPQJcj3eLWrgji_98RYUdilJKj8iqvKTRKFc"
  }

  const video5 = {
    imagem: "https://picsum.photos/400/400?a=5",
    titulo: "TituloMaisDiferente",
    nome: "Andre",
    imagemUsuario: "https://media-exp1.licdn.com/dms/image/D4D03AQGZLsmVQh1-Jw/profile-displayphoto-shrink_400_400/0/1664313008886?e=1671062400&v=beta&t=bYaqG4AbPQJcj3eLWrgji_98RYUdilJKj8iqvKTRKFc"
  }

  const video6 = {
    imagem: "https://picsum.photos/400/400?a=6",
    titulo: "TituloMaisDiferente",
    nome: "Luizinho",
    imagemUsuario: "https://media-exp1.licdn.com/dms/image/D4D03AQGZLsmVQh1-Jw/profile-displayphoto-shrink_400_400/0/1664313008886?e=1671062400&v=beta&t=bYaqG4AbPQJcj3eLWrgji_98RYUdilJKj8iqvKTRKFc"
  }

  const video7 = {
    imagem: "https://picsum.photos/400/400?a=7",
    titulo: "TituloMaisDiferente",
    nome: "Marcos",
    imagemUsuario: "https://media-exp1.licdn.com/dms/image/D4D03AQGZLsmVQh1-Jw/profile-displayphoto-shrink_400_400/0/1664313008886?e=1671062400&v=beta&t=bYaqG4AbPQJcj3eLWrgji_98RYUdilJKj8iqvKTRKFc"
  }

  const video8 = {
    imagem: "https://picsum.photos/400/400?a=8",
    titulo: "TituloMaisDiferente",
    nome: "João",
    imagemUsuario: "https://media-exp1.licdn.com/dms/image/D4D03AQGZLsmVQh1-Jw/profile-displayphoto-shrink_400_400/0/1664313008886?e=1671062400&v=beta&t=bYaqG4AbPQJcj3eLWrgji_98RYUdilJKj8iqvKTRKFc"
  }


  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">

          <CardVideo
          video={video1}/>
                    
          <CardVideo
          video={video2}/>
                    
          <CardVideo
          video={video3}/>

          <CardVideo
          video={video4}/>

          <CardVideo
          video={video5}/>

          <CardVideo
          video={video6}/>

          <CardVideo
          video={video7}/>

          <CardVideo
          video={video8}/>


          </section>

        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
