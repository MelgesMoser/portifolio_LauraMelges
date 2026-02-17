import "./SkillsCards.css";

function SkillsCards() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skill-card">
          <div className="card-image">
            <img src="/images/frontend.png" alt="Front-End" />
          </div>

          <h3>Front-End</h3>

          <p className="area-label">Desenvolvimento Web</p>

          <p className="area-description">
            Criação de interfaces modernas, responsivas e interativas focadas
            na melhor experiência do usuário.
          </p>

          <div className="languages">
            <img src="/icons/react.png" alt="React" />
            <img src="/icons/js.png" alt="JavaScript" />
            <img src="/icons/angular.png" alt="Angular" />
            <img src="/icons/typescript.png" alt="TypeScript" />
          </div>
        </div>

        <div className="skill-card">
          <div className="card-image">
            <img src="/images/backend.png" alt="Back-End" />
          </div>

          <h3>Back-End</h3>

          <p className="area-label">Arquitetura & APIs</p>

          <p className="area-description">
            Desenvolvimento de APIs, regras de negócio e integração com banco
            de dados focando em performance e escalabilidade.
          </p>

          <div className="languages">
            <img src="/icons/go.png" alt="Go" />
            <img src="/icons/java.png" alt="Java" />
            <img src="/icons/python.png" alt="Python" />
            <img src="/icons/kotlin.png" alt="Kotlin" />
            <img src="/icons/mongodb.png" alt="MongoDB" />
          </div>
        </div>

        <div className="skill-card">
          <div className="card-image">
            <img src="/images/infrastructure.png" alt="Infrastructure" />
          </div>

          <h3>Infrastructure</h3>

          <p className="area-label">Ferramentas & Workflow</p>

          <p className="area-description">
            Ferramentas modernas que otimizam produtividade, versionamento e
            organização de projetos.
          </p>

          <div className="languages">
            <img src="/icons/git.png" alt="Git" />
            <img src="/icons/docker.png" alt="Docker" />
            <img src="/icons/figma.png" alt="Figma" />
            <img src="/icons/postman.png" alt="Postman" />
            <img src="/icons/spring.png" alt="Spring Boot" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default SkillsCards;