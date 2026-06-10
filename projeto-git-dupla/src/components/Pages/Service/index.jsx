import React from 'react';

// Se você tiver um arquivo CSS para esta página, descomente a linha abaixo:
// import './style.css';

export default function Service() {
  // Lista dos serviços prestados pelo Cine Lore
  const nossosServiços = [
    {
      id: 1,
      titulo: "Streaming Clássico",
      descricao: "Acesso ilimitado ao catálogo de ouro do cinema mundial, com restauração de imagem e som originais."
    },
    {
      id: 2,
      titulo: "Produções Exclusivas",
      descricao: "Financiamento e desenvolvimento de novos projetos com a estética e a nostalgia dos grandes diretores do passado."
    },
    {
      id: 3,
      titulo: "Curadoria de Lore",
      descricao: "Análises aprofundadas, bastidores detalhados e a história real por trás dos roteiros mais intrigantes do cinema."
    }
  ];

  return (
    <div className="service-container" style={{ padding: '60px 20px', color: '#fff', textAlign: 'center' }}>
      <h1 style={{ color: '#d4af37', fontFamily: 'Impact, sans-serif', fontSize: '3rem', letterSpacing: '2px' }}>
        NOSSOS SERVIÇOS
      </h1>
      <p style={{ color: '#ccc', fontStyle: 'italic', marginBottom: '40px' }}>
        Descubra como a Cine Lore Productions eleva a sua experiência cinematográfica.
      </p>

      <div className="services-grid" style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        {nossosServiços.map((servico) => (
          <div 
            key={servico.id} 
            className="service-card" 
            style={{ 
              backgroundColor: '#151515', 
              border: '1px solid #b8860b', 
              padding: '30px', 
              width: '300px', 
              boxShadow: '0 8px 24px rgba(0,0,0,0.6)' 
            }}
          >
            <h2 style={{ color: '#d4af37', fontFamily: 'Georgia, serif', marginBottom: '15px' }}>
              {servico.titulo}
            </h2>
            <hr style={{ border: '0', height: '1px', backgroundColor: '#333', margin: '15px 0' }} />
            <p style={{ color: '#e0e0e0', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {servico.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}