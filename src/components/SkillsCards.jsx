import "./SkillsCards.css";

import frontendImg from "../assets/frontend.png";
import backendImg from "../assets/backend.png";
import infrastructureImg from "../assets/infra.png";

import reactIcon from "../icons/react.png";
import jsIcon from "../icons/js.png";
import angularIcon from "../icons/angular.png";
import typescriptIcon from "../icons/typescript.png";

import goIcon from "../icons/go.png";
import javaIcon from "../icons/java.png";
import pythonIcon from "../icons/python.png";
import kotlinIcon from "../icons/kotlin.png";
import mongodbIcon from "../icons/mongodb.png";

import gitIcon from "../icons/git.png";
import dockerIcon from "../icons/docker.png";
import figmaIcon from "../icons/figma.png";
import postmanIcon from "../icons/postman.png";
import springIcon from "../icons/spring.png";

function SkillsCards() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skill-card">
          <div className="card-image">
            <img src={frontendImg} alt="Front-End" />
          </div>

          <h3>Front-End</h3>
          <p className="area-label">Desenvolvimento Web</p>
          <p className="area-description">
            Criação de interfaces modernas, responsivas e interativas focadas
            na melhor experiência do usuário.
          </p>

          <div className="languages">
            <img src={reactIcon} alt="React" />
            <img src={jsIcon} alt="JavaScript" />
            <img src={angularIcon} alt="Angular" />
            <img src={typescriptIcon} alt="TypeScript" />
          </div>
        </div>

        <div className="skill-card">
          <div className="card-image">
            <img src={backendImg} alt="Back-End" />
          </div>

          <h3>Back-End</h3>
          <p className="area-label">Arquitetura & APIs</p>
          <p className="area-description">
            Desenvolvimento de APIs, regras de negócio e integração com banco
            de dados focando em performance e escalabilidade.
          </p>

          <div className="languages">
            <img src={goIcon} alt="Go" />
            <img src={javaIcon} alt="Java" />
            <img src={pythonIcon} alt="Python" />
            <img src={kotlinIcon} alt="Kotlin" />
            <img src={mongodbIcon} alt="MongoDB" />
          </div>
        </div>

        <div className="skill-card">
          <div className="card-image">
            <img src={infrastructureImg} alt="Infrastructure" />
          </div>

          <h3>Infrastructure</h3>
          <p className="area-label">Ferramentas & Workflow</p>
          <p className="area-description">
            Ferramentas modernas que otimizam produtividade, versionamento e
            organização de projetos.
          </p>

          <div className="languages">
            <img src={gitIcon} alt="Git" />
            <img src={dockerIcon} alt="Docker" />
            <img src={figmaIcon} alt="Figma" />
            <img src={postmanIcon} alt="Postman" />
            <img src={springIcon} alt="Spring Boot" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default SkillsCards;