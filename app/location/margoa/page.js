import Footer from "@/app/components/Footer";
import FadeIn from "../../components/Fadein";
import Nav from "@/app/components/Nav";
import CallButton from "@/app/components/CallButton";


export const metadata = {
  title: "Cab Service in Margao Goa | City, Airport & Local Taxi | Alfaz",
  description:  "Reliable cab and taxi service in Margao, Goa — rides to the municipal market, Holy Spirit Church, Monte Hill and nearby South Goa attractions. Available 24/7.",
  alternates: {
    canonical: "https://fastalfazcab.in/location/margoa",
  },
  keywords: [
    "cab in Margao Goa",
    "taxi Margao Goa",
    "Margao city taxi",
    "taxi in margao",
    "Madgaon taxi",
    "Margao local cab",
    "Margao airport transfer",
    "Margao sightseeing taxi",
  ],
  openGraph: { title: "Cab Service in Margao Goa | Alfaz", description: "Reliable cab and taxi service in Margao — city trips, airport transfers, sightseeing and South Goa travel. Available 24/7.", url: "https://fastalfazcab.in/location/margoa", siteName: "Alfaz Cab Service", images: [{ url: "https://fastalfazcab.in/images/Logo/Logo.webp", width: 1200, height: 630, alt: "Alfaz Cab Service — Margao Goa" }], locale: "en_IN", type: "website" },
};

const taxiServiceSchema = { "@context": "https://schema.org", "@type": "TaxiService", name: "Alfaz Cab Service — Margao Goa", image: "https://fastalfazcab.in/images/Logo/Logo.webp", description: "Reliable cab and taxi service in Margao for city trips, airport transfers, sightseeing, and local rides.", telephone: "+91-7489415896", priceRange: "₹₹", areaServed: ["Margao", "Madgaon", "Colva", "Benaulim", "Navelim"], address: { "@type": "PostalAddress", addressLocality: "Margao", addressRegion: "Goa", addressCountry: "IN" }, geo: { "@type": "GeoCoordinates", latitude: "15.2750", longitude: "73.9570" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://fastalfazcab.in/" }, { "@type": "ListItem", position: 2, name: "Margao Goa Cab Service", item: "https://fastalfazcab.in/location/margoa" }] };


const PLACES = [
  {
    number: "01",
    name: "Margao Municipal Market",
    description:
      "A dense, covered market at the heart of the city — spice stalls, fish sellers, and tailors packed into narrow lanes since the 1900s.",
  },
  {
    number: "02",
    name: "Church of the Holy Spirit",
    description:
      "A whitewashed 17th-century church facing Margao's largest square, still the anchor of the city's Feast of the Holy Spirit each May.",
  },
  {
    number: "03",
    name: "Monte Hill Chapel",
    description:
      "A small chapel on a hilltop above the city, best visited near sunset for a wide, quiet view over Margao's rooftops.",
  },
  {
    number: "04",
    name: "Sat Burnzam Ghor",
    description:
      "The 'Seven Gabled House' — one of the last surviving fragments of a much larger 18th-century mansion, now a protected heritage site.",
  },
];

export default function Margao() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <section
        className="px-4 sm:px-8 md:px-10 pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <FadeIn>
          <p
            className="font-light"
            style={{
              color: "#FFFFFF",
              opacity: 0.6,
              fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)",
            }}
          >
            City guide
          </p>
          <h1
            className="font-black uppercase"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.8rem, 11vw, 140px)",
              lineHeight: 1,
            }}
          >
            Margao
          </h1>
          <p
            className="font-light leading-relaxed max-w-2xl mt-6 sm:mt-8"
            style={{
              color: "#FFFFFF",
              opacity: 0.7,
              fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
            }}
          >
            Known locally as Madgaon, this is where South Goa actually runs
            its errands — markets, churches, old merchant houses, and the
            train station that connects the state to the rest of India.
            Book a cab and we&apos;ll take care of the driving so you can
            spend the day exploring instead of navigating.
          </p>
        </FadeIn>
      </section>

      <section
        id="margao"
        className="px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-5xl mx-auto">
          {PLACES.map((place, i) => (
            <FadeIn key={place.number} delay={i * 0.1}>
              <div
                className="flex items-start gap-4 sm:gap-10 py-6 sm:py-10 md:py-12"
                style={{ borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }}
              >
                <span
                  className="font-black flex-shrink-0"
                  style={{
                    color: "#0C0C0C",
                    fontSize: "clamp(2.5rem, 10vw, 140px)",
                    lineHeight: 1,
                  }}
                >
                  {place.number}
                </span>
                <div className="flex flex-col gap-2 sm:gap-4 pt-1 sm:pt-4">
                  <h3
                    className="font-medium uppercase"
                    style={{
                      color: "#0C0C0C",
                      fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                    }}
                  >
                    {place.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl"
                    style={{
                      color: "#0C0C0C",
                      opacity: 0.6,
                      fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
                    }}
                  >
                    {place.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

       {/* Kept outside the clipped wrapper so the fixed button is never cut off */}
      <CallButton phone="7489415896" countryCode="+91" label="Call now" />

      <Footer />
    </>
  );
}