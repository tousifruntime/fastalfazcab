"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "../components/Liveprojectbutton";


export const metadata = {
  title: "Alfaz Cab Gallery | Goa Taxi & Travel",
  description:
    "View photos of Alfaz Cab Service vehicles and taxi services across Goa.",
  alternates: {
    canonical: "https://yourdomain.com/gallery",
  },
  keywords: [
    "Alfaz cab Goa",
    "Goa taxi photos",
    "Goa cab service gallery",
    "Goa taxi service gallery",
    "cab in Goa photos",
    "taxi in Goa photos",
    "Goa travel cab",
    "Goa sightseeing taxi",
    "Goa airport taxi",
    "Goa cab vehicles",
  ],
};

const PROJECTS = [
  {
    number: "01",
    category: "Alfaz Cab Service",
    name: "Goa Cab Service",
    col1: ["/images/Galary/L-1.png"],
    col2: "/images/Galary/R-1.webp",
  },
  {
    number: "02",
    category: "Alfaz Cab Service",
    name: "Goa Taxi Service",
    col1: ["/images/Galary/L-2.png"],
    col2: "/images/Galary/R-2.webp",
  },
  {
    number: "03",
    category: "Alfaz Cab Service",
    name: "Goa Travel",
    col1: ["/images/Galary/L-3.png"],
    col2: "/images/Galary/R-3.webp",
  },
];

function ProjectCard({ project, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div  ref={ref}   className=" sticky top-24 md:top-32 h-[65vh] sm:h-[84vh] md:h-[88vh]"   style={{ top: `${index * 28}px` }}>

      <motion.div  style={{ scale, backgroundColor: "#0C0C0C" }}  className="h-full w-full rounded-[28px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-3 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6">

        {/* Text */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-3 sm:gap-6">
            <span
              className="font-black leading-none"
              style={{ color: "#D7E2EA", fontSize: "clamp(2.5rem, 10vw, 140px)" }} >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="uppercase tracking-widest text-[10px] sm:text-sm"
                style={{ color: "#D7E2EA", opacity: 0.6 }}>
                {project.category}
              </span>
              <span
                className="font-medium uppercase text-base sm:text-2xl md:text-3xl"
                style={{ color: "#D7E2EA" }}>
                {project.name}
              </span>
            </div>
          </div> 
        </div>



        {/* Image Section */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-1 min-h-0 overflow-hidden ">

          {/* Left Img */}
          <div  className="flex flex-col gap-3 sm:gap-4 min-h-0 h-2/5 sm:h-auto w-full sm:w-[40%]">
            <img src={project.col1[0]} alt={`${project.name} detail 1`} className="w-full h-full object-cover rounded-[24px] sm:rounded-[50px] md:rounded-[60px]"/>
           </div>

          {/* Right Img */}
          <div className="min-h-0 h-3/5 sm:h-auto w-full sm:w-[60%]">
            <img  src={project.col2}
              alt={`${project.name} main`}
              className="w-full h-full object-cover rounded-3xl sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>

        </div>


      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="gallery"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32"
      style={{ backgroundColor: "#0C0C0C" }} >

      <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-20 md:mb-28"style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}  >
        Galary
      </h2>

      <div className="flex flex-col gap-8 sm:gap-10 max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
