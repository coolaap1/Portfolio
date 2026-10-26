import { useEffect, useMemo, useRef, useState } from 'react'
import DuffaloLogo from '../../assets/DuffaloLogo.png'
import trackle from '../../assets/trackle.png'
import tournament from '../../assets/tournamentbot.png'
import './Projects.css'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const closeButtonRef = useRef(null)

  const projects = useMemo(
    () => [
      {
        id: 'duffalo',
        title: 'Web App Duffalo',
        description:
          'In this project, we created a web application for a fictional football club called Duffalo. The app allows users to view the team roster, register for a season, and import match data from an external source.',
        tags: ['C#', 'SQL', 'HTML/CSS/JS'],
        image: DuffaloLogo,
        imageAlt: 'Duffalo project',
        details: {
          course: 'Details coming soon',
          contributions: 'A placeholder for the final project story and my contribution.',
        },
      },
      {
        id: 'Trackle',
        title: 'Trackle',
        description: 'A project to implement live speech to text translation using a microphone and a self-trained ai model.',
        tags: ['C#', 'WebSocket','MongoDB'],
        image: trackle,
        imageAlt: 'Trackle project',
        details: {
          course: 'Details coming soon',
          contributions: 'A placeholder for the final project story and my contribution.',
        },
      },
      {
        id: 'Tournament-Bot',
        title: 'Tournament Bot',
        description: 'A ai agent to manage and automate TCG tournaments using ai and microsoft teams cards.',
        tags: ['C#', 'OpenAI API', 'Microsoft Teams'],
        image: tournament,
        imageAlt: 'Tournament Bot project',
        details: {
          course: 'Details coming soon',
          contributions: 'A placeholder for the final project story and my contribution.',
        },
      },
    ],
    []
  )

  useEffect(() => {
    if (!selectedProject) return undefined

    closeButtonRef.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const openProject = (project) => setSelectedProject(project)

  return (
    <>
      <div className="Skills ProjectsSection" aria-label="Projects">
        <div className="ProjectsIntro">
          <p className="Eyebrow">Selected work</p>
          <h2 className="ProjectsTitle">Projects</h2>
          <p className="ProjectsSubtitle">
            A few things I have built, explored, and learned from. Click a project to see more.
          </p>
        </div>
        <div className="ProjectsCards" role="list" aria-label="Project cards">
          {projects.map((project) => (
            <article
              key={project.id}
              className="ProjectCard"
              role="listitem"
              aria-label={`${project.title} (open project details)`}
              tabIndex={0}
              onClick={() => openProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openProject(project)
                }
              }}
            >
              <div className="ProjectCardImageWrap">
                <img className="ProjectCardImage" src={project.image} alt={project.imageAlt} />
                <span className="ProjectCardAction">View project <span aria-hidden="true">↗</span></span>
              </div>
              <div className="ProjectCardContent">
                <p className="ProjectCardKicker">Featured project</p>
                <h3 className="ProjectCardTitle">{project.title}</h3>
              <p className="ProjectCardDescription">{project.description}</p>
              </div>
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

      {selectedProject && (
        <div
          className="ProjectModalOverlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null)
          }}
        >
          <div
            className="ProjectModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="ProjectModalHeader">
              <div>
                <p className="ProjectCardKicker">Project details</p>
                <h2 className="ProjectModalTitle" id="project-modal-title">{selectedProject.title}</h2>
              </div>
              <button
                ref={closeButtonRef}
                className="ProjectModalClose"
                type="button"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>
            <img className="ProjectModalImage" src={selectedProject.image} alt="" />
            <p className="ProjectModalDescription">{selectedProject.description}</p>
            <div className="ProjectModalDetails" aria-label="Extra information">
              <p className="ProjectModalDetail"><strong>Course:</strong> {selectedProject.details.course}</p>
              <p className="ProjectModalDetail"><strong>My contribution:</strong> {selectedProject.details.contributions}</p>
            </div>
            <div className="ProjectTags" role="list" aria-label="Technologies used">
              {selectedProject.tags.map((tag) => <span key={tag} className="ProjectTag" role="listitem">{tag}</span>)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
