import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <div className="timeline-item left">
          <div className="timeline-content">
            <h2>Aprendiz em TI</h2>
            <h3>PicPay</h3>
            <span>Setembro 2024 – Abril 2025</span>
            <p>
              Atuação no desenvolvimento Back-end, com foco na construção
              de APIs, regras de negócio, integrações e persistência de dados,
              garantindo desempenho, segurança e escalabilidade das aplicações.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-content">
            <h2>Auxiliar de TI</h2>
            <h3>PicPay</h3>
            <span>Abril 2025 – Dezembro 2025</span>
            <p>
              Atuação no desenvolvimento Mobile e Web, com experiência em
              front-end e back-end e participação em todo o ciclo de software.
              Também atuei como Product Owner, priorizando backlog e alinhando
              negócio e tecnologia.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;