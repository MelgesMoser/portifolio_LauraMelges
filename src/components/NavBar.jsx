import { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const container = section.querySelector('.about-container') || section;

      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      let scrollPosition = containerTop - (viewportHeight / 2) + (containerHeight / 2);

      scrollPosition = Math.max(0, Math.min(scrollPosition, document.body.scrollHeight - viewportHeight));

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
    setOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        Laura Melges
      </div>

      <ul className={`navbar-center ${open ? 'open' : ''}`}>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>Sobre Mim</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('experiences')}>Experiências</li>
        <li onClick={() => scrollToSection('contact')}>Contato</li>
      </ul>

      <div className="navbar-right">
        <span>🐙</span>
        <span>💬</span>
        <span>📷</span>
        <span>🐦</span>
      </div>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default NavBar;