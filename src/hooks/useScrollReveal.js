import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    document.querySelectorAll('[data-reveal]').forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [])
}
