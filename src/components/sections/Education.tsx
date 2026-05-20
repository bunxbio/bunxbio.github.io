import React from 'react'
import type { Education as EducationType } from '../../types/resume'

interface EducationProps {
  education: EducationType[]
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="space-y-6">
      <section className="section-header">
        <h2>Education</h2>
      </section>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div 
            key={edu.id} 
            className="card slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex items-start gap-3">
                <img
                  src={`/${edu.id}_logo.jpeg`}
                  alt={`${edu.school} Logo`}
                  className="w-12 h-12 rounded-lg object-cover border border-border dark:border-border-dark flex-shrink-0 bg-white"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="font-semibold text-base">{edu.degree}</h3>
                  <p className="text-sm font-medium text-accent">{edu.school}</p>
                  <p className="text-xs text-content-muted dark:text-content-dark-muted mt-0.5">
                    {edu.fieldOfStudy}
                  </p>
                </div>
              </div>
              <div className="text-xs text-content-muted dark:text-content-dark-muted font-medium md:text-right md:pt-1">
                <p>Graduated: {edu.graduationDate}</p>
                {edu.gpa && <p className="mt-0.5 font-semibold text-accent">GPA: {edu.gpa}</p>}
              </div>
            </div>

            {edu.details && (
              <p className="text-xs text-content-muted dark:text-content-dark-muted mt-3 pt-3 border-t border-border dark:border-border-dark leading-relaxed whitespace-pre-line">
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
