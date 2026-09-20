import Nav from "@/app/components/Nav";
import FadeIn from "../../components/Fadein";
import Footer from "@/app/components/Footer";


export const metadata = {
  title: "Cab Service in Panjim Goa | City, Airport & Local Taxi | Alfaz",
  description:
    "Reliable cab and taxi service in Panjim, Goa — rides to Fontainhas, Miramar, Dona Paula, the Mandovi Riverfront and nearby attractions. Available 24/7.",
  alternates: {
    canonical: "https://yourdomain.com/location/panjim",
  },
  keywords: [
    "cab in Panjim Goa",
    "taxi Panjim Goa",
    "Fontainhas taxi",
    "Miramar cab service",
    "Dona Paula taxi",
    "Panjim airport transfer",
  ],
  openGraph: { title: "Cab Service in Panjim Goa | Alfaz", description: "Reliable cab and taxi service in Panjim — Fontainhas, Miramar, Dona Paula and beyond. Available 24/7.", url: "https://yourdomain.com/location/panjim", siteName: "Alfaz Cab Service", images: [{ url: "https://yourdomain.com/og-image.jpg", width: 1200, height: 630, alt: "Alfaz Cab Service — Panjim Goa" }], locale: "en_IN", type: "website" },
};

const taxiServiceSchema = { "@context": "https://schema.org", "@type": "TaxiService", name: "Alfaz Cab Service — Panjim Goa", image: "https://yourdomain.com/og-image.jpg", description: "Reliable cab and taxi service in Panjim for city trips, sightseeing, airport transfers, and local rides.", telephone: "+91-7776069948", priceRange: "₹₹", areaServed: ["Panjim", "Fontainhas", "Miramar", "Dona Paula", "Mandovi Riverfront"], address: { "@type": "PostalAddress", addressLocality: "Panjim", addressRegion: "Goa", addressCountry: "IN" }, geo: { "@type": "GeoCoordinates", latitude: "15.4909", longitude: "73.8278" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://yourdomain.com/" }, { "@type": "ListItem", position: 2, name: "Panjim Goa Cab Service", item: "https://yourdomain.com/location/panjim" }] };


const SPOTS = [
  {
    number: "01",
    name: "Fontainhas",
    description:
      "Panjim's Latin Quarter — narrow lanes of ochre and blue houses, small galleries, and cafes tucked into old Portuguese-era homes.",
    image: "https://picsum.photos/seed/fontainhas-panjim/300/300",
  },
  {
    number: "02",
    name: "Our Lady of the Immaculate Conception",
    description:
      "The whitewashed church that anchors the city's skyline, with a wide staircase that's become one of Panjim's most photographed spots.",
    image: "https://picsum.photos/seed/panjim-church/300/300",
  },
  {
    number: "03",
    name: "Mandovi Riverfront",
    description:
      "Evening cruises and casino boats along the river promenade, with live music and views back toward the city lights.",
    image: "https://picsum.photos/seed/mandovi-river/300/300",
  },
  {
    number: "04",
    name: "Miramar Beach",
    description:
      "A wide, easy beach a short drive from the city centre — less about swimming, more about a sunset walk after a day in town.",
    image: "https://picsum.photos/seed/miramar-beach/300/300",
  },
  {
    number: "05",
    name: "Dona Paula",
    description:
      "A rocky headland where the Mandovi and Zuari rivers meet the sea, popular for sunset views and short boat rides.",
    image: "https://picsum.photos/seed/dona-paula/300/300",
  },
  {
    number: "06",
    name: "Goa State Museum",
    description:
      "A compact museum covering Goan sculpture, coins, and Christian art — a good rainy-day stop in the city.",
    image: "https://picsum.photos/seed/goa-state-museum/300/300",
  },
  {
    number: "07",
    name: "18th June Road & Municipal Market",
    description:
      "Panjim's main shopping stretch, running from bookshops and cafes down to the city's central produce market.",
    image: "https://picsum.photos/seed/18th-june-road/300/300",
  },
  {
    number: "08",
    name: "Reis Magos Fort",
    description:
      "Across the river in Verem, a restored 16th-century fort with river views and a small gallery of Goan art.",
    image: "https://picsum.photos/seed/reis-magos-fort/300/300",
  },
];

export default function Panjim() {
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
            The capital
          </p>
          <h1
            className="font-black uppercase"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.8rem, 11vw, 140px)",
              lineHeight: 1,
            }}
          >
            Panjim
          </h1>
          <p
            className="font-light leading-relaxed max-w-2xl mt-6 sm:mt-8"
            style={{
              color: "#FFFFFF",
              opacity: 0.7,
              fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
            }}
          >
            Goa&apos;s capital, where Portuguese-era streets, a working
            riverfront, and everyday city life sit side by side. Easy to
            wander on foot, and a natural base for trips out to the
            beaches or inland.
          </p>
        </FadeIn>
      </section>

      <section
        id="panjim"
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

      <Footer />
    </>
  );
}