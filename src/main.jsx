import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  GitBranch,
  Users,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Code2,
  Terminal,
  Database,
  Globe,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  Download,
  ExternalLink,
  Star,
  GitFork,
  ChevronRight
} from "lucide-react";
import "./style.css";

const profile = {
  name: "Vivek",
  role: "Aspiring Full-Stack Developer",
  location: "Kerala, India",
  email: "vivekbanerji.offical@gmail.com", 
  GitBranch: "https://GitBranch.com/yourusername", 
  Users: "https://github.com/VivekBanerji", 
  resume: "/Vivek_Banerji.pdf" 
};

const projects = [
  {
    number: "01",
    title: "Bus Tracking System",
    category: "Web Application",
    description: "A college project focused on making public transportation information easier to access through a bus tracking solution.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Academic project",
    GitBranch: "#",
    demo: "#"
  },
  {
    number: "02",
    title: "Face Recognition Attendance System",
    category: "Computer Vision",
    description: "A team mini-project that explored face recognition to support a more convenient attendance management process.",
    tech: ["Python", "Face Recognition", "Database"],
    status: "Team project",
    GitBranch: "#",
    demo: "#"
  },
  {
    number: "03",
    title: "Student Management REST API",
    category: "Backend Development",
    description: "A REST API built with Express.js to create, view, update, search, and delete student records using an in-memory array.",
    tech: ["Node.js", "Express.js", "REST API"],
    status: "Practice project",
    GitBranch: "#",
    demo: "#"
  },
  // {
  //   number: "04",
  //   title: "To-Do List API",
  //   category: "Backend Development",
  //   description: "A simple task management API that accepts tasks through POST requests and returns the saved task list through GET requests.",
  //   tech: ["Node.js", "Express.js", "JavaScript"],
  //   status: "Practice project",
  //   GitBranch: "#",
  //   demo: "#"
  // },
  // {
  //   number: "05",
  //   title: "Budget Insights Dashboard",
  //   category: "Frontend Development",
  //   description: "A React dashboard concept for presenting budget information, organizing expenses, and understanding spending patterns.",
  //   tech: ["React", "JavaScript", "CSS"],
  //   status: "In progress",
  //   GitBranch: "#",
  //   demo: "#"
  // },
  // {
  //   number: "06",
  //   title: "KTU Result Page Monitor",
  //   category: "Automation",
  //   description: "A monitoring bot concept that checks a university webpage for a specific update and sends an alert through Telegram.",
  //   tech: ["Node.js", "Playwright", "Express", "Telegram Bot"],
  //   status: "Personal project",
  //   GitBranch: "#",
  //   demo: "#"
  // }
];

const skills = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Database & Tools", items: ["MySQL", "MongoDB (learning)", "Git", "GitBranch", "Postman"] },
  { group: "Programming", items: ["C", "C++", "Python", "Java"] }
];

const education = [
  { date: "2022 — 2025", title: "B.Tech — Information Technology", place: "Government Engineering College, Barton Hill", detail: "Graduated with a foundation in software development, programming, and computer science." },
  { date: "Diploma", title: "Diploma — Information Technology", place: "IHRD, Government Polytechnic College, Purapuzha", detail: "Built early technical foundations and developed an interest in practical software projects." }
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function GitHubRepositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRepositories() {
      try {
        let allRepos = [];
        let page = 1;

        while (true) {
          const response = await fetch(
            `https://api.github.com/users/VivekBanerji/repos?type=owner&sort=updated&direction=desc&per_page=100&page=${page}`
          );

          if (!response.ok) {
            throw new Error("Unable to fetch GitHub repositories");
          }

          const data = await response.json();

          allRepos = [...allRepos, ...data];

          if (data.length < 100) break;

          page++;
        }

        setRepos(allRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepositories();
  }, []);

  if (loading) {
    return <p>Loading GitHub repositories...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="github-section">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">
            OPEN SOURCE / GITHUB
          </span>

          <h2>GitHub Repositories</h2>

          <p>
            Explore my coding projects and experiments
            directly from GitHub.
          </p>
        </div>

        <div className="projects-grid">

          {repos.map((repo) => (
            <article className="project-card" key={repo.id}>

              <div className="project-icon">
                <GitBranch size={25} />
              </div>

              <span className="project-category">
                {repo.language || "Multiple technologies"}
              </span>

              <h3>{repo.name}</h3>

              <p>
                {repo.description ||
                  "No description provided yet."}
              </p>

              <div className="repo-stats">
                <span>
                  <Star size={14} />
                  {repo.stargazers_count}
                </span>

                <span>
                  <GitFork size={14} />
                  {repo.forks_count}
                </span>
              </div>

              <p className="repo-date">
                Updated:{" "}
                {new Date(repo.updated_at).toLocaleDateString()}
              </p>

              <div className="project-links">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source <ExternalLink size={15} />
                </a>
              </div>

            </article>
          ))}

        </div>

        <a
          className="button button-secondary github-profile-link"
          href="https://github.com/VivekBanerji"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Profile <ArrowUpRight size={17} />
        </a>

      </div>
    </section>
  );
}


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>V<span>.</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Skills", "Projects", "GitHub", "Education", "Contact"].map(item =>
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            )}
            <a className="nav-cta" href={profile.resume} target="_blank" rel="noreferrer"><Download size={15} /> Resume</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse"></span> OPEN TO OPPORTUNITIES</div>
            <p className="hero-intro">Hello, I'm</p>
            <h1>{profile.name}<span className="accent">.</span></h1>
            <h2>{profile.role}</h2>
            <p className="hero-description">
              I build practical web applications and enjoy turning ideas into useful digital experiences.
              Currently sharpening my skills in the <strong>MERN stack</strong> and backend development.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Let's connect <ArrowRight size={17} /></a>
            </div>
            <div className="social-links">
              <a href={profile.GitBranch} target="_blank" rel="noreferrer" aria-label="GitBranch"><GitBranch /></a>
              <a href={profile.Users} target="_blank" rel="noreferrer" aria-label="Users"><Users /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
              <span className="location"><MapPin size={14} /> {profile.location}</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Developer illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-window">
              <div className="window-top"><span></span><span></span><span></span><small>developer.js</small></div>
              <div className="code-lines">
                <p><i>01</i> <b>const</b> developer = {"{"}</p>
                <p><i>02</i> &nbsp; name: <em>'Vivek'</em>,</p>
                <p><i>03</i> &nbsp; role: <em>'Full-Stack Developer'</em>,</p>
                <p><i>04</i> &nbsp; learning: [</p>
                <p><i>05</i> &nbsp;&nbsp; <em>'MongoDB'</em>, <em>'Express'</em>,</p>
                <p><i>06</i> &nbsp;&nbsp; <em>'React'</em>, <em>'Node.js'</em></p>
                <p><i>07</i> &nbsp; ]</p>
                <p><i>08</i> {"}"};</p>
                <p className="code-comment"><i>09</i> // Always learning, always building.</p>
              </div>
            </div>
            <div className="floating-chip chip-react"><Code2 size={17} /> React</div>
            <div className="floating-chip chip-node"><Terminal size={17} /> Node.js</div>
            <div className="floating-chip chip-db"><Database size={17} /> MongoDB</div>
          </div>
          <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span></span></a>
        </section>

        <section className="section container" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title="A little about my journey" text="From learning the fundamentals to building applications, I'm focused on growing one project at a time." />
          <div className="about-grid">
            <div className="about-main">
              <p className="lead">I'm a B.Tech graduate in Information Technology from Government Engineering College, Barton Hill, with a strong technical foundation built during my Diploma in Information Technology.</p>
              <p>My project experience includes a bus tracking software and a face recognition-based attendance system. These projects encouraged me to explore how technology can solve everyday problems.</p>
              <p>I'm currently learning and practising full-stack development with the MERN stack, with a focus on JavaScript, Express.js, REST APIs, React, and database fundamentals. I enjoy learning by building, debugging, and improving real applications.</p>
              <p>Outside technology, I enjoy travelling, exploring new places, and learning from different perspectives. My long-term ambition is to create useful technology products and eventually build something of my own.</p>
            </div>
            <div className="about-facts">
              <div className="fact-card"><GraduationCap /><span>EDUCATION</span><strong>B.Tech IT Graduate</strong></div>
              <div className="fact-card"><Code2 /><span>CURRENT FOCUS</span><strong>MERN Stack Development</strong></div>
              <div className="fact-card"><BriefcaseBusiness /><span>CAREER GOAL</span><strong>Software Engineer</strong></div>
              <div className="fact-card"><Globe /><span>INTEREST</span><strong>Technology & Entrepreneurship</strong></div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <SectionHeading eyebrow="02 / TECH STACK" title="Tools I work with" text="My current toolkit and the technologies I'm developing confidence in." />
            <div className="skills-grid">
              {skills.map((skill, index) => <div className="skill-card" key={skill.group}>
                <div className="skill-card-top"><span>0{index + 1}</span><Code2 size={20} /></div>
                <h3>{skill.group}</h3>
                <div className="tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div>
              </div>)}
            </div>
            <p className="learning-note"><span className="pulse"></span> Currently learning: MongoDB, React.js, Express.js, Node.js and deeper JavaScript concepts.</p>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects & experiments" text="A selection of academic, personal, and practice projects. I'm continuously adding to this collection." />
          <div className="filters">
            {categories.map(category => <button key={category} className={activeFilter === category ? "filter active" : "filter"} onClick={() => setActiveFilter(category)}>{category}</button>)}
          </div>
          <div className="projects-grid">
            {filteredProjects.map(project => <article className="project-card" key={project.number}>
              <div className="project-top"><span className="project-number">{project.number} / 06</span><span className="project-status">{project.status}</span></div>
              <div className="project-icon"><Code2 size={25} /></div>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags project-tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
              <div className="project-links">
                <a href={project.GitBranch} target="_blank" rel="noreferrer">Source code <GitBranch size={15} /></a>
                <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a>
              </div>
            </article>)}
          </div>
          <p className="project-hint">Tip: Replace the sample GitBranch and demo links with your actual project URLs before publishing.</p>
        </section>

        <GitHubRepositories />

        <section className="section section-muted" id="education">
          <div className="container">
            <SectionHeading eyebrow="04 / EDUCATION & EXPERIENCE" title="My foundation" text="The experiences that helped shape my technical and personal growth." />
            <div className="timeline">
              {education.map(item => <div className="timeline-item" key={item.title}>
                <div className="timeline-marker"></div>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content"><h3>{item.title}</h3><h4>{item.place}</h4><p>{item.detail}</p></div>
              </div>)}
            </div>
            <div className="experience-card">
              <div className="experience-symbol"><BriefcaseBusiness /></div>
              <div><span className="eyebrow">INNOVATION & LEADERSHIP</span><h3>Young Innovators Programme — YIP 5.0 & YIP 6.0</h3><p>Participation and internship experience associated with K-DISC, helping develop presentation, teamwork, communication, and innovation skills.</p></div>
            </div>
            <div className="experience-card">
              <div className="experience-symbol"><GraduationCap /></div>
              <div><span className="eyebrow">LEADERSHIP</span><h3>National Cadet Corps — Under Officer</h3><p>Served as an Under Officer during diploma studies, strengthening discipline, leadership, and team coordination.</p></div>
            </div>
          </div>
        </section>

        <section className="section container contact-section" id="contact">
          <SectionHeading eyebrow="05 / GET IN TOUCH" title="Have a project in mind?" text="I'm interested in software development opportunities, collaborations, and meaningful projects. Let's connect." />
          <div className="contact-panel">
            <div><span className="eyebrow">LET'S BUILD SOMETHING</span><h3>Have a good idea?<br /><span>Let's make it real.</span></h3></div>
            <a className="button button-primary" href={`mailto:${profile.email}`}>Send me an email <ArrowUpRight size={17} /></a>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail /> {profile.email}</a>
            <a href={profile.GitBranch} target="_blank" rel="noreferrer"><GitBranch /> GitBranch <ArrowUpRight size={14} /></a>
            <a href={profile.Users} target="_blank" rel="noreferrer"><Users /> Users <ArrowUpRight size={14} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner"><a className="brand" href="#home">V<span>.</span></a><p>Designed & built with React by {profile.name}.</p><a href="#home" className="back-top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
