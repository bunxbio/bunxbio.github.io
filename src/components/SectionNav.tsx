import React from 'react'
import type { SectionType } from '../types/resume'

interface SectionNavProps {
  activeSection: SectionType
  onSectionChange: (section: SectionType) => void
  vertical?: boolean
}

const sections: { id: SectionType; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
]

const SectionNav: React.FC<SectionNavProps> = ({ activeSection, onSectionChange, vertical = false }) => {
  if (vertical) {
    return (
      <nav className="space-y-1">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full text-left px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
              activeSection === section.id
                ? 'bg-accent text-white'
                : 'text-content-muted dark:text-content-dark-muted hover:text-content dark:hover:text-content-inverse hover:bg-surface-muted dark:hover:bg-surface-dark-muted'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    )
  }

  return (
    <nav className="mb-6 sticky top-0 z-10 -mx-4 px-4 py-3 bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-border dark:border-border-dark md:hidden">
      <div className="flex flex-wrap gap-1 justify-center">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
              activeSection === section.id
                ? 'bg-accent text-white'
                : 'text-content-muted dark:text-content-dark-muted hover:text-content dark:hover:text-content-inverse hover:bg-surface-muted dark:hover:bg-surface-dark-muted'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default SectionNav
