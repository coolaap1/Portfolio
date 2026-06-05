import './styles/shared.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import CV from './pages/CV/CV'
import Projects from './pages/Projects/Projects'
import Internship from './pages/Internship/Internship'

function App() {
  return (
    <>
      <Navbar />
      <main className="Body">
        <section id="home" className="PageSection" aria-label="Home">
          <Home />
        </section>

        <section id="about" className="PageSection" aria-label="About me">
          <CV />
        </section>

        <section id="projects" className="PageSection" aria-label="Projects">
          <Projects />
        </section>

        <section id="internship" className="PageSection" aria-label="Internship">
          <Internship />
        </section>
      </main>

      <Footer />
        
    </>
  )
}

export default App
