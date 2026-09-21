import Nav from "@/app/components/Nav";
import FadeIn from "../../components/Fadein";
import Footer from "@/app/components/Footer";
import CallButton from "@/app/components/CallButton";

export const metadata = {
  title: "Cab Service in Ponda Goa | Temple, Spice Farm & Local Taxi | Alfaz",
  description:
    "Reliable cab and taxi service in Ponda, Goa — rides to spice plantations, Mangeshi Temple, Shantadurga Temple and nearby attractions. Available 24/7.",
  alternates: {
    canonical: "https://fastalfazcab.in/location/ponda",
  },
  keywords: [
    "cab in Ponda Goa",
    "taxi Ponda Goa",
    "Ponda local taxi",
    "Mangeshi Temple taxi",
    "Ponda spice farm cab",
    "Ponda sightseeing taxi",
  ],
  openGraph: { title: "Cab Service in Ponda Goa | Alfaz", description: "Reliable cab and taxi service in Ponda for temples, spice farms, airport transfers and local trips. Available 24/7.", url: "https://fastalfazcab.in/location/ponda", siteName: "Alfaz Cab Service", images: [{ url: "https://fastalfazcab.in/images/Logo/Logo.webp", width: 1200, height: 630, alt: "Alfaz Cab Service — Ponda Goa" }], locale: "en_IN", type: "website" },
};

const taxiServiceSchema = { "@context": "https://schema.org", "@type": "TaxiService", name: "Alfaz Cab Service — Ponda Goa", image: "https://fastalfazcab.in/images/Logo/Logo.webp", description: "Reliable cab and taxi service in Ponda for temple visits, spice farms, airport transfers, and local rides.", telephone: "+91-7489415896", priceRange: "₹₹", areaServed: ["Ponda", "Mangeshi", "Kavlem", "Shiroda", "Bondla"], address: { "@type": "PostalAddress", addressLocality: "Ponda", addressRegion: "Goa", addressCountry: "IN" }, geo: { "@type": "GeoCoordinates", latitude: "15.4020", longitude: "74.0120" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://fastalfazcab.in/" }, { "@type": "ListItem", position: 2, name: "Ponda Goa Cab Service", item: "https://fastalfazcab.in/location/ponda" }] };


const SPOTS = [
  {
    number: "01",
    name: "Tropical Spice Plantation",
    description:
      "Walk through rows of cardamom, pepper, and vanilla vines with a guide, then sit down to a home-style Goan thali served on a banana leaf.",
    image: "https://picsum.photos/seed/tropical-spice/300/300",
  },
  {
    number: "02",
    name: "Sahakari Spice Farm",
    description:
      "One of Ponda's oldest working plantations, growing areca nut, betel leaf, and spices in a system that's barely changed in generations.",
    image: "https://picsum.photos/seed/sahakari-spice/300/300",
  },
  {
    number: "03",
    name: "Shri Mangeshi Temple",
    description:
      "The most visited Hindu temple in Goa, with a tall white lamp tower and a distinctive Indo-Portuguese roofline you won't find elsewhere in India.",
    image: "https://picsum.photos/seed/mangeshi-temple/300/300",
  },
  {
    number: "04",
    name: "Shri Shantadurga Temple",
    description:
      "Dedicated to the goddess of peace, set against wooded hills in Kavlem — one of the largest and most ornate temple complexes in the state.",
    image: "https://picsum.photos/seed/shantadurga-temple/300/300",
  },
  {
    number: "05",
    name: "Bondla Wildlife Sanctuary",
    description:
      "Goa's smallest sanctuary, but the easiest for a half-day trip — a small zoo, a botanical garden, and forest trails good for spotting deer.",
    image: "https://picsum.photos/seed/bondla-sanctuary/300/300",
  },
];

export default function Ponda() {
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
            Inland Goa
          </p>
          <h1
            className="font-black uppercase"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.8rem, 11vw, 140px)",
              lineHeight: 1,
            }}
          >
            Ponda
          </h1>
          <p
            className="font-light leading-relaxed max-w-2xl mt-6 sm:mt-8"
            style={{
              color: "#FFFFFF",
              opacity: 0.7,
              fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
            }}
          >
            Twenty minutes inland from the coast, Ponda swaps beaches for
            spice-scented plantations and some of Goa&apos;s oldest temples
            — the places locals visit as often as tourists do. Book a cab
            and we&apos;ll handle the drive between them.
          </p>
        </FadeIn>
      </section>

      <section
        id="ponda"
        className="px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-5xl mx-auto">
          {SPOTS.map((spot, i) => (
            <FadeIn key={spot.number} delay={i * 0.1}>
              <div
                className="flex items-start gap-4 sm:gap-8 py-6 sm:py-10 md:py-12"
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
                  {spot.number}
                </span>
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="hidden sm:block w-20 h-20 md:w-28 md:h-28 rounded-xl object-cover flex-shrink-0 mt-1 sm:mt-4"
                />
                <div className="flex flex-col gap-2 sm:gap-4 pt-1 sm:pt-4">
                  <h3
                    className="font-medium uppercase"
                    style={{
                      color: "#0C0C0C",
                      fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                    }}
                  >
                    {spot.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl"
                    style={{
                      color: "#0C0C0C",
                      opacity: 0.6,
                      fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
                    }}
                  >
                    {spot.description}
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