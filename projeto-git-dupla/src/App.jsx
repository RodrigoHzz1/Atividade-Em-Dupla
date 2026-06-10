import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Filme from './components/Filme' 
// O caminho correto passando por dentro de components:
import Home from './components/Pages/Home' 

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      <Header />
      
      <main style={{ flex: 1 }}>
        <Filme />
        {/* Agora o Vite vai achar sua página sem reclamar! */}
        <Home />
      </main>

      <Footer />
    </div>
  )
}

export default App