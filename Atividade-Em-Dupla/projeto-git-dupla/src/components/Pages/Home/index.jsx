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
      descricao: "Durante as férias de verão, Adelaide Wilson e sua família são confrontados por um grupo misterioso e aterrorizante de quatro figuras vestidas de vermelho que invadem a propriedade. O pânico se instala quando eles percebem que os invasores são cópias exatas — clones malévolos conhecidos como 'Os Amarrados'. O que parecia um ataque doméstico isolado se revela uma insurreição em escala nacional de seres subterrâneos que compartilham a mesma alma, forçando a família a enfrentar seus piores traumas ocultos para sobreviver.",
      poster: "/filme-us.jpg"
    },
    {
      id: 2,
      titulo: "O PODEROSO CHEFÃO",
      ano: "1972",
      genero: "Crime • Drama • Clássico",
      descricao: "A saga acompanha a influente e temida família mafiosa Corleone no pós-guerra em Nova York. Quando o patriarca Don Vito Corleone sofre um atentado após se recusar a entrar no mercado de narcóticos, o equilíbrio do submundo do crime é desestabilizado. Michael Corleone, seu filho mais novo e herói de guerra que sempre se manteve afastado dos negócios ilícitos, vê-se obrigado a assumir o comando para proteger sua família, iniciando uma transformação fria e calculista até se tornar o novo e impiedoso Don.",
      poster: "/filme-chefao.jpg"
    },
    {
      id: 3,
      titulo: "MICHAEL",
      ano: "2025",
      genero: "Biografia • Drama • Musical",
      descricao: "Uma profunda e eletrizante jornada cinematográfica que reconstrói a trajetória completa de Michael Jackson, desde sua infância sob a rígida disciplina do Jackson 5 até se consolidar como o maior fenômeno cultural do planeta. O filme equilibra suas apresentações lendárias, processos criativos revolucionários nos videoclipes e álbuns, com um olhar humanizado sobre as intensas pressões da mídia, suas batalhas emocionais, controvérsias públicas e o preço devastador de sua fama mundial.",
      poster: "/filme-michael.jpg"
    },
    {
      id: 4,
      titulo: "O DIABO VESTE PRADA",
      ano: "2006",
      genero: "Comédia • Drama • Moda",
      descricao: "Andy Sachs é uma jornalista recém-formada com grandes ambições intelectuais que, por ironia, consegue o cargo de segunda assistente da lendária e tirânica Miranda Priestly, editora-chefe da prestigiada revista Runway. Totalmente alheia ao universo fashion, Andy enfrenta testes diários de resiliência e humilhação. À medida que se adapta às exigências absurdas e transforma seu estilo para sobreviver no império da alta costura, ela percebe que o sucesso cobra um preço alto demais, ameaçando seus relacionamentos e sua integridade pessoal.",
      poster: "/filme-prada.jpg"
    },
    {
      id: 5,
      titulo: "SUPERGIRL: WOMAN OF TOMORROW",
      ano: "2026",
      genero: "Ação • Aventura • Ficção Científica",
      descricao: "Afastando-se da clássica jornada do Superman, esta odisseia espacial apresenta Kara Zor-El marcada por um passado brutal: ela testemunhou a destruição de Krypton flutuando em seus destroços até chegar à Terra. Desiludida e sem um propósito claro, sua vida muda quando uma jovem alienígena a recruta para uma missão de vingança implacável pelo cosmos. Cruzando planetas hostis sob a luz de sóis vermelhos, Supergirl precisa descobrir se abraçará a violência de seu passado ou se erguerá como o símbolo de esperança que o amanhã precisa.",
      poster: "/filme-supergirl.jpg"
    },
    {
      id: 6,
      titulo: "TOY STORY 5",
      ano: "2026",
      genero: "Animação • Aventura • Família",
      descricao: "Woody, Buzz Lightyear e o clássico grupo de brinquedos enfrentam sua ameaça mais existencial e contemporânea até agora: o avanço massivo dos dispositivos eletrônicos e tablets, que estão roubando a atenção das crianças e substituindo a imaginação tradicional. Em meio ao isolamento tecnológico das novas gerações, o grupo precisa se unir em uma jornada audaciosa fora do quarto para reacender a mágica das brincadeiras reais, questionando seu próprio papel no mundo moderno enquanto lutam para não serem esquecidos para sempre.",
      poster: "/filme-toystory.jpg"
    },
    {
      id: 7,
      titulo: "SUPER MARIO BROS. O FILME 2",
      ano: "2026",
      genero: "Animação • Aventura • Fantasia",
      descricao: "Após salvarem o Reino dos Cogumelos, os irmãos Mario e Luigi são arrastados para um mistério ainda maior através de portais que conectam novas e vibrantes zonas do universo Nintendo. Enquanto Bowser arquiteta uma fuga de sua prisão em miniatura buscando novos e perigosos aliados, os encanadores precisam dominar power-ups inéditos, cruzar o território de Yoshi e coordenar uma aliança galáctica com a ajuda da Princesa Peach e de novos rostos icônicos para evitar o colapso de todas as realidades de jogos.",
      poster: "/filme-mario.jpeg" // Extensão corrigida para .jpeg com base nos arquivos!
    }
  ];

  const passarEsquerda = () => {
    // Nova largura adaptada: card (1150px) + gap (40px)
    carrosselRef.current.scrollBy({ left: -1190, behavior: 'smooth' });
  };

  const passarDireita = () => {
    // Nova largura adaptada: card (1150px) + gap (40px)
    carrosselRef.current.scrollBy({ left: 1190, behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      
      <div className="carrossel-wrapper">
        <button className="seta-carrossel esquerda" onClick={passarEsquerda}>‹</button>
        
        <div className="carrossel-container" ref={carrosselRef}>
          {listaFilmes.map((filme) => (
            <div className="filme-card-layout-maior" key={filme.id}>
              
              <div className="card-foto-box">
                <img src={filme.poster} alt={filme.titulo} />
              </div>

              <div className="card-info-box">
                <div className="card-header-layout">
                  <h2 className="card-titulo-texto">{filme.titulo}</h2>
                  <span className="card-ano-badge">{filme.ano}</span>
                </div>
                
                <p className="card-genero-texto">{filme.genero}</p>
                
                <h3 className="card-lore-titulo">A Lore</h3>
                <hr className="card-divisor-linha" />
                
                <p className="card-descricao-texto">{filme.descricao}</p>
                
                <div className="card-botoes-container">
                  <button className="btn-trailer-acao">VER TRAILER</button>
                  <button className="btn-ingressos-acao">COMPRAR INGRESSOS</button>
                </div>
              </div>

            </div>
          ))}
        </div>

        <button className="seta-carrossel direita" onClick={passarDireita}>›</button>
      </div>

    </div>
  );
}