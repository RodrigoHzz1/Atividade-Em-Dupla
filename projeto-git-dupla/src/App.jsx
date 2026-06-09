import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Filme from './components/Filme' // Importamos o novo componente aqui!

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      <Header />
      
      <main style={{ flex: 1 }}>
        {/* Colocamos o filme no meio do site */}
        <Filme />
      </main>

      <Footer />
    </div>
  )
}

export default App