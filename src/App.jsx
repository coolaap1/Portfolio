import './App.css'
import Navbar from './components/Navbar/Navbar'
import Wave from './components/Wave/Wave'

function App() {

  return (
    <>
    <Navbar />
    <div className="Body">
    <header className="Hero">
      <div className="HeroInner">
        <div className="HeroAvatar" aria-hidden="true" />
        <div className="HeroTextBox">
          <p className="HeroTextBoxTitle">Your Name</p>
          <p className="HeroTextBoxBody">Short intro / tagline goes here.</p>
        </div>
      </div>
    </header>
    <Wave />

    </div> 
        
    </>
  )
}

export default App
