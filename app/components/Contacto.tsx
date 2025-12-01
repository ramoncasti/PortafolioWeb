export default function Contacto() {
  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="row g-4">

          <div className="col-lg-6">
            <p className="text-secondary mb-3">
              ¿Te gustaría que trabajemos juntos o quieres saber más sobre alguno de mis proyectos? 
              Podés escribirme directamente por correo o redes.
            </p>

            <div className="d-flex flex-column gap-2">
              <a href="mailto:ramonlopezcasti@gmail.com" className="text-light d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill"></i> ramonlopezcasti@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ram%C3%B3n-l%C3%B3pez-9a86a1203/" target="_blank"
                 className="text-light d-flex align-items-center gap-2">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/ramoncasti" target="_blank"
                 className="text-light d-flex align-items-center gap-2">
                <i className="bi bi-github"></i> GitHub
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card-custom">
              <div className="card-body">

                <form>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input className="form-control bg-transparent text-light border-secondary" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control bg-transparent text-light border-secondary" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea className="form-control bg-transparent text-light border-secondary" rows={4}></textarea>
                  </div>

                  <button type="submit" className="btn btn-main w-100">Enviar mensaje</button>
                </form>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
