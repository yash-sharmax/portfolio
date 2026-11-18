"use client";

import { useState } from "react";

export default function AppsTopbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="topbar">
        <a href="/" className="logo">
          YASH<em>.</em>SHARMA
        </a>
        <nav className="top-links">
          <a href="/">Home</a>
          <a href="/apps">Apps</a>
          <a href="/resume.html" target="_blank" rel="noopener">
            Resume
          </a>
          <a href="/#contact" className="talk">
            Let&apos;s Talk
          </a>
        </nav>
        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </header>
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={closeMenu}>
          Home
        </a>
        <a href="/apps" onClick={closeMenu}>
          Apps
        </a>
        <a href="/resume.html" target="_blank" rel="noopener" onClick={closeMenu}>
          Resume
        </a>
        <a href="/#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </>
  );
}
