"use client";

import { usePathname } from "next/navigation";
import AppsTopbar from "./AppsTopbar";
import "./apps.css";

// Theme class for the apps shell, picked from the route so each app page
// gets its own identity — hub = neutral/universal, lifegame = dark
// midnight navy + violet, mathmitra = light indigo — while the chrome
// (topbar + footer) stays shared.
export default function AppsLayout({ children }) {
  const pathname = usePathname() || "/apps";
  const theme = pathname.startsWith("/apps/lifegame")
    ? "apps-lifegame"
    : pathname.startsWith("/apps/mathmitra")
      ? "apps-mathmitra"
      : "apps-hub";
  return (
    <div className={`apps-page ${theme}`}>
      <AppsTopbar />
      {children}
      <footer>
        <div className="wrap">
          <div className="big">
            Yash <span>Sharma</span>
          </div>
          <div className="f-row">
            <span>© {new Date().getFullYear()} Yash Sharma. Built with precision.</span>
            <span className="soc">
              <a
                href="https://github.com/yash-sharmax"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yashsharmax"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com/yashandmatrix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </span>
          </div>
          <div className="f-legal">
            <span>
              <a href="/terms">Terms &amp; Conditions</a>
              <span className="sep">·</span>
              <a href="/privacy">Privacy Policy</a>
            </span>
            <span>This site uses analytics to improve — details in the Privacy Policy.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
