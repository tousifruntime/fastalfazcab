"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./Fadein";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

const menuVariants = {
  closed: {
    clipPath: "circle(0% at calc(100% - 40px) 38px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      when: "afterChildren",
    },
  },

  open: {
    clipPath: "circle(150% at calc(100% - 40px) 38px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.15,
    },
  },

  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const isLocationPage = pathname?.startsWith("/location");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 z-50 h-fit w-full"
      style={{
        backgroundColor: "#0C0C0C",
        overflowX: "clip",
      }}
    >
      {/* ================= DESKTOP NAV ================= */}

      <FadeIn
        delay={0}
        y={-20}
        className="hidden items-center justify-between px-6 p-5 md:flex md:px-10"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group inline-block text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]"
          >
            <span className="relative inline-block overflow-hidden">
              <span className="block transition-transform duration-400 ease-in-out group-hover:-translate-y-full">
                {link.name}
              </span>

              <span className="absolute left-0 top-full block transition-transform duration-400 ease-in-out group-hover:-translate-y-full">
                {link.name}
              </span>
            </span>
          </Link>
        ))}
      </FadeIn>

      {/* ================= MOBILE TOP BAR ================= */}

      <FadeIn
        delay={0}
        y={-20}
        className="flex items-center justify-between px-5 py-4 md:hidden"
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-[#D7E2EA] font-medium uppercase tracking-widest text-base"
        >
          Alfaz
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="relative z-70 flex h-10 w-10 items-center justify-center"
        >
          <motion.span
            className="absolute block h-0.5 w-6 bg-[#D7E2EA]"
            animate={
              isOpen
                ? { rotate: 45, y: 0 }
                : { rotate: 0, y: -4 }
            }
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />

          <motion.span
            className="absolute block h-0.5 w-6 bg-[#D7E2EA]"
            animate={
              isOpen
                ? { rotate: -45, y: 0 }
                : { rotate: 0, y: 4 }
            }
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        </button>
      </FadeIn>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-60 flex md:hidden"
            style={{
              backgroundColor: "#0C0C0C",
            }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex w-full flex-col items-start justify-center gap-2 px-8">

              {/* BACK TO HOME - ONLY ON LOCATION PAGES */}

              {isLocationPage && (
                <motion.div
                  variants={linkVariants}
                  className="mb-6 w-full"
                >
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center text-[#D7E2EA]/60 text-sm uppercase tracking-widest transition-colors duration-200 hover:text-[#D7E2EA]"
                  >
                    ← Back to Home
                  </Link>
                </motion.div>
              )}

              {/* NAVIGATION LINKS */}

              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  className="w-full border-b border-[#D7E2EA]/10"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex w-full items-baseline gap-4 py-3"
                  >
                    <span className="text-xs text-[#D7E2EA]/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-3xl transition-opacity duration-200 group-hover:opacity-70">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* MENU LABEL */}

              <motion.p
                variants={linkVariants}
                className="mt-8 text-[#D7E2EA]/40 text-xs uppercase tracking-widest"
              >
                Menu
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;