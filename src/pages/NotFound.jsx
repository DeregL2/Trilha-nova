import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <h1>404</h1>
        <p className="lead">Parece que você saiu da trilha.</p>
        <Link to="/" className="btn btn-primary">Voltar ao início</Link>
      </div>
    </section>
  )
}
