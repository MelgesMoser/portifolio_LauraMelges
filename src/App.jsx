import Gradient1 from './assets/Gradient1.png'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="app">
      <NavBar />
      <img src={Gradient1} alt="Gradient" className="gradient" />
    </div>
  )
}

export default App
