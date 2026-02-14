import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>
          Sobre <span>mim</span>
        </h2>

        <p>
          Sou desenvolvedora Fullstack com mais de 3 anos de experiência
          criando aplicações web e mobile modernas, escaláveis e seguras.
        </p>

        <p>
          Trabalho com foco em performance, arquitetura limpa e soluções
          alinhadas aos objetivos estratégicos do negócio.
        </p>

        <div className="about-highlights">
          <div>
            <h3>+3</h3>
            <span>Anos de Experiência</span>
          </div>

          <div>
            <h3>Full</h3>
            <span>Stack Developer</span>
          </div>

          <div>
            <h3>Web</h3>
            <span>& Mobile</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;