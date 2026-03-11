import { useEffect, useState } from "react";

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .08 1.52 1.03 1.52 1.03.88 1.52 2.3 1.08 2.87.82.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.41.1 2.66.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.7 4.34a1.5 1.5 0 0 0-1.67-.24L3.3 11.56a1.2 1.2 0 0 0 .1 2.24l3.7 1.28 1.4 4.52a1.2 1.2 0 0 0 2.1.46l2.06-2.5 3.58 2.62a1.5 1.5 0 0 0 2.37-.87l3.14-13.2a1.5 1.5 0 0 0-.05-1.77ZM8.7 14.3l8.94-6.53-7.1 7.6-.3 2.85-1.54-3.92Z"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l8 5.33 8-5.33V7H4Zm16 10V9.8l-7.45 4.96a1 1 0 0 1-1.1 0L4 9.8V17h16Z"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 2h3.2c.5 0 .92.36.99.86l.5 3.5a1 1 0 0 1-.58 1.04l-1.84.82a14.03 14.03 0 0 0 6.91 6.91l.82-1.84a1 1 0 0 1 1.04-.58l3.5.5a1 1 0 0 1 .86.99v3.2a1 1 0 0 1-.9 1 16.4 16.4 0 0 1-1.8.1A17.3 17.3 0 0 1 2 4.7c0-.6.03-1.2.1-1.8a1 1 0 0 1 1-.9h3.5Z"
      />
    </svg>
  );
}

function ProjectCard({ project, onOpenImage, onOpenVideo }) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageSrc = project.imageFile ? `${import.meta.env.BASE_URL}assets/${project.imageFile}` : "";

  return (
    <article className="project-card">
      <div className="project-media-wrap">
        {!hasImageError && imageSrc ? (
          <button
            type="button"
            className="media-button"
            onClick={() => onOpenImage({ src: imageSrc, alt: project.imageAlt })}
            aria-label={`Open ${project.title} screenshot fullscreen`}
          >
            <img
              className="project-media"
              src={imageSrc}
              alt={project.imageAlt}
              loading="lazy"
              width="640"
              height="360"
              onError={() => setHasImageError(true)}
            />
          </button>
        ) : (
          <div className="project-placeholder" role="img" aria-label={`${project.title} screenshot placeholder`}>
            Add screenshot in public/assets/{project.imageFile || "project-cover.jpg"}
          </div>
        )}
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="meta">
        <strong>Stack:</strong> {project.stack}
      </p>
      {project.outcomes?.length > 0 && (
        <ul className="metrics-list" aria-label={`${project.title} project outcomes`}>
          {project.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      )}
      <p className="deploy-badge" aria-label={`Deployment status: ${project.deploymentStatus}`}>
        Deployment: {project.deploymentStatus}
      </p>

      <div className="project-links" aria-label={`${project.title} links`}>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="mini-link">
            Live Demo
          </a>
        )}
        {!project.demoUrl && (
          <span className="mini-link mini-link-muted">Demo Link Needed</span>
        )}
      </div>
    </article>
  );
}

function CreativeCard({ item, onOpenImage, onOpenVideo }) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageSrc = item.imageFile ? `${import.meta.env.BASE_URL}assets/${item.imageFile}` : "";

  return (
    <article className="project-card">
      <div className="project-media-wrap">
        {!hasImageError && imageSrc ? (
          <button
            type="button"
            className="media-button"
            onClick={() => onOpenImage({ src: imageSrc, alt: item.imageAlt })}
            aria-label={`Open ${item.title} preview fullscreen`}
          >
            <img
              className="project-media"
              src={imageSrc}
              alt={item.imageAlt}
              loading="lazy"
              width="640"
              height="360"
              onError={() => setHasImageError(true)}
            />
          </button>
        ) : (
          <div className="project-placeholder" role="img" aria-label={`${item.title} preview placeholder`}>
            Add preview in public/assets/{item.imageFile || "creative-cover.jpg"}
          </div>
        )}
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p className="meta">
        <strong>Category:</strong> {item.category}
      </p>
      <div className="project-links" aria-label={`${item.title} links`}>
        {item.category === "Video Editing" ? (
          item.previewUrl ? (
            item.previewUrl.toLowerCase().endsWith(".mp4") ? (
              <button
                type="button"
                className="mini-link mini-link-button"
                onClick={() => onOpenVideo({ src: item.previewUrl, title: `${item.title} Video` })}
              >
                Video Demo
              </button>
            ) : (
              <a href={item.previewUrl} target="_blank" rel="noreferrer" className="mini-link">
                Video Demo
              </a>
            )
          ) : imageSrc && !hasImageError ? (
            <button
              type="button"
              className="mini-link mini-link-button"
              onClick={() => onOpenImage({ src: imageSrc, alt: item.imageAlt })}
            >
              Preview Cover
            </button>
          ) : (
            <span className="mini-link mini-link-muted">Video File Needed</span>
          )
        ) : item.previewUrl ? (
          <a href={item.previewUrl} target="_blank" rel="noreferrer" className="mini-link">
            Preview
          </a>
        ) : imageSrc && !hasImageError ? (
          <button
            type="button"
            className="mini-link mini-link-button"
            onClick={() => onOpenImage({ src: imageSrc, alt: item.imageAlt })}
          >
            Preview
          </button>
        ) : (
          <span className="mini-link mini-link-muted">Preview: Coming Soon</span>
        )}
      </div>
    </article>
  );
}

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMedia(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const skills = [
    "React",
    "Python",
    "C++",
    "PostgreSQL",
    "Telegram Bot API",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Video Editing",
    "Graphic Design"
  ];

  const projects = [
    {
      title: "Tenas Gym Website",
      description:
        "Developed a full-stack website for gym operations, member engagement, and service visibility. The platform improves user access to gym information and supports a smoother digital experience.",
      stack: "React, PostgreSQL, HTML, CSS, JavaScript",
      imageFile: "tenas-gym-cover.jpg",
      imageAlt: "Screenshot placeholder for Tenas Gym Website",
      demoUrl: "https://dagimalemayehu5595-hue.github.io/Tenas/",
      videoDemoUrl: "",
      outcomes: [
        "Built responsive pages for gym services, classes, and public information.",
        "Improved digital visibility for client services with clear call-to-action flows."
      ],
      deploymentStatus: "Live"
    },
    {
      title: "Samrawit Foundation Website",
      description:
        "Built a foundation website designed to communicate mission, programs, and public updates in a clean and trustworthy format. Focused on performance, readability, and maintainable structure.",
      stack: "React, HTML, CSS, JavaScript, Backend Integration",
      imageFile: "samrawit-foundation-cover.jpg",
      imageAlt: "Screenshot placeholder for Samrawit Foundation Website",
      demoUrl: "https://dagimalemayehu5595-hue.github.io/samrawit/",
      videoDemoUrl: "",
      outcomes: [
        "Structured mission and program pages for easier public communication.",
        "Implemented clean layout and content hierarchy for faster information access."
      ],
      deploymentStatus: "Live"
    },
    {
      title: "Gym Client Meal and Workout Bot",
      description:
        "Built an interactive Telegram bot in Python that sends personalized meal plans and workout plans to gym clients. The bot also tracks daily nutrition by collecting what clients eat through chat and helping monitor consistency and progress.",
      stack: "Python, Telegram Bot API",
      imageFile: "gym-bot-cover.jpg",
      imageAlt: "Screenshot placeholder for Gym Client Meal and Workout Bot",
      videoDemoUrl: "",
      outcomes: [
        "Automated meal and workout plan delivery for gym clients through Telegram chat.",
        "Enabled daily meal logging and follow-up prompts to support client consistency."
      ],
      deploymentStatus: "Coming Soon"
    }
  ];

  const creativeWork = [
    {
      title: "Bulbula Gym TikTok Video Edit",
      description:
        "Edited a TikTok promotional video for a gym in Bulbula to showcase the aerobics side of the gym. Focused on energetic pacing, smooth transitions, beat-matched cuts, and clear highlighting of the class atmosphere to attract and engage social media viewers.",
      category: "Video Editing",
      imageFile: "bulbula-gym-tiktok-cover.jpg",
      imageAlt: "Bulbula gym TikTok video edit cover placeholder",
      previewUrl: `${import.meta.env.BASE_URL}assets/bulbula-gym-tiktok-video.mp4`
    },
    {
      title: "Bulbula Gym Machines and Facility Showcase",
      description:
        "Edited a second gym video focused on showcasing the training machines and the overall beauty of the gym environment. Emphasized clean framing, smooth movement, and visual flow to present the facility in a professional and attractive way.",
      category: "Video Editing",
      imageFile: "bulbula-gym-machines-cover.jpg",
      imageAlt: "Bulbula gym machines and facility video cover placeholder",
      previewUrl: `${import.meta.env.BASE_URL}assets/bulbula-gym-machines-video.mp4`
    },
    {
      title: "Gym Aesthetic Video Edit",
      description:
        "Edited a video to highlight the gym's aesthetic, focusing on lighting, atmosphere, and the unique vibe of the space. The edit uses cinematic shots and color grading to emphasize the gym's visual appeal and inspire viewers.",
      category: "Video Editing",
      imageFile: "gym-aesthetic-cover.jpg",
      imageAlt: "Gym aesthetic video cover placeholder",
      previewUrl: `${import.meta.env.BASE_URL}assets/gym-aesthetic-video.mp4`
    },
    {
      title: "Gym Meal Cafe Menu Design (Bulbula)",
      description:
        "Designed a food and drink menu for a gym meal cafe in Bulbula with clear visual hierarchy, readable typography, and a clean brand-aligned layout.",
      category: "Graphic Design",
      imageFile: "bulbula-gym-cafe-menu-cover.jpg",
      imageAlt: "Bulbula gym meal cafe menu design placeholder",
      previewUrl: ""
    },
    {
      title: "Gym Promotion Design",
      description:
        "Created a promotional design for a gym campaign, focusing on bold visual hierarchy, clear offer messaging, and a strong fitness-oriented look to attract attention across social and print channels.",
      category: "Graphic Design",
      imageFile: "gym-promotion-design-cover.jpg",
      imageAlt: "Gym promotion design cover placeholder",
      previewUrl: ""
    }
  ];

  const experiences = [
    {
      role: "Full-Stack Developer",
      org: "Freelance and Academic Projects",
      period: "2024 - Present",
      details:
        "Delivered web platforms and automation features from UI to backend and data layer, with a focus on practical usability and clean implementation."
    },
    {
      role: "Telegram Bot Developer",
      org: "Client-Focused Python Solutions",
      period: "2024 - Present",
      details:
        "Designed and developed interactive Telegram bots for support workflows, status updates, and user-friendly command-based interactions."
    }
  ];

  const services = [
    {
      title: "Full-Stack Website Development",
      details: "Modern responsive websites with frontend, backend integration, and database support."
    },
    {
      title: "Telegram Bot Development",
      details: "Interactive Python bots for client communication, automation, and workflow support."
    },
    {
      title: "Video Editing",
      details: "Short-form social media edits, gym promotion videos, and branded storytelling content."
    },
    {
      title: "Graphic Design",
      details: "Promotional designs and menu layouts focused on readability, branding, and conversion."
    }
  ];

  const testimonials = [
    {
      quote: "Dagim delivered clean work, communicated clearly, and handled updates fast.",
      source: "Client Feedback Placeholder"
    },
    {
      quote: "Strong technical skills and practical problem-solving across web and bot development.",
      source: "Project Collaboration Placeholder"
    }
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>

      <header className="site-header">
        <a href="#home" className="logo" aria-label="Go to top">
          <img
            src={`${import.meta.env.BASE_URL}assets/favicon.svg`}
            alt="Dagim logo"
            className="logo-mark"
            width="28"
            height="28"
          />
          Dagim<span>.</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#creative">Creative Work</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="social-inline" aria-label="Social links">
          <a href="https://github.com/dagimalemayehu5595-hue" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="social-logo-link">
            <IconGithub />
          </a>
          <a href="https://t.me/dagi1755" target="_blank" rel="noreferrer" aria-label="Telegram profile" className="social-logo-link">
            <IconTelegram />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="hero container reveal">
          <div className="hero-text">
            <p className="kicker">Software Engineering + Economics</p>
            <h1>I build practical products that solve real business problems.</h1>
            <p>
              I am Dagim Alemayehu Nigatu, a software engineering student at Addis Ababa Science and Technology University and an economics
              student at Addis Ababa University. I build full-stack web applications and interactive Telegram bots with a strong focus on
              reliability, usability, and measurable impact.
            </p>
            <p className="availability">Available for internships, freelance work, and collaborative software projects.</p>
            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a
                href={`${import.meta.env.BASE_URL}assets/Dagim_Alemayehu_CV.pdf`}
                className="btn btn-ghost"
                download="Dagim_Alemayehu_CV.pdf"
              >
                Download CV (PDF)
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="photo-wrap">
              <img
                id="profilePhoto"
                src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                alt="Dagim Alemayehu Nigatu portrait"
                className="profile-animated"
                loading="eager"
                fetchPriority="high"
                width="640"
                height="800"
                style={{ display: photoLoaded ? "block" : "none" }}
                onLoad={() => setPhotoLoaded(true)}
              />
              {!photoLoaded && (
                <div className="photo-placeholder" id="photoPlaceholder" aria-label="Profile photo placeholder">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/young-face.svg`}
                    alt="Young face illustration placeholder"
                    className="avatar-illustration"
                  />
                  <p>Profile Photo Placeholder</p>
                  <small>Add your image in public/assets/profile.jpg</small>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="container panel reveal">
          <h2>About Me</h2>
          <p>
            I combine technical engineering and economics thinking to design solutions that are both functional and strategically useful.
            This helps me build software that is not only technically sound but also aligned with user and organizational value.
          </p>
          <p>
            My focus areas include full-stack website development, Python automation, and Telegram bot systems for interactive client
            communication and support. I also work on video editing and graphic design for digital branding and content presentation.
          </p>
        </section>

        <section id="skills" className="container panel reveal">
          <h2>Technical Skills</h2>
          <div className="chips" role="list" aria-label="Skill list">
            {skills.map((skill) => (
              <span key={skill} role="listitem">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="container panel reveal">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                project={project}
                key={project.title}
                onOpenImage={(media) => setActiveMedia({ type: "image", ...media })}
                onOpenVideo={(media) => setActiveMedia({ type: "video", ...media })}
              />
            ))}
          </div>
        </section>

        <section id="creative" className="container panel reveal">
          <h2>Creative Work</h2>
          <div className="creative-grid">
            {creativeWork.map((item) => (
              <CreativeCard
                item={item}
                key={item.title}
                onOpenImage={(media) => setActiveMedia({ type: "image", ...media })}
                onOpenVideo={(media) => setActiveMedia({ type: "video", ...media })}
              />
            ))}
          </div>
        </section>

        <section id="experience" className="container panel reveal">
          <h2>Experience</h2>
          <div className="edu-grid">
            {experiences.map((item) => (
              <article key={item.role + item.org} className="experience-card">
                <h3>{item.role}</h3>
                <p className="meta">
                  <strong>{item.org}</strong> | {item.period}
                </p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="container panel reveal">
          <h2>Services</h2>
          <div className="project-grid">
            {services.map((service) => (
              <article key={service.title} className="experience-card">
                <h3>{service.title}</h3>
                <p>{service.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="container panel reveal">
          <h2>Testimonials</h2>
          <div className="project-grid">
            {testimonials.map((item, idx) => (
              <article key={`${item.source}-${idx}`} className="experience-card testimonial-card">
                <p className="testimonial-quote">"{item.quote}"</p>
                <p className="testimonial-source">{item.source}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="container panel reveal">
          <h2>Education</h2>
          <div className="edu-grid">
            <article>
              <h3>Addis Ababa Science and Technology University</h3>
              <p>Software Engineering Student</p>
            </article>
            <article>
              <h3>Addis Ababa University</h3>
              <p>Economics Student</p>
            </article>
          </div>
        </section>

        <section id="contact" className="container panel reveal">
          <h2>Contact</h2>
          <p className="contact-intro">Open for internships, freelance work, and collaboration opportunities.</p>
          <p className="contact-intro">Typical response time: within 24 hours.</p>
          <div className="contact-actions-row">
            <a href="mailto:dagimalemayehu5596@gmail.com" className="btn btn-primary">Email Me</a>
            <a href="https://t.me/dagi1755" target="_blank" rel="noreferrer" className="btn btn-ghost">Message on Telegram</a>
          </div>
          <div className="contact-grid contact-grid-pro">
            <a href="tel:0930105595" className="contact-card-link">
              <span className="icon-inline"><IconPhone /></span>
              <span className="contact-meta-text">
                <span className="contact-title">Phone</span>
                <span className="contact-value">0930105595 / 0917923211</span>
              </span>
            </a>
            <a href="mailto:dagimalemayehu5596@gmail.com" className="contact-card-link">
              <span className="icon-inline"><IconMail /></span>
              <span className="contact-meta-text">
                <span className="contact-title">Email</span>
                <span className="contact-value">dagimalemayehu5596@gmail.com</span>
              </span>
            </a>
            <a href="https://t.me/dagi1755" target="_blank" rel="noreferrer" className="contact-card-link">
              <span className="icon-inline"><IconTelegram /></span>
              <span className="contact-meta-text">
                <span className="contact-title">Telegram</span>
                <span className="contact-value">@dagi1755</span>
              </span>
            </a>
            <a href="https://github.com/dagimalemayehu5595-hue" target="_blank" rel="noreferrer" className="contact-card-link">
              <span className="icon-inline"><IconGithub /></span>
              <span className="contact-meta-text">
                <span className="contact-title">GitHub</span>
                <span className="contact-value">dagimalemayehu5595-hue</span>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <p>© {year} Dagim Alemayehu Nigatu. All rights reserved.</p>
        <p className="footer-links">
          <a href="https://github.com/dagimalemayehu5595-hue" aria-label="GitHub" target="_blank" rel="noreferrer">
            <span className="icon-inline"><IconGithub /></span>
          </a>{" "}
          |{" "}
          <a href="https://t.me/dagi1755" aria-label="Telegram" target="_blank" rel="noreferrer">
            <span className="icon-inline"><IconTelegram /></span>
          </a>
        </p>
      </footer>

      {activeMedia && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Fullscreen media viewer" onClick={() => setActiveMedia(null)}>
          <button type="button" className="lightbox-close" onClick={() => setActiveMedia(null)} aria-label="Close media viewer">
            Close
          </button>
          {activeMedia.type === "video" ? (
            <video
              className="lightbox-video"
              src={activeMedia.src}
              controls
              autoPlay
              playsInline
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img className="lightbox-image" src={activeMedia.src} alt={activeMedia.alt} onClick={(event) => event.stopPropagation()} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
