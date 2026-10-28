import { useEffect, useMemo, useRef, useState } from 'react'
import trackle from '../../assets/trackle.png'
import arduino from '../../assets/arduino.png'
import alarmcentrale from '../../assets/alarmcentrale-logo.png'
import './Projects.css'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const closeButtonRef = useRef(null)

  const projects = useMemo(
    () => [

      {
        id: 'Trackle',
        title: 'Trackle',
        description: 'A project to implement live speech to text translation using a microphone and a self-trained ai model.',
        tags: ['C#', 'WebSocket','MongoDB'],
        image: trackle,
        imageAlt: 'Trackle project',
        details: {
          detailedDescription: 'this project was a group project with a total of 6 people where 2 were ai, 2ccs and 2 application developers. the project was to create a live speech to text translation application using a microphone and a self-trained ai model. the application was built using C# and WebSocket for the backend and MongoDB for the database.',
          course: 'Skill Integration 3 -> external client project',
          contributions: 'the project was a team effort of 6 people where I was responsible for the backend development.',
        },
      },
            {
        id: 'Koelkast applicatie',
        title: 'koelkast applicatie',
        description:
          'a project to simulate the opening and closing of a fridge',
        tags: ['arduino', 'iot'],
        image: arduino,
        imageAlt: 'Arduino project',
        details: {
          detailedDescription: 'in this project i was asked to write software to control 2 pistons that would simulate the real motions a human would use to apen a fridge so that my client could test the fridge in a closed environment the application was written in c++ with a arduino as the main controller. The dashboard was per the clients asks made with arduino cloud and visible to them',
        },
      },
      {
        id: 'AlarmCentrale',
        title: 'AlarmCentrale',
        description: ' An cross platform application for an external client that manages alarms of machines',
        tags: ['flutter', 'react', 'c#', 'MYSQL'],
        image: alarmcentrale,
        imageAlt: 'AlarmCentrale project',
        details: {
          detailedDescription: 'In this project i was asked to make a cross platform application to manage and monitor the different alarms of machines that are in the whole factory. the application i built consisted of 4 "parts": a MYSQL database where the alarms came in got cleaned and then got send to the application, an api built in c# that got the alarms out of the database and send them to the application this was also responsible for the authentication using jwt token and sending notifications for the mobile phones, an admin configuration application built in react that allowed the user to configure things like users,machines and different settings for the application furthermore the web application also showed the alarms, history of alarms and what machines had problems in a visual way. the last part was a mobile application written in flutter that allowed the user to quickly see the alarms for relevant machcines and show that they were working on it it also included a checklist functionality to make sure the user did all the steps to fix the problem and could mark it as fixed.'
,
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
            <p className="ProjectModalDetailedDescription">{selectedProject.details.detailedDescription}</p>
            <div className="ProjectModalDetails" aria-label="Extra information">
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
