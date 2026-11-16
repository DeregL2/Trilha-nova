import { useLocation, useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { perfis, fluxos } from '../data/conteudo'

export default function Funcionalidades() {
  const { hash } = useLocation()
  const navigate = useNavigate()

  // A aba ativa vem da URL (ex.: /funcionalidades#professor), então links da Home abrem o perfil certo
  const perfil = perfis.find((p) => `#${p.id}` === hash) ?? perfis[0]
  const ativo = perfil.id
  const setAtivo = (id) => navigate({ hash: id }, { replace: true, preventScrollReset: true })

  return (
    <>
      <PageHeader etiqueta="Funcionalidades" titulo="O que cada perfil pode fazer">
        Cada perfil tem páginas e permissões próprias. O aluno vê apenas os seus resultados, o professor
        apenas as suas turmas e a coordenação os cursos sob sua responsabilidade.
      </PageHeader>

      <section className="section">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Perfis de acesso">
            {perfis.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={ativo === p.id}
                className={`tab ${ativo === p.id ? 'active' : ''}`}
                onClick={() => setAtivo(p.id)}
              >
                <span>{p.icone}</span> {p.nome}
              </button>
            ))}
          </div>

          <div className="tab-panel" role="tabpanel" key={perfil.id}>
            <div className="tab-panel-head">
              <span className="card-icon big">{perfil.icone}</span>
              <div>
                <h2>{perfil.nome}</h2>
                <p className="muted">{perfil.resumo}</p>
              </div>
            </div>
            <ul className="feature-list">
              {perfil.recursos.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Simulado × Prova aplicada</span>
            <h2>Dois modos de avaliação</h2>
          </div>
          <div className="table-wrap">
            <table className="compare">
              <thead>
                <tr><th></th><th>Simulado de treino</th><th>Prova aplicada</th></tr>
              </thead>
              <tbody>
                <tr><td>Quem inicia</td><td>O próprio aluno</td><td>Professor ou coordenador</td></tr>
                <tr><td>Questões</td><td>Até 35, sorteadas do curso</td><td>Até 60, escolhidas do banco</td></tr>
                <tr><td>Tempo</td><td>Sem limite</td><td>Janela de abertura e encerramento, prazo no servidor</td></tr>
                <tr><td>Saída da tela</td><td>Livre</td><td>Registrada; pode encerrar a prova</td></tr>
                <tr><td>Gabarito</td><td>Logo após o envio</td><td>Pode ficar retido</td></tr>
                <tr><td>Resultados</td><td>Dashboard e ranking do aluno</td><td>Notas, saídas e exportação CSV</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Modelagem BPMN</span>
            <h2>12 processos mapeados</h2>
            <p className="muted">Os fluxos guiaram o comportamento esperado de cada funcionalidade.</p>
          </div>
          <ol className="flow-grid">
            {fluxos.map((f, i) => (
              <li key={f}><span>{String(i + 1).padStart(2, '0')}</span>{f}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
