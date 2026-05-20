import React from 'react'
import type { About as AboutType } from '../../types/resume'

interface AboutProps {
  about: AboutType
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <div className="space-y-6">
      <section className="section-header">
        <h2>About Me</h2>
      </section>

      <div className="card slide-up" style={{ animationDelay: '0ms' }}>
        <p className="text-base leading-relaxed text-content dark:text-content-inverse">
          {about.summary}
        </p>
      </div>

      <div className="card slide-up" style={{ animationDelay: '100ms' }}>
        <h3 className="mb-4 text-base font-semibold">Quick Facts</h3>
        <ul className="space-y-2 text-sm text-content-muted dark:text-content-dark-muted">
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Software Developer</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>4+ Years Experience</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Experienced in data extraction and cleaning</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent">•</span>
            <span>Proficient in Ruby and Python</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
