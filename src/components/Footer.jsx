import { Link } from 'react-router-dom'
import Logo from './Logo'
import { projeto, equipe } from '../data/conteudo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <Logo size={32} />
            <strong>{projeto.nome}</strong>
          </div>
          <p className="muted">{projeto.slogan}</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/projeto">O Projeto</Link></li>
            <li><Link to="/funcionalidades">Funcionalidades</Link></li>
            <li><Link to="/tecnologias">Tecnologias</Link></li>
            <li><Link to="/simulado">Simulado Demo</Link></li>
            <li><Link to="/equipe">Equipe</Link></li>
          </ul>
        </div>
        <div>
          <h4>Autores</h4>
          <ul>
            {equipe.map((p) => <li key={p.nome}>{p.nome}</li>)}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        © {projeto.ano} · {projeto.curso} · {projeto.instituicao}
      </div>
    </footer>
  )
}
