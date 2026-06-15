import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

function FloatingBackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const handleBackToTop = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }

  useEffect(() => {
    const updateVisibility = () => {
      const aboutSection = document.getElementById('about')

      if (!aboutSection) {
        setIsVisible(false)
        return
      }

      setIsVisible(aboutSection.getBoundingClientRect().top <= window.innerHeight * 0.35)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  return (
    <a className={`back-to-top-button floating-back-to-top ${isVisible ? 'is-visible' : ''}`} href="#top" aria-label="Back to top" onClick={handleBackToTop}>
      <ChevronUp className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
      <span>Back to top</span>
    </a>
  )
}

export default FloatingBackToTop
