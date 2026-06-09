import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* O nosso Cabeçalho */}
      <Header />
      
      {/* O meio do site (onde as páginas vão ficar no futuro) */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: 'var(--text)' }}>
          🎬 O ecrã já não está preto! O conteúdo entra aqui.
        </h2>
      </main>

      {/* O nosso Rodapé */}
      <Footer />
    </div>
  )
}

export default App