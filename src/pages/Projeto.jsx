import PageHeader from '../components/PageHeader'
import { pesquisa, objetivos } from '../data/conteudo'

export default function Projeto() {
  return (
    <>
      <PageHeader etiqueta="O Projeto" titulo="Por que a Trilha do Saber existe">
        Uma plataforma unificada de simulados para que estudantes treinem com questões de edições anteriores
        do ENADE, entendam seu desempenho e recebam direcionamento de estudo.
      </PageHeader>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>O problema</h2>
            <p>
              Ao sermos selecionados para prestar o ENADE, percebemos a ausência de uma plataforma que
              centralizasse os conteúdos vistos ao longo da graduação e ajudasse na revisão, algo parecido com
              os aplicativos usados para estudar para a prova do Detran.
            </p>
            <p>
              O desafio é revisar e consolidar conteúdos ministrados ao longo de vários semestres. Do lado da
              instituição, faltam dados para prever resultados e planejar o reforço em sala de aula.
            </p>
          </div>
          <div>
            <h2>A justificativa</h2>
            <p>
              Melhores resultados no ENADE refletem diretamente no conceito do curso perante o MEC. Com os
              simulados, professores e coordenadores identificam com antecedência os temas que precisam de
              reforço, e os alunos revisam de forma contínua e direcionada.
            </p>
            <p>
              Além da pesquisa com estudantes, foi feita uma entrevista com o coordenador do curso para
              entender como a coordenação acompanha e usa os indicadores de desempenho.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pesquisa com 21 estudantes</span>
            <h2>O que os alunos disseram</h2>
            <p className="muted">Fonte: pesquisa realizada pelos autores por meio do Microsoft Forms (2026).</p>
          </div>
          <div className="survey">
            {pesquisa.map((item) => (
              <div key={item.texto} className="survey-row">
                <div className="survey-label">
                  <strong>{item.valor.toLocaleString('pt-BR')}%</strong>
                  <span>{item.texto}</span>
                </div>
                <div className="survey-bar" role="img" aria-label={`${item.valor}%`}>
                  <span style={{ width: `${item.valor}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Objetivo geral</span>
            <h2>Treinar, entender e direcionar</h2>
            <p className="lead-sm">
              Viabilizar uma plataforma unificada de simulados que permita aos estudantes do ENADE treinarem
              com questões de edições anteriores, compreenderem o seu desempenho por tema e receberem
              direcionamento de estudo personalizado.
            </p>
          </div>
          <div>
            <span className="eyebrow">Objetivos específicos</span>
            <ul className="check-list">
              {objetivos.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div className="card">
            <h3>Limitações</h3>
            <p>
              Dependência de planos gratuitos de hospedagem, que suspendem a aplicação após períodos de
              inatividade, e necessidade de revisão manual das questões extraídas dos PDFs.
            </p>
          </div>
          <div className="card">
            <h3>Trabalhos futuros</h3>
            <p>
              Classificação das questões por tema para recomendações de estudo personalizadas, testes de carga
              e aplicação com turmas reais para medir o impacto no desempenho no ENADE.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
