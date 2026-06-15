import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const closeAfterSeconds = 8
const welcomeVisitKey = 'portfolio-welcome-visit-count'
const firstVisitMessage = {
  title: 'Oh hey, you made it.',
  body: 'Thanks for dropping by. Take a comfy look around, I saved the good stuff for you.',
}
const returnMessages = [
  {
    title: 'Welcome back, legend.',
    body: 'Round two? I respect the curiosity. The portfolio is still looking sharp for you.',
  },
  {
    title: 'You refreshed. I noticed.',
    body: 'No worries, I also like checking if things still look good after one more reload.',
  },
  {
    title: 'Still here? I like that.',
    body: 'Feel free to wander around. The projects section has been waiting patiently.',
  },
  {
    title: 'Back again, nice.',
    body: 'Tiny refresh, fresh vibes. Everything is ready whenever you are.',
  },
  {
    title: 'Okay, now we are regulars.',
    body: 'Thanks for visiting again. I will keep this quick so you can get to the good parts.',
  },
]

const getWelcomeMessage = () => {
  const currentVisitCount = Number(window.localStorage.getItem(welcomeVisitKey) || '0')
  const nextVisitCount = currentVisitCount + 1

  window.localStorage.setItem(welcomeVisitKey, String(nextVisitCount))

  if (nextVisitCount === 1) return firstVisitMessage

  return returnMessages[(nextVisitCount - 2) % returnMessages.length]
}

function WelcomeBubble() {
  const bubbleRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(closeAfterSeconds)
  const [welcomeMessage, setWelcomeMessage] = useState(firstVisitMessage)

  const closeBubble = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    setWelcomeMessage(getWelcomeMessage())

    const showTimer = window.setTimeout(() => setIsVisible(true), 1900)

    return () => window.clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!isVisible) return undefined

    const closeAfterLanding = () => {
      const aboutSection = document.getElementById('about')
      const bubble = bubbleRef.current

      if (!aboutSection || !bubble) return

      const aboutTop = aboutSection.getBoundingClientRect().top
      const bubbleBottom = bubble.getBoundingClientRect().bottom

      if (bubbleBottom >= aboutTop) {
        setIsVisible(false)
      }
    }

    closeAfterLanding()
    window.addEventListener('scroll', closeAfterLanding, { passive: true })
    window.addEventListener('resize', closeAfterLanding)

    const countdownTimer = window.setInterval(() => {
      setSecondsLeft((currentSecond) => {
        if (currentSecond <= 1) {
          setIsVisible(false)
          return 0
        }

        return currentSecond - 1
      })
    }, 1000)

    return () => {
      window.clearInterval(countdownTimer)
      window.removeEventListener('scroll', closeAfterLanding)
      window.removeEventListener('resize', closeAfterLanding)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <aside ref={bubbleRef} className="welcome-bubble" aria-live="polite" aria-label="Welcome message">
      <div className="welcome-bubble-icon" aria-hidden="true">
        <MessageCircle className="h-5 w-5" />
      </div>
      <div className="welcome-bubble-copy">
        <strong>{welcomeMessage.title}</strong>
        <p>{welcomeMessage.body}</p>
        <small>Closing automatically in {secondsLeft}s</small>
      </div>
      <button type="button" className="welcome-bubble-close" aria-label="Close welcome message" onClick={closeBubble}>
        <X className="h-4 w-4" />
      </button>
    </aside>
  )
}

export default WelcomeBubble
