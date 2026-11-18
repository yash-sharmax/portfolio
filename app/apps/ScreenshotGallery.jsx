"use client";

import { useCallback, useEffect, useState } from "react";

// Screenshot gallery with a fullscreen lightbox viewer.
// Click a screenshot to open it fullscreen; close with the X button,
// the Back button, Escape, or by clicking the backdrop. Prev/next
// arrows (and keyboard arrows) move between screenshots.
export default function ScreenshotGallery({ shots }) {
  const [openIndex, setOpenIndex] = useState(null);
  const open = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [shots.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % shots.length)),
    [shots.length]
  );

  // Escape closes; arrow keys move between screenshots.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  // Lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open ]);

  return (
    <>
      <div className="shot-grid">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            className="shot"
            onClick={() => setOpenIndex(i)}
            aria-label={`View screenshot: ${shot.caption}`}
          >
            <span className="shot-frame">
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </span>
            <span className="shot-cap">{shot.caption}</span>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Screenshot ${openIndex + 1} of ${shots.length}: ${shots[openIndex].caption}`}
          onClick={close}
        >
          <div className="lb-top">
            <button type="button" className="lb-btn" onClick={close}>
              ← Back
            </button>
            <span className="lb-count">
              {openIndex + 1} / {shots.length}
            </span>
            <button
              type="button"
              className="lb-btn lb-close"
              onClick={close}
              aria-label="Close fullscreen view"
            >
              ✕
            </button>
          </div>

          <button
            type="button"
            className="lb-arrow lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous screenshot"
          >
            ‹
          </button>

          <img
            className="lb-img"
            src={shots[openIndex].src}
            alt={shots[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="lb-arrow lb-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next screenshot"
          >
            ›
          </button>

          <div className="lb-cap" onClick={(e) => e.stopPropagation()}>
            {shots[openIndex].caption}
          </div>
        </div>
      )}
    </>
  );
}
