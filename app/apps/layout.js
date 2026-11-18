import AppsTopbar from "./AppsTopbar";

export default function AppsLayout({ children }) {
  return (
    <div className="apps-page">
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
