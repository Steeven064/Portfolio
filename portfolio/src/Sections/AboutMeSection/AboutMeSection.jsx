import "./aboutMeSection.css";

export function AboutMeSection() {
  return (
    <section id="about-me-section" className="about-me-section">
      <div className="aboutme-block">
        <div className="item">
          <h1 className="title">Sobre Mi.</h1>
          <p>
            Hola, soy Steeven Gualan, tengo 24 años y soy de Ecuador. <b>Ingeniero en Software Junior</b>, Web Developer y Desarrollador
            Fullstack, con habilidades técnicas en lenguajes de programación
            como <b> HTML, CSS y JavaScript.</b>
          </p>
          <p>
            Experiencia en aplicaciones web utilizando herramientas como Figma y
            Adobe. Además, cuento con conocimientos en{" "}
            <b> bases de datos SQL, NoSQL </b> y la implementación de{" "}
            <b>APIs RESTful</b>.
          </p>
          <p>
            Experiencia como colaborador dentro de equipos de desarrollo,
            aplicando metodologías ágiles como <b>SCRUM</b> y desarrollo de
            proyectos de <b>Software en la Nube</b> asegurando la calidad del
            Software.
          </p>
        </div>

        <div className="item">
          <h1>IMAGE</h1>
        </div>
      </div>
    </section>
  );
}
