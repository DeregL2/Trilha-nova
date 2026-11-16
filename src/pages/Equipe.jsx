import PageHeader from '../components/PageHeader'
import { equipe, projeto } from '../data/conteudo'

export default function Equipe() {
  return (
    <>
      <PageHeader etiqueta="Equipe" titulo="Quem construiu a Trilha do Saber">
        Projeto Final de Curso do {projeto.curso} da {projeto.instituicao}, {projeto.ano}.
      </PageHeader>

      <section className="section">
        <div className="container cards-3">
          {equipe.map((p) => (
            <div key={p.nome} className="card member">
              <div className="avatar">{p.iniciais}</div>
              <h3>{p.nome}</h3>
              <p className="muted">{projeto.curso}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Linha do tempo</span>
            <h2>Da ideia à entrega</h2>
            <ol className="timeline">
              <li><strong>Problema</strong><span>Selecionados para o ENADE, sentimos falta de uma plataforma de revisão.</span></li>
              <li><strong>Pesquisa</strong><span>Formulário com 21 estudantes e entrevista com a coordenação do curso.</span></li>
              <li><strong>Modelagem</strong><span>Diagrama de classes, arquitetura e 12 fluxos BPMN.</span></li>
              <li><strong>Desenvolvimento</strong><span>Spring Boot, PostgreSQL, branches, issues e pull requests.</span></li>
              <li><strong>Testes e entrega</strong><span>JUnit, Mockito, JaCoCo, testes de segurança e deploy no Render.</span></li>
            </ol>
          </div>
          <div className="card quote">
            <p>
              “A Trilha do Saber constitui uma ferramenta de apoio à preparação acadêmica, buscando tornar os
              estudos mais acessíveis, organizados e eficientes.”
            </p>
            <span className="muted small">Considerações finais da monografia</span>
          </div>
        </div>
      </section>
    </>
  )
}
