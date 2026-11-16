import { Link } from 'react-router-dom'
import { projeto, destaques, perfis } from '../data/conteudo'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Projeto Final de Curso · {projeto.ano}</span>
            <h1>
              Seu caminho até o <span className="highlight">ENADE</span>, uma questão por vez.
            </h1>
            <p className="lead">
              A <strong>Trilha do Saber</strong> reúne questões de provas anteriores do ENADE em simulados
              com correção automática e entrega a alunos, professores e coordenadores dados objetivos sobre
              o desempenho.
            </p>
            <div className="hero-actions">
              <Link to="/simulado" className="btn btn-primary">Experimentar um simulado</Link>
              <Link to="/projeto" className="btn btn-ghost">Conhecer o projeto</Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="mock-card">
              <div className="mock-top">
                <span>Simulado de treino</span>
                <span className="pill">18 / 35</span>
              </div>
              <div className="mock-bar"><span style={{ width: '51%' }} /></div>
              <p className="mock-q">No padrão MVC, qual componente recebe a requisição do usuário?</p>
              {['Model', 'View', 'Controller', 'Repository'].map((a, i) => (
                <div key={a} className={`mock-alt ${i === 2 ? 'sel' : ''}`}>
                  <b>{String.fromCharCode(65 + i)}</b> {a}
                </div>
              ))}
            </div>
            <div className="mock-float">
              <small>Seu desempenho</small>
              <strong>78%</strong>
              <div className="mini-bars">
                {[40, 55, 48, 70, 78].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {destaques.map((d) => (
            <div key={d.legenda} className="stat">
              <strong>{d.numero}</strong>
              <span>{d.legenda}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Como funciona</span>
            <h2>Do PDF da prova ao painel de desempenho</h2>
          </div>
          <ol className="steps">
            <li>
              <span className="step-n">1</span>
              <h3>Importação</h3>
              <p>A coordenação envia o PDF da prova e o gabarito. O sistema extrai enunciados, alternativas e imagens.</p>
            </li>
            <li>
              <span className="step-n">2</span>
              <h3>Simulado</h3>
              <p>O aluno recebe até 35 questões sorteadas do seu curso. Cada resposta é salva automaticamente.</p>
            </li>
            <li>
              <span className="step-n">3</span>
              <h3>Correção</h3>
              <p>Ao enviar, vê acertos, erros, tempo utilizado e o gabarito de cada questão.</p>
            </li>
            <li>
              <span className="step-n">4</span>
              <h3>Acompanhamento</h3>
              <p>Resultados consolidados por aluno, turma e curso em dashboards e ranking.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Para quem é</span>
            <h2>Quatro perfis, uma plataforma</h2>
          </div>
          <div className="cards-4">
            {perfis.map((p) => (
              <Link key={p.id} to={`/funcionalidades#${p.id}`} className="card card-link">
                <span className="card-icon">{p.icone}</span>
                <h3>{p.nome}</h3>
                <p>{p.resumo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container showcase">
          <div>
            <span className="eyebrow">Plataforma em funcionamento</span>
            <h2>Banco de questões organizado por curso e ano</h2>
            <p className="muted">
              Questões importadas ficam agrupadas por edição do ENADE, com indicação de status e de imagens,
              prontas para revisão e uso nos simulados.
            </p>
            <Link to="/funcionalidades" className="btn btn-primary">Ver funcionalidades</Link>
          </div>
          <img
            src="/print-banco-questoes.png"
            alt="Tela do Banco de Questões da plataforma Trilha do Saber"
            className="shot"
            loading="lazy"
          />
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <h2>Quer ver na prática?</h2>
          <p>Responda 5 questões de exemplo e veja a correção do jeito que a plataforma faz.</p>
          <Link to="/simulado" className="btn btn-light">Começar simulado demo</Link>
        </div>
      </section>
    </>
  )
}
