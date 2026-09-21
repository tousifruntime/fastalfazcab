import Footer from "@/app/components/Footer";
import FadeIn from "../../components/Fadein";
import Nav from "@/app/components/Nav";
import CallButton from "@/app/components/CallButton";


export const metadata = {
  title: "Cab Service in North Goa | Airport, Beach & Local Taxi | Alfaz",
    description: "Reliable cab and taxi service in North Goa — rides to Calangute, Baga, Anjuna, Vagator and nearby beaches. Airport transfers and local trips, available 24/7.",
  alternates: {
    canonical: "https://fastalfazcab.in/location/north-goa",
  },
  keywords: [
    "cab in North Goa",
    "taxi North Goa",
    "Calangute taxi",
    "Baga cab service",
    "Anjuna taxi",
    "North Goa airport transfer",
  ],
  openGraph: {
    title: "Cab Service in North Goa | Alfaz",
    description: "Reliable cab and taxi service in North Goa — Calangute, Baga, Anjuna and beyond. Available 24/7.",
    url: "https://fastalfazcab.in/location/north-goa",
    siteName: "Alfaz Cab Service",
    images: [{ url: "https://fastalfazcab.in/images/Logo/Logo.webp", width: 1200, height: 630, alt: "Alfaz Cab Service — North Goa" }],
    locale: "en_IN",
    type: "website",
  },
};

const taxiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Alfaz Cab Service — North Goa",
  image: "https://fastalfazcab.in/images/Logo/Logo.webp",
  description: "Reliable cab and taxi service in North Goa for airport transfers, beach trips, and local rides.",
  telephone: "+91-7489415896",
  priceRange: "₹₹",
  areaServed: ["North Goa", "Calangute", "Baga", "Anjuna", "Vagator"],
  address: { "@type": "PostalAddress", addressLocality: "North Goa", addressRegion: "Goa", addressCountry: "IN" },
  geo: { "@type": "GeoCoordinates", latitude: "15.5433", longitude: "73.7517" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fastalfazcab.in/" },
    { "@type": "ListItem", position: 2, name: "North Goa Cab Service", item: "https://fastalfazcab.in/location/north-goa" },
  ],
};


const PLACES = [
  {
    number: "01",
    name: "Baga Beach",
    description:
      "Goa's liveliest stretch of sand — beach shacks, water sports, and nightlife that runs well past midnight.",
  },
  {
    number: "02",
    name: "Calangute Beach",
    description:
      "The most popular beach in North Goa, known for its wide shoreline, markets, and easy access to nearby attractions.",
  },
  {
    number: "03",
    name: "Anjuna",
    description:
      "Famous for its Wednesday flea market, red cliffs, and a laid-back mix of trance parties and quiet cafes.",
  },
  {
    number: "04",
    name: "Vagator",
    description:
      "Dramatic red laterite cliffs overlooking the Arabian Sea, with a quieter pace than its neighbouring beaches.",
  },
  {
    number: "05",
    name: "Fort Aguada",
    description:
      "A 17th-century Portuguese fort with a lighthouse and sweeping views where the Mandovi River meets the sea.",
  },
  {
    number: "06",
    name: "Chapora Fort",
    description:
      "A hilltop ruin overlooking Vagator, best known for its sunset views over the coastline.",
  },
  {
    number: "07",
    name: "Candolim",
    description:
      "A calmer beach town with upscale resorts, restaurants, and easy access to Fort Aguada and Sinquerim.",
  },
  {
    number: "08",
    name: "Morjim",
    description:
      "A quiet, protected nesting site for Olive Ridley turtles, popular with those looking to escape the crowds.",
  },
];

export default function NorthGoa() {
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
            Where to go
          </p>
          <h1
            className="font-black uppercase"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.8rem, 11vw, 140px)",
              lineHeight: 1,
            }}
          >
            North Goa
          </h1>
          <p
            className="font-light leading-relaxed max-w-2xl mt-6 sm:mt-8"
            style={{
              color: "#FFFFFF",
              opacity: 0.7,
              fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
            }}
          >
            From buzzing beach shacks to quiet clifftop forts, North Goa
            covers a lot of ground. Book a cab and we&apos;ll take care of
            the driving so you can spend the day exploring instead of
            navigating.
          </p>
        </FadeIn>
      </section>

      <section
        id="north-goa"
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