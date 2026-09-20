import FadeIn from "../components/Fadein";

export default function Hero() {
  return (
    <section id="home"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
      itemScope  itemType="https://schema.org/TaxiService"  >

      {/* Image fade-in animation (CSS only, so it doesn't depend on FadeIn) */}
      <style>{`
        @keyframes hero-img-in {
          from { opacity: 0; transform: translateY(15px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-img-anim {
          animation: hero-img-in 0.8s ease-out 0.1s backwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-img-anim { animation: none; }
        }
      `}</style>

      {/* Background image */}
      <div className="hero-img-anim absolute inset-0 w-full h-full overflow-hidden pointer-events-none">

        <img
          src="/images/Hero-Background/Hero.png"
          alt="Goa Cab Service Background"
          className=" absolute object-contain object-center select-none max-w-none

            /* ================= MOBILE POSITION ================= */
            w-[92vw]
            h-[72vh]

            /* CHANGE THESE TO MOVE IMAGE */
            left-1/2
            -translate-x-1/2
            top-[-.5rem]


            /* ================= SMALL SCREEN ================= */
            sm:w-[80vw]
            sm:h-[76vh]

            /* CHANGE POSITION */
            sm:left-1/2
            sm:-translate-x-1/2
            sm:top-[5rem]


            /* ================= TABLET ================= */
            md:w-[65vw]
            md:h-[80vh]

            /* CHANGE POSITION */
            md:left-[18%]
            md:translate-x-0
            md:top-[5.5rem]


            /* ================= LAPTOP ================= */
            lg:w-[58vw]
            lg:h-[84vh]

            /* CHANGE POSITION */
            lg:left-[-15%]
            lg:top-[-1.9rem]


            /* ================= LARGE DESKTOP ================= */
            xl:w-[55vw]
            xl:h-[86vh]

            /* CHANGE POSITION */
            xl:left-[22%]
            xl:top-[5.5rem]
          "
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15 z-[5] pointer-events-none"  aria-hidden="true" />

      {/* Main Content */}
      <div  className="flex-1 flex flex-col justify-betwee nw-full px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16" style={{zIndex: 10,position: "relative",}}>
          
        {/* Top Section - Badge */}
        <div className="w-full flex justify-center pt-6 sm:pt-8">
          <FadeIn delay={0.1} y={15}>
            <span className="inline-flex items-center gap-2 border border-white/20 rounded-full px-3 sm:px-4 py-1.5 text-white/70 uppercase tracking-wider text-xs sm:text-sm font-medium whitespace-nowrap ">
              <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
              Goa Cab Service • 24/7 Available
            </span>
          </FadeIn>
        </div>

        {/* Middle Section */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">

          {/* Main Heading */}
          <div className="w-full text-center">
            <FadeIn delay={0.2} y={40}>
              <h1
                className=" text-white  font-black  uppercase  tracking-tighter leading-none break-words drop-shadow-lg whitespace-nowrap "
                style={{
                  fontSize: "clamp(2.2rem, 11vw, 9rem)",
                  lineHeight: "1.1",
                  textShadow: "0 4px 6px rgba(0,0,0,0.5)",
                }}
                itemProp="name"
              >
                Hi, I&apos;m Alfaz
              </h1>
            </FadeIn>
          </div>

          {/* Supporting Text */}
          <div className="w-full max-w-2xl mx-auto text-center space-y-2 sm:space-y-3">
            <FadeIn delay={0.3} y={20}>
              <h2 className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide font-semibold drop-shadow">
                Your Goa Cab Driver — Your Ride, Your Schedule
              </h2>

              <p
                className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed drop-shadow"
                itemProp="description"
              >
                Reliable taxi and cab service in Goa for airport transfers,
                local rides, sightseeing tours and outstation journeys to
                Calangute, Baga, Anjuna, Panjim, Margao and beyond.
              </p>
            </FadeIn>
          </div>

          {/* Stats Cards */}
          <div className="w-full max-w-3xl mx-auto">
            <FadeIn delay={0.4} y={20}>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {[
                  { value: "5+", label: "Years in Goa" },
                  { value: "1K+", label: "Happy Riders" },
                  { value: "4.9", label: "Avg Rating" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="
                      border
                      border-white/15
                      rounded-lg
                      sm:rounded-xl
                      p-2
                      sm:p-3
                      md:p-4
                      text-center
                      backdrop-blur-sm
                      bg-white/5
                      hover:bg-white/10
                      transition-colors
                    "
                  >
                    <p className="text-white font-bold text-sm sm:text-base md:text-xl lg:text-2xl leading-tight">
                      {stat.value}
                    </p>

                    <p className="text-white/50 uppercase tracking-widest text-[0.5rem] sm:text-xs mt-1 sm:mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* CTA */}
          <FadeIn delay={0.5} y={20}>
            <a
              href="#contact"
              aria-label="Book a cab or taxi ride in Goa with Alfaz"
              className="
                inline-block
                px-4
                sm:px-8
                md:px-14
                lg:px-16
                py-2.5
                sm:py-3
                md:py-3.5
                lg:py-4
                bg-white
                text-black
                font-bold
                uppercase
                tracking-widest
                text-xs
                sm:text-sm
                rounded-full
                hover:bg-white/90
                active:scale-95
                transition-all
                duration-200
                shadow-lg
                hover:shadow-xl
                whitespace-nowrap
              "
            >
              Book a Ride
            </a>
          </FadeIn>
        </div>

        {/* Bottom Section */}
        <div className="w-full text-center pb-2 sm:pb-4 md:pb-6">
          <FadeIn delay={0.35} y={15}>
            <h3
              className="
                text-white/70
                font-light
                uppercase
                tracking-wider
                leading-relaxed
                drop-shadow
                text-center
              "
              style={{
                fontSize: "clamp(0.65rem, 1.8vw, 1.1rem)",
              }}
            >
              A Trusted Goa Cab Service — Safe, Comfortable & Reliable
              Journeys Every Time
            </h3>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}