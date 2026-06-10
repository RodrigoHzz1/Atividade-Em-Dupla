import React from 'react';
import './style.css';

// Link direto da imagem do filme Nós (Us) para o pôster carregar certinho
const capaUs = "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2UtNDM3NC00YTU1LWIyY2UxYjFmY2U4NWFlYjhkXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_.jpg";

export default function Home() {
  return (
    <div className="home-container">
      
      {/* Bloco Único do Filme Nós (Us) */}
      <div className="filme-card-layout">
        
        {/* Lado Esquerdo: Imagem do Pôster */}
        <div className="card-foto-box">
          <img src={capaUs} alt="Pôster do filme Nós (Us)" />
        </div>

        {/* Lado Direito: Informações e Texto */}
        <div className="card-info-box">
          <div className="card-header-layout">
            <h2 className="card-titulo-texto">NÓS (US)</h2>
            <span className="card-ano-badge">2019</span>
          </div>
          
          <p className="card-genero-texto">Terror • Suspense • Mistério</p>
          
          <h3 className="card-lore-titulo">A Lore</h3>
          <hr className="card-divisor-linha" />
          
          <p className="card-descricao-texto">
            Uma família tranquila viaja para passar as férias na praia, mas o descanso é 
            interrompido quando um grupo de pessoas idênticas a eles aparece na frente da casa. 
            Presos em um pesadelo angustiante, eles precisam lutar pela sobrevivência contra suas 
            próprias versões malignas que partilham de uma mesma alma corrompida.
          </p>
          
          <button className="btn-trailer-acao">VER TRAILER</button>
        </div>

      </div>

    </div>
  );
}