import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-left">
        Laura Melges
      </div>

      <ul className={`navbar-center ${open ? 'open' : ''}`}>
        <li>Home</li>
        <li>Sobre Mim</li>
        <li>Skils</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>

      <div className="navbar-right">
        <span>🐙</span>
        <span>💬</span>
        <span>📷</span>
        <span>🐦</span>
      </div>

      {/* botão mobile */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  )
}

export default NavBar
