
import { useState } from "react";
import "./App.css";
import RetailShopDemo from "./components/RetailShopDemo.jsx";

const projects = [
  {
    name: "VidNova",
    category: "VIDEO PLATFORM",
    status: "In development",
    description:
      "A video platform project focused on making supported video links easier to work with.",
    symbol: "▶",
    style: "vidnova",
  },
  {
    name: "AI Business Assistant",
    category: "AI AUTOMATION",
    status: "Planned",
    description:
      "An idea for helping businesses simplify repetitive tasks with intelligent automation.",
    symbol: "✳",
    style: "assistant",
  },
  {
    name: "Smart Pharmacy",
    category: "INVENTORY TECHNOLOGY",
    status: "Concept",
    description:
      "Exploring smarter ways to count, verify, and manage pharmacy inventory.",
    symbol: "◇",
    style: "pharmacy",
  },
  {
    name: "Business Website Demo",
    category: "WEB DEVELOPMENT",
    status: "Planned",
    description:
      "A modern business website concept designed for a clear, professional online presence.",
    symbol: "⌘",
    style: "business",
  },
  {
    name: "Retail Shop Demo",
    category: "E-COMMERCE",
    status: "Interactive demo",
    description:
      "An interactive sample shop with product search, category filters, a shopping basket, and WhatsApp enquiries.",
    symbol: "🛍",
    style: "business",
    link: "#retail-demo",
  },
];

const services = [
  {
    icon: "◈",
    title: "Web Development",
    description:
      "Responsive, accessible websites designed for real people and real businesses.",
  },
  {
    icon: "✳",
    title: "AI Automation",
    description:
      "Explore practical ways to reduce repetitive work and improve workflows.",
  },
  {
    icon: "⌘",
    title: "Digital Solutions",
    description:
      "Turn useful ideas into digital products through careful planning and development.",
  },
];

function App() {
  const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  phone: "",
  service: "Web Development",
  budget: "Not sure yet",
  details: "",
});

  const [activeProject, setActiveProject] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const moveProject = (direction) => {
    setActiveProject(
      (current) =>
        (current + direction + projects.length) % projects.length
    );
  };

  return (
    <div className="site-shell" id="top">
      <header className="navbar">
        <a className="brand" href="#top" aria-label="Evatech home">
          <span className="brand-diamond">◆</span>
          <span>EVATECH</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#retail-demo">Retail Demo</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <button className="nav-contact" type="button" onClick={() => setIsContactOpen(true)}>
            Let's talk <span>↗</span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              TECHNOLOGY WITH A PURPOSE
            </div>

            <h1>
              Ideas into
              <br />
              <span>digital reality.</span>
            </h1>

            <p className="hero-description">
              We are building Evatech around modern websites, practical AI
              automation, and digital solutions designed to solve real problems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore our work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#about">
                Discover Evatech
              </a>
            </div>

            <div className="hero-note">
              <span className="diamond-small">◆</span>
              A growing technology brand. Built one project at a time.
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract purple diamond artwork">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="diamond-glow" />
            <div className="main-diamond">
              <span>◆</span>
            </div>
            <div className="floating-label label-top">
              <span className="label-dot" />
              WEB DEVELOPMENT
            </div>
            <div className="floating-label label-bottom">
              <span className="label-dot cyan-dot" />
              AI & AUTOMATION
            </div>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE FOCUS ON</p>
              <h2>Technology that <span>moves ideas forward.</span></h2>
            </div>
            <p className="section-intro">
              Practical digital work, thoughtful design, and a commitment to
              learning as we build.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  type="button"
                  className="text-link service-discuss-button"
                  onClick={() => {
                    setContactForm({
                      ...contactForm,
                      service:
                        service.title === "Digital Solutions"
                          ? "Other / Not sure yet"
                          : service.title,
                    });
                    setIsContactOpen(true);
                  }}
                >
                  Discuss a project <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <RetailShopDemo />

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">SELECTED WORK & IDEAS</p>
              <h2>Projects in <span>progress.</span></h2>
            </div>
            <div className="carousel-controls">
              <button
                type="button"
                onClick={() => moveProject(-1)}
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => moveProject(1)}
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>

          <div className="carousel-window">
            <div
              className="project-track"
              style={{ transform: `translateX(-${activeProject * 100}%)` }}
            >
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className={`project-art ${project.style}`}>
                    <span className="project-symbol">{project.symbol}</span>
                    <span className="project-art-name">{project.name}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <div className="project-info">
                    <div className="project-title-row">
                      <h3>{project.name}</h3>
                      <span className="project-status">{project.status}</span>
                    </div>
                    <p>{project.description}</p>
                    {project.link && (
                      <a className="text-link project-demo-link" href={project.link}>
                        View Demo <span>↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="carousel-dots" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.name}
                className={index === activeProject ? "active" : ""}
                onClick={() => setActiveProject(index)}
                aria-label={`Show ${project.name}`}
                aria-current={index === activeProject ? "true" : undefined}
              />
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-visual">
            <img
              src="/images/evatech-founder.png"
              alt="Founder of Evatech"
              loading="lazy"
            />
          </div>

          <div className="about-copy">
            <p className="eyebrow">ABOUT EVATECH</p>
            <h2>Built on curiosity. <span>Driven by real problems.</span></h2>
            <p>
              EVATECH is a growing technology brand focused on web development,
              practical AI automation, and useful digital solutions. We aim to
              help businesses build a stronger online presence, simplify
              repetitive tasks, and turn ideas into working products.
            </p>
            <p>
              Our approach is practical: understand the problem, build a
              suitable solution, test it, and improve it over time.
            </p>
            <button className="button button-secondary" type="button" onClick={() => setIsContactOpen(true)}>
              Let's discuss your idea <span>↗</span>
            </button>
          </div>
        </section>

        {isContactOpen && (
          <div className="contact-modal-overlay" onClick={() => setIsContactOpen(false)}>
            <section className="contact-section section-wrap contact-modal" id="contact" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
              <div className="contact-panel" onClick={(event) => event.stopPropagation()}>
                <button className="contact-modal-close" type="button" aria-label="Close contact form" onClick={() => setIsContactOpen(false)}>×</button>
            <p className="eyebrow">HAVE AN IDEA?</p>
            <h2 id="contact-modal-title">Let's build something <span>meaningful.</span></h2>
            <p>
              Tell us what you need. Choose email or WhatsApp to send your
              project enquiry.
            </p>

            <form
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="form-grid">
                <label className="form-field">
                  Your name *
                  <input
                    name="name"
                    value={contactForm.name}
                    onChange={(event) =>
                      setContactForm({ ...contactForm, name: event.target.value })
                    }
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="form-field">
                  Email address *
                  <input
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={(event) =>
                      setContactForm({ ...contactForm, email: event.target.value })
                    }
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="form-field">
                  Phone or WhatsApp number (optional)
                  <input
                    name="phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={(event) =>
                      setContactForm({ ...contactForm, phone: event.target.value })
                    }
                    placeholder="Your phone number"
                    autoComplete="tel"
                  />
                </label>

                <label className="form-field">
                  Service needed *
                  <select
                    name="service"
                    value={contactForm.service}
                    onChange={(event) =>
                      setContactForm({ ...contactForm, service: event.target.value })
                    }
                    required
                  >
                    <option>Web Development</option>
                    <option>AI Automation</option>
                    <option>Digital Solutions</option>
                    <option>Other / Not sure yet</option>
                  </select>
                </label>

                <label className="form-field">
                  Estimated budget
                  <select
                    name="budget"
                    value={contactForm.budget}
                    onChange={(event) =>
                      setContactForm({ ...contactForm, budget: event.target.value })
                    }
                  >
                    <option>Not sure yet</option>
                    <option>₦100,000–₦200,000</option>
                    <option>₦200,000–₦500,000</option>
                    <option>₦500,000–₦1,000,000</option>
                    <option>Above ₦1,000,000</option>
                    <option>Prefer to discuss first</option>
                  </select>
                </label>

                <label className="form-field form-field-wide">
                  Tell us about your project *
                  <textarea
                    name="details"
                    value={contactForm.details}
                    onChange={(event) =>
                      setContactForm({ ...contactForm, details: event.target.value })
                    }
                    placeholder="What would you like EVATECH to help you build or improve?"
                    rows={5}
                    required
                  />
                </label>
              </div>

              <p className="contact-form-note">
                Budget ranges are indicative, not fixed prices. Your message
                will open in your chosen app for you to review and send.
              </p>

              <div className="contact-actions">
                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => {
                    const message = [
                      "EVATECH PROJECT ENQUIRY",
                      "",
                      `Name: ${contactForm.name}`,
                      `Email: ${contactForm.email}`,
                      `Phone: ${contactForm.phone || "Not provided"}`,
                      `Service: ${contactForm.service}`,
                      `Budget: ${contactForm.budget}`,
                      `Project details: ${contactForm.details}`,
                    ].join("\n");
                    const url = `https://wa.me/2349067782204?text=${encodeURIComponent(message)}`;
                    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.details.trim()) {
                      alert("Please complete your name, email, and project details first.");
                      return;
                    }
                    window.open(url, "_blank", "noopener,noreferrer");
                  }}
                >
                  WhatsApp 1 <span>↗</span>
                </button>

                <button
                  className="button button-secondary"
                  type="button"
                  onClick={() => {
                    const message = [
                      "EVATECH PROJECT ENQUIRY",
                      "",
                      `Name: ${contactForm.name}`,
                      `Email: ${contactForm.email}`,
                      `Phone: ${contactForm.phone || "Not provided"}`,
                      `Service: ${contactForm.service}`,
                      `Budget: ${contactForm.budget}`,
                      `Project details: ${contactForm.details}`,
                    ].join("\n");
                    const url = `https://wa.me/2348111019627?text=${encodeURIComponent(message)}`;
                    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.details.trim()) {
                      alert("Please complete your name, email, and project details first.");
                      return;
                    }
                    window.open(url, "_blank", "noopener,noreferrer");
                  }}
                >
                  WhatsApp 2 <span>↗</span>
                </button>

                <button
                  className="button button-secondary"
                  type="button"
                  onClick={() => {
                    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.details.trim()) {
                      alert("Please complete your name, email, and project details first.");
                      return;
                    }
                    const subject = encodeURIComponent("EVATECH project enquiry");
                    const body = encodeURIComponent([
                      "EVATECH PROJECT ENQUIRY",
                      "",
                      `Name: ${contactForm.name}`,
                      `Email: ${contactForm.email}`,
                      `Phone: ${contactForm.phone || "Not provided"}`,
                      `Service: ${contactForm.service}`,
                      `Budget: ${contactForm.budget}`,
                      `Project details: ${contactForm.details}`,
                    ].join("\n"));
                    window.location.href = `mailto:Evatech@gmail.com?subject=${subject}&body=${body}`;
                  }}
                >
                  Email EVATECH <span>↗</span>
                </button>
              </div>
            </form>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="footer">
        <a className="brand" href="#top">
          <span className="brand-diamond">◆</span>
          <span>EVATECH</span>
        </a>
        <p>Building smarter digital experiences.</p>
        <div className="footer-contact">
          <p>
            <strong>Location:</strong> AKSU Perm Site, Akwa Ibom State, Nigeria
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:Evatech@gmail.com">Evatech@gmail.com</a>
          </p>
        </div>
        <span className="footer-copy">
          © {new Date().getFullYear()} Evatech
        </span>
      </footer>
    </div>
  );
}

export default App;


