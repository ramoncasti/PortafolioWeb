export default function Experiencia() {
  return (
    <section id="experiencia" className="py-5">
      <div className="container">
        <h2 className="section-title">Experiencia laboral</h2>

        <div className="card card-custom">
          <div className="card-body">

            <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
              <div>
                <h5 className="card-title mb-0">Universidad Americana</h5>
                <small className="text-secondary">Soporte y Desarrollo de Software</small>
              </div>

              <span className="tag-badge mt-2 mt-sm-0">Python · PHP · SQL Server</span>
            </div>

            <p className="card-text mb-2">
              Participo activamente en proyectos de desarrollo, utilizando lenguajes como
              <span className="highlight"> Python</span> y <span className="highlight">PHP</span>.
            </p>

            <ul className="card-text">
              <li>Creación y optimización de vistas y funciones SQL.</li>
              <li>Mantenimiento de aplicaciones internas de la universidad.</li>
              <li>Soporte técnico en facturación electrónica.</li>
              <li>Atención a usuarios del ERP académico.</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
