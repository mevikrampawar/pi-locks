"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function Carousel({
  children,
  label,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".slider__item");
    const amount = slide ? slide.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        className="slider__track hide-scrollbar"
        ref={trackRef}
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {children}
      </div>
      <div className="slider__nav">
        <button
          type="button"
          className="rnd rnd--prev"
          onClick={() => step(-1)}
          disabled={atStart}
          aria-label="Previous"
          style={{ opacity: atStart ? 0.35 : 1 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="rnd rnd--next"
          onClick={() => step(1)}
          disabled={atEnd}
          aria-label="Next"
          style={{ opacity: atEnd ? 0.35 : 1 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}