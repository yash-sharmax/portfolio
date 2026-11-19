"use client";

import { useEffect, useState } from "react";

// Hero card for the Life Game detail page with a LIVE APK link.
// Version comes from the live web build (/lifegame/version.json — same
// commit as the APK, so the version always matches). Size + download URL
// come from the GitHub apk-latest release. The static values from
// apps-data.js are the fallback shown while the fetch runs (or if it
// fails), so the page never shows a broken or empty Version/Size.
const RELEASE_API =
  "https://api.github.com/repos/yash-sharmax/lifegame/releases/tags/apk-latest";

function formatMB(bytes) {
  return `${Math.round(bytes / (1024 * 1024))} MB`;
}

export default function ApkLive({ app }) {
  const [version, setVersion] = useState(app.version);
  const [size, setSize] = useState(app.size);
  const [apkUrl, setApkUrl] = useState(app.apkUrl);

  useEffect(() => {
    let cancelled = false;

    fetch("/lifegame/version.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((v) => {
        if (!cancelled && v && v.version) {
          setVersion("v" + String(v.version).replace(/^v/, ""));
        }
      })
      .catch(() => {});

    fetch(RELEASE_API)
      .then((r) => (r.ok ? r.json() : null))
      .then((rel) => {
        if (!rel || cancelled) return;
        const asset = (rel.assets || []).find((a) => a.name === "app-release.apk");
        if (!asset) return;
        if (asset.size) setSize(formatMB(asset.size));
        if (asset.browser_download_url) setApkUrl(asset.browser_download_url);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="app-hero-card">
      <div className="app-hero-id">
        <img className="app-icon-lg" src={app.icon} alt="Life Game app icon" />
        <div>
          <h1>
            Life Game <span className="app-ver">{version}</span>
            {app.beta ? <span className="app-beta">Beta</span> : null}
          </h1>
          <p className="app-tagline-lg">{app.tagline}</p>
        </div>
      </div>
      <p className="app-lede">
        Life Game turns your everyday habits into a game. Tick off a habit to earn XP, build
        your streak, and climb from Recruit to Legend. Take on challenges, track your daily
        score, and see your progress across the day, week, and month — one small win at a
        time.
      </p>
      <div className="hero-actions">
        <a className="btn btn-solid" href={app.webAppUrl}>
          Open Web App
        </a>
        <a className="btn btn-line app-hero-dl" href={apkUrl}>
          Download APK
        </a>
      </div>
      <div className="app-meta app-meta-hero">
        <span>
          <b>Version</b> {version}
        </span>
        <span>
          <b>Size</b> {size}
        </span>
        <span>
          <b>Platform</b> {app.platform}
        </span>
        <span>
          <b>Price</b> {app.price}
        </span>
      </div>
    </div>
  );
}
