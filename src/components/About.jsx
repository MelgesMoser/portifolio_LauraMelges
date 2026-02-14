import './About.css';
import { useEffect } from 'react';
import SideLines from "./SideLines";

function About() {

  useEffect(() => {
    const container = document.querySelector('.about-container');
    if (!container) return;

    container.querySelectorAll('.particle').forEach(p => p.remove());

    const numParticles = 100; 
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';

      const size = Math.random() * 4 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      const duration = Math.random() * 6 + 4; 
      particle.style.animationDuration = duration + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';

      container.appendChild(particle);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      container.querySelectorAll('.particle').forEach((p, index) => {
        const speed = (index % 5 + 1) * 0.2; 
        p.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <section className="about">
      <div className="about-container">
        <h2>I'm a Fullstack Developer.</h2>
        <h3>Experiência em desenvolvimento Web e Mobile.</h3>
        <p>
          Há mais de 3 anos na área de tecnologia.
        </p>
        <p>
          Desenvolvedora Fullstack focada em criar soluções seguras, escaláveis e 
        </p>
        <p>
          alinhadas aos objetivos do negócio.
        </p>
      </div>

      <SideLines />
    </section>
  );
}

export default About;