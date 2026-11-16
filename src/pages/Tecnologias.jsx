import PageHeader from '../components/PageHeader'
import { tecnologias, camadas, seguranca } from '../data/conteudo'

export default function Tecnologias() {
  return (
    <>
      <PageHeader etiqueta="Tecnologias" titulo="Arquitetura em camadas, padrão MVC">
        Java 21 com Spring Boot no back-end, PostgreSQL no Supabase e deploy automático no Render a cada
        atualização da branch principal.
      </PageHeader>

      <section className="section">
        <div className="container two-col align-start">
          <div>
            <h2>Camadas do sistema</h2>
            <div className="layers">
              {camadas.map((c, i) => (
                <div key={c.nome} className="layer" style={{ '--i': i }}>
                  <strong>{c.nome}</strong>
                  <span>{c.desc}</span>
                </div>
              ))}
            </div>
            <p className="muted small">
              Integrações externas: envio de e-mails pela API do Resend, versionamento no GitHub e hospedagem
              no Render.
            </p>
          </div>
          <figure className="figure">
            <a href="/arquitetura.png" target="_blank" rel="noreferrer">
              <img src="/arquitetura.png" alt="Diagrama de arquitetura da Trilha do Saber" loading="lazy" />
            </a>
            <figcaption>Diagrama de arquitetura (clique para ampliar). Fonte: elaborado pelos autores.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Stack</span>
            <h2>Ferramentas utilizadas</h2>
          </div>
          <div className="stack-grid">
            {tecnologias.map((t) => (
              <div key={t.grupo} className="card">
                <h3>{t.grupo}</h3>
                <div className="chips">
                  {t.itens.map((i) => <span key={i} className="chip">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Segurança e privacidade</span>
            <h2>Seguindo boas práticas da OWASP e a LGPD</h2>
          </div>
          <div className="cards-3">
            {seguranca.map((s) => (
              <div key={s.titulo} className="card">
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <h2>Fluxo de trabalho</h2>
            <p>
              Cada funcionalidade é desenvolvida em uma branch, testada localmente, revisada em um pull request
              e só então integrada à branch principal, que corresponde ao ambiente de produção. Issues registram
              tarefas, melhorias e problemas.
            </p>
          </div>
          <div>
            <h2>Testes</h2>
            <p>
              Testes unitários com JUnit e Mockito, cobertura medida com JaCoCo e um teste de inicialização
              completa com banco H2 em memória. Testes de segurança cobriram login e senha, controle de acesso
              por perfil e proteção contra SQL Injection.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
