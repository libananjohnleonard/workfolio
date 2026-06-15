import { Download, Mail } from 'lucide-react'

function GitHubMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.49c-2.23.48-2.7-.95-2.7-.95-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.22.83 1.22.83.72 1.21 1.87.86 2.33.66.07-.52.28-.86.5-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.5 7.5 0 0 1 8 3.87c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

function LinkedInMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  )
}

function Contact() {
  const contactLinks = [
    { label: 'GH', href: 'https://github.com/libananjohnleonard', ariaLabel: 'GitHub', tooltip: 'github.com/libananjohnleonard' },
    { label: 'IN', href: 'https://www.linkedin.com/in/johnleonardlibanan', ariaLabel: 'LinkedIn', tooltip: 'linkedin.com/in/johnleonardlibanan' },
    {
      label: '@',
      href: 'mailto:johnleonardlibanan.work@gmail.com',
      ariaLabel: 'Email',
      tooltip: 'johnleonardlibanan.work@gmail.com',
    },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="site-container">
        <div className="contact-split" data-reveal>
          <div className="contact-split-panel">
            <p className="contact-kicker">Contact</p>
            <h3>Let&apos;s build something</h3>
            <p>
              Whether it&apos;s a portfolio, business website, dashboard, or full-stack application, I&apos;m ready to
              help transform your ideas into a polished digital experience.
            </p>
            <div className="contact-button-row">
              <a href="mailto:johnleonard.libanan@gmail.com">Start a Project</a>
              <a href="/John-Leonard-Libanan-Resume.pdf" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="contact-split-panel">
            <p className="contact-kicker">Available for Work</p>
            <h3>Let&apos;s Connect</h3>
            <p>
              Open to freelance projects, collaborations, internships, and full-time opportunities. Feel free to reach
              out through any of the platforms below.
            </p>
            <div className="contact-social-icons" aria-label="Social links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={link.ariaLabel}
                  data-tooltip={link.tooltip}
                >
                  {link.label === 'GH' && <GitHubMark className="h-5 w-5" />}
                  {link.label === 'IN' && <LinkedInMark className="h-5 w-5" />}
                  {link.label === '@' && <Mail className="h-5 w-5" aria-hidden="true" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
