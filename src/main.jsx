import React, { useEffect, useState } from 'react';
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
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', darkMode ? '#171715' : '#f4f1eb');
  }, [darkMode]);

  return (
    <div className={darkMode ? 'site-shell dark-mode' : 'site-shell'}>
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      <Navigation isCaseStudy={Boolean(selectedProject)} darkMode={darkMode} onToggleTheme={() => setDarkMode(value => !value)} open={menuOpen} onToggle={() => setMenuOpen(value => !value)} onNavigate={() => setMenuOpen(false)} onHome={() => setSelectedProject(null)} />
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
