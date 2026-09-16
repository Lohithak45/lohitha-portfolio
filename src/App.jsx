import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
    const commands = [
    'whoami',
    'cat profile.txt',
    'status',
  ]

  const [commandIndex, setCommandIndex] = useState(0)
  const [typedCommand, setTypedCommand] = useState('')

  useEffect(() => {
    const currentCommand = commands[commandIndex]
    let index = 0

    setTypedCommand('')

    const typing = setInterval(() => {
      if (index < currentCommand.length) {
        setTypedCommand(currentCommand.slice(0, index + 1))
        index++
      } else {
        clearInterval(typing)

        setTimeout(() => {
          setCommandIndex((prev) => (prev + 1) % commands.length)
        }, 1800)
      }
    }, 90)

    return () => clearInterval(typing)
  }, [commandIndex])
  return (
    <div className="portfolio">
      <div
         className="mouse-glow"
         style={{
            left: mouse.x,
             top: mouse.y,
        }}
/>
      <div className="noise"></div>

      <nav className="navbar">
        <a href="#home" className="logo">
          KL<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#education">EDUCATION</a>
          <a href="#projects">PROJECTS</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="nav-status">
          <span></span> ONLINE
        </div>
      </nav>

      <main id="home" className="hero-section">
        <div className="grid-background"></div>
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="scan-line"></div>

        <div className="hero-content">
          <div className="system-line">
            <span className="system-dot"></span>
            SYSTEM ONLINE
          </div>

          <p className="terminal-line">
            <span>&gt;</span> initializing_lohitha.exe
          </p>

          <p className="eyebrow">CSE (CIC) • CYBERSECURITY</p>

          <h1>
            K
            <span>LOHITHA</span>
          </h1>

          <h2>
            CYBERSECURITY
            <span>/ ETHICAL HACKING</span>
          </h2>

          <p className="description">
            Exploring systems, understanding vulnerabilities,
            and learning how to build a more secure digital world.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              EXPLORE PROJECTS <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              CONNECT
            </a>
          </div>

          <div className="hero-tags">
            <span>LINUX</span>
            <span>NETWORKING</span>
            <span>WEB SECURITY</span>
            <span>PYTHON</span>
          </div>
        </div>

        <div 
           className="terminal-wrapper"
           style={{
            transform: `perspective(1000px) rotateY(${(mouse.x - window.innerWidth / 2) * 0.005}deg) rotateX(${-(mouse.y - window.innerHeight / 2) * 0.003}deg)`,
          }}
        >
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="window-buttons">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              <span className="terminal-title">
                lohitha@cyber:~
              </span>

              <span className="terminal-lock">●</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="green-text">lohitha@cyber</span>:
                <span className="blue-text">~</span>$ {typedCommand}
                 <span className="typing-cursor">▌</span>
              </p>
              <p className="output">
                {commandIndex === 0 && 'Lohitha'}
                {commandIndex === 1 && 'ROLE: Cybersecurity Enthusiast'}
                {commandIndex === 2 && '● SYSTEM READY'}
              </p>

              <p>
                <span className="green-text">lohitha@cyber</span>:
                <span className="blue-text">~</span>$ cat profile.txt
              </p>

              <div className="profile-output">
                <p>ROLE: Cybersecurity Enthusiast</p>
                <p>BRANCH: CSE (CIC)</p>
                <p>FOCUS: Ethical Hacking</p>
                <p>STATUS: Learning & Building</p>
              </div>

              <p>
                <span className="green-text">lohitha@cyber</span>:
                <span className="blue-text">~</span>$ status
              </p>

              <p className="status">
                <span>●</span> SYSTEM READY
              </p>

              <p className="cursor">_</p>
            </div>
          </div>

          <div className="terminal-decoration">
            <span>01</span>
            <div></div>
            <span>SEC</span>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="arrow">↓</div>
        </div>
      </main>

      <section id="about" className="simple-section">
        <p className="section-label">// 01 — ABOUT</p>
        <h2>Learning. Exploring. Building.</h2>
        <p>
            I'm a CSE (CIC) student exploring cybersecurity and ethical
            hacking. I'm currently learning Linux, networking, Python and
            web security while building projects to turn what I learn into
            practical experience.
        </p>
      </section>
      <section id="education" className="simple-section">
        <p className="section-label">// 02 — EDUCATION</p>
        <h2>My Education</h2>

        <div className="education-card">
        <span>01</span>
        <div>
        <h3>B.Tech — CSE (CIC)</h3>
        <p>Annamacharya Institute of Technology & Sciences</p>
        <p>2025 — Present</p>
    </div>
  </div>
</section>
      <section id="projects" className="simple-section">
        <p className="section-label">// 03 — PROJECTS</p>
        <h2>Things I'm Building</h2>

        <div className="project-grid">
          <div className="project-card">
            <span>01</span>
            <h3>ScamLens</h3>
            <p>
              Exploring ways to identify suspicious opportunities
              and online scams.
            </p>
              <a href="https://github.com/Lohithak45" target="_blank" rel="noreferrer">
                 VIEW PROJECT →
              </a>
          </div>

          <div className="project-card">
            <span>02</span>
            <h3>CTF Coach</h3>
            <p>
              A cybersecurity learning concept for networking,
              Linux and web security.
            </p>
               <a 
                href="https://github.com/Lohithak45"
                 target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT →
              </a>
          </div>

          <div className="project-card">
            <span>03</span>
            <h3>CreateAI Studio</h3>
            <p>
              An AI-focused creative application concept built
              while learning development.
            </p>

                <a href="#contact">VIEW PROJECT →</a>
          </div>
        </div>
      </section>
      <section id="skills" className="simple-section">
  <p className="section-label">// 04 — SKILLS</p>
  <h2>Tools I'm Learning</h2>

  <div className="skills-grid">
    <div className="skill-card">
      <span>01</span>
      <h3>LINUX</h3>
      <p>Command line, file systems and Linux fundamentals.</p>
    </div>

    <div className="skill-card">
      <span>02</span>
      <h3>NETWORKING</h3>
      <p>Networking concepts, protocols and troubleshooting.</p>
    </div>

    <div className="skill-card">
      <span>03</span>
      <h3>PYTHON</h3>
      <p>Learning Python for automation and cybersecurity.</p>
    </div>

    <div className="skill-card">
      <span>04</span>
      <h3>WEB SECURITY</h3>
      <p>Exploring web security concepts and vulnerabilities.</p>
    </div>
  </div>
</section>
      <section id="contact" className="simple-section contact-section">
        <p className="section-label">// 05 — CONTACT</p>
        <h2>Let's Connect</h2>
        <p>
          Interested in cybersecurity, technology and building cool things.
        </p>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/lohitha-k-11670542a/" target="_blank" rel="noreferrer">
             LINKEDIN
          </a>

          <a href="https://github.com/Lohithak45" target="_blank" rel="noreferrer">
             GITHUB
          </a>

          <a href="https://instagram.com/_lohitha__08" target="_blank" rel="noreferrer">
            INSTAGRAM
          </a>

         <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=lohithak45@gmail.com"
             target="_blank"
             rel="noreferrer"
         >
              EMAIL
         </a>
        </div>
        </section>

      <footer>
        <span>K LOHITHA</span>
        <span>© 2026 • CYBERSECURITY PORTFOLIO</span>
      </footer>
    </div>
  )
}

export default App