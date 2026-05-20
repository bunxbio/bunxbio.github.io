import React, { useState, useEffect } from 'react'
import resumeData from '../data/resume.json'
import type { Resume, SectionType } from '../types/resume'
import ThemeToggle from './ThemeToggle'
import SectionNav from './SectionNav'
import ContentArea from './ContentArea'

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [activeSection, setActiveSection] = useState<SectionType>('about')
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      setTheme('light')
      applyTheme('light')
    }
  }, [])

  const applyTheme = (selectedTheme: 'light' | 'dark') => {
    if (selectedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  const data: Resume = resumeData as Resume

  return (
    <div className="min-h-screen bg-surface dark:bg-surface-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">

          {/* Sidebar Resume Info */}
          <aside className="w-full md:w-64 lg:w-72 md:sticky md:top-8 flex-shrink-0 space-y-6">
            <div className="card space-y-6">

              {/* Profile Image & Header Text */}
              <div className="flex flex-col items-center text-center gap-4">
                {data.about.profileImage && (
                  <img
                    src={data.about.profileImage}
                    alt={data.about.fullName}
                    className="w-36 h-36 md:w-52 md:h-52 rounded-full object-cover border border-border dark:border-border-dark shadow-sm flex-shrink-0"
                  />
                )}
                <div className="space-y-1">
                  <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-content dark:text-content-inverse leading-tight mb-1">
                    {data.about.fullName}
                  </h1>
                  <p className="text-sm font-semibold text-accent leading-none">
                    {data.about.title}
                  </p>
                </div>
              </div>

              {/* Contact Info list (toggleable drop down on mobile/portrait) */}
              <div className="border-t border-border dark:border-border-dark pt-4">
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-content-muted dark:text-content-dark-muted hover:text-content dark:hover:text-content-inverse md:pointer-events-none focus:outline-none"
                >
                  <span className="uppercase tracking-wider">Contact Info</span>
                  <span className="md:hidden transition-transform duration-200 text-[10px]">
                    {isContactOpen ? '▲' : '▼'}
                  </span>
                </button>

                <div className={`mt-3 space-y-2.5 text-xs text-content-muted dark:text-content-dark-muted font-medium ${
                  isContactOpen ? 'block' : 'hidden md:block'
                }`}>
                  {data.contact.email && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-4 flex-shrink-0">✉️</span>
                      <a href={`mailto:${data.contact.email}`} className="hover:underline truncate block">
                        {data.contact.email}
                      </a>
                    </div>
                  )}
                  {data.contact.phone && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-4 flex-shrink-0">📱</span>
                      <a href={`tel:${data.contact.phone}`} className="hover:underline">
                        {data.contact.phone}
                      </a>
                    </div>
                  )}
                  {data.contact.location && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-4 flex-shrink-0">📍</span>
                      <span>{data.contact.location}</span>
                    </div>
                  )}
                  {data.contact.github && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-4 flex-shrink-0">💻</span>
                      <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub Profile
                      </a>
                    </div>
                  )}
                  {data.contact.linkedin && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-4 flex-shrink-0">🔗</span>
                      <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        LinkedIn Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Theme Selector */}
              <div className="border-t border-border dark:border-border-dark pt-4 flex justify-between items-center">
                <span className="text-xs text-content-muted dark:text-content-dark-muted font-semibold">Mode</span>
                <ThemeToggle theme={theme} onToggle={toggleTheme} />
              </div>

            </div>

            {/* Sidebar Navigation Menu (Desktop only) */}
            <div className="hidden md:block">
              <SectionNav activeSection={activeSection} onSectionChange={setActiveSection} vertical={true} />
            </div>
          </aside>

          {/* Main Content Pane */}
          <div className="flex-1 w-full space-y-6">
            {/* Mobile Tab Navigation */}
            <div className="md:hidden">
              <SectionNav activeSection={activeSection} onSectionChange={setActiveSection} vertical={false} />
            </div>

            <main>
              <ContentArea section={activeSection} data={data} />
            </main>

            {/* Footer */}
            <footer className="pt-8 border-t border-border dark:border-border-dark text-center md:text-left">
              <p className="text-xs text-content-muted dark:text-content-dark-muted">
                © {new Date().getFullYear()} {data.about.fullName}. All rights reserved.
              </p>
            </footer>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
