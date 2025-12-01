export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-5">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card card-custom">
              <div className="card-body">
                <p className="card-text">
                  Me apasiona el desarrollo web, el análisis de datos y la automatización con Python.Me apasiona el desarrollo web, el análisis de datos y la automatización de tareas con Python. Disfruto aprender nuevas tecnologías y aplicar buenas
                  prácticas de diseño de software en cada proyecto.
                </p>
                <p className="card-text">
                  Busco oportunidades para seguir creciendo profesionalmente y aportar valor al equipo.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-custom h-100">
              <div className="card-body">
                <h6 className="card-title mb-3">Tecnologías que manejo</h6>
                <ul>
                  <li>Python · PHP · Typescript</li>
                  <li>Django · Laravel · React · NextJS · Angular</li>
                  <li>SQL Server · PostgreSQL · OracleSQL</li>
                  <li>HTML · CSS · Bootstrap 5</li>
                  <li>Power BI · Power Automate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
