import React from 'react';
import './style.css';

export default function Home() {
  return (
    <div className="home-container" style={{ flexDirection: 'column', gap: '40px' }}>
      
      {/* --- PRIMEIRO FILME: O Poderoso Chefão --- */}
      <div className="filme-card-layout">
        <div className="card-foto-box">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamESVO3V1PvgRf2-GQXYHUR8BiBcrIkgJ2g&s" 
            alt="Pôster do Filme O Poderoso Chefão" 
          />
        </div>
        
        <div className="card-info-box">
          <div className="card-header-layout">
            <h2 className="card-titulo-texto">O PODEROSO CHEFÃO</h2>
            <span className="card-ano-badge">1972</span>
          </div>
          
          <p className="card-genero-texto">Crime • Drama • Clássico</p>
          
          <h3 className="card-lore-titulo">A Lore</h3>
          <hr className="card-divisor-linha" />
          
          <p className="card-descricao-texto">
            O patriarca de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante. Uma história épica sobre poder, família e traição, que mergulha fundo nas raízes da máfia ítalo-americana e nos sacrifícios exigidos para manter o legado vivo.
          </p>
          
          <button className="btn-trailer-acao">VER ELENCO</button>
        </div>
      </div>

      {/* --- SEGUNDO FILME: Nós (Us) --- */}
      <div className="filme-card-layout">
        <div className="card-foto-box">
          <img src="/filme-us.jpg" alt="Pôster do filme Nós (Us)" />
        </div>

        <div className="card-info-box">
          <div className="card-header-layout">
            <h2 className="card-titulo-texto">NÓS (US)</h2>
            <span className="card-ano-badge">2019</span>
          </div>
          
          <p className="card-genero-texto">Terror • Suspense • Mistério</p>
          
          <h3 className="card-lore-titulo">A Lore</h3>
          <hr className="card-divisor-linha" />
          
          <p className="card-descricao-texto">
            Uma família tranquila viaja para passar as férias na praia, mas o descanso é interrompido quando um grupo de pessoas idênticas a eles aparece na frente da casa. Presos em um pesadelo angustiante, eles precisam lutar pela sobrevivência contra suas próprias versões malignas que partilham de uma mesma alma corrompida.
          </p>
          
          <button className="btn-trailer-acao">VER ELENCO</button>
        </div>
      </div>

    </div>
  );
}