// Cabeçalho reutilizado no topo das páginas internas.
export default function PageHeader({ etiqueta, titulo, children }) {
  return (
    <section className="page-header">
      <div className="container">
        {etiqueta && <span className="eyebrow">{etiqueta}</span>}
        <h1>{titulo}</h1>
        {children && <p className="lead">{children}</p>}
      </div>
    </section>
  )
}
