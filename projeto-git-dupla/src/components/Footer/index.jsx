import './style.css';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="cinema-footer">
      <div className="marquee-border dashed-border"></div>
      
      <div className="footer-credits">
        <p className="fim-sessao">FIM DA SESSÃO</p>
        <hr className="divider" />
        <h2 className="production-title">Cine Lore Productions</h2>
        <p className="production-subtitle">PRODUZIDO COM A NOSTALGIA DO CINEMA DE OURO</p>
        <p className="copyright">© {anoAtual} - TODOS OS DIREITOS RESERVADOS</p>
      </div>
    </footer>
  );
}