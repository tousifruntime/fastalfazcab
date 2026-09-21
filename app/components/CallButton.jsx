"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CallButton
 * Floating, always-available "tel:" action for the Alfaz Cab Service site.
 *
 * Behaviour (identical on phones, tablets and desktops):
 *  - Idle      -> pill with the phone icon + label.
 *  - Scrolling -> collapses to a circle so it stays out of the way.
 *  - Re-expands IDLE_DELAY ms after the last scroll event.
 *  - Honours `prefers-reduced-motion` and iOS safe-area insets.
 *
 * Usage:
 *   <CallButton />
 *   <CallButton phone="7489415896" countryCode="+91" label="Call now" />
 */

const DEFAULT_PHONE = "7489415896";
const DEFAULT_COUNTRY_CODE = "+91";
const IDLE_DELAY = 450; // ms of scroll silence before the label returns

export default function CallButton({
  phone = DEFAULT_PHONE,
  countryCode = DEFAULT_COUNTRY_CODE,
  label = "Call now",
  className = "",
}) {
  const [expanded, setExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);

  const frameRef = useRef(null);
  const idleRef = useRef(null);

  // tel: links must be digits only (plus the leading +)
  const digits = String(phone).replace(/\D/g, "");
  const telHref = `tel:${countryCode}${digits}`;
  const spokenNumber = `${countryCode} ${digits}`;

  // Small entrance delay so the button arrives after the hero, not with it.
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  // rAF-throttled, passive scroll listener — no layout thrash.
  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        setExpanded(false);

        if (idleRef.current) window.clearTimeout(idleRef.current);
        idleRef.current = window.setTimeout(() => setExpanded(true), IDLE_DELAY);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      if (idleRef.current) window.clearTimeout(idleRef.current);
    };
  }, []);

  return (
    <div
      className={`fixed right-4 z-[60] print:hidden sm:right-6 lg:right-8 ${className}`}
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <a
        href={telHref}
        aria-label={`Call Alfaz Cab Service on ${spokenNumber}`}
        title={`Call ${spokenNumber}`}
        className={[
          "group relative inline-flex items-center justify-center rounded-full",
          // Uniform padding on every breakpoint: a 24px icon + 2 x 16px
          // padding is a perfect 56px circle when the label is collapsed,
          // and grows into a pill the moment the label expands.
          "p-4",
          "bg-[#06B6D4] text-[#0C0C0C]",
          "shadow-[0_10px_30px_-8px_rgba(0,0,0,0.85)]",
          "text-sm font-semibold",
          "transition-[transform,opacity,background-color] duration-300 ease-out",
          "hover:bg-[#FFC72C] active:scale-95",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#06B6D4]/45",
          mounted
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0",
        ].join(" ")}
      >
        {/* Idle attention ring — stops once the pointer is on the button */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[#06B6D4] opacity-50 motion-safe:animate-ping group-hover:hidden group-focus-visible:hidden"
        />

        <PhoneIcon />

        {/* Expands on every screen size whenever the user is not scrolling */}
        <span
          className={[
            "relative block overflow-hidden whitespace-nowrap leading-none",
            "transition-[max-width,opacity,margin] duration-300 ease-out",
            expanded
              ? "ml-2 max-w-[10rem] opacity-100"
              : "ml-0 max-w-0 opacity-0",
          ].join(" ")}
        >
          {label}
        </span>
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative h-6 w-6 shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.26-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}