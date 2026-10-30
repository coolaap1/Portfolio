import './Navbar.css';

const siteBase = window.location.hostname.endsWith('.github.io') ? '/Portfolio/' : '/'
const personalPath = `${siteBase}personal`

export default function Navbar() {
  return (
    <header className="navbar" aria-label="Primary">
      <a className="logo" href="#home" aria-label="Go to home">
        <span className="LogoMark">S</span>
        <span>Steff Dierckx</span>
      </a>

      <nav className="NavButtonContainer" aria-label="Navigation">
        <a className="NavButton NavButtonActive" href="#home">
          Home
        </a>
        <a className="NavButton" href="#about">
          About me
        </a>
        <a className="NavButton" href="#projects">
          Projects
        </a>
        <a className="NavButton" href="#internship">
          Internship
        </a>
        <a className="PersonalCornerLink" href={personalPath}>
          Personal corner
        </a>
      </nav>
    </header>
  )
}