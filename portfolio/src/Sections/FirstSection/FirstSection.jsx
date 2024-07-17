import "./firstSection.css";
import "animate.css";
import { TypedText } from "./TypedText.jsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function FirstSection() {
  return (
    <div id="steeven" className="first-block ">
      <div className="floating">
        <img
          src="/images/yo.jpg"
          alt="Mi foto"
          className="image-block animate__animated animate__fadeIn"
        />
      </div>

      <div className="typed-text">
        &lt;
        <TypedText />
        &gt;
      </div>

      <span className="about-me-block animate__animated animate__fadeInUp">
        Soy Steeven Gualan, <b>Ingeniero en Software </b>junior enfocado en
        implementar buenas prácticas y metodologías ágiles para optimizar
        procesos y garantizar resultados eficientes en proyectos tecnológicos
        innovadores.
      </span>

      <div>
        <a
          href="https://github.com/Steeven064"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github-icon" />
        </a>
        <a
          href="https://linkedin.com/in/tucuenta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a href="mailto:tucorreo@gmail.com">
          <FaEnvelope className="icon email-icon" />
        </a>
      </div>
    </div>
  );
}
