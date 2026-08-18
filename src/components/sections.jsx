import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Dribbble,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  caseStudyContent,
  disciplines,
  pipeline,
  principles,
  projects,
  timeline,
} from "../data";
import { ButtonLink, Reveal, SectionLabel } from "./ui";

export function Hero({ active, onChange }) {
  const current = disciplines[active];
  return (
    <section className="hero section-pad">
      <Reveal className="hero-copy">    
        <h1>
          Designing the <em>space</em> between ideas and impact.
        </h1>
        <p className="hero-sub">
          Product designer, full-stack developer, project manager and data
          engineering learner. I work at the intersection of{" "}
          <strong>people, products and systems.</strong>
        </p>
        <div className="hero-actions">
          <ButtonLink href="#work">Explore my work</ButtonLink>
          <a className="text-link" href="#contact">
            Let’s work together <span>↗</span>
          </a>
        </div>
      </Reveal>
      <Reveal className="hero-orbit-wrap">
        <div className={"hero-orbit " + current.color}>
          <div className="orbit-grid" />
          <div className="orbit-center">
            <span>ME</span>
            <small>DESIGN · TECH · DATA</small>
          </div>
          {["PRODUCT", "PEOPLE", "DATA", "SYSTEMS"].map((label, index) => (
            <span className={"orbit-node node-" + index} key={label}>
              {label}
            </span>
          ))}
          <div className="orbit-line line-1" />
          <div className="orbit-line line-2" />
          <div className="orbit-line line-3" />
        </div>
      </Reveal>
      <Reveal className="discipline-panel" delay={120}>
        <div>
          <span className="small-label">I AM A</span>
          <div className="discipline-name">{active}</div>
          <p>
            {current.eyebrow}
            <br />
            <span>{current.text}</span>
          </p>
        </div>
        <div className="discipline-tabs">
          {Object.keys(disciplines).map((item, index) => (
            <button
              className={active === item ? "active" : ""}
              key={item}
              onClick={() => onChange(item)}
            >
              <span>0{index + 1}</span>
              {item}
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function About({ selectedStage, onSelectStage }) {
  return (
    <section id="about" className="intro section-pad">
      <SectionLabel number="02">A LITTLE CONTEXT</SectionLabel>
      <Reveal className="intro-layout">
        <h2>
          One foot in the <span className="scribble">creative</span> world.
          <br />
          One in the <span className="underline">technical.</span>
        </h2>
        <div className="intro-copy">
          <p>
            My work has always lived in the overlap — the place where a good
            question meets a practical build. I like turning complexity into
            something people can understand, use and come back to.
          </p>
          <a href="#thinking" className="arrow-link">
            More about my approach <ChevronRight size={18} />
          </a>
        </div>
      </Reveal>
      <Reveal className="timeline" delay={120}>
        <div className="timeline-track" />
        <div className="timeline-items">
          {timeline.map(([name, description], index) => (
            <button
              className={
                selectedStage === index
                  ? "timeline-item selected"
                  : "timeline-item"
              }
              key={name}
              onClick={() => onSelectStage(index)}
            >
              <span>0{index + 1}</span>
              <b>{name}</b>
              <small>
                {selectedStage === index ? description : "click to explore"}
              </small>
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Thinking() {
  return (
    <section id="thinking" className="thinking section-pad dark-section">
      <SectionLabel number="03" light>
        HOW I THINK
      </SectionLabel>
      <Reveal className="thinking-header">
        <h2>
          I don’t just design screens.
          <br />
          <span>I design systems.</span>
        </h2>
        <p>
          The best work happens when empathy, strategy and execution are in the
          same room.
        </p>
      </Reveal>
      <Reveal className="principles" delay={100}>
        {principles.map(([number, title, description]) => (
          <div className="principle" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <ArrowUpRight size={18} />
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export function Work({ onOpenProject }) {
  return (
    <section id="work" className="work section-pad">
      <SectionLabel number="04" suffix="A FEW THINGS I’VE MADE ↘">
        SELECTED WORK
      </SectionLabel>
      <Reveal className="work-heading">
        <h2>
          Work with a point
          <br />
          <em>of view.</em>
        </h2>
        <p>
          Selected projects across product design, engineering and the territory
          in between.
        </p>
      </Reveal>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal
            className="project-reveal"
            delay={index * 80}
            key={project.name}
          >
            <ProjectCard
              project={project}
              onOpen={() => onOpenProject(project)}
            />
          </Reveal>
        ))}
      </div>
      <Reveal className="center-link" delay={140}>
        <ButtonLink outline>See all projects</ButtonLink>
      </Reveal>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className={"project-card " + project.type}>
      <div className="project-visual">
        <div className="visual-top">
          <span>{project.number} / 07</span>
          <span>{project.category}</span>
        </div>
        <div className="visual-art">
          <ProjectArtwork kind={project.kind} />
        </div>
        <div className="visual-bottom">
          <span>{project.tags.join(" · ")}</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </div>
      </div>
      <div className="project-info">
        <span className="small-label">{project.status}</span>
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <button
          type="button"
          className="case-link case-button"
          onClick={onOpen}
        >
          View case study <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function ProjectArtwork({ kind }) {
  if (kind === "audit")
    return (
      <div className="thumb-phone">
        <div className="thumb-notch" />
        <div className="thumb-screen">
          <small>UX AUDIT</small>
          <div className="thumb-warning">!</div>
          <b>Friction found</b>
          <span>iOS · Android</span>
        </div>
      </div>
    );
  if (kind === "workflow")
    return (
      <div className="thumb-workflow">
        <span>CONTRACT</span>
        <i>→</i>
        <span>VALIDATE</span>
        <i>→</i>
        <span>INVOICE</span>
        <b>one connected flow</b>
      </div>
    );
  if (kind === "design-system")
    return (
      <div className="thumb-system">
        <div className="thumb-tokens">
          <i />
          <i />
          <i />
        </div>
        <div className="thumb-components">
          <b>BUTTON</b>
          <span>INPUT</span>
          <em>CARD</em>
        </div>
        <small>ATOMS → PRODUCT</small>
      </div>
    );
  if (kind === "mobile")
    return (
      <div className="thumb-capture">
        <div className="thumb-lens" />
        <span>360°</span>
        <b>CAPTURE / REVIEW</b>
      </div>
    );
  if (kind === "roadmap")
    return (
      <div className="thumb-roadmap">
        {["BACKLOG", "DESIGN", "BUILD", "RELEASE"].map((item, index) => (
          <div key={item}>
            <small>0{index + 1}</small>
            <b>{item}</b>
          </div>
        ))}
      </div>
    );
  if (kind === "snapshots")
    return (
      <div className="thumb-snapshots">
        <div />
        <div />
        <div />
      </div>
    );
  return (
    <>
      <div className="data-bars">
        {[30, 58, 42, 80, 65, 92, 72].map((height, index) => (
          <i style={{ height: height + "%" }} key={index} />
        ))}
      </div>
      <div className="data-label">DATA → ACTION</div>
    </>
  );
}

function CaseStudyVisual({ kind }) {
  if (kind === "workflow")
    return (
      <div className="case-visual workflow-visual">
        <span>BEFORE</span>
        <b>Manual processes</b>
        <i>↓</i>
        <b>Multiple systems</b>
        <i>↓</i>
        <b>Billing friction</b>
        <div className="workflow-after">
          <span>AFTER</span>
          <b>Centralized contracts</b>
          <i>↓</i>
          <b>Connected invoice flow</b>
          <i>↓</i>
          <b>Improved traceability</b>
        </div>
      </div>
    );
  if (kind === "roadmap")
    return (
      <div className="case-visual roadmap-visual">
        {[
          "BACKLOG",
          "PRIORITIZED",
          "IN DESIGN",
          "IN DEVELOPMENT",
          "TESTING",
          "RELEASED",
        ].map((stage, index) => (
          <div className="roadmap-stage" key={stage}>
            <small>0{index + 1}</small>
            <b>{stage}</b>
            <span>
              {index < 2 ? "feature" : index < 5 ? "in progress" : "shipped"}
            </span>
          </div>
        ))}
      </div>
    );
  if (kind === "design-system")
    return (
      <div className="case-visual atoms-visual">
        <div>
          <b>ATOMS</b>
          <span>Type · Color · Spacing</span>
        </div>
        <i>↓</i>
        <div>
          <b>MOLECULES</b>
          <span>Inputs · Buttons · Cards</span>
        </div>
        <i>↓</i>
        <div>
          <b>ORGANISMS</b>
          <span>Forms · Tables · Navigation</span>
        </div>
        <i>↓</i>
        <div className="atoms-product">
          <b>PRODUCT</b>
          <span>Scalable enterprise interfaces</span>
        </div>
      </div>
    );
  if (kind === "dashboard") return <DashboardPreview />;
  if (kind === "mobile") return <MobilePreview />;
  if (kind === "snapshots") return <SnapshotPreview />;
  return (
    <div className="case-visual audit-visual">
      <span>CURRENTLY IN PROGRESS</span>
      <div className="audit-screen">
        <i />
        <i />
        <i />
        <b>UX AUDIT / iOS + ANDROID</b>
      </div>
      <small>Existing experience → Findings → Redesign exploration</small>
    </div>
  );
}

function SnapshotPreview() {
  return (
    <div className="case-visual snapshots-visual">
      <div className="snapshot-frame frame-one">
        <span>FIGMA / 01</span>
        <div className="snapshot-nav" />
        <div className="snapshot-block" />
        <div className="snapshot-lines" />
      </div>
      <div className="snapshot-frame frame-two">
        <span>FIGMA / 02</span>
        <div className="snapshot-avatar" />
        <b>Design system study</b>
        <small>Components / tokens / states</small>
      </div>
      <div className="snapshot-frame frame-three">
        <span>FIGMA / 03</span>
        <div className="snapshot-chart">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <b>Dashboard exploration</b>
      </div>
      <p>FIGMA SNAPSHOTS / SELECTED EXPLORATIONS</p>
    </div>
  );
}

function DashboardPreview() {
  const [activeMetric, setActiveMetric] = useState("Focus time");
  const metrics = [
    ["Focus time", "42h", "Time spent in focused work"],
    ["Tasks completed", "86%", "Progress against assigned tasks"],
    ["On track", "24", "People currently on track"],
  ];
  return (
    <div className="case-visual dashboard-visual">
      <div className="dashboard-top">
        <span>PMMD / PRODUCTIVITY OVERVIEW</span>
        <span>THIS MONTH ↗</span>
      </div>
      <div className="metric-grid">
        {metrics.map(([label, value, detail]) => (
          <button
            type="button"
            className={
              activeMetric === label ? "metric-card active" : "metric-card"
            }
            key={label}
            onClick={() => setActiveMetric(label)}
          >
            <small>{label}</small>
            <b>{value}</b>
            <span>{activeMetric === label ? detail : "select metric"}</span>
          </button>
        ))}
      </div>
      <div className="dashboard-chart">
        <div className="chart-bars">
          {[32, 54, 44, 68, 57, 83, 74, 92].map((height, index) => (
            <i style={{ height: height + "%" }} key={index} />
          ))}
        </div>
        <span>DATA → INFORMATION → INSIGHT → ACTION</span>
      </div>
    </div>
  );
}

function MobilePreview() {
  const [screen, setScreen] = useState(0);
  const screens = [
    "READY TO RECORD",
    "CAPTURE IN PROGRESS",
    "REVIEW YOUR VIDEO",
  ];
  return (
    <div className="case-visual mobile-visual">
      <div className="phone-shell">
        <div className="phone-notch" />
        <div className="phone-screen">
          <small>CAPTIVR</small>
          <div className="phone-sphere" />
          <b>{screens[screen]}</b>
          <button
            type="button"
            onClick={() => setScreen((screen + 1) % screens.length)}
          >
            {screen === 0 ? "Start recording" : "Continue"}
          </button>
          <span>Screen {screen + 1} / 3</span>
        </div>
      </div>
      <p>Tap the device to explore the recording workflow.</p>
    </div>
  );
}

function CapabilityBadge({ label, details }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="capability">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <p>{details}</p>}
    </div>
  );
}

function DesignSnapshotsSection({ project }) {
  const [selectedSnapshot, setSelectedSnapshot] = useState(null);
  const labels = {
    audit: ["Audit board", "Mobile flow", "Before / after"],
    workflow: ["Contract flow", "Invoice table", "Validation state"],
    "design-system": ["Design tokens", "Component set", "Enterprise layout"],
    dashboard: ["KPI overview", "Analytics view", "Progress state"],
    mobile: ["Capture flow", "Recording state", "Review screen"],
    roadmap: ["Learning path", "Course view", "Progress state"],
  }[project.kind] || ["UI exploration", "Interaction study", "Visual system"];
  const changeSnapshot = (direction) => {
    const nextIndex =
      (selectedSnapshot.index + direction + labels.length) % labels.length;
    setSelectedSnapshot({ label: labels[nextIndex], index: nextIndex });
  };
  return (
    <section id="case-snapshots" className="design-snapshots">
      <span className="case-number">SNAP</span>
      <div>
        <h3>Design snapshots</h3>
        <p>
          Selected UI explorations for {project.name}, created in Figma. Replace
          these example frames with exported designs or Figma embeds as the case
          study evolves.
        </p>
        <div className="snapshot-gallery">
          {labels.map((label, index) => (
            <button
              type="button"
              className={`gallery-frame gallery-${index + 1}`}
              key={label}
              onClick={() => setSelectedSnapshot({ label, index })}
              aria-label={`Open ${label} design snapshot`}
            >
              <span>FIGMA / 0{index + 1}</span>
              <div className="gallery-art">
                <i />
                <i />
                <i />
              </div>
              <figcaption>{label}</figcaption>
            </button>
          ))}
        </div>
      </div>
      {selectedSnapshot && (
        <div
          className="snapshot-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedSnapshot.label} design snapshot`}
          onClick={() => setSelectedSnapshot(null)}
        >
          <div
            className={`lightbox-frame gallery-${selectedSnapshot.index + 1}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedSnapshot(null)}
              aria-label="Close design snapshot"
            >
              ×
            </button>
            <button
              type="button"
              className="lightbox-arrow lightbox-prev"
              onClick={() => changeSnapshot(-1)}
              aria-label="View previous design snapshot"
            >
              ←
            </button>
            <button
              type="button"
              className="lightbox-arrow lightbox-next"
              onClick={() => changeSnapshot(1)}
              aria-label="View next design snapshot"
            >
              →
            </button>
            <span>FIGMA / 0{selectedSnapshot.index + 1}</span>
            <div className="lightbox-art">
              <i />
              <i />
              <i />
            </div>
            <h4>{selectedSnapshot.label}</h4>
            <p>{project.name} · Design snapshot</p>
          </div>
        </div>
      )}
    </section>
  );
}

export function CaseStudy({ project, onClose, onNextProject }) {
  const closeRef = useRef(null);
  const content = caseStudyContent[project.kind];
  const [activeSection, setActiveSection] = useState(content.sections[0][0]);
  useEffect(() => setActiveSection(content.sections[0][0]), [project.name]);
  useEffect(() => {
    closeRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);
  useEffect(() => {
    const sectionElements = content.sections
      .map(([id]) => document.getElementById("case-" + id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id.replace("case-", ""));
      },
      { rootMargin: "-18% 0px -65% 0px", threshold: [0.1, 0.4, 0.8] }
    );
    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [content.sections]);
  const currentIndex = projects.findIndex((item) => item.name === project.name);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <main
      id="top"
      className="case-study-page"
      aria-labelledby="case-study-title"
    >
      <article className="case-study">
        <header className="case-header">
          <div>
            <span className="small-label">
              {project.number} / 06 · {project.status}
            </span>
            <h2 id="case-study-title">{project.name}</h2>
          </div>
          <button
            className="case-close"
            type="button"
            ref={closeRef}
            onClick={onClose}
            aria-label="Back to selected work"
          >
            ×
          </button>
        </header>
        <div className="case-layout">
          <aside className="case-nav" aria-label="Case study sections">
            <span>CONTENTS</span>
            {content.sections.map(([id, title], index) => (
              <a
                className={activeSection === id ? "active" : ""}
                href={"#case-" + id}
                aria-current={activeSection === id ? "location" : undefined}
                key={id}
              >
                {String(index + 1).padStart(2, "0")} {title}
              </a>
            ))}
          </aside>
          <div className="case-content">
            <Reveal className="case-hero">
              <div>
                <span className="small-label">{project.category}</span>
                <h1>{content.title}</h1>
                <p>{content.summary}</p>
                <div className="case-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="case-meta">
                <span>PROJECT STATUS</span>
                <b>{project.status}</b>
                <span>ROLE / CONTRIBUTION</span>
                <p>{content.contribution}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <CaseStudyVisual kind={project.kind} />
            </Reveal>
            <Reveal className="case-capabilities" delay={160}>
              <CapabilityBadge
                label="PRODUCT THINKING"
                details={content.focus.join(" · ")}
              />
              <CapabilityBadge
                label={
                  project.kind === "dashboard"
                    ? "DATA-DRIVEN"
                    : "PROCESS & DELIVERY"
                }
                details="Requirements · stakeholders · validation · iteration"
              />
            </Reveal>
            <div className="case-story">
              {content.sections.map(([id, title, body]) =>
                id === "snapshots" ? (
                  <DesignSnapshotsSection project={project} key={id} />
                ) : (
                  <Reveal className="case-story-reveal" key={id}>
                    <section id={"case-" + id}>
                      <span className="case-number">
                        {String(
                          content.sections.findIndex(
                            (section) => section[0] === id
                          ) + 1
                        ).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{title}</h3>
                        <p>{body}</p>
                      </div>
                    </section>
                  </Reveal>
                )
              )}
            </div>
            <div className="case-actions">
              <button
                className="button button-outline back-to-work"
                type="button"
                onClick={onClose}
              >
                ← Back to selected work
              </button>
              <button
                className="button button-dark next-project"
                type="button"
                onClick={() => onNextProject(nextProject)}
              >
                Next project <span>{nextProject.name} →</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export function Systems({ icons }) {
  const layers = ["USER", "FRONTEND", "API", "DATABASE", "INFRASTRUCTURE"];
  return (
    <section className="systems section-pad">
      <SectionLabel number="05">THE OTHER HALF</SectionLabel>
      <Reveal className="systems-heading">
        <h2>
          Design is only
          <br />
          <em>half the story.</em>
        </h2>
        <p>
          I also build. Here’s how the pieces connect from a user’s first click
          to the data underneath.
        </p>
      </Reveal>
      <Reveal className="architecture" delay={120}>
        <div className="arch-flow">
          {layers.map((layer, index) => (
            <div className="arch-layer" key={layer}>
              <div className="arch-icon">
                {index === 0
                  ? icons.user
                  : index === 3
                  ? icons.database
                  : icons.default}
              </div>
              <span>0{index + 1}</span>
              <b>{layer}</b>
              {index < 4 && <i>↓</i>}
            </div>
          ))}
        </div>
        <div className="architecture-note">
          <span className="live-dot" /> a system in motion
          <div className="terminal">
            <span>robert@studio:~$</span>
            <br />
            ship --with --intention
            <br />
            <b>✓ deployment ready</b>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function DataSection() {
  return (
    <section className="data-section section-pad dark-section">
      <SectionLabel number="06" suffix="CURRENTLY LEARNING ↗" light>
        THE NEXT LAYER: DATA
      </SectionLabel>
      <Reveal className="data-heading">
        <h2>
          From raw information
          <br />
          to <em>useful insight.</em>
        </h2>
        <p>
          I’m expanding my engineering toolkit into data — learning how
          thoughtful pipelines make better decisions possible.
        </p>
      </Reveal>
      <Reveal className="pipeline" delay={120}>
        {pipeline.map(([name, description], index) => (
          <React.Fragment key={name}>
            <div className="pipe-stage">
              <span>0{index + 1}</span>
              <b>{name}</b>
              <small>{description}</small>
              <div className="pipe-node" />
            </div>
            {index < pipeline.length - 1 && <div className="pipe-arrow">→</div>}
          </React.Fragment>
        ))}
      </Reveal>
      <Reveal className="learning-map" delay={180}>
        <span>MY LEARNING MAP</span>
        {[
          "FOUNDATIONS",
          "SQL",
          "PYTHON",
          "DATA MODELING",
          "ETL",
          "WAREHOUSING",
          "PIPELINES",
        ].map((item, index) => (
          <div key={item} className={index < 3 ? "map-chip done" : "map-chip"}>
            {item}
            {index < 3 && " ✓"}
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export function Playground({ value, onChange }) {
  return (
    <section id="playground" className="playground section-pad">
      <SectionLabel number="07" suffix="NO REAL WORK HAPPENS HERE ↘">
        THE PLAYGROUND
      </SectionLabel>
      <Reveal className="play-heading">
        <h2>
          A place to <em>play</em>
          <br />
          with ideas.
        </h2>
        <p>
          Small experiments, visual thoughts and things that make me curious.
        </p>
      </Reveal>
      <Reveal className="play-grid" delay={120}>
        <div className="play-card color-card">
          <span className="small-label">COLOR / 001</span>
          <div className="color-orb" />
          <h3>
            Find your
            <br />
            next color.
          </h3>
          <div className="color-swatch">
            <i />
            <i />
            <i />
            <span>#F06E3C</span>
          </div>
        </div>
        <div className="play-card chart-card">
          <span className="small-label">DATA / 002</span>
          <h3>
            A tiny chart
            <br />
            with a big mood.
          </h3>
          <div className="chart-lines">
            <div className="chart-line line-a" />
            <div className="chart-line line-b" />
            <div className="chart-axis" />
          </div>
          <input
            type="range"
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
          <div className="chart-value">
            {value}
            <small> / curiosity level</small>
          </div>
        </div>
        <div className="play-card type-card">
          <span className="small-label">TYPE / 003</span>
          <div
            className="type-sample"
            style={{ fontSize: 20 + value / 5 + "px" }}
          >
            Aa
          </div>
          <h3>
            Make it
            <br />
            <span>feel right.</span>
          </h3>
          <a href="#playground">adjust the feeling ↗</a>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      label: "Dribbble",
      href: "https://dribbble.com/robert_sam",
      icon: <Dribbble aria-hidden="true" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/robert-s-8498b21a7/",
      icon: <Linkedin aria-hidden="true" />,
    },
    {
      label: "X",
      href: "https://x.com/robertsam_",
      icon: (
        <span className="x-icon" aria-hidden="true">
          𝕏
        </span>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/233208597629?text=Hi%20Robert%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
      icon: <MessageCircle aria-hidden="true" />,
    },
  ];
  return (
    <section id="contact" className="contact section-pad">
      <SectionLabel number="08">YOUR MOVE</SectionLabel>
      <Reveal className="contact-inner">
        <p className="kicker">HAVE A GOOD PROBLEM?</p>
        <h2>
          Let’s make
          <br />
          <em>something useful.</em>
        </h2>
        <div className="contact-intro">
          <p>
            Have an idea, a product challenge, or simply want to compare notes?
            I’d love to hear from you.
          </p>
          <a className="contact-email" href="mailto:robertksam2000@gmail.com">
            <Mail size={19} aria-hidden="true" /> robertksam2000@gmail.com{" "}
            <ArrowUpRight size={21} aria-hidden="true" />
          </a>
        </div>
        <div className="social-links" aria-label="Social media links">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              className="social-link"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit Robert Sam on ${label}`}
            >
              <span>{icon}</span>
              <b>{label}</b>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
        <footer className="contact-footer">
          <div className="footer-brand">
            <span className="brand-mark">RS</span>
            <div>
              <b>Robert Sam</b>
              <small>Design · technology · data</small>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#playground">Playground</a>
            <a href="mailto:robertksam2000@gmail.com">Email me</a>
          </nav>
          <div className="footer-meta">
            <span>© {year} ROBERT SAM</span>
          </div>
        </footer>
      </Reveal>
    </section>
  );
}
