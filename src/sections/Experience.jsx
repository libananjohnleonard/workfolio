import { useState } from 'react'
import { timeline } from '../data/portfolio'

function Experience() {
  const [activeCertificate, setActiveCertificate] = useState(null)

  return (
    <section id="experience" className="experience-section">
      <div className="site-container experience-layout" data-reveal>
        <div className="experience-copy">
          <p className="section-kicker">Experience</p>
          <h3>Where I’ve Been & What I’ve Built.</h3>
          <p>
            Roles, projects, and hands-on learning experiences that shaped how I build scalable systems, user-friendly interfaces, and practical software solutions.
          </p>
          <p>
            From academic work to personal builds, each experience has helped me grow as a developer and problem solver.
          </p>
          <a href="#contact" className="experience-message-link">
            Send a message
          </a>
        </div>

        <div className="experience-accordion" aria-label="Experience accordion">
          {timeline.map((item, index) => {
            const Icon = item.icon

            return (
              <details key={`${item.title}-${item.org}`} className="experience-accordion-item" open={index === 0}>
                <summary>
                  <span className="experience-item-icon">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <strong>
                      {item.title}
                      {item.certificates ? ` (${item.certificates.length})` : ''}
                    </strong>
                    <small>{item.org}</small>
                  </span>
                  <span className="experience-accordion-arrow" aria-hidden="true" />
                </summary>
                <div className="experience-item-body">
                  {(item.period || item.location) && (
                    <p className="experience-item-meta">
                      {[item.period, item.location].filter(Boolean).join(' | ')}
                    </p>
                  )}
                  {item.address && <p className="experience-item-address">{item.address}</p>}
                  {item.meta && <p>{item.meta}</p>}
                  {item.details && (
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  {item.certificates && (
                    <ul className="certificate-list">
                      {item.certificates.map((certificate) => (
                        <li key={certificate.title}>
                          <button type="button" onClick={() => setActiveCertificate(certificate)}>
                            <span>{certificate.title}</span>
                            <small>
                              {[certificate.issuer, certificate.date].filter(Boolean).join(' | ')}
                            </small>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            )
          })}
        </div>
      </div>

      {activeCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={activeCertificate.title}>
          <button type="button" className="certificate-modal-backdrop" onClick={() => setActiveCertificate(null)}>
            <span className="sr-only">Close certificate preview</span>
          </button>
          <div className="certificate-modal-content">
            <button type="button" className="certificate-modal-close" onClick={() => setActiveCertificate(null)}>
              Close
            </button>
            <img src={activeCertificate.image} alt={activeCertificate.title} />
            <div>
              <strong>{activeCertificate.title}</strong>
              <small>{[activeCertificate.issuer, activeCertificate.date].filter(Boolean).join(' | ')}</small>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience
