import { useEffect, useMemo, useState } from 'react'
import DuffaloLogo from '../../assets/DuffaloLogo.png'
import HeroImage from '../../assets/hero.png'
import CvImage from '../../assets/CV.png'
import './Projects.css'

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        id: 'duffalo',
        title: 'Web App Duffalo',
        description:
          'A continuation project where we built a web app for indoor football club De Duffalos. I worked on the selection page, register season page, and import matches functionality.',
        tags: ['C#', 'ASP.NET', 'SQL', 'HTML/CSS/JS'],
        image: DuffaloLogo,
        imageAlt: 'Duffalo project',
        details: {
          course: 'Skills Integration Lab 2 (2nd semester)',
          team: 'Daan, Nourredine, Iljas, Brent',
          what: 'Web app to streamline club processes',
          realised: 'How much work goes into a “simple” web app',
          learned: 'Collaborating in a team and delivering a working product',
          contributions: 'Selection page, register season page, import matches functionality',
        },
      },
      {
        id: 'portfolio',
        title: 'Portfolio',
        description: 'A clean one-page portfolio built with React + Vite and styled with custom CSS variables.',
        tags: ['React', 'Vite', 'CSS'],
        image: HeroImage,
        imageAlt: 'Portfolio project',
        details: {
          course: 'Personal project',
          team: 'Solo',
          what: 'Portfolio site to present my background, projects, and internship',
          realised: 'A simple structure makes content easier to scan',
          learned: 'Layout consistency and component organization',
          contributions: 'Design and implementation',
        },
      },
      {
        id: 'cv',
        title: 'CV Page',
        description: 'A dedicated CV section with a clear download button and a simple layout.',
        tags: ['React', 'Vite', 'CSS'],
        image: CvImage,
        imageAlt: 'CV project',
        details: {
          course: 'Personal project',
          team: 'Solo',
          what: 'A CV section with a PDF download and short intro',
          realised: 'Less text + clear hierarchy reads better',
          learned: 'Building a clear layout around content',
          contributions: 'Layout and asset integration',
        },
      },
    ],
    []
  )

  const [activeProjectId, setActiveProjectId] = useState(null)
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? null

  useEffect(() => {
    if (!activeProjectId) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProjectId(null)
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeProjectId])

  return (
    <>
      <div className="Skills" aria-label="Projects">
        <p className="SkillsTitle">Projects</p>
        <div className="ProjectsCards" role="list" aria-label="Project cards">
          {projects.map((project) => (
            <article
              key={project.id}
              className="ProjectCard"
              role="listitem"
              aria-label={`${project.title} (open details)`}
              tabIndex={0}
              onClick={() => setActiveProjectId(project.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActiveProjectId(project.id)
                }
              }}
            >
              <img className="ProjectCardImage" src={project.image} alt={project.imageAlt} />
              <p className="SkillsTitle">{project.title}</p>
              <p className="ProjectCardDescription">{project.description}</p>
              <div className="ProjectTags" role="list" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <span key={tag} className="ProjectTag" role="listitem">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject ? (
        <div
          className="ProjectModalOverlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProjectId(null)
          }}
        >
          <div className="ProjectModal" role="dialog" aria-modal="true" aria-label={`${activeProject.title} details`}>
            <div className="ProjectModalHeader">
              <p className="ProjectModalTitle">{activeProject.title}</p>
              <button type="button" className="ProjectModalClose" onClick={() => setActiveProjectId(null)} aria-label="Close">
                ×
              </button>
            </div>

            <img className="ProjectModalImage" src={activeProject.image} alt={activeProject.imageAlt} />

            <p className="ProjectModalDescription">{activeProject.description}</p>

            <div className="ProjectTags" role="list" aria-label="Technologies used">
              {activeProject.tags.map((tag) => (
                <span key={tag} className="ProjectTag" role="listitem">
                  {tag}
                </span>
              ))}
            </div>

            <div className="ProjectModalDetails" aria-label="Extra information">
              <p className="ProjectModalDetail">
                <strong>Course:</strong> {activeProject.details.course}
              </p>
              <p className="ProjectModalDetail">
                <strong>Team:</strong> {activeProject.details.team}
              </p>
              <p className="ProjectModalDetail">
                <strong>What:</strong> {activeProject.details.what}
              </p>
              <p className="ProjectModalDetail">
                <strong>Realised:</strong> {activeProject.details.realised}
              </p>
              <p className="ProjectModalDetail">
                <strong>Learned:</strong> {activeProject.details.learned}
              </p>
              <p className="ProjectModalDetail">
                <strong>Contributions:</strong> {activeProject.details.contributions}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
