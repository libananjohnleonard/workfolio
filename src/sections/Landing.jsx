import { useEffect, useRef, useState } from 'react'

const rotatingLandingWords = ['web apps', 'dashboards', 'business systems', 'digital experiences']

function Landing() {
  const landingRef = useRef(null)
  const vantaRef = useRef(null)
  const [rotatingWordIndex, setRotatingWordIndex] = useState(0)

  useEffect(() => {
    if (!landingRef.current || vantaRef.current) return undefined
    let isMounted = true

    Promise.all([import('three'), import('vanta/dist/vanta.clouds.min')]).then(([THREE, cloudsModule]) => {
      if (!isMounted || !landingRef.current || vantaRef.current) return

      const CLOUDS = cloudsModule.default
      vantaRef.current = CLOUDS({
        el: landingRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        skyColor: 0xecfeff,
        cloudColor: 0xffffff,
        cloudShadowColor: 0x93c5d6,
        sunColor: 0x67e8f9,
        sunGlareColor: 0xe0f2fe,
        sunlightColor: 0x0e7490,
        speed: 0.7,
      })
    })

    return () => {
      isMounted = false
      if (vantaRef.current) {
        vantaRef.current.destroy()
        vantaRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    const wordTimer = window.setInterval(() => {
      setRotatingWordIndex((index) => (index + 1) % rotatingLandingWords.length)
    }, 2200)

    return () => window.clearInterval(wordTimer)
  }, [])

  return (
    <section id="home" ref={landingRef} className="landing-layout" aria-label="Landing section">
      <div className="landing-content-wrap site-container">
        <div className="landing-content">
          <h3 className="landing-eyebrow">HELLO THERE!</h3>
          <h1>
            I'M JOHN,
            <br />
            A COMPUTER ENGINEER
            <br />
            & FULL-STACK DEVELOPER
          </h1>
          <h3 className="landing-copy">
            I turn practical ideas into polished
            <span className="landing-rotating-text" key={rotatingLandingWords[rotatingWordIndex]}>
              {rotatingLandingWords[rotatingWordIndex]}
            </span>
            <br />
            built with clean interfaces, reliable logic, and thoughtful user flows
            <br />
            using modern <span>full-stack technologies.</span>
          </h3>
          <div className="landing-actions">
            <a href="#about" className="landing-button">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
