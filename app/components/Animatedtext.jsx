"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Char({ char, index, total, scrollYProgress }) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ visibility: "hidden" }}>{char}</span>
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }}>
        {char}
      </motion.span>
    </span>
  );
}

/**
 * AnimatedText
 * Splits `text` into characters and fades each one in (opacity 0.2 -> 1)
 * as the paragraph scrolls through the viewport.
 *
 * Characters are grouped per-word inside a `white-space: nowrap` span so
 * the browser can never break a line in the middle of a word, even if a
 * global `word-break: break-all` rule exists elsewhere in the project.
 * Line breaks can only happen at the real space between word groups.
 */
export default function AnimatedText({ text, className = "", style = {} }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const total = chars.length;

  // group consecutive non-space characters into words, keeping index
  // continuity so the scroll-progress timing across the whole string
  // stays exactly the same as before
  const words = [];
  let current = [];
  chars.forEach((char, i) => {
    if (char === " ") {
      if (current.length) words.push(current);
      words.push([{ char: " ", index: i }]);
      current = [];
    } else {
      current.push({ char, index: i });
    }
  });
  if (current.length) words.push(current);

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((group, gi) =>
        group[0].char === " " ? (
          " "
        ) : (
          <span
            key={gi}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {group.map(({ char, index }) => (
              <Char
                key={index}
                char={char}
                index={index}
                total={total}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </span>
        )
      )}
    </p>
  );
}