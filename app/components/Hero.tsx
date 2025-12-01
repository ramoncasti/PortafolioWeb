export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-7">
            <h1 className="hero-title mb-2">Hola, soy Ramón</h1>

            <p className="hero-subtitle mb-3">
              Estudiante de Ingeniería en Informática, enfocado en el desarrollo de software
              y automatización de procesos.
            </p>

            <p className="hero-subtitle mb-4">
              Me gusta aplicar principios de <span className="highlight">diseño limpio</span> y buenas prácticas,
              creando soluciones web que realmente aporten valor al negocio.
            </p>

            <div className="d-flex flex-wrap gap-3 hero-buttons mb-4">
              <a href="#contacto" className="btn btn-main d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill"></i> Contáctame
              </a>

              <a href="https://www.linkedin.com/in/ram%C3%B3n-l%C3%B3pez-9a86a1203/" target="_blank"
                 className="btn btn-ghost d-flex align-items-center gap-2">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>

              <a href="https://github.com/ramoncasti" target="_blank"
                 className="btn btn-ghost d-flex align-items-center gap-2">
                <i className="bi bi-github"></i> GitHub
              </a>
            </div>

            <p className="text-secondary small">
              Desde Paraguay 🇵🇾 · Desarrollo web con Python, PHP.
            </p>
          </div>

          <div className="col-lg-5 d-flex justify-content-lg-end align-items-center">
            <div className="text-center">
              <div className="avatar-wrapper mb-3 mx-auto">
                <img src="/assets/foto_ramon.jpg" alt="Foto de Ramón" />
              </div>
              <strong className="text-white mb-1">Desarrollador de Software · Backend · Frontend</strong>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
