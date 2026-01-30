import Gradient1 from './assets/Gradient1.png'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'


function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <img src={Gradient1} alt="Gradient" className="gradient" />
    </div>
  )
}

export default App
