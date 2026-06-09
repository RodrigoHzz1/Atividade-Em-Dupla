import './style.css';

export default function Header() {
  return (
    <header className="cinema-header">
      {/* Decorações do Letreiro */}
      <div className="marquee-border"></div>
      <div className="bulb bulb-tl"></div>
      <div className="bulb bulb-tr"></div>
      <div className="bulb bulb-bl"></div>
      <div className="bulb bulb-br"></div>

      {/* Títulos */}
      <h1 className="cinema-title">
        <a href="/">CINE LORE</a>
      </h1>
      <p className="cinema-subtitle">"Aonde as histórias ganham vida. Explore a lore do cinema."</p>
      
      {/* Menu */}
      <nav className="cinema-nav">
        <a href="/">EM CARTAZ</a>
        <a href="/filmes">FILMES</a>
        <a href="/sobre-nos">BASTIDORES</a>
      </nav>
    </header>
  );
}