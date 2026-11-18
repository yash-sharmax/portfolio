import { APPS } from "../apps-data";
import ScreenshotGallery from "../ScreenshotGallery";

export const metadata = {
  title: "Life Game — Habit Tracker App | yashx.xyz",
  description:
    "Life Game turns your everyday habits into a game. Tick off a habit to earn XP, build your streak, and climb from Recruit to Legend. Free for Android and the web.",
};

const APP = APPS.find((a) => a.slug === "lifegame");

const SHOTS = [
  { src: "/apps/lifegame/shots/home.jpg", alt: "Life Game home screen — Today's Habits", caption: "Home — Today's Habits" },
  { src: "/apps/lifegame/shots/profile.jpg", alt: "Life Game profile screen with level and rank", caption: "Profile & levels" },
  { src: "/apps/lifegame/shots/signup.jpg", alt: "Life Game create account screen", caption: "Create your account" },
  { src: "/apps/lifegame/shots/login.jpg", alt: "Life Game log in screen", caption: "Log in" },
];

const FEATURES = [
  {
    title: "Habits + XP",
    text: "Tick a habit, earn 2 XP. Untick it and the XP reverses — no penalties, no farming, just honest progress.",
  },
  {
    title: "Levels & ranks",
    text: "Every 100 XP is a new level. Climb from Recruit to Warrior, Knight, Champion, Warlord and Legend.",
  },
  {
    title: "Streak",
    text: "Complete at least one habit a day to keep your streak alive — and watch your best streak grow.",
  },
  {
    title: "Sub-tasks",
    text: "Break a habit into smaller steps. Daily sub-tasks repeat every day; Today sub-tasks are for one day only. A habit counts as done when all its sub-tasks are done.",
  },
  {
    title: "Challenges",
    text: "Take on a 7, 14, 21 or 30-day challenge with friends and stick to a habit together.",
  },
  {
    title: "Dashboard",
    text: "An Excel-style table of your month, pie, bar and line charts, daily pace, a daily score and an XP ledger you can count by hand.",
  },
  {
    title: "Notes & reminders",
    text: "Add a note to any habit and set a reminder, so the habit shows up exactly when you need it.",
  },
  {
    title: "Followers & leaderboard",
    text: "Follow friends, see who is ahead on the leaderboard, and find people to follow.",
  },
];

export default function LifeGamePage() {
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
              <img className="app-icon-lg" src={APP.icon} alt="Life Game app icon" />
              <div>
                <h1>
                  Life Game <span className="app-ver">{APP.version}</span>
                  {APP.beta ? <span className="app-beta">Beta</span> : null}
                </h1>
                <p className="app-tagline-lg">{APP.tagline}</p>
              </div>
            </div>
            <p className="app-lede">
              Life Game turns your everyday habits into a game. Tick off a habit to earn XP, build
              your streak, and climb from Recruit to Legend. Take on challenges, track your daily
              score, and see your progress across the day, week, and month — one small win at a
              time.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={APP.webAppUrl}>
                Open Web App
              </a>
              <a className="btn btn-line app-hero-dl" href={APP.apkUrl}>
                Download APK
              </a>
            </div>
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
            Real screenshots from the app. Click any screenshot to view it fullscreen.
          </p>
          <ScreenshotGallery shots={SHOTS} />
        </div>
      </section>

      {/* Stats */}
      <section className="apps-stats">
        <div className="wrap">
          <div className="apps-stats-grid">
            <div className="stat">
              <div className="num">2 XP</div>
              <div className="lbl">Per habit completed</div>
            </div>
            <div className="stat">
              <div className="num">6 ranks</div>
              <div className="lbl">Recruit to Legend</div>
            </div>
            <div className="stat">
              <div className="num">7–30 days</div>
              <div className="lbl">Challenge lengths</div>
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
            Everything you need to stick to a habit — and nothing you don&apos;t.
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


      {/* Install */}
      <section className="section" id="install">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">04</span>
            <h2>Get the app</h2>
          </div>
          <p className="sec-sub">
            Life Game is distributed directly from this page — no app-store wait. The web version
            needs no install at all.
          </p>
          <div className="apps-steps">
            <div className="apps-step">
              <div className="n">1</div>
              <h3>Download the APK</h3>
              <p>Tap the Download button on this page to get the latest APK.</p>
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
              <h3>Open Life Game</h3>
              <p>
                Create your free account, add your first habit, and tick it off to earn your first
                2 XP.
              </p>
            </div>
          </div>
          <div className="apps-creator">
            <div className="avatar">YS</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div className="apps-creator-name">Created by Yash Sharma</div>
              <div className="apps-creator-text">
                A first-year BTech student who built the habit app he needed for his own routine —
                and is sharing it with everyone building theirs.
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
