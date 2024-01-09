import './App.css'
import About from './components/About.jsx'
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'

function App() {

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Intro */}
      <Intro />
      {/* About */}
      <About />
      {/* Skills */}
      <Skills />
      {/* Projects Component */}
      <Project />
    </div>
  )
}

export default App
