const techGroups = [
  {
    title: 'Frontend',
    items: ['WordPress', 'React.js', 'Gatsby.js', 'Vite.js', 'Tailwind CSS', 'Bootstrap', 'Swiper.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Laravel', 'PHP'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQL', 'Supabase'],
  },
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    title: 'DevOps & Monitoring',
    items: ['Git & GitHub', 'Vercel', 'Netlify', 'Railway', 'Render'],
  },
  {
    title: 'Tools',
    items: ['Figma', 'Canva', 'Visual Studio Code', 'Cursor', 'Discord', 'Slack', 'Microsoft Teams'],
  },
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="site-container about-layout" data-reveal>
        <div className="about-copy">
          <p className="section-kicker">Who is John?</p>
          <h3>A Computer Engineering graduate and Full-Stack Developer.</h3>
          <p>
            Every project is a challenge to solve, whether it is frontend interfaces or backend systems, only the tools change. I approach each one with curiosity, treating it as an opportunity to learn, build, and improve.
          </p>
          <p>
            I have a passion for creating, learning, and experimenting with modern web technologies, frameworks, and scalable applications.
          </p>
          <p className="about-statement">Always building, always learning, and never standing still.</p>
          <div className="about-education">
            <strong>Bachelor of Science in Computer Engineering</strong>
            <span>Eastern Samar State University (ESSU)</span>
            <small>Batch 2025 - 2026</small>
          </div>
          <a href="#projects" className="about-project-link">
            Recent Projects
          </a>
        </div>

        <div className="about-stack" aria-label="Tech stack">
          <p className="section-kicker">Tech Stack</p>
          <div className="tech-stack-grid">
            {techGroups.map((group) => (
              <article key={group.title} className="tech-group">
                <h3>{group.title}</h3>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
