import './App.css'

const toolStack = ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express.js', 'PHP', 'ASP.NET Core', 'MongoDB', 'MySQL', 'SQL Server', 'REST APIs', 'JWT', 'Role-based access', 'Git']

const projects = [
  {
    number: '01',
    name: 'FoMed',
    category: 'CLINIC MANAGEMENT SYSTEM',
    description: 'A clinic management platform covering the patient journey, from appointment booking and check-in to consultations, prescriptions, billing, and medication dispensing.',
    stack: 'ASP.NET Core · React · TypeScript · SQL Server',
    href: 'https://fo-med-frontend.vercel.app/',
    repo: 'https://github.com/lhknguyen15/FoMed-Frontend',
    api: 'https://github.com/lhknguyen15/FoMed-API',
    art: 'fomed',
    mark: 'CARE, CONNECTED',
  },
  {
    number: '02',
    name: 'Todos',
    category: 'TASK MANAGEMENT · WEB APP',
    description: 'A task-management app for creating, editing, deleting, and completing daily tasks, backed by JWT authentication and a RESTful API.',
    stack: 'React · TypeScript · Redux Toolkit · Express.js · MongoDB',
    href: 'https://fe-todo-seven.vercel.app/',
    repo: 'https://github.com/lhknguyen15/MERN-todolist',
    art: 'todo',
    mark: 'MAKE ROOM TO DO',
  },
  {
    number: '03',
    name: 'CodePro',
    category: 'E-COMMERCE · TEAM PROJECT',
    description: 'A responsive e-commerce frontend with product discovery, reviews, cart and favorites, plus customer help for ordering and account management.',
    stack: 'React · TypeScript · Tailwind CSS · shadcn/ui · PHP · MySQL',
    href: 'https://github.com/maitrithanh/code-pro',
    repo: 'https://github.com/maitrithanh/code-pro',
    art: 'codepro',
    mark: 'FIND YOUR NEXT',
  },
]

const experience = [
  'Investigated web-scraping techniques in Python and documented findings for the team.',
  'Reviewed data-cleaning approaches and summarized the analysis in reports.',
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function ProjectArtwork({ art, mark }: { art: string; mark: string }) {
  return (
    <div className={`project-art ${art}`}>
      <div className="mock-browser">
        <div className="mock-browser-bar"><span /><span /><span /><i>{art}.app</i></div>
        <div className="mock-content">
          <small>{mark}</small>
          <div className="mock-display">
            {art === 'fomed' ? <><span className="medical-cross">+</span><b>Care that<br />connects.</b><em>CLINIC OVERVIEW ↗</em></> : null}
            {art === 'todo' ? <><span className="todo-check">✓</span><b>Make today<br />count.</b><em>YOUR TASKS · 04</em></> : null}
            {art === 'codepro' ? <><span className="shop-bag">CP</span><b>Find your<br />next favorite.</b><em>EXPLORE COLLECTION ↗</em></> : null}
          </div>
        </div>
      </div>
      <span className="project-art-arrow"><Arrow diagonal /></span>
    </div>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Le Hieu Khoa Nguyen home"><span className="wordmark-icon">lk.</span><span>LE HIEU KHOA NGUYEN</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="https://github.com/lhknguyen15" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
          <a className="nav-contact" href="#contact">Let&apos;s connect <Arrow diagonal /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> FULL-STACK DEVELOPER <span className="eyebrow-divider">/</span> HO CHI MINH CITY</p>
            <h1>Building useful<br />things for the <span className="highlight-word">web.</span></h1>
            <p className="hero-intro">I&apos;m Le Hieu Khoa Nguyen — a software engineering graduate building full-stack web applications with React, TypeScript, and .NET.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <Arrow /></a>
              <a className="text-link" href="mailto:lhknguyen0105@gmail.com">Get in touch <Arrow diagonal /></a>
            </div>
            <div className="hero-footnote"><span className="footnote-line" /> CURRENTLY LEARNING FULL-STACK .NET AT CYBERSOFT</div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of full-stack development">
            <div className="art-grid" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sticker">IDEAS<br />INTO<br />SOFTWARE <span>✳</span></div>
            <div className="code-card">
              <div className="code-top"><span /><span /><span /><small>fomed.tsx</small></div>
              <div className="code-lines" aria-hidden="true">
                <p><i>01</i><b>const</b> <em>clinic</em> = {'{'}</p>
                <p><i>02</i>&nbsp; care: <strong>&apos;connected&apos;</strong>,</p>
                <p><i>03</i>&nbsp; bookings: <strong>streamlined</strong>,</p>
                <p><i>04</i>&nbsp; access: <strong>&apos;secure&apos;</strong>,</p>
                <p><i>05</i>{'}'}</p>
                <p><i>06</i><span className="cursor" /></p>
              </div>
            </div>
            <div className="art-label"><span>FIG 01</span> TURNING PROBLEMS INTO PRODUCTS</div>
          </div>
        </section>

        <section className="stats section-wrap" aria-label="At a glance">
          <div className="stats-label">A FEW THINGS<br />I&apos;VE BEEN BUILDING <span>↘</span></div>
          <div className="stat"><strong>03</strong><small>Featured<br />projects</small></div>
          <div className="stat"><strong>01</strong><small>Internship<br />experience</small></div>
          <div className="stat"><strong>02</strong><small>Education &<br />training</small></div>
          <div className="stat"><strong>04</strong><small>Technical<br />skill areas</small></div>
        </section>

        <section className="work section-wrap section-block" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED PROJECTS <span className="eyebrow-divider">/</span> WEB & FULL-STACK</p><h2>Built to solve<br /><span>real problems.</span></h2></div>
            <p className="heading-note">From clinic workflows to personal productivity and e-commerce, these projects turn practical needs into working software.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a className="project-art-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                  <ProjectArtwork art={project.art} mark={project.mark} />
                </a>
                <div className="project-info">
                  <div className="project-title-row"><span className="project-number">{project.number}</span><div><p className="eyebrow">{project.category}</p><h3>{project.name}</h3></div><a className="circle-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><Arrow diagonal /></a></div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta"><span>{project.stack}</span><div><a href={project.href} target="_blank" rel="noreferrer">{project.name === 'CodePro' ? 'GITHUB' : 'LIVE DEMO'} <Arrow diagonal /></a>{project.api ? <><a href={project.repo} target="_blank" rel="noreferrer">FRONTEND</a><a href={project.api} target="_blank" rel="noreferrer">API</a></> : project.name === 'Todos' ? <a href={project.repo} target="_blank" rel="noreferrer">REPO</a> : null}</div></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Learn, build,<br /><span>make it better.</span></h2></div><p className="heading-note about-note">I enjoy taking a feature from idea to implementation, learning the systems behind it, and making the experience clear for the people who use it.</p></div>
          <div className="about-grid">
            <article className="info-card tech-card"><p className="card-kicker">01 <span>WHAT I WORK WITH</span></p><h3>Technical skills</h3><p className="card-description">Tools and technologies I&apos;ve used across coursework, projects, and team work.</p><div className="chip-list">{toolStack.slice(0, 8).map((technology) => <span className="skill-chip" key={technology}>{technology}</span>)}</div></article>
            <article className="info-card education-card"><p className="card-kicker">02 <span>EDUCATION</span></p><h3>Software Engineering</h3><div className="education-mark">H<span>U</span>FLIT</div><p className="degree">Ho Chi Minh City University of Foreign Languages – Information Technology</p><p className="school">Major in Software Engineering · GPA 3.00 / 4.00</p><div className="education-bottom"><span>JUL 2020 — DEC 2024</span><span>HO CHI MINH CITY</span></div></article>
            <article className="info-card skills-card"><p className="card-kicker">03 <span>CURRENTLY LEARNING</span></p><h3>Full-Stack .NET</h3><div className="academy-mark">Cyber<span>Soft</span></div><p className="degree">Full-Stack .NET Developer Program</p><p className="school">Focus on full-stack development with .NET.</p><div className="education-bottom"><span>JAN 2026 — PRESENT</span><span>HO CHI MINH CITY</span></div></article>
          </div>
          <div className="skill-groups">
            <div><span>FRONT END</span><p>React · TypeScript · Redux Toolkit · Tailwind CSS · shadcn/ui</p></div>
            <div><span>BACK END</span><p>Node.js · Express.js · PHP · ASP.NET Core</p></div>
            <div><span>DATABASES</span><p>MongoDB · MySQL · SQL Server</p></div>
            <div><span>OTHER</span><p>REST APIs · JWT authentication · Role-based access control · Git</p></div>
          </div>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <div className="section-heading"><div><p className="eyebrow">THE JOURNEY SO FAR</p><h2>First steps in<br /><span>software teams.</span></h2></div><p className="heading-note">A glimpse at the research and analysis work I contributed during my internship.</p></div>
          <div className="timeline"><article className="job"><div className="job-marker"><span>01</span><i /></div><div className="job-main"><div className="job-title"><div><p className="eyebrow">FEB 2024 — APR 2024</p><h3>Intern</h3><p className="job-company">4Psoft <span>·</span> Ho Chi Minh City, Vietnam</p></div><Arrow diagonal /></div><ul>{experience.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article></div>
        </section>

        <section className="contact section-wrap" id="contact"><div className="contact-top"><p className="eyebrow"><span className="live-dot" /> OPEN TO CONNECT</p><span className="contact-index">HO CHI MINH CITY, VIETNAM</span></div><h2>Let&apos;s make<br /><span>something useful.</span></h2><div className="contact-bottom"><p>Interested in full-stack development, thoughtful products, and learning from a great team.<br />Reach out and let&apos;s start a conversation.</p><a className="button button-lime" href="mailto:lhknguyen0105@gmail.com">Say hello <Arrow diagonal /></a></div></section>
      </main>

      <footer className="footer section-wrap"><a className="wordmark footer-mark" href="#top"><span className="wordmark-icon">lk.</span><span>LE HIEU KHOA NGUYEN</span></a><div className="footer-contact"><a href="mailto:lhknguyen0105@gmail.com">lhknguyen0105@gmail.com</a><a href="tel:+84917663141">+84 917 663 141</a></div><div className="footer-links"><a href="https://linkedin.com/in/lhknguyen0105" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="https://github.com/lhknguyen15" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a><span>© 2026 LE HIEU KHOA NGUYEN</span></div></footer>
    </div>
  )
}

export default App
