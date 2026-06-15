import { useEffect, useRef, useState } from 'react'

const gridSize = 40
const snakeCount = 8
const rotatingLandingWords = ['web apps', 'dashboards', 'business systems', 'digital experiences']

const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)]

const createSnakePath = (width, height) => {
  const columns = Math.max(4, Math.floor(width / gridSize))
  const rows = Math.max(4, Math.floor(height / gridSize))
  const startFromHorizontalEdge = Math.random() > 0.5
  let column = startFromHorizontalEdge ? Math.floor(Math.random() * columns) : getRandomItem([0, columns])
  let row = startFromHorizontalEdge ? getRandomItem([0, rows]) : Math.floor(Math.random() * rows)
  let previousDirection = null
  const points = [[column * gridSize, row * gridSize]]
  const directions = [
    { column: 1, row: 0, name: 'right', opposite: 'left' },
    { column: -1, row: 0, name: 'left', opposite: 'right' },
    { column: 0, row: 1, name: 'down', opposite: 'up' },
    { column: 0, row: -1, name: 'up', opposite: 'down' },
  ]

  Array.from({ length: 5 + Math.floor(Math.random() * 4) }).forEach(() => {
    const availableDirections = directions.filter((direction) => direction.name !== previousDirection?.opposite)
    const direction = getRandomItem(availableDirections)
    const distance = 1 + Math.floor(Math.random() * 4)

    column = Math.min(columns, Math.max(0, column + direction.column * distance))
    row = Math.min(rows, Math.max(0, row + direction.row * distance))
    previousDirection = direction
    points.push([column * gridSize, row * gridSize])
  })

  return points.map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ')
}

function Landing() {
  const cursorRafRef = useRef(null)
  const [snakePaths, setSnakePaths] = useState([])
  const [rotatingWordIndex, setRotatingWordIndex] = useState(0)

  useEffect(() => {
    const updateSnakePaths = () => {
      setSnakePaths(
        Array.from({ length: snakeCount }, (_, index) => ({
          id: `${Date.now()}-${index}`,
          d: createSnakePath(window.innerWidth, window.innerHeight),
          duration: `${5 + Math.random() * 4}s`,
          delay: `${Math.random() * -5}s`,
        })),
      )
    }

    updateSnakePaths()
    const pathTimer = window.setInterval(updateSnakePaths, 4200)
    window.addEventListener('resize', updateSnakePaths)

    return () => {
      window.clearInterval(pathTimer)
      window.removeEventListener('resize', updateSnakePaths)
    }
  }, [])

  useEffect(() => {
    const wordTimer = window.setInterval(() => {
      setRotatingWordIndex((index) => (index + 1) % rotatingLandingWords.length)
    }, 2200)

    return () => window.clearInterval(wordTimer)
  }, [])

  useEffect(() => () => {
    if (cursorRafRef.current) {
      window.cancelAnimationFrame(cursorRafRef.current)
    }
  }, [])

  const resetCursor = (event) => {
    event.currentTarget.style.setProperty('--cursor-x', '-20rem')
    event.currentTarget.style.setProperty('--cursor-y', '-20rem')
  }

  const handlePointerMove = (event) => {
    const section = event.currentTarget
    const sectionRect = section.getBoundingClientRect()
    const pointerX = event.clientX - sectionRect.left
    const pointerY = event.clientY - sectionRect.top

    if (cursorRafRef.current) {
      window.cancelAnimationFrame(cursorRafRef.current)
    }

    cursorRafRef.current = window.requestAnimationFrame(() => {
      section.style.setProperty('--cursor-x', `${pointerX}px`)
      section.style.setProperty('--cursor-y', `${pointerY}px`)
    })
  }

  return (
    <section
      id="home"
      className="landing-layout"
      aria-label="Landing section"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCursor}
    >
      <div className="landing-grid-bg" />
      <div className="landing-cursor-field" aria-hidden="true" />
      <svg className="landing-data-trails" aria-hidden="true">
        {snakePaths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            pathLength="1"
            style={{
              animationDuration: path.duration,
              animationDelay: path.delay,
            }}
          />
        ))}
      </svg>
      <div className="landing-grid-fade" />
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
