import { useEffect, useMemo, useState } from 'react'
import DuffaloLogo from '../../assets/DuffaloLogo.png'
import HeroImage from '../../assets/hero.png'
import trackle from '../../assets/trackle.png'
import tournament from '../../assets/tournamentbot.png'
import './Projects.css'

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        id: 'duffalo',
        title: 'Web App Duffalo',
        description:
          'in this project, we created a web application for a fictional football club called Duffalo. The app allows users to view the team roster, register for a season, and import match data from an external source.',
        tags: ['C#', 'SQL', 'HTML/CSS/JS'],
        image: DuffaloLogo,
        imageAlt: 'Duffalo project',
        details: {
          course: 'Skills Integration Lab 2 (2nd semester)',
          contributions: 'Selection page, register season page, import matches functionality',
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
          course: 'Skills Integration Lab 3',
          contributions: 'Backend , WebSocket implementation, database design and integration',
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
          course: 'AI.Net',
          contributions: 'api and bot development, database design and integration',
        },
      },
    ],
    []
  )


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
              <div className="ProjectModalDetails" aria-label="Extra information">
              <p className="ProjectModalDetail">
                <strong>Course:</strong> {project.details.course}
              </p>
            
              <p className="ProjectModalDetail">
                <strong>Contributions:</strong> {project.details.contributions}
              </p>
            </div>
            </article>
          ))}
        </div>
      </div>

    </>
  )
}
