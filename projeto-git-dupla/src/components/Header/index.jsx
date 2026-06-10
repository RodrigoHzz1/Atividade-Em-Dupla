import React from 'react';
import './style.css'; // Aponta para o css da própria pasta Header

export default function Header() {
  return (
    <nav className="cinelore-navbar">
      
      {/* Esquerda: Identidade do site */}
      <div className="navbar-logo">
        <span className="logo-cine">CINE</span>
        <span className="logo-lore">LORE</span>
      </div>

      {/* Centro: Abas de navegação */}
      <div className="navbar-links">
        <a href="#em-cartaz" className="nav-item">EM CARTAZ</a>
        <a href="#filmes" className="nav-item">FILMES</a>
        <a href="#bastidores" className="nav-item">BASTIDORES</a>
        <a href="#noticias" className="nav-item">NOTÍCIAS</a>
      </div>

      {/* Direita: Pesquisa e Login */}
      <div className="navbar-actions">
        <button className="btn-busca-retro">🔍</button>
        <button className="btn-entrar-retro">ENTRAR</button>
      </div>

    </nav>
  );
}