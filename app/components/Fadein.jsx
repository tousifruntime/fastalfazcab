"use client";
import { motion } from "framer-motion";

const easing = [0.25, 0.1, 0.25, 1];

const motionMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  p: motion.p,
  span: motion.span,
};

/**
 * FadeIn
 * Wraps children in a whileInView fade/slide animation.
 * Usage: <FadeIn delay={0.2} y={20} x={0} duration={0.7} as="div">...</FadeIn>
 */
export default function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
  style = {},
}) {
  const MotionTag = motionMap[as] || motion.div;

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: easing }}
    >
      {children}
    </MotionTag>
  );
}