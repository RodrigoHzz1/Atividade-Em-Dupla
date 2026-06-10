import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="cinelore-footer">
      
      {/* Seção Superior: Título Temático e Divisor */}
      <div className="footer-top-section">
        <h2 className="footer-fim-sessao">FIM DA SESSÃO</h2>
        <hr className="footer-gold-divider" />
      </div>

      {/* Seção Central: Informações sobre a Produção */}
      <div className="footer-mid-section">
        <h3 className="footer-brand-title">Cine Lore Productions</h3>
        <p className="footer-brand-subtitle">PRODUZIDO COM A NOSTALGIA DO CINEMA DE OURO</p>
      </div>

      {/* Seção Inferior: Linha de Créditos Corporativos Estilo Ingresso.com */}
      <div className="footer-bottom-section">
        <p className="footer-corporate-text">
          Cine Lore Lores de Cinema Ltda. / CNPJ: 00.123.456/0001-99 Endereço: Rua da Fantasia, 42 - 7º andar - Centro - Los Angeles - CA - 90028
        </p>
        <p className="footer-copyright">
          Atendimento ao cinéfilo © 2026 - Copyright Cine Lore - todos os direitos reservados
        </p>
      </div>

    </footer>
  );
}