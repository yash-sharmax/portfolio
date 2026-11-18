// Shared data for the /apps hub and the app detail pages.
// Add a new app here and it appears on the hub automatically.
// beta: all apps are in beta for now — shows a Beta badge on the hub card
// and on the detail page. accent/accentSoft: the app's own brand colour,
// used on its hub card (the hub page itself stays neutral).
export const APPS = [
  {
    slug: "lifegame",
    name: "Life Game",
    tagline: "Small steps, every day.",
    description:
      "Turn your everyday habits into a game. Tick off a habit to earn XP, build your streak, and climb from Recruit to Legend.",
    icon: "/apps/lifegame/icon.jpg",
    version: "v2.8.5",
    beta: true,
    accent: "#7C5CFF",
    accentSoft: "rgba(124, 92, 255, 0.14)",
    size: "57 MB",
    platform: "Android & Web",
    price: "Free",
    webAppUrl: "https://yashx.xyz/lifegame",
    apkUrl:
      "https://github.com/yash-sharmax/lifegame/releases/download/apk-latest/app-release.apk",
    detailsUrl: "/apps/lifegame",
  },
  {
    slug: "mathmitra",
    name: "MathMitra",
    tagline: "Every maths formula. One app.",
    description:
      "A free formula app for first-year engineering students — a growing library of formulas with meanings, symbols and solved examples, plus an AI Tutor.",
    icon: "/apps/mathmitra/icon.png",
    version: "v1.2.4 (Beta)",
    beta: true,
    accent: "#4338CA",
    accentSoft: "rgba(67, 56, 202, 0.12)",
    size: "60 MB",
    platform: "Android & Web",
    price: "Free",
    webAppUrl: "https://yashx.xyz/MathMitra",
    apkUrl:
      "https://github.com/yash-sharmax/maths-formula-flutter/releases/download/apk-latest/app-release.apk",
    detailsUrl: "/apps/mathmitra",
  },
];
