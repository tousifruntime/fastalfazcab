import FadeIn from "../components/Fadein";

 
export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative flex flex-col pt-14 pb-10 sm:pb-0 md:pt-16 sm:min-h-screen space-y-13 sm:space-y-0"
        style={{ overflowX: "clip" }}
        itemScope
        itemType="https://schema.org/TaxiService"
      >
        {/* Mobile-only intro badge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <FadeIn delay={0.1} y={15}>
            <span className="inline-flex items-center gap-2 whitespace-nowrap border border-[#D7E2EA]/25 rounded-full px-4 py-1.5 text-[#D7E2EA] uppercase tracking-widest text-[0.6rem] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA] animate-pulse" />
              Goa Cab &amp; Taxi Service &middot; Available 24/7
            </span>
          </FadeIn>
        </div>

        {/* Banner Text */}
        <div className="overflow-hidden mt-4 sm:mt-4 md:-mt-5">
          <FadeIn delay={0.15} y={40}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[13vw] xs:text-[12vw] sm:text-[11vw] md:text-[12vw] lg:text-[14vw]"
              itemProp="name"
            >
              Hi, i&apos;m Alfaz
              <span className="sr-only">
                {" "}
                &mdash; Cab &amp; Taxi Service in Goa
              </span>
            </h1>
          </FadeIn>
        </div>

        {/* Mobile-only supporting line under the heading */}
        <div className="px-6 mt-2">
  <FadeIn delay={0.25} y={15}>
    <h2 className="text-[#D7E2EA]/70 text-center text-[0.9rem] uppercase tracking-wider leading-relaxed font-normal">
      Your Goa Cab Driver &mdash; Your Ride, Your Schedule, Anywhere
      in the City
    </h2>
    <p
      className="text-center block mt-2 text-gray-500 max-w-2xl mx-auto"
      itemProp="description"
    >
      Reliable taxi and cab service in Goa for airport transfers,
      local rides, sightseeing tours and outstation journeys to
      Calangute, Baga, Anjuna, Panjim, Margao and beyond.
    </p>
  </FadeIn>
</div>
    

        <div className="mt-6 px-6 md:mt-30  ">
          <FadeIn delay={0.45} y={20}>
            <div className="flex items-stretch justify-center gap-3 mb-5">
              <div className="flex-1 border border-[#D7E2EA]/20 rounded-xl py-2.5 text-center">
                <p className="text-[#D7E2EA] font-bold text-base leading-none">
                  5+
                </p>
                <p className="text-[#D7E2EA]/60 uppercase tracking-wider text-[0.55rem] mt-1">
                  Years Driving in Goa
                </p>
              </div>
              <div className="flex-1 border border-[#D7E2EA]/20 rounded-xl py-2.5 text-center">
                <p className="text-[#D7E2EA] font-bold text-base leading-none">
                  1K+
                </p>
                <p className="text-[#D7E2EA]/60 uppercase tracking-wider text-[0.55rem] mt-1">
                  Happy Riders
                </p>
              </div>
              <div className="flex-1 border border-[#D7E2EA]/20 rounded-xl py-2.5 text-center">
                <p className="text-[#D7E2EA] font-bold text-base leading-none">
                  4.9
                </p>
                <p className="text-[#D7E2EA]/60 uppercase tracking-wider text-[0.55rem] mt-1">
                  Avg Rating
                </p>
              </div>
            </div>
            <div className="md:flex md:justify-center">
              <a
                href="#contact"
                aria-label="Book a cab or taxi ride in Goa with Alfaz"
                className="block w-full text-center bg-[#D7E2EA] text-[#0C0C0C] font-bold uppercase tracking-widest text-xs rounded-full py-3.5 active:scale-[0.98] transition-transform  md:w-fit md:px-20 lg:mt-7">
                Book a Ride
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Footer text */}
        <div className="mt-5 lg:mt-10 sm:mt-auto flex justify-center items-end sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10">
          <FadeIn delay={0.35} y={20}>
            <h3
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug w-full text-center sm:text-left"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }} >
              A Trusted Goa Cab Service &mdash; Safe, Comfortable &amp;
              Reliable Journeys Every Time
            </h3>
          </FadeIn>
        </div>
      </section>
    </>
  );
}