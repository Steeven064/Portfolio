import "./skillsSection.css";

export function SkillsSection() {
  return (
    <section id="skills" className="skill-section">
      <div className="skill-container">
        <h1 className="title">Habilidades</h1>
        <div className="skills">
          <div className="front">
            <h1>Front-End</h1>
            <div className="skills-block">
              <div className="skill-item">
                <img src="./skills/html.svg" alt="HTML" />
                HTML5
              </div>
              <div className="skill-item">
                <img src="./skills/css.svg" alt="CSS" />
                CSS3
              </div>
              <div className="skill-item">
                <img src="./skills/typescript.svg" alt="TYPSCRIPT" />
                TypeScript
              </div>
              <div className="skill-item">
                <img src="./skills/react.svg" alt="REACT" />
                React
              </div>
              <div className="skill-item">
                <img src="./skills/angular.svg" alt="ANGULAR" />
                Angular
              </div>
              <div className="skill-item">
                <img src="./skills/javascript.svg" alt="JAVASCRIPT" />
                JavaScript
              </div>
            </div>
          </div>

          <div className="back">
            <h1>Back-End</h1>
            <div className="skills-block">
              <div className="skill-item">
                <img src="./skills/node-js.svg" alt="NODE-JS" />
                Node
              </div>
              <div className="skill-item">
                <img src="./skills/python.svg" alt="PYTHON" />
                Python
              </div>
              <div className="skill-item">
                <img src="./skills/php.svg" alt="PHP" />
                PHP
              </div>
            </div>
          </div>

          <div className="testing">
            <h1>Testing</h1>
            <div className="skills-block">
              <div className="skill-item">
                <img src="./skills/jest.svg" alt="JEST" />
                Jest
              </div>
              <div className="skill-item">
                <img
                  src="./skills/react-testing-library.svg"
                  alt="REACT TESTING LYBRARY"
                />
                React Testing Library
              </div>
            </div>
          </div>

          <div className="database">
            <h1>Base de Datos</h1>
            <div className="skills-block">
              <div className="skill-item">
                <img src="./skills/postgresql.svg" alt="POSTGRESQL" />
                PostgreSQL
              </div>
              <div className="skill-item">
                <img src="./skills/mysql.svg" alt="MYSQL" />
                MySQL
              </div>
              <div className="skill-item">
                <img src="./skills/mongodb.svg" alt="MONGODB" />
                MongoDB
              </div>
              <div className="skill-item">
                <img src="./skills/sql-server.svg" alt="SQL SERVER" />
                SQL Server
              </div>
            </div>
          </div>

          <div className="others">
            <h1>Otras Herramientas</h1>
            <div className="skills-block">
              <div className="skill-item">
                <img src="./skills/figma.svg" alt="FIGMA" />
                Figma
              </div>
              <div className="skill-item">
                <img src="./skills/git.svg" alt="GIT" />
                GIT
              </div>
              <div className="skill-item">
                <img src="./skills/illustrator.svg" alt="ADOBE ILLUSTRATOR" />
                Adobe Illusrator
              </div>
              <div className="skill-item">
                <img src="./skills/photoshop.svg" alt="PHOTOSHOP" />
                Photoshop
              </div>
              <div className="skill-item">
                <img src="./skills/wordpress.svg" alt="WORDPRESS" />
                Wordpress
              </div>
              <div className="skill-item">
                <img src="./skills/shopify.svg" alt="SHOPIFY" />
                Shopify
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
