import './style.css';

export default function Filme() {
  return (
    <section className="filme-card">
      <div className="filme-poster">
        {/* Usando uma imagem de exemplo de um clássico do cinema */}
        <img 
          src="https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5OUcvUUy.jpg" 
          alt="Pôster do Filme" 
        />
      </div>
      
      <div className="filme-info">
        <div className="filme-cabecalho">
          <h2 className="filme-titulo">O Poderoso Chefão</h2>
          <span className="filme-ano">1972</span>
        </div>
        
        <p className="filme-genero">Crime • Drama • Clássico</p>
        
        <div className="filme-lore-container">
          <h3 className="filme-lore-titulo">A Lore</h3>
          <p className="filme-historia">
            O patriarca de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante. Uma história épica sobre poder, família e traição, que mergulha fundo nas raízes da máfia ítalo-americana e nos sacrifícios exigidos para manter o legado vivo.
          </p>
        </div>
        
        <button className="filme-btn-trailer">VER TRAILER</button>
      </div>
    </section>
  );
}