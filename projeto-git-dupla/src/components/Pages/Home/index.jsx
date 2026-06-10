import React, { useRef } from 'react';
import './style.css';

export default function Home() {
  const carrosselRef = useRef(null);

  const listaFilmes = [
    {
      id: 1,
      titulo: "NÓS (US)",
      ano: "2019",
      genero: "Terror • Suspense • Mistério",
      descricao: "Uma família tranquila viaja para passar as férias na praia, mas o descanso é interrompido quando um grupo de pessoas idênticas a eles aparece na frente da casa. Presos em um pesadelo angustiante, eles precisam lutar pela sobrevivência.",
      poster: "/filme-us.jpg"
    },
    {
      id: 2,
      titulo: "O PODEROSO CHEFÃO",
      ano: "1972",
      genero: "Crime • Drama • Clássico",
      descricao: "O patriarca de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante. Uma história épica sobre poder, família, traição e sacrifício nas raízes da máfia.",
      poster: "/filme-chefao.jpg"
    },
    {
      id: 3,
      titulo: "MICHAEL",
      ano: "2025",
      genero: "Biografia • Drama • Musical",
      descricao: "A aguardada cinebiografia que explora a complexa vida de Michael Jackson. O filme reconstrói a genialidade artística do Rei do Pop, suas coreografias icônicas, suas intensas lutas pessoais e o preço devastador de sua fama mundial.",
      poster: "/filme-michael.jpg"
    },
    {
      id: 4,
      titulo: "O DIABO VESTE PRADA",
      ano: "2006",
      genero: "Comédia • Drama • Moda",
      descricao: "A jovem recém-formada Andy Sachs consegue um emprego que 'um milhão de garotas morreriam para ter': assistente da implacável e poderosa editora de moda Miranda Priestly. Uma batalha de sobrevivência e identidade no cruel império da alta costura.",
      poster: "/filme-prada.jpg"
    },
    {
      id: 5,
      titulo: "SUPERGIRL: WOMAN OF TOMORROW",
      ano: "2026",
      genero: "Ação • Aventura • Ficção Científica",
      descricao: "Diferente de seu primo que foi criado por pais amorosos na Terra, Kara Zor-El cresceu em um fragmento destruído de Krypton, testemunhando a morte de todos ao seu redor. Uma jornada espacial madura e emocionante em busca de justiça e propósito.",
      poster: "/filme-supergirl.jpg"
    },
    {
      id: 6,
      titulo: "TOY STORY 5",
      ano: "2026",
      genero: "Animação • Aventura • Família",
      descricao: "Os brinquedos mais amados do cinema enfrentam seu rival mais moderno e perigoso: a tecnologia. Woody, Buzz e sua turma precisam descobrir como manter o valor da amizade e da imaginação em uma era dominada por telas e eletrônicos.",
      poster: "/filme-toystory.jpg"
    },
    {
      id: 7,
      titulo: "SUPER MARIO BROS. O FILME 2",
      ano: "2026",
      genero: "Animação • Aventura • Fantasia",
      descricao: "Mario e Luigi retornam em uma nova e colorida jornada através de reinos inexplorados do universo Nintendo. Com novos power-ups e aliados conhecidos dos jogos, os irmãos encanadores enfrentam uma ameaça ainda maior que o temível Bowser.",
      poster: "/filme-mario.jpg"
    }
  ];

  const passarEsquerda = () => {
    // Anda exatamente a largura de 1 card (950px) + gap (40px)
    carrosselRef.current.scrollBy({ left: -990, behavior: 'smooth' });
  };

  const passarDireita = () => {
    // Anda exatamente a largura de 1 card (950px) + gap (40px)
    carrosselRef.current.scrollBy({ left: 990, behavior: 'smooth' });
  };

  return (
    <div className="home-container" style={{ flexDirection: 'column', gap: '40px' }}>
      
      {/* Bloco Único do Filme Nós (Us) */}
      <div className="filme-card-layout">
        
        {/* Lado Esquerdo: Imagem do Pôster vinda da pasta public */}
        <div className="card-foto-box">
          {/* Como o arquivo está na pasta public, o caminho começa direto com / */}
          <img src="/filme-us.jpg" alt="Pôster do filme Nós (Us)" />
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