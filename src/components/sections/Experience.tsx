import React from 'react'
import type { Experience as ExperienceType } from '../../types/resume'

interface ExperienceProps {
  experiences: ExperienceType[]
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  // Robust date parser to handle "Month Year" format cleanly across environments
  const parseJobDate = (dateStr: string | null | undefined): Date => {
    if (!dateStr) return new Date()
    const parts = dateStr.trim().split(/\s+/)
    if (parts.length === 2) {
      const monthStr = parts[0].toLowerCase()
      const year = parseInt(parts[1], 10)
      const months = [
        'january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december'
      ]
      const monthIdx = months.indexOf(monthStr)
      if (monthIdx !== -1 && !isNaN(year)) {
        return new Date(year, monthIdx, 1)
      }
    }
    const parsed = new Date(dateStr)
    return isNaN(parsed.getTime()) ? new Date(0) : parsed
  }

  // Sort experiences:
  // 1. Prioritize current job (endDate === null)
  // 2. Sort remaining ended jobs by startDate descending (newest on top)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const aIsCurrent = a.endDate === null
    const bIsCurrent = b.endDate === null
    
    if (aIsCurrent && !bIsCurrent) return -1
    if (!aIsCurrent && bIsCurrent) return 1
    
    const dateA = parseJobDate(a.startDate)
    const dateB = parseJobDate(b.startDate)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <div className="space-y-6">
      <section className="section-header">
        <h2>Experience</h2>
      </section>

      <div className="relative border-l border-border dark:border-border-dark ml-3 pl-6 space-y-8">
        {sortedExperiences.map((exp, index) => {
          return (
            <div 
              key={exp.id} 
              className="relative slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Dot indicator */}
              <span className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-surface dark:border-surface-dark transition-colors duration-200 ${
                exp.endDate === null ? 'bg-accent' : 'bg-border dark:bg-border-dark'
              }`} />

              <div className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex items-start gap-3">
                    <img
                      src={`/${exp.id}_logo.jpeg`}
                      alt={`${exp.company} Logo`}
                      className="w-12 h-12 rounded-lg object-cover border border-border dark:border-border-dark flex-shrink-0 bg-white"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div>
                      <h3 className="font-semibold text-base flex flex-wrap items-center gap-2">
                        <span>{exp.position}</span>
                        {exp.employmentType && (
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-content-muted dark:text-content-dark-muted px-2 py-0.5 bg-background dark:bg-background-dark rounded-md border border-border dark:border-border-dark">
                            {exp.employmentType}
                          </span>
                        )}
                      </h3>
                      <p className="text-sm font-medium text-accent">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-xs text-content-muted dark:text-content-dark-muted font-medium md:text-right md:pt-1">
                    <span>{exp.startDate} — {exp.endDate || 'Present'}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border dark:border-border-dark space-y-4 text-sm">
                  <p className="text-content-muted dark:text-content-dark-muted leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-content dark:text-content-inverse text-xs uppercase tracking-wider">Skills</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map(skill => (
                          <span key={skill} className="badge" style={{ textTransform: 'none' }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
