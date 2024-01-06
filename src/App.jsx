import './App.css'
import About from './components/About.jsx'
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'

function App() {

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Intro */}
      <Intro />
      {/* About */}
      <About/>
    </div>
  )
}

export default App
