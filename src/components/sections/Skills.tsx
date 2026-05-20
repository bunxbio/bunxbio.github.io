import React from 'react'
import type { Skill } from '../../types/resume'

interface SkillsProps {
  skills: Skill[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="space-y-6">
      <section className="section-header">
        <h2>Skills</h2>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div 
            key={skillGroup.category} 
            className="card slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold">{skillGroup.category}</h3>
              {skillGroup.proficiency && (
                <span className="badge-accent">
                  {skillGroup.proficiency}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map(skill => (
                <span
                  key={skill}
                  className="badge"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-surface-muted dark:bg-surface-dark-muted border-border dark:border-border-dark">
        <h3 className="mb-2 text-base font-semibold">Additional Competencies</h3>
        <p className="text-sm leading-relaxed text-content-muted dark:text-content-dark-muted">
          Beyond technical capabilities, I place heavy emphasis on strong problem-solving logic, effective asynchronous communication, and continuous self-learning. I thrive in highly collaborative environments and prioritize clean, maintainable systems.
        </p>
      </div>
    </div>
  )
}

export default Skills
