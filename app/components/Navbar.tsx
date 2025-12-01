export default function Navbar() {
  return (
    <nav id="mainNavbar" className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 text-light fw-semibold" href="#inicio">
          <span className="dot-accent"></span>
          <span>Ramón López</span>
        </a>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon">
            <i className="bi bi-list text-light fs-3"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#experiencia">Experiencia</a></li>
            <li className="nav-item"><a className="nav-link" href="#proyectos">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#sobre-mi">Sobre mí</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
