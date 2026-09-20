import FadeIn from "../components/Fadein";

export const metadata = {
  title: "Cab Services in Goa | Airport, Local & Outstation Taxi",
  description:  "Explore Alfaz cab services in Goa including airport transfers, local taxi rides, sightseeing trips, and comfortable outstation journeys.",
  alternates: {
    canonical: "https://yourdomain.com/services",
  },
  keywords: [
    "cab services Goa",
    "taxi services Goa",
    "airport taxi Goa",
    "airport transfer Goa",
    "local cab Goa",
    "sightseeing taxi Goa",
    "outstation taxi Goa",
    "Goa tour cab",
    "one way cab Goa",
    "24/7 taxi Goa",
    "private cab Goa",
    "Goa travel taxi",
  ],
};


const SERVICES = [
  {
    number: "01",
    name: "Cab Rental",
    description:
      "Reliable cab rental services for local travel, personal trips, business visits, and comfortable transportation whenever you need it.",
  },
  {
    number: "02",
    name: "Events",
    description:
      "Convenient cab services for parties, corporate events, family functions, and other special occasions.",
  },
  {
    number: "03",
    name: "Airport Transfers",
    description:
      "On-time airport pickup and drop-off services designed to make your journey smooth, comfortable, and stress-free.",
  },
  {
    number: "04",
    name: "Hotel Transfers",
    description:
      "Easy transportation to and from hotels, resorts, and accommodations across Goa with reliable and comfortable rides.",
  },
];

export default function Services() {
  return (
    <section id="services"
      className="px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ backgroundColor: "#FFFFFF" }}  >

      <h2
        className="font-black uppercase text-center mb-12 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)" }} >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-4 sm:gap-10 py-6 sm:py-10 md:py-12"
              style={{ borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }} >
              <span
                className="font-black flex-shrink-0"
                style={{
                  color: "#0C0C0C",
                  fontSize: "clamp(2.5rem, 10vw, 140px)",
                  lineHeight: 1,
                }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-4 pt-1 sm:pt-4">
                <h3
                  className="font-medium uppercase"
                  style={{
                    color: "#0C0C0C",
                    fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                  }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: "#0C0C0C",
                    opacity: 0.6,
                    fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
