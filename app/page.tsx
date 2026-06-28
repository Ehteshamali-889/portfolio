const projects = [
  {
    title: "Management Systems",
    description:
      "Built internal business platforms for operations, workflow automation, and reporting.",
    icon: "layers",
  },
  {
    title: "Ecommerce Platforms",
    description:
      "Developed scalable online stores with product management, payments, and order workflows.",
    icon: "bag",
  },
  {
    title: "Real Estate Platforms",
    description:
      "Created property listing systems with search, filters, lead capture, and admin management.",
    icon: "building",
  },
  {
    title: "Cleaning Services Portals",
    description:
      "Built booking and service management systems with customer and staff workflows.",
    icon: "spark",
  },
  {
    title: "Ireland Application Portal",
    description:
      "Developed a portal where users can apply for opportunities in Ireland with form workflows and admin review.",
    icon: "globe",
  },
  {
    title: "Health Systems & Mobile Apps",
    description:
      "Worked on healthcare-focused systems and mobile applications for operational and user-facing needs.",
    icon: "pulse",
  },
  {
    title: "Email Deliverability Systems",
    description:
      "Built and optimized systems focused on email sending, inbox placement, and delivery performance.",
    icon: "mail",
  },
  {
    title: "QA / Testing Platform",
    description:
      "Worked on a QA project similar to Kualitee for test case management, issue tracking, and reporting.",
    icon: "check",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function ProjectIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    layers: <><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/></>,
    bag: <><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
    building: <><path d="M5 21V4h10v17M15 9h4v12M8 8h4M8 12h4M8 16h4"/></>,
    spark: <><path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
    pulse: <><path d="M3 12h4l2-5 4 10 2-5h6"/><path d="M20 6a5 5 0 0 0-8-2 5 5 0 0 0-8 2c-2 5 3 10 8 14 5-4 10-9 8-14Z"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    check: <><path d="m6 12 4 4 8-9"/><circle cx="12" cy="12" r="9"/></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#about" aria-label="Ehtesham Ali — home">
            <span className="brand-mark">EA</span>
            <span className="brand-name">Ehtesham Ali</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
          <a className="nav-cta" href="#contact">
            Contact <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section id="about" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Software Engineer · Full-Stack</div>
            <h1>
              Ehtesham <em>Ali</em>
            </h1>
            <p className="hero-intro">
              Software Engineer with hands-on experience building scalable web and mobile applications across multiple industries. Skilled in full-stack development with strong expertise in backend systems, API integrations, and database design. Experienced in delivering business-focused solutions from concept to deployment, including admin panels, customer portals, and mobile apps. Comfortable working independently or with teams on fast-paced product development. Focused on writing clean, maintainable, and production-ready code.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="mailto:ehteshamali1142@gmail.com">
                Contact Me <ArrowIcon />
              </a>
              <a className="secondary-button" href="#projects">
                Projects <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="status-pill"><span /> Available for opportunities</div>
            <div className="code-card">
              <div className="code-top"><span /><span /><span /></div>
              <div className="code-body">
                <p><b>const</b> engineer = &#123;</p>
                <p>&nbsp;&nbsp;name: <i>&quot;Ehtesham Ali&quot;</i>,</p>
                <p>&nbsp;&nbsp;focus: <i>&quot;Useful products&quot;</i>,</p>
                <p>&nbsp;&nbsp;quality: <i>&quot;Production-ready&quot;</i></p>
                <p>&#125;;</p>
              </div>
            </div>
            <div className="orbit orbit-one"><span>API</span></div>
            <div className="orbit orbit-two"><span>DB</span></div>
            <div className="orbit orbit-three"><span>UI</span></div>
            <div className="visual-label">From idea <span>→</span> deployment</div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <span className="section-index">01 / Expertise</span>
                <h2>Full-stack skills.<br/><em>End-to-end thinking.</em></h2>
              </div>
              <p>Skills spanning web, mobile, backend systems, integrations, and product infrastructure.</p>
            </div>

            <div className="skill-grid">
              <article className="skill-card skill-card-featured">
                <div className="skill-number">01</div>
                <div className="skill-icon skill-icon-code">&lt;/&gt;</div>
                <h3>Full-Stack Development</h3>
                <ul>
                  <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                  <li>LAMP Stack (Linux, Apache, MySQL, PHP)</li>
                  <li>PERN Stack (PostgreSQL, Express.js, React.js, Node.js)</li>
                  <li>Mobile Development using React Native</li>
                </ul>
              </article>

              <article className="skill-card">
                <div className="skill-number">02</div>
                <div className="skill-icon"><ProjectIcon name="layers" /></div>
                <h3>Technical Expertise</h3>
                <ul className="tag-list">
                  <li>REST APIs</li>
                  <li>Database Design</li>
                  <li>Third-Party Integrations</li>
                  <li>Authentication</li>
                  <li>Admin Dashboards</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section section-wrap">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-index">02 / Selected experience</span>
              <h2>Projects Worked <em>On.</em></h2>
            </div>
            <p>Management systems, customer platforms, mobile apps, and specialized business software.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-icon"><ProjectIcon name={project.icon} /></span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-line"><span /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-card">
            <div className="contact-orb" aria-hidden="true" />
            <span className="section-index">03 / Get in touch</span>
            <h2>Get In <em>Touch.</em></h2>
            <p>Interested in working together? Feel free to reach out.</p>
            <a className="contact-button" href="mailto:ehteshamali1142@gmail.com">
              Contact Me <ArrowIcon />
            </a>
            <span className="email-note">ehteshamali1142@gmail.com</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-wrap">
          <a className="brand" href="#about">
            <span className="brand-mark">EA</span>
            <span className="brand-name">Ehtesham Ali</span>
          </a>
          <p>© 2026. All rights reserved.</p>
          <a href="#about" className="back-top">Back to top <span>↑</span></a>
        </div>
      </footer>
    </div>
  );
}
