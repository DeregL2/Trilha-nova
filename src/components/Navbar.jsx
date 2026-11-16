import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/projeto', label: 'O Projeto' },
  { to: '/funcionalidades', label: 'Funcionalidades' },
  { to: '/tecnologias', label: 'Tecnologias' },
  { to: '/simulado', label: 'Simulado Demo' },
  { to: '/equipe', label: 'Equipe' },
]

export default function Navbar() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false) // fecha o menu mobile ao clicar em um link

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={fechar}>
          <Logo />
          <span>
            <strong>Trilha do Saber</strong>
            <small>PFC · Sistemas de Informação</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${aberto ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={fechar}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
