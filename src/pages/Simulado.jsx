import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { questoesDemo } from '../data/conteudo'

const LETRAS = ['A', 'B', 'C', 'D', 'E']

function formatarTempo(seg) {
  const m = String(Math.floor(seg / 60)).padStart(2, '0')
  const s = String(seg % 60).padStart(2, '0')
  return `${m}:${s}`
}

export default function Simulado() {
  const total = questoesDemo.length
  const [atual, setAtual] = useState(0)
  const [respostas, setRespostas] = useState(Array(total).fill(null))
  const [revisao, setRevisao] = useState(Array(total).fill(false))
  const [enviado, setEnviado] = useState(false)
  const [segundos, setSegundos] = useState(0)

  // Cronômetro: conta o tempo utilizado até o envio
  useEffect(() => {
    if (enviado) return
    const id = setInterval(() => setSegundos((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [enviado])

  const responder = (alt) => {
    const novo = [...respostas]
    novo[atual] = alt
    setRespostas(novo)
  }

  const alternarRevisao = () => {
    const novo = [...revisao]
    novo[atual] = !novo[atual]
    setRevisao(novo)
  }

  const reiniciar = () => {
    setAtual(0)
    setRespostas(Array(total).fill(null))
    setRevisao(Array(total).fill(false))
    setEnviado(false)
    setSegundos(0)
  }

  const respondidas = respostas.filter((r) => r !== null).length
  const acertos = respostas.filter((r, i) => r === questoesDemo[i].correta).length
  const nota = Math.round((acertos / total) * 100)

  if (enviado) {
    return (
      <>
        <PageHeader etiqueta="Simulado Demo" titulo="Resultado do simulado" />
        <section className="section">
          <div className="container">
            <div className="result-summary">
              <div className="score-ring" style={{ '--p': nota }}>
                <span>{nota}%</span>
              </div>
              <div className="result-stats">
                <div><strong className="ok">{acertos}</strong><span>acertos</span></div>
                <div><strong className="err">{total - acertos}</strong><span>erros</span></div>
                <div><strong>{formatarTempo(segundos)}</strong><span>tempo utilizado</span></div>
              </div>
              <button className="btn btn-primary" onClick={reiniciar}>Refazer simulado</button>
            </div>

            <h2 className="gabarito-title">Gabarito comentado</h2>
            <div className="gabarito">
              {questoesDemo.map((q, i) => {
                const certo = respostas[i] === q.correta
                return (
                  <article key={i} className={`gab-item ${certo ? 'is-ok' : 'is-err'}`}>
                    <header>
                      <span className="pill">{q.tema}</span>
                      <span className={certo ? 'ok' : 'err'}>{certo ? '✔ Acertou' : '✘ Errou'}</span>
                    </header>
                    <p><strong>{i + 1}.</strong> {q.enunciado}</p>
                    <p className="small">
                      Sua resposta: <b>{respostas[i] === null ? 'em branco' : `${LETRAS[respostas[i]]}) ${q.alternativas[respostas[i]]}`}</b>
                      <br />
                      Correta: <b>{LETRAS[q.correta]}) {q.alternativas[q.correta]}</b>
                    </p>
                    <p className="muted small">{q.explicacao}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </>
    )
  }

  const q = questoesDemo[atual]

  return (
    <>
      <PageHeader etiqueta="Simulado Demo" titulo="Experimente um simulado">
        Uma versão simplificada do simulado de treino da plataforma. As questões abaixo foram escritas para
        esta demonstração e não são questões oficiais do ENADE.
      </PageHeader>

      <section className="section">
        <div className="container quiz">
          <aside className="quiz-side">
            <div className="quiz-timer">⏱ {formatarTempo(segundos)}</div>
            <p className="small muted">{respondidas} de {total} respondidas</p>
            <div className="quiz-nav">
              {questoesDemo.map((_, i) => (
                <button
                  key={i}
                  className={[
                    'qn',
                    i === atual && 'current',
                    respostas[i] !== null && 'answered',
                    revisao[i] && 'review',
                  ].filter(Boolean).join(' ')}
                  onClick={() => setAtual(i)}
                  aria-label={`Ir para questão ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <ul className="legend small">
              <li><span className="dot answered" /> Respondida</li>
              <li><span className="dot review" /> Para revisão</li>
            </ul>
          </aside>

          <div className="quiz-main card">
            <div className="quiz-top">
              <span className="pill">{q.tema}</span>
              <span className="muted small">Questão {atual + 1} de {total}</span>
            </div>
            <div className="mock-bar"><span style={{ width: `${((atual + 1) / total) * 100}%` }} /></div>
            <p className="quiz-q">{q.enunciado}</p>

            <div className="alts" role="radiogroup">
              {q.alternativas.map((a, i) => (
                <button
                  key={i}
                  role="radio"
                  aria-checked={respostas[atual] === i}
                  className={`alt ${respostas[atual] === i ? 'sel' : ''}`}
                  onClick={() => responder(i)}
                >
                  <b>{LETRAS[i]}</b> {a}
                </button>
              ))}
            </div>

            <div className="quiz-actions">
              <button className="btn btn-ghost" onClick={alternarRevisao}>
                {revisao[atual] ? '★ Marcada para revisão' : '☆ Marcar para revisão'}
              </button>
              <div className="quiz-move">
                <button className="btn btn-ghost" disabled={atual === 0} onClick={() => setAtual(atual - 1)}>
                  ← Anterior
                </button>
                {atual < total - 1 ? (
                  <button className="btn btn-primary" onClick={() => setAtual(atual + 1)}>Próxima →</button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      if (respondidas < total && !window.confirm(`Você deixou ${total - respondidas} questão(ões) em branco. Enviar mesmo assim?`)) return
                      setEnviado(true)
                    }}
                  >
                    Enviar simulado
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
