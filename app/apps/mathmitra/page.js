import { APPS } from "../apps-data";
import ScreenshotGallery from "../ScreenshotGallery";

export const metadata = {
  title: "MathMitra — Maths Formula App | yashx.xyz",
  description:
    "MathMitra is a free maths formula app for engineering students: a growing library of formulas with meanings, symbols and solved examples, an AI Tutor, photo scan and a one-tap PDF of the whole book. Download the Android app or open it on the web.",
};

const APP = APPS.find((a) => a.slug === "mathmitra");

const SHOTS = [
  { src: "/apps/mathmitra/shots/home.jpg", alt: "MathMitra home screen", caption: "Home — every formula, one search away" },
  { src: "/apps/mathmitra/shots/browse.jpg", alt: "Browse formulas by topic", caption: "Browse by topic — syllabus-wise" },
  { src: "/apps/mathmitra/shots/ai-tutor.jpg", alt: "AI Tutor answering a maths question", caption: "AI Tutor — step-by-step answers" },
  { src: "/apps/mathmitra/shots/ai-tutor-login.jpg", alt: "Log in to use the AI Tutor", caption: "Log in (free) to use the AI Tutor" },
  { src: "/apps/mathmitra/shots/ai-tutor-key.jpg", alt: "Use your own Gemini key in the AI Tutor", caption: "Your own Gemini key — no daily limit" },
  { src: "/apps/mathmitra/shots/add.jpg", alt: "Add your own formulas", caption: "Add your own formulas and notes" },
  { src: "/apps/mathmitra/shots/more.jpg", alt: "More menu in MathMitra", caption: "More — PDF, library, notices, support" },
  { src: "/apps/mathmitra/shots/drawer.jpg", alt: "MathMitra side menu", caption: "Quick menu — add, library, notices" },
];

const FEATURES = [
  {
    title: "Complete formula library",
    text: "Formulas across basics and Maths-I Units 1–5 — each with its meaning, symbol-by-symbol explanation and a solved example, with new ones added as the course grows.",
  },
  {
    title: "AI Tutor",
    text: "Ask any maths doubt and get a clear, step-by-step solution. Open it from any formula to ask about that formula specifically.",
  },
  {
    title: "Photo scan",
    text: "Photograph a formula from your notebook or textbook — the AI reads it and drafts the entry for you to save.",
  },
  {
    title: "Full PDF in one tap",
    text: "Download the complete formula book as a clean PDF for last-minute revision — or to print and keep in your file.",
  },
  {
    title: "Light, dark & system theme",
    text: "A calm graph-paper design that switches with your phone, or pick the look you like and it stays.",
  },
  {
    title: "Your account, everywhere",
    text: "Sign up free to add your own formulas and categories. The same account works on the app and the website.",
  },
];

export default function MathMitraPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section app-hero">
        <div className="wrap">
          <a className="apps-back" href="/apps">
            ← All apps
          </a>
          <div className="app-hero-card">
            <div className="app-hero-id">
              <img className="app-icon-lg" src={APP.icon} alt="MathMitra app icon" />
              <div>
                <h1>
                  MathMitra <span className="app-ver">BETA</span>
                </h1>
                <p className="app-tagline-lg">{APP.tagline}</p>
              </div>
            </div>
            <p className="app-lede">
              MathMitra is a free formula app built for first-year engineering students — a growing
              library of formulas, each with its meaning, its symbols explained, and a solved
              example. Plus an AI Tutor that solves your doubts step by step.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={APP.apkUrl}>
                Download for Android
              </a>
              <a className="btn btn-line app-hero-dl" href={APP.webAppUrl}>
                Open the Web App
              </a>
            </div>
            <p className="apps-beta-note">
              <b>Beta:</b> MathMitra is in public beta — we are testing it and improving it every
              week. Features may change; your feedback genuinely shapes what comes next.
            </p>
            <div className="app-meta app-meta-hero">
              <span>
                <b>Version</b> {APP.version}
              </span>
              <span>
                <b>Size</b> {APP.size}
              </span>
              <span>
                <b>Platform</b> {APP.platform}
              </span>
              <span>
                <b>Price</b> {APP.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section" id="screenshots">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">02</span>
            <h2>Screenshots</h2>
          </div>
          <p className="sec-sub">
            Real screenshots from the app — more are added as the beta grows. Click any screenshot
            to view it fullscreen.
          </p>
          <ScreenshotGallery shots={SHOTS} />
        </div>
      </section>

      {/* Stats */}
      <section className="apps-stats">
        <div className="wrap">
          <div className="apps-stats-grid">
            <div className="stat">
              <div className="num">Growing</div>
              <div className="lbl">Formula library — new formulas added regularly</div>
            </div>
            <div className="stat">
              <div className="num">Basics–U5</div>
              <div className="lbl">Every topic, from basics to Unit 5</div>
            </div>
            <div className="stat">
              <div className="num">Anywhere</div>
              <div className="lbl">Android app &amp; web app</div>
            </div>
            <div className="stat">
              <div className="num">Free</div>
              <div className="lbl">No ads, no paywall</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">03</span>
            <h2>Features</h2>
          </div>
          <p className="sec-sub">
            Not just formulas — the whole understanding. A formula you don&apos;t understand is
            useless in the exam hall.
          </p>
          <div className="hack-grid">
            {FEATURES.map((f) => (
              <div className="hack-card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* What's inside */}
      <section className="section" id="topics">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">04</span>
            <h2>What&apos;s inside</h2>
          </div>
          <p className="sec-sub">Syllabus-wise, the way your course is taught.</p>
          <div className="apps-topics">
            <div className="apps-topic-group">
              <h3>Basics — Class 11–12 foundation</h3>
              <ul>
                <li>
                  Algebra &amp; Logarithms <span>identities, series, logs</span>
                </li>
                <li>
                  Trigonometry <span>ratios, identities, heights</span>
                </li>
                <li>
                  Differentiation <span>standard forms, rules</span>
                </li>
                <li>
                  Integration &amp; Limits <span>standard integrals</span>
                </li>
              </ul>
            </div>
            <div className="apps-topic-group">
              <h3>Maths-I — Units 1 to 5</h3>
              <ul>
                <li>Unit 1 · Matrices &amp; Linear Systems</li>
                <li>Unit 2 · Differential Calculus</li>
                <li>Unit 3 · Integral Calculus</li>
                <li>Unit 4 · Differential Equations</li>
                <li>Unit 5 · Complex Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tutor */}
      <section className="section" id="ai">
        <div className="wrap">
          <div className="apps-ai-band">
            <div>
              <div className="kicker">AI Tutor</div>
              <h2 className="title">Stuck at midnight? Ask the Tutor.</h2>
              <p>
                Type a question — an equation, a doubt from class, a step you don&apos;t follow —
                and get a patient, step-by-step answer in simple English. Free questions are
                included every day, and if you ever need more, bring your own key.
              </p>
              <div className="hero-actions" style={{ marginTop: 20 }}>
                <a className="btn btn-solid" href={APP.webAppUrl}>
                  Try the AI Tutor
                </a>
              </div>
            </div>
            <ul className="apps-ai-points">
              <li>
                <b>10 free questions a day</b> on the app&apos;s own AI — resets at midnight.
              </li>
              <li>
                <b>Unlimited with your own key:</b> paste a free Google Gemini key and the limit
                disappears.
              </li>
              <li>
                <b>Your key stays yours:</b> it is saved only on your device, never sent to our
                server, never stored in our database — the app talks to Google directly.
              </li>
              <li>
                <b>Formula-aware:</b> ask from any formula page and the Tutor answers about that
                formula.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="section" id="install">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">05</span>
            <h2>Get the app</h2>
          </div>
          <p className="sec-sub">
            MathMitra is distributed directly from this page — no app-store wait. The web version
            needs no install at all.
          </p>
          <div className="apps-steps">
            <div className="apps-step">
              <div className="n">1</div>
              <h3>Download the APK</h3>
              <p>Tap the Download button on this page — the file downloads straight to your phone.</p>
            </div>
            <div className="apps-step">
              <div className="n">2</div>
              <h3>Allow the install</h3>
              <p>
                If Android asks, allow &ldquo;Install via your browser&rdquo; just this once — this
                is normal for apps installed outside the Play Store.
              </p>
            </div>
            <div className="apps-step">
              <div className="n">3</div>
              <h3>Open MathMitra</h3>
              <p>
                Browse the whole formula library right away. Sign up free only if you want the AI
                Tutor or to add your own formulas.
              </p>
            </div>
          </div>
          <div className="apps-creator">
            <div className="avatar">YS</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div className="apps-creator-name">Created by Yash Sharma</div>
              <div className="apps-creator-text">
                A first-year BTech student who built the formula app he needed for his own exams —
                and is sharing it with everyone revising the same syllabus.
              </div>
            </div>
            <a className="btn btn-line" href="https://www.yashx.xyz">
              www.yashx.xyz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
