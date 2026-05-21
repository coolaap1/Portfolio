import './App.css'
import Navbar from './components/Navbar/Navbar'
import Wave from './components/Wave/Wave'
import Avatar from "./assets/Avatar.png"

function App() {

  const Coreskills = ['C# (ASP.NET)', 'HTML / CSS / JavaScript', 'React' , 'SQL']
  const KnownTools = ['Git', 'Visual Studio', 'Visual Studio Code', 'Figma']
  return (
    <>
    <Navbar />
    <div className="Body">
    <header className="Hero">
      <div className="HeroInner">
        <div className="HeroAvatar" aria-hidden="true"> 
          <img src={Avatar} alt="Avatar of Steff Dierckx" className="HeroAvatarImage" />
          </div> 
        <div className="HeroTextBox">
          <p className="HeroTextBoxTitle">about myself:</p>
          <p className="HeroTextBoxBody">Hello, my name is Steff Dierckx. I am 20 years old and currently a third-year Application Development student at Thomas More in Geel. In my free time, I enjoy both gaming and working on various craft projects. I’m naturally a curious person, and that curiosity strongly influences the way I approach coding. It shows in the number of programming languages I’ve explored, as well as in my habit of never simply copying code. I always take the time to understand what I’m writing what it does, why it works, and how each part contributes to the final result.</p>
        </div>
      </div>
    </header>
    <Wave />

    <section className="Skills" aria-label="Skills">
      <div className="SkillsCube">
        <p className="SkillsTitle">Core skills</p>
        <div className="SkillsPills" role="list">
          {Coreskills.map((Coreskill) => (
            <span key={Coreskill} className="SkillPill" role="listitem">{Coreskill}</span>
          ))}
        </div>
        <p className="SkillsTitle">Known tools</p>
        <div className="SkillsPills" role="list">
          {KnownTools.map((Tool) => (
            <span key={Tool} className="SkillPill" role="listitem">{Tool}</span>
          ))}
        </div>

      <div className="CVReference">
          <p >Want to learn more about me? My full CV is just one click away.</p>
          <a className="CVReferencebutton" href="/cv" aria-label="Go to CV page">→</a>
          </div>

      </div>
    </section>



    </div> 
        
    </>
  )
}

export default App
