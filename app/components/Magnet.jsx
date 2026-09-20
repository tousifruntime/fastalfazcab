"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Magnet
 * Applies a mouse-following magnetic translate effect to its children
 * whenever the cursor is within `padding` px of the element's edges.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
  style = {},
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0)");
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const withinRange =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding;

      if (withinRange) {
        const offsetX = (e.clientX - centerX) / strength;
        const offsetY = (e.clientY - centerY) / strength;
        setTransition(activeTransition);
        setTransform(`translate3d(${offsetX}px, ${offsetY}px, 0)`);
      } else {
        setTransition(inactiveTransition);
        setTransform("translate3d(0px, 0px, 0)");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition,
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}