import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingBackToTop from './components/FloatingBackToTop'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Landing from './sections/Landing'
import Projects from './sections/Projects'
import WelcomeBubble from './components/WelcomeBubble'
import { useScrollReveal } from './hooks/useScrollReveal'

const loadingMessages = [
  "Wait for me, don't leave yet.",
  'Polishing the pixels real quick.',
  'Making the portfolio behave nicely.',
  'Almost there, good vibes loading.',
]

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0)

  useScrollReveal()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  useEffect(() => {
    if (document.readyState === 'complete') return undefined

    let isPageReady = false

    const finishLoading = () => {
      isPageReady = true
      setIsLoading(false)
    }

    const showLoadingTimer = window.setTimeout(() => {
      if (!isPageReady) setIsLoading(true)
    }, 650)

    const fallbackTimer = window.setTimeout(finishLoading, 6000)

    window.addEventListener('load', finishLoading, { once: true })

    return () => {
      window.clearTimeout(showLoadingTimer)
      window.clearTimeout(fallbackTimer)
      window.removeEventListener('load', finishLoading)
    }
  }, [])

  useEffect(() => {
    if (!isLoading) return undefined

    const messageTimer = window.setInterval(() => {
      setLoadingMessageIndex((index) => (index + 1) % loadingMessages.length)
    }, 450)

    return () => window.clearInterval(messageTimer)
  }, [isLoading])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f9fc] text-slate-900">
      {isLoading && (
        <div className="skeleton-screen" aria-label="Loading portfolio" aria-live="polite">
          <div className="skeleton-shell">
            <span className="loader-kicker">Loading Portfolio</span>
            <p className="loader-message">{loadingMessages[loadingMessageIndex]}</p>
            <div className="loader-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}
      <Header />
      <main>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WelcomeBubble />
      <FloatingBackToTop />
    </div>
  )
}

export default App
