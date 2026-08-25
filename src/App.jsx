import React from "react";
import "./App.css";

const tools = [
  {
    icon: "📐",
    name: "Calculadora",
    description: "Cálculos rápidos para arquitectura, obra e ingeniería.",
  },
  {
    icon: "📏",
    name: "Conversor",
    description: "Convierte unidades, escalas y medidas de manera sencilla.",
  },
  {
    icon: "🏗️",
    name: "Materiales",
    description: "Consulta información y características de materiales.",
  },
  {
    icon: "🧱",
    name: "Mampostería",
    description:
      "Herramientas y recursos relacionados con muros y mampostería.",
  },
  {
    icon: "⚙️",
    name: "Ingeniería",
    description: "Utilidades para cálculos y conceptos de ingeniería.",
  },
  {
    icon: "🏠",
    name: "Arquitectura",
    description: "Recursos y herramientas para proyectos arquitectónicos.",
  },
  {
    icon: "📊",
    name: "Presupuestos",
    description: "Herramientas para organizar costos y presupuestos.",
  },
  {
    icon: "💡",
    name: "Ideas",
    description: "Inspiración, conceptos y recursos para nuevos proyectos.",
  },
  {
    icon: "📚",
    name: "Biblioteca",
    description: "Contenido técnico, apuntes y material de consulta.",
  },
  {
    icon: "🖥️",
    name: "CAD / BIM",
    description: "Recursos relacionados con dibujo técnico, CAD y BIM.",
  },
  {
    icon: "🌐",
    name: "Normativas",
    description: "Acceso rápido a normas y documentación técnica.",
  },
  {
    icon: "🔧",
    name: "Herramientas",
    description: "Pequeñas utilidades para resolver tareas del día a día.",
  },
];

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-mark">D</span>
          <span className="logo-text">
            DRM <strong>SUITE</strong>
          </span>
        </div>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#herramientas">Herramientas</a>
          <a href="#recursos">Recursos</a>
          <a href="#biblioteca">Biblioteca</a>
        </div>

        <button className="nav-button">Explorar</button>
      </nav>

      {/* HERO / TITULO */}
      <main id="inicio">
        <section className="hero">
          <div className="hero-background-shape shape-one"></div>
          <div className="hero-background-shape shape-two"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span></span>
              ARQUITECTURA · CONSTRUCCIÓN · INGENIERÍA
            </div>

            <h1>
              DRM
              <span>SUITE</span>
            </h1>

            <p className="hero-description">
              Un espacio digital para crear, calcular, diseñar, aprender y
              resolver todo lo relacionado con el mundo de la arquitectura y la
              construcción.
            </p>

            <div className="hero-actions">
              <a href="#herramientas" className="primary-button">
                Explorar herramientas
                <span>→</span>
              </a>

              <a href="#recursos" className="secondary-button">
                Ver recursos
              </a>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="blueprint-card">
              <div className="blueprint-grid"></div>

              <div className="blueprint-line line-one"></div>
              <div className="blueprint-line line-two"></div>
              <div className="blueprint-line line-three"></div>

              <div className="blueprint-label">DRM / 001</div>
            </div>
          </div>
        </section>

        {/* HERRAMIENTAS GENERALES */}
        <section className="tools-section" id="herramientas">
          <div className="section-heading">
            <div>
              <span className="section-number">01 / TOOLS</span>

              <h2>
                Herramientas
                <span> generales</span>
              </h2>
            </div>

            <p>
              Una colección de herramientas rápidas para trabajar, calcular y
              consultar información.
            </p>
          </div>

          <div className="tools-board">
            <div className="board-top">
              <span>DRM TOOLBOX</span>

              <div className="board-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div className="tool-card" key={index}>
                  <div className="tool-icon">{tool.icon}</div>

                  <div className="tool-info">
                    <h3>{tool.name}</h3>

                    <p>{tool.description}</p>

                    <span className="tool-arrow">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCION FUTURA */}
        <section className="placeholder-section" id="recursos">
          <span>02 / COMING NEXT</span>

          <h2>Recursos & contenido</h2>

          <p>
            Próximamente: biblioteca técnica, materiales, normativas,
            calculadoras, herramientas BIM y mucho más.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          DRM <span>SUITE</span>
        </div>

        <p>Architecture · Construction · Engineering</p>

        <span className="footer-copy">© 2026 DRM SUITE</span>
      </footer>
    </div>
  );
}

export default App;
