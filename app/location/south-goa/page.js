import Footer from "@/app/components/Footer";
import FadeIn from "../../components/Fadein";
import Nav from "@/app/components/Nav";
import CallButton from "@/app/components/CallButton";

export const metadata = {
  title: "Cab Service in South Goa | Beach, Airport & Local Taxi | Alfaz",
  description:
    "Reliable cab and taxi service in South Goa — rides to Colva, Palolem, Benaulim, Cavelossim and nearby beaches. Airport transfers and local trips, available 24/7.",
  alternates: {
    canonical: "https://fastalfazcab.in/location/south-goa",
  },
  keywords: [
    "cab in South Goa",
    "taxi South Goa",
    "Colva taxi",
    "Palolem cab service",
    "Benaulim taxi",
    "South Goa airport transfer",
  ],
  openGraph: { title: "Cab Service in South Goa | Alfaz", description: "Reliable cab and taxi service in South Goa — Colva, Palolem, Benaulim and beyond. Available 24/7.", url: "https://fastalfazcab.in/location/south-goa", siteName: "Alfaz Cab Service", images: [{ url: "https://fastalfazcab.in/og-image.jpg", width: 1200, height: 630, alt: "Alfaz Cab Service — South Goa" }], locale: "en_IN", type: "website" },
};

const taxiServiceSchema = { "@context": "https://schema.org", "@type": "TaxiService", name: "Alfaz Cab Service — South Goa", image: "https://fastalfazcab.in/og-image.jpg", description: "Reliable cab and taxi service in South Goa for airport transfers, beach trips, and local rides.", telephone: "+91-7489415896", priceRange: "₹₹", areaServed: ["South Goa", "Colva", "Palolem", "Benaulim", "Cavelossim"], address: { "@type": "PostalAddress", addressLocality: "South Goa", addressRegion: "Goa", addressCountry: "IN" }, geo: { "@type": "GeoCoordinates", latitude: "15.2048", longitude: "74.1000" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://fastalfazcab.in/" }, { "@type": "ListItem", position: 2, name: "South Goa Cab Service", item: "https://fastalfazcab.in/location/south-goa" }] };

const PLACES = [
  {
    number: "01",
    name: "Palolem Beach",
    description:
      "A curved, palm-fringed bay with calm waters, wooden beach huts, and a relaxed, laid-back atmosphere.",
  },
  {
    number: "02",
    name: "Colva Beach",
    description:
      "One of South Goa's oldest and most popular beaches, with a lively promenade, shacks, and easy access to Margao.",
  },
  {
    number: "03",
    name: "Benaulim",
    description:
      "A quiet fishing village turned beach town, known for its wide sands, dolphin-spotting trips, and slower pace.",
  },
  {
    number: "04",
    name: "Agonda Beach",
    description:
      "A long, uncrowded stretch of shoreline favoured by those seeking peace, yoga retreats, and turtle nesting season.",
  },
  {
    number: "05",
    name: "Cabo de Rama Fort",
    description:
      "A clifftop fort with panoramic views over the Arabian Sea, steeped in Portuguese and Maratha history.",
  },
  {
    number: "06",
    name: "Cavelossim",
    description:
      "An upscale stretch near the Sal River estuary, home to luxury resorts, golf courses, and watersports.",
  },
  {
    number: "07",
    name: "Betalbatim",
    description:
      "A small, tranquil beach often overlooked by tourists, backed by coconut groves and a handful of quiet shacks.",
  },
  {
    number: "08",
    name: "Majorda",
    description:
      "A serene coastal village known for its bakeries, Portuguese-era churches, and unspoiled sandy shoreline.",
  },
];

export default function SouthGoa() {
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
            South Goa
          </h1>
          <p
            className="font-light leading-relaxed max-w-2xl mt-6 sm:mt-8"
            style={{
              color: "#FFFFFF",
              opacity: 0.7,
              fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
            }}
          >
            Quieter shores, colonial-era forts, and a slower rhythm — South
            Goa rewards those who want to unwind. Book a cab and
            we&apos;ll take care of the driving so you can spend the day
            exploring instead of navigating.
          </p>
        </FadeIn>
      </section>

      <section
        id="south-goa"
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