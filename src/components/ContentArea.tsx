import React from 'react'
import type { Resume, SectionType } from '../types/resume'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'

interface ContentAreaProps {
  section: SectionType
  data: Resume
}

const ContentArea: React.FC<ContentAreaProps> = ({ section, data }) => {
  const renderSection = () => {
    switch (section) {
      case 'about':
        return <About about={data.about} />
      case 'experience':
        return <Experience experiences={data.experience} />
      case 'skills':
        return <Skills skills={data.skills} />
      case 'education':
        return <Education education={data.education} />
      case 'projects':
        return <Projects projects={data.projects} />
      case 'certifications':
        return <Certifications certifications={data.certifications} />
      default:
        return null
    }
  }

  return (
    <main key={section} className="min-h-[24rem] slide-up">
      {renderSection()}
    </main>
  )
}

export default ContentArea
