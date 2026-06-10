import React from 'react';
import './style.css';

export default function Service() {
  const servicos = [
    {
      id: 1,
      icone: "🎫",
      nome: "Clube do Lore Premium",
      descricao: "Assine e ganhe acesso a lores profundas, teorias exclusivas e e-books mensais sobre roteiros de cinema de ouro."
    },
    {
      id: 2,
      icone: "🎬",
      nome: "Pedidos de Resenhas",
      descricao: "Quer descobrir os segredos daquele filme obscuro? Mande para nossa equipe que nós destrinchamos a história para você."
    },
    {
      id: 3,
      icone: "📜",
      nome: "Roteiros para Criadores",
      descricao: "Você é YouTuber ou Podcaster? Nós escrevemos o roteiro de lore completo e pesquisado para o seu canal de cinema."
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="section-title-retro">NOSSOS SERVIÇOS</h1>
        <p>Gosta do nosso conteúdo? Veja como você pode fazer parte ou impulsionar seu canal de cinema conosco.</p>
      </div>

      <div className="services-grid">
        {servicos.map((servico) => (
          <div key={servico.id} className="service-card">
            <div className="service-icon">{servico.icone}</div>
            <h3>{servico.nome}</h3>
            <p>{servico.descricao}</p>
            <button className="btn-retro">SABER MAIS</button>
          </div>
        ))}
      </div>
    </div>
  );
}