import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Code2, Database, Menu, MousePointer2, X } from 'lucide-react';
import { disciplines } from './data';
import { CustomCursor, FloatingHomeButton, Navigation } from './components/ui';
import { Hero, About, Thinking, Work, Systems, DataSection, Playground, Contact, CaseStudy } from './components/sections';
import './styles.css';
import './case-study.css';

function App() {
  const [activeDiscipline, setActiveDiscipline] = useState(Object.keys(disciplines)[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playValue, setPlayValue] = useState(56);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      <Navigation isCaseStudy={Boolean(selectedProject)} open={menuOpen} onToggle={() => setMenuOpen(value => !value)} onNavigate={() => setMenuOpen(false)} onHome={() => setSelectedProject(null)} />
      <FloatingHomeButton onHome={() => setSelectedProject(null)} />
      {selectedProject ? <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} onNextProject={setSelectedProject} /> : <main id="top">
        <Hero active={activeDiscipline} onChange={setActiveDiscipline} />
        <About />
        <Thinking />
        <Work onOpenProject={setSelectedProject} />
        <Systems icons={{ user: <MousePointer2 />, default: <Code2 />, database: <Database /> }} />
        <DataSection />
        <Playground value={playValue} onChange={setPlayValue} />
        <Contact />
      </main>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
