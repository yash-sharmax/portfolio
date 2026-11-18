import { APPS } from "./apps-data";

export const metadata = {
  title: "Apps | yashx.xyz",
  description:
    "Every app built by Yash Sharma, in one place. Open them on the web or download the Android APK — Life Game and MathMitra.",
};

export default function AppsPage() {
  return (
    <main>
      <section className="section apps-hero">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">01</span>
            <h2>Apps</h2>
          </div>
          <p className="sec-sub">
            Every app I&apos;ve built, in one place. Open any of them on the web, or download the
            Android APK — free, no ads.
          </p>

          <div className="apps-grid">
            {APPS.map((app, i) => (
              <article className="app-card" key={app.slug}>
                <div className="app-card-top">
                  <img className="app-icon" src={app.icon} alt={`${app.name} app icon`} />
                  <div>
                    <h3>
                      {app.name}
                      <span className="app-ver">{app.version}</span>
                    </h3>
                    <p className="app-tagline">{app.tagline}</p>
                  </div>
                </div>
                <p className="app-desc">{app.description}</p>
                <div className="app-meta">
                  <span>
                    <b>Size</b> {app.size}
                  </span>
                  <span>
                    <b>Platform</b> {app.platform}
                  </span>
                  <span>
                    <b>Price</b> {app.price}
                  </span>
                </div>
                <div className="app-actions">
                  <a className="btn btn-solid" href={app.webAppUrl}>
                    Open Web App
                  </a>
                  <a className="btn btn-line" href={app.detailsUrl}>
                    View details
                  </a>
                  <a className="btn btn-line" href={app.apkUrl}>
                    Download APK
                  </a>
                </div>
                <span className="app-idx">{String(i + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>

          <p className="apps-note">
            More apps are added here as they are built. Each app page has screenshots, features
            and the download link.
          </p>
        </div>
      </section>
    </main>
  );
}
