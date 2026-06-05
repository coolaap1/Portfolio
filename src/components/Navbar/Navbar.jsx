import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar" aria-label="Primary">
      <a className="logo" href="#home" aria-label="Go to home">
        Steff Dierckx
      </a>

      <nav className="NavButtonContainer" aria-label="Navigation">
        <a className="NavButton" href="#home">
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
      </nav>
    </header>
  )
}