import React from 'react'
import type { Certification } from '../../types/resume'

interface CertificationsProps {
  certifications: Certification[]
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  // Robust date parser to handle "Month Year" format cleanly across environments
  const parseCertDate = (dateStr: string): Date => {
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

  // Sort certifications: newest on top, oldest on the bottom
  const sortedCertifications = [...certifications].sort((a, b) => {
    return parseCertDate(b.issueDate).getTime() - parseCertDate(a.issueDate).getTime()
  })

  return (
    <div className="space-y-6">
      <section className="section-header">
        <h2>Certifications</h2>
      </section>

      <div className="space-y-4">
        {sortedCertifications.map((cert, index) => (
          <div 
            key={cert.id} 
            className="card-hover slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
              <div>
                <h3 className="font-semibold text-base">{cert.name}</h3>
                <p className="text-sm font-medium text-accent">{cert.issuer}</p>
              </div>
              <div className="text-xs text-content-muted dark:text-content-dark-muted font-medium md:text-right">
                <p>Issued: {cert.issueDate}</p>
                {cert.expirationDate && (
                  <p className="mt-0.5">Expires: {cert.expirationDate}</p>
                )}
              </div>
            </div>

            {cert.skills && cert.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cert.skills.map(skill => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {(cert.credentialId || cert.credentialUrl) && (
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border dark:border-border-dark text-xs">
                {cert.credentialId && (
                  <span className="text-content-muted dark:text-content-dark-muted font-mono">
                    ID: {cert.credentialId}
                  </span>
                )}
                {cert.credentialId && cert.credentialUrl && (
                  <span className="text-border dark:text-border-dark">|</span>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-semibold"
                  >
                    Show Credential ↗
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
