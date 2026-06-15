import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/portfolio'

const visibleProjectCount = 3
const projectPageCount = Math.ceil(projects.length / visibleProjectCount)

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const swipeStartX = useRef(null)
  const swipeStartY = useRef(null)
  const activeProjectPage = Math.floor(activeProjectIndex / visibleProjectCount)
  const visibleProjectIndexes = [-1, 0, 1].map((offset) => (
    (activeProjectIndex + offset + projects.length) % projects.length
  ))

  const showPreviousProject = () => {
    setActiveProjectIndex((currentIndex) => (currentIndex === 0 ? projects.length - 1 : currentIndex - 1))
  }

  const showNextProject = () => {
    setActiveProjectIndex((currentIndex) => (currentIndex === projects.length - 1 ? 0 : currentIndex + 1))
  }

  const handleSwipeStart = (event) => {
    swipeStartX.current = event.clientX
    swipeStartY.current = event.clientY
  }

  const handleSwipeEnd = (event) => {
    if (swipeStartX.current === null || swipeStartY.current === null) return

    const distanceX = event.clientX - swipeStartX.current
    const distanceY = event.clientY - swipeStartY.current
    swipeStartX.current = null
    swipeStartY.current = null

    if (Math.abs(distanceX) < 48 || Math.abs(distanceX) < Math.abs(distanceY)) return

    if (distanceX < 0) {
      showNextProject()
    } else {
      showPreviousProject()
    }
  }

  const handleSwipeCancel = () => {
    swipeStartX.current = null
    swipeStartY.current = null
  }

  return (
    <section id="projects" className="projects-section">
      <div className="site-container">
        <div className="projects-heading" data-reveal>
          <p className="section-kicker">Projects</p>
          <h3>Showcasing my recent work.</h3>
        </div>

        <div className="project-list" aria-label="Project list" data-reveal>
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={index === activeProjectIndex ? 'is-active' : ''}
              onClick={() => setActiveProjectIndex(index)}
            >
              {project.label || project.title}
            </button>
          ))}
        </div>

        <div className="project-slider-nav" aria-label="Project slider navigation" data-reveal>
          <button type="button" onClick={showPreviousProject} aria-label="Previous project set">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="project-slider-dots" aria-label="Project page selector">
            {Array.from({ length: projectPageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className={index === activeProjectPage ? 'is-active' : ''}
                onClick={() =>
                  setActiveProjectIndex(
                    Math.min(index * visibleProjectCount + 1, projects.length - 1),
                  )
                }
                aria-label={`Show project set ${index + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={showNextProject} aria-label="Next project set">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="project-slider" aria-label="Project slider" data-reveal>
          <div
            key={activeProjectIndex}
            className="project-card-grid"
            onPointerDown={handleSwipeStart}
            onPointerUp={handleSwipeEnd}
            onPointerCancel={handleSwipeCancel}
            onPointerLeave={handleSwipeCancel}
          >
            {visibleProjectIndexes.map((projectIndex) => {
              const project = projects[projectIndex]

              return (
                <article
                  className={`project-card${projectIndex === activeProjectIndex ? ' is-active' : ''}`}
                  key={project.title}
                  tabIndex="0"
                >
                  <div className="project-card-media">
                    <img
                      src={project.image}
                      alt={`${project.label || project.title} preview`}
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div className="project-card-description">
                    <h4>{project.label || project.title}</h4>
                    <p>{project.summary}</p>
                  </div>
                  <div className="project-card-tech">
                    {project.tech.map((item) => (
                      <small key={item}>{item}</small>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
