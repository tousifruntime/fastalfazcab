"use client";

import { useEffect, useRef, useState } from "react";

/**
 * JourneyStats
 * Replaces the placeholder <div> in About. Four proof points strung along a
 * route line that draws itself when the block scrolls into view.
 *
 * Motion runs once, on entry:
 *   route line draws left -> right, dots land in sequence, numbers count up.
 * Fully skipped when the visitor prefers reduced motion.
 *
 * Responsive: 2 columns on phones, 4 from `md` up. The connecting line only
 * appears once the stats sit on a single row, so nothing is ever orphaned.
 */

const ACCENT = "#06B6D4";
const PAGE_BG = "#0C0C0C";

const STATS = [
  { value: 5, suffix: "+", label: "Years on Goa roads" },
  { display: "24/7", label: "Pickups, day or night" },
  { value: 6, label: "Regions covered" },
  { display: "\u20B90", label: "Hidden charges" },
];

export default function JourneyStats({ className = "" }) {
  const [inView, setInView] = useState(false);
  const [reduce, setReduce] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);

    const onChange = (e) => setReduce(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        io.disconnect(); // play once, never re-trigger
      },
      { threshold: 0.3, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const on = inView || reduce;

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-[90vw] sm:max-w-2xl lg:max-w-4xl ${className}`}
    >
      {/* The route: draws across the dots once they are on one row */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-[5px] hidden h-px origin-left md:block"
        style={{
          background: `linear-gradient(90deg, rgba(6,182,212,0) 0%, rgba(6,182,212,0.5) 18%, rgba(6,182,212,0.5) 82%, rgba(6,182,212,0) 100%)`,
          transform: on ? "scaleX(1)" : "scaleX(0)",
          transition: reduce
            ? "none"
            : "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      <div className="relative grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-4 md:gap-y-0">
        {STATS.map((stat, i) => {
          const delay = 260 + i * 140;

          return (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-4 text-center sm:gap-5"
            >
              {/* Milestone marker — the ring masks the line so it reads as behind */}
              <span
                aria-hidden="true"
                className="h-[11px] w-[11px] shrink-0 rounded-full ring-4"
                style={{
                  backgroundColor: ACCENT,
                  "--tw-ring-color": PAGE_BG,
                  transform: on ? "scale(1)" : "scale(0)",
                  transition: reduce
                    ? "none"
                    : `transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                }}
              />

              <div
                className="flex flex-col items-center gap-2"
                style={{
                  opacity: on ? 1 : 0,
                  transform: on ? "translateY(0)" : "translateY(14px)",
                  transition: reduce
                    ? "none"
                    : `opacity 600ms ease-out ${delay + 80}ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay + 80}ms`,
                }}
              >
                <p
                  className="font-black leading-none tracking-tight tabular-nums"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(2.4rem, 8vw, 4.25rem)",
                  }}
                >
                  {stat.display ?? (
                    <>
                      <CountUp
                        target={stat.value}
                        start={inView}
                        instant={reduce}
                      />
                      {stat.suffix}
                    </>
                  )}
                </p>

                <p
                  className="font-light leading-snug"
                  style={{
                    color: "#D7E2EA",
                    opacity: 0.6,
                    fontSize: "clamp(0.82rem, 1.5vw, 1rem)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CountUp({ target, start, instant, duration = 1500, delay = 260 }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (instant) {
      setN(target);
      return;
    }
    if (!start) return;

    let raf = null;
    let timer = null;
    let t0 = null;

    const tick = (now) => {
      if (t0 === null) t0 = now;
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
      setN(Math.round(target * eased));
      if (p < 1) raf = window.requestAnimationFrame(tick);
    };

    timer = window.setTimeout(() => {
      raf = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      if (timer) window.clearTimeout(timer);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [start, instant, target, duration, delay]);

  return <>{n}</>;
}