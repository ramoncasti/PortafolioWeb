export default function ProyectosDestacados() {
  return (
    <section id="proyectos" className="py-5">
      <div className="container">
        <h2 className="section-title mb-4">Proyectos destacados</h2>

        <div className="row g-4 mb-5">

          <div className="col-md-6">
            <div className="card card-custom h-100">
              <div className="card-body">
                <h5 className="card-title">Análisis de Churn con Python</h5>
                <p className="card-text">Modelo de análisis de abandono de clientes.</p>

                <div className="d-flex flex-wrap gap-2">
                  <span className="tag-badge">Python</span>
                  <span className="tag-badge">Pandas</span>
                  <span className="tag-badge">Power BI</span>
                  <span className="tag-badge">SQL Server</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card card-custom h-100">
              <div className="card-body">
                <h5 className="card-title">Interfaz para Notas de Crédito</h5>
                <p className="card-text">Desarrollo de una interfaz web para gestionar la emisión 
                  de notas de crédito electrónicas,
                  integrando el sistema de facturación de la universidad.</p>

                <div className="d-flex flex-wrap gap-2">
                  <span className="tag-badge">Python</span>
                  <span className="tag-badge">Bootstrap 5</span>
                  <span className="tag-badge">SQL Server</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
