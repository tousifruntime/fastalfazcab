"use client"

import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/images/marquee/hero-1.webp",
  "/images/marquee/hero-2.webp",
  "/images/marquee/hero-3.webp",
  "/images/marquee/hero-4.webp",
  "/images/marquee/hero-5.webp",
  "/images/marquee/hero-6.webp", 
  "/images/marquee/hero-7.webp", 
  "/images/marquee/hero-8.webp",   
];

const ROW_1 = IMAGES.slice(0, 4);
const ROW_2 = IMAGES.slice(4, 8);

const triple = (arr) => [...arr, ...arr, ...arr];

function MarqueeRow({ images, offset, direction }) {
  const translate = direction === "right" ? offset - 200 : -(offset - 200);

  return (
    <div
      className="flex gap-2 sm:gap-3"
      style={{ transform: `translateX(${translate}px)`, willChange: "transform" }}
    >
      {triple(images).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="w-[220px] h-[140px] sm:w-[300px] sm:h-[190px] md:w-[360px] md:h-[230px] lg:w-[420px] lg:h-[270px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
        />
      ))}
    </div>
  );
}

export default function Marquee() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const newOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section  ref={sectionRef}  className="pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-10 overflow-hidden"  style={{ backgroundColor: "#0C0C0C" }} >
      <div className="flex flex-col gap-2 sm:gap-3">
        <MarqueeRow images={ROW_1} offset={offset} direction="right" />
        <MarqueeRow images={ROW_2} offset={offset} direction="left" />
      </div>
    </section>
  );
}
