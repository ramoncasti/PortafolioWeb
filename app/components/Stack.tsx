export default function Stack() {
  const tech = [
    { name: "HTML", icon: "/icons/Html5.png" },
    { name: "CSS", icon: "/icons/Css.png" },
    { name: "Bootstrap", icon: "/icons/Bootstrap.png" },
    { name: "TypeScript", icon: "/icons/Typescript.png" },
    { name: "Python", icon: "/icons/Python.png" },
    { name: "Django", icon: "/icons/Django.png" },
    { name: "Angular", icon: "/icons/Angular.png" },
    { name: "Next.js", icon: "/icons/Nextjs.png" },
    { name: "React", icon: "/icons/React.png" },
  ];

  return (
    <div className="mt-5 text-center">
      {/* ⭐ Título */}
      <h2 className="fw-bold text-white mb-4">Stack Tecnológico</h2>

      <div className="d-flex justify-content-center">
        <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4">
          {tech.map((t, i) => (
            <li
              key={i}
              className="d-flex align-items-center justify-content-center rounded shadow"
              style={{
                width: "85px",
                height: "85px",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <img
                src={t.icon}
                alt={t.name}
                className="img-fluid"
                style={{ width: "45px", height: "45px", objectFit: "contain" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
