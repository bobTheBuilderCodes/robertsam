import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Navigation({ isCaseStudy, open, onToggle, onNavigate, onHome }) {
  const links = ['About', 'Work', 'Thinking', 'Playground'];
  const handleNavigation = () => { onNavigate(); onHome(); };
  return <header className="nav-wrap">
    <a className="brand" href="#top" onClick={handleNavigation}><span className="brand-mark">RS</span><span>Robert Sam</span></a>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">{links.map(item => <a key={item} href={'#' + item.toLowerCase()} onClick={handleNavigation}>{item}</a>)}<a className="nav-contact" href="#contact" onClick={handleNavigation}>Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
    <button className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={onToggle}>{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</button>
  </header>;
}

export function SectionLabel({ number, children, suffix, light = false }) {
  return <div className={light ? 'section-label light' : 'section-label'}><span>{number}</span><span>{children}</span>{suffix && <span className="label-right">{suffix}</span>}</div>;
}

export function ButtonLink({ children, outline = false, href = '#contact' }) {
  return <a className={outline ? 'button button-outline' : 'button button-dark'} href={href}>{children}<ArrowUpRight size={17} aria-hidden="true" /></a>;
}

export function FloatingHomeButton({ onHome }) {
  const handleClick = () => {
    onHome();
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  };
  return <button type="button" className="floating-home-button" onClick={handleClick} aria-label="Return to the home hero section"><span aria-hidden="true">↑</span><b>HOME</b></button>;
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100, active: false });

  useEffect(() => {
    const handlePointerMove = event => {
      const interactive = event.target.closest('a, button, input, [role="button"]');
      setPosition({ x: event.clientX, y: event.clientY, active: Boolean(interactive) });
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return <div className={`custom-cursor ${position.active ? 'is-active' : ''}`} style={{ '--cursor-x': `${position.x}px`, '--cursor-y': `${position.y}px` }} aria-hidden="true"><span className="cursor-dot" /><span className="cursor-ring" /></div>;
}

export function Reveal({ children, className = '', delay = 0 }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -36px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}
