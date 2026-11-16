import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projeto from './pages/Projeto'
import Funcionalidades from './pages/Funcionalidades'
import Tecnologias from './pages/Tecnologias'
import Simulado from './pages/Simulado'
import Equipe from './pages/Equipe'
import NotFound from './pages/NotFound'

const titulos = {
  '/': 'Início',
  '/projeto': 'O Projeto',
  '/funcionalidades': 'Funcionalidades',
  '/tecnologias': 'Tecnologias',
  '/simulado': 'Simulado Demo',
  '/equipe': 'Equipe',
}

export default function App() {
  const { pathname } = useLocation()

  // Volta ao topo e atualiza o título da aba a cada troca de rota
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${titulos[pathname] ?? 'Página não encontrada'} · Trilha do Saber`
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/simulado" element={<Simulado />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
