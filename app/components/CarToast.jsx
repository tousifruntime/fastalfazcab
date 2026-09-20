"use client";

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { CheckCircle2, XCircle, AlertTriangle, X, TimerReset } from 'lucide-react';

 
const VARIANTS = {
  success: {
    Icon: CheckCircle2,
    title: 'Success',
    defaultMsg: 'Successfully submitted!',
    ring: 'stroke-emerald-400',
    hex: 'bg-emerald-400',
    bar: 'bg-emerald-400',
    glow: 'shadow-[0_0_26px_-6px_rgba(52,211,153,0.6)]',
    duration: 4000,
  },
  error: {
    Icon: XCircle,
    title: 'Error',
    defaultMsg: 'Something went wrong. Please try again.',
    ring: 'stroke-red-500',
    hex: 'bg-red-500',
    bar: 'bg-red-500',
    glow: 'shadow-[0_0_26px_-6px_rgba(239,68,68,0.6)]',
    duration: 5000,
  },
  empty: {
    Icon: AlertTriangle,
    title: 'Missing info',
    defaultMsg: 'Please fill in all required fields.',
    ring: 'stroke-amber-400',
    hex: 'bg-amber-400',
    bar: 'bg-amber-400',
    glow: 'shadow-[0_0_26px_-6px_rgba(251,191,36,0.6)]',
    duration: 4500,
  },
  rateLimit: {
    Icon: TimerReset,
    title: 'Slow down',
    defaultMsg: 'Too many form submissions. Please try again later.',
    ring: 'stroke-orange-400',
    hex: 'bg-orange-400',
    bar: 'bg-orange-400',
    glow: 'shadow-[0_0_26px_-6px_rgba(251,146,60,0.6)]',
    duration: 6000,
  }
};

const RADIUS = 20;
const CIRC = 2 * Math.PI * RADIUS;

function CarToast({ t, type, title, message }) {
  const v = VARIANTS[type];
  const [drain, setDrain] = useState(0);

  // Kick the tachometer ring one frame after mount so it transitions
  // from "full" to "empty" over the toast's actual duration.
  useEffect(() => {
    const id = requestAnimationFrame(() => setDrain(CIRC));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`
        relative flex items-center gap-3.5 w-[min(92vw,380px)] pl-0 pr-3.5 py-3.5
        rounded-2xl overflow-hidden border border-white/10
        bg-linear-to-br from-neutral-900 to-black
        shadow-[0_10px_30px_-8px_rgba(0,0,0,0.65)] ${v.glow}
        transition-all duration-300 ease-out
        ${t.visible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-24 scale-95'}
      `}
      role="status"
    >
      {/* one-shot headlight sweep */}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-2/5 skew-x-[-20deg] translate-x-[-150%] bg-linear-to-r from-transparent via-white/20 to-transparent animate-[sweep_1.1s_ease-out_0.15s_forwards]" />

      {/* racing-stripe accent edge */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${v.bar}`} />

      {/* hex emblem badge with countdown ring */}
      <div className="relative shrink-0 ml-3.5" style={{ width: 52, height: 52 }}>
        <svg width="52" height="52" viewBox="0 0 52 52" className="absolute inset-0">
          <circle cx="26" cy="26" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
          <circle
            cx="26" cy="26" r={RADIUS} fill="none" strokeWidth="3" strokeLinecap="round"
            className={v.ring}
            strokeDasharray={CIRC}
            strokeDashoffset={drain}
            style={{ transition: `stroke-dashoffset ${t.duration ?? v.duration}ms linear` }}
            transform="rotate(-90 26 26)"
          />
        </svg>
        <span
          className={`absolute inset-2.25 flex items-center justify-center ${v.hex}`}
          style={{ clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)' }}
        >
          <v.Icon size={18} className="text-black" strokeWidth={2.5} />
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-sans font-bold text-[13px] tracking-wider uppercase text-neutral-100 m-0 mb-0.5">
          {title || v.title}
        </p>
        <p className="text-[12.5px] leading-snug text-neutral-400 m-0 wrap-break-word">
          {message || v.defaultMsg}
        </p>
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        aria-label="Dismiss"
        className="shrink-0 p-1 rounded-md text-neutral-500 hover:text-white hover:bg-white/10 transition-colors">
        <X size={16} />
      </button>
    </div>
  );
}

export function showCarToast(type, message, title) {
  const v = VARIANTS[type];
  if (!v) return;
  toast.custom((t) => <CarToast t={t} type={type} title={title} message={message} />, {
    duration: v.duration,
  });
}

export default CarToast;
