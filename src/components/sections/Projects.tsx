import React from 'react'
import type { Project } from '../../types/resume'

interface ProjectsProps {
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="space-y-6">
      <section className="section-header">
        <h2>Projects</h2>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="card-hover slide-up flex flex-col justify-between"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="space-y-3">
              <h3 className="font-semibold text-base">{project.title}</h3>
              <p className="text-sm text-content-muted dark:text-content-dark-muted leading-relaxed whitespace-pre-line">
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-content dark:text-content-inverse">Highlights</h4>
                  <ul className="text-xs text-content-muted dark:text-content-dark-muted list-disc pl-4 space-y-0.5">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-border dark:border-border-dark space-y-3">
              {project.skills && project.skills.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {project.skills.map(skill => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Only render links if they are provided and are not 'about:blank' */}
              {((project.link && project.link !== 'about:blank') || (project.github && project.github !== 'about:blank')) && (
                <div className="flex gap-3 text-xs font-semibold pt-1">
                  {project.link && project.link !== 'about:blank' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline flex items-center gap-0.5"
                    >
                      Demo ↗
                    </a>
                  )}
                  {project.github && project.github !== 'about:blank' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-content hover:underline dark:text-content-inverse flex items-center gap-0.5"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
