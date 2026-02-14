import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* gradiente de fundo */}
      <div className="hero-gradient"></div>

      {/* conteúdo */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span>Laura</span>
        </h1>

        <h2 className="hero-subtitle">
          Desenvolvedora Full Stack
        </h2>

        <p className="hero-text">
          Apaixonada por criar experiências web e mobile
          bonitas e funcionais.
        </p>

    
      </div>
    </section>
  )
}

export default Hero
