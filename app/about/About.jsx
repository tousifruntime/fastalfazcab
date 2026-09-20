import Link from "next/link";
import FadeIn from "../components/Fadein";
import AnimatedText from "../components/Animatedtext";
import ContactButton from "../components/Contactbutton";
import JourneyStats from "../components/JourneyStats";

export const metadata = {
  title: "About Alfaz Cab Service | Trusted Taxi Service in Goa",
  description:
    "Learn about Alfaz Cab Service, a trusted Goa taxi service providing comfortable and reliable rides for airport transfers, local travel, and outstation trips.",
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
  keywords: [
    "Alfaz cab service",
    "Alfaz taxi Goa",
    "Goa taxi service",
    "trusted cab service Goa",
    "reliable taxi Goa",
    "professional cab service Goa",
    "local taxi service Goa",
    "Goa cab company",
    "taxi service provider Goa",
    "best cab service Goa",
  ],
};

const DECOR = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    alt: "Moon icon",
    className:
      "top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[80px] xs:w-[100px] sm:w-[160px] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    alt: "3D object",
    className:
      "bottom-[1%] left-[3%] sm:left-[6%] md:left-[8%] w-[70px] xs:w-[90px] sm:w-[140px] md:w-[140px]",
    delay: 0.25,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    alt: "Lego icon",
    className:
      "top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[80px] xs:w-[100px] sm:w-[160px] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    alt: "3D group",
    className:
      "bottom-[1%] right-[3%] sm:right-[6%] md:right-[8%] w-[85px] xs:w-[110px] sm:w-[170px] md:w-[160px]",
    delay: 0.3,
    x: 80,
  },
];

const AREAS = [
  {
    number: "01",
    name: "North Goa",
    tagline: "Beaches, nightlife & airport runs",
    href: "/location/north-goa",
  },
  {
    number: "02",
    name: "South Goa",
    tagline: "Quiet coastlines & heritage villages",
    href: "/location/south-goa",
  },
  {
    number: "03",
    name: "Ponda",
    tagline: "Spice farms & temple town",
    href: "/location/ponda",
  },
  {
    number: "04",
    name: "Panjim",
    tagline: "The capital & riverfront city",
    href: "/location/panjim",
  },
  {
    number: "05",
    name: "Margao",
    tagline: "South Goa's commercial hub",
    href: "/location/margoa",
  },
  {
    number: "06",
    name: "Dabolim",
    tagline: "Goa's Airport & surrounding areas",
    href: "/location/dabolim",
  },
];


export default function About() {
  return (
    <>
      <section
        id="about"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-20 sm:py-24 md:py-30"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        {DECOR.map((item) => (
          <FadeIn
            key={item.alt}
            delay={item.delay}
            x={item.x}
            y={0}
            duration={0.9}
            className={`absolute ${item.className}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto"
            />
          </FadeIn>
        ))}

        <div className="relative z-20 flex flex-col items-center gap-8 sm:gap-20 md:gap-24">
          <div className="flex flex-col items-center gap-6 sm:gap-14 md:gap-16">
            <FadeIn delay={0} y={40}>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight text-center"
                style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
              >
                About me
              </h2>
            </FadeIn>

            <AnimatedText
              text="With over five years of experience, I provide safe, reliable, and comfortable cab services with a commitment to making every journey smooth and stress-free. Whether it’s a local ride, airport transfer, or long-distance trip, I’m here to get you where you need to go. Let’s make every journey a pleasant one!"
              className="text-center font-medium leading-relaxed max-w-[90vw] sm:max-w-[560px] px-2 sm:px-0"
              style={{
                color: "#D7E2EA",
                fontSize: "clamp(1rem, 2vw, 1.35rem)",
              }}
            />
          </div>

          <ContactButton />

          <div className="relative z-20 w-full flex justify-center">
            <JourneyStats />
          </div>
        </div>
      </section>

      <div className="mb-40 w-full flex flex-col items-center gap-10 sm:gap-14 md:gap-16 pt-4 sm:pt-8">
        <FadeIn delay={0.05} y={30}>
          <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
            <p
              className="font-light uppercase tracking-[0.2em]"
              style={{
                color: "#8A95A0",
                fontSize: "clamp(0.75rem, 1.4vw, 0.95rem)",
              }}
            >
              Where we drive
            </p>

            <h3
              className="font-black uppercase leading-none tracking-tight"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2rem, 6.5vw, 72px)",
              }}
            >
              Areas we visit
            </h3>

            <p
              className="font-light leading-relaxed max-w-[90vw] sm:max-w-[520px]"
              style={{
                color: "#D7E2EA",
                opacity: 0.75,
                fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)",
              }}
            >
              From beach towns to inland villages, we cover every corner
              of Goa. Tap a location to see what&rsquo;s there and what a ride
              looks like.
            </p>
          </div>
        </FadeIn>

        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {AREAS.map((area, i) => (
            <FadeIn
              key={area.name}
              delay={0.1 + i * 0.08}
              y={30}
            >
              <Link
                href={area.href}
                className={`group relative flex flex-col justify-between gap-8 sm:gap-10 p-6 sm:p-8 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="font-black transition-colors duration-300"
                    style={{
                      color: "#FFFFFF",
                      opacity: 0.15,
                      fontSize: "clamp(1.8rem, 4vw, 3rem)",
                      lineHeight: 1,
                    }}
                  >
                    {area.number}
                  </span>

                  <span
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-300 ease-out group-hover:rotate-45 group-hover:border-white/60"
                    style={{
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="19" x2="19" y2="5" />
                      <polyline points="9 5 19 5 19 15" />
                    </svg>
                  </span>
                </div>

                <div className="flex flex-col gap-1 sm:gap-2">
                  <h4
                    className="font-medium uppercase transition-colors duration-300"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
                    }}
                  >
                    {area.name}
                  </h4>

                  <p
                    className="font-light leading-relaxed"
                    style={{
                      color: "#D7E2EA",
                      opacity: 0.6,
                      fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
                    }}
                  >
                    {area.tagline}
                  </p>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
                  }}
                />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}