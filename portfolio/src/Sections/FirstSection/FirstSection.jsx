import "./firstSection.css";
import "animate.css";
import { TypedText } from "./TypedText.jsx";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { TbBrandGithubFilled, TbDownload } from "react-icons/tb";
import { Button } from "semantic-ui-react";

export function FirstSection() {
  return (
    <div id="steeven" className="first-block ">
      <div className="floating">
        <img
          src="/images/yo.jpg"
          alt="Foto"
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

      <div className="animate__animated animate__fadeInUp">
        <ul className="social-block">
          <li>
            <a
              className="icon-block"
              href="https://github.com/Steeven064"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <TbBrandGithubFilled className="icon github-icon" />
              </i>
            </a>
          </li>
          <li>
            <a
              className="icon-block"
              href="https://www.linkedin.com/in/steevendeveloper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="icon linkedin-icon" />
            </a>
          </li>
          <li>
            <a className="icon-block" href="steevengualan@gmail.com">
              <FaEnvelope className="icon email-icon" />
            </a>
          </li>
        </ul>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="350"
        className="download-block"
      >
        <Button color="green">
          Descargar CV <TbDownload />
        </Button>
      </div>
    </div>
  );
}
