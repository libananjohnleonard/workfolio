import { useState } from 'react'
import { Download, Mail, Menu, X } from 'lucide-react'
import logoDefault from '../assets/images/Logo-images/Logo-default.png'
import logoHover from '../assets/images/Logo-images/Logo-hover.png'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header border-b border-slate-200 bg-white">
      <nav className="header-nav site-container" aria-label="Primary navigation">
        <a href="/" className="header-logo" aria-label="Refresh home page">
          <img src={logoDefault} alt="Portfolio logo" className="header-logo-default h-11 w-auto" />
          <img src={logoHover} alt="" className="header-logo-hover h-11 w-auto" aria-hidden="true" />
        </a>

        <div className="header-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold uppercase tracking-[0.04em] transition">
              {item.label}
            </a>
          ))}
        </div>

        <div className="header-actions">
          <a href="https://github.com/libananjohnleonard" target="_blank" rel="noreferrer" className="header-icon-button" aria-label="GitHub" data-tooltip="github.com/libananjohnleonard">
            <GitHubMark className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/johnleonardlibanan" target="_blank" rel="noreferrer" className="header-icon-button" aria-label="LinkedIn" data-tooltip="linkedin.com/in/johnleonardlibanan">
            <LinkedInMark className="h-4 w-4" />
          </a>
          <a href="mailto:johnleonardlibanan.work@gmail.com" className="header-icon-button" aria-label="Email" data-tooltip="johnleonardlibanan.work@gmail.com">
            <Mail className="h-4 w-4" />
          </a>
          <a href="/John-Leonard-Libanan-Resume.pdf" download className="header-resume-button">
            <Download className="h-4 w-4" />
            <span>Resume</span>
          </a>
          <button
            type="button"
            className="header-menu-button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <div id="mobile-navigation" className={`header-mobile-links ${isMenuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
