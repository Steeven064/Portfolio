import {Link} from 'react-scroll';
import "./nav.css";
import 'animate.css';

export function Nav() {
  return (
    <div className='nav_section'>
      <div className='nav_content'>
        <div className='logo animate__animated animate__fadeInLeft'>
          <Link >
          &lt;Ing. Steeven/&gt;
          </Link>
        </div>
        <div>
          <nav className='menu_list'>
            <ul>
              <li className='animate__animated animate__zoomIn'>
              <Link
                activeClass="active"
                //to="about_me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección sobre mi"
              >
                Sobre Mí
              </Link>
              </li>
              <li className='animate__animated animate__zoomIn'>
                <Link
                activeClass="active"
                //to="about_me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección sobre mi">
                  Hablidades
                </Link>
              </li>
              <li className='animate__animated animate__zoomIn'>
                <Link
                activeClass="active"
                //to="about_me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección sobre mi">
                  Proyectos
                </Link>
              </li>
              <li className='animate__animated animate__zoomIn'>
                <Link
                activeClass="active"
                //to="about_me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección sobre mi">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

