export default function ProyectosPersonales() {
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="h4 mb-3">Proyectos Personales</h3>

        <div className="row g-4">

          <div className="col-md-6">
            <div className="card card-custom h-100">

              <div id="carouselFlota" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/assets/flota1.png" className="d-block w-100 project-img" />
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselFlota" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselFlota" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              <div className="card-body">
                <h5 className="card-title">Sistema de gestión de flota de vehículos</h5>
                <p className="card-text">Aplicación para controlar vehículos, mantenimientos, gastos y 
                  asignaciones por chofer, con reportes de uso y costos.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="tag-badge">Angular</span>
                  <span className="tag-badge">NestJS</span>
                  <span className="tag-badge">PostgreSQL</span>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-6">
            <div className="card card-custom h-100">

              <div id="carouselOdonto" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/assets/odonto1.png" className="d-block w-100 project-img" />
                  </div>

                  <div className="carousel-item">
                    <img src="/assets/odonto2.png" className="d-block w-100 project-img" />
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselOdonto" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselOdonto" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>

              </div>

              <div className="card-body">
                <h5 className="card-title">Sistema de gestión odontológica</h5>
                <p className="card-text">Sistema integral para clínicas odontológicas: registro de pacientes, fichas médicas, agendamiento, 
                  tratamientos y facturación.</p>

                <div className="d-flex flex-wrap gap-2">
                  <span className="tag-badge">Django</span>
                  <span className="tag-badge">PostgreSQL</span>
                  <span className="tag-badge">Bootstrap 5</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
