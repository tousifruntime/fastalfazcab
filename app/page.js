import React from "react";
import Hero from "./pages/Hero";
import Nav from "./components/Nav";
import About from "./about/About";
import Services from "./services/Services";
import Galary from "./galary/Galary";
import Contact from "./contact/Contact";
import Marquee from "./Marquee/Marquee";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";

const SITE_URL = "https://yourdomain.com";
const PHONE = "+91-7776069948";

export const metadata = {
  title: "Cab in Goa | Reliable 24/7 Cab Service by Alfaz",
  description:
    "Looking for a trusted cab in Goa? Alfaz offers safe, comfortable rides for airport transfers, local trips, and outstation journeys — available 24/7.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "cab in Goa",
    "taxi in Goa",
    "Goa cab service",
    "Goa taxi service",
    "cab booking Goa",
    "airport taxi Goa",
    "Goa airport transfer",
    "Goa sightseeing cab",
    "local taxi Goa",
    "outstation cab Goa",
    "24/7 cab service Goa",
    "reliable cab Goa",
  ],

  // Tells Google to index this page and follow its links
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph — WhatsApp, Facebook, LinkedIn, iMessage, Telegram
  openGraph: {
    title: "Cab in Goa | Reliable 24/7 Cab Service by Alfaz",
    description:
      "Trusted cab in Goa for airport transfers, local rides, and outstation journeys — available 24/7.",
    url: SITE_URL,
    siteName: "Alfaz Cab Service",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alfaz Cab Service in Goa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Cab in Goa | Reliable 24/7 Cab Service by Alfaz",
    description:
      "Trusted cab in Goa for airport transfers, local rides, and outstation journeys — available 24/7.",
    images: ["/og-image.jpg"],
  },

  // Icons / favicon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  category: "Transportation",
  authors: [{ name: "Alfaz" }],
  creator: "Alfaz Cab Service",
  publisher: "Alfaz Cab Service",
  formatDetection: {
    telephone: true,
  },
};

export const cabServiceSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Alfaz Cab Service",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  description:
    "Reliable cab in Goa for airport transfers, local rides, and outstation trips.",
  telephone: PHONE,
  priceRange: "₹₹",
  areaServed: ["Goa", "Calangute", "Baga", "Anjuna", "Panjim", "Margao"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goa",
    addressCountry: "IN",
  },
  // Only include aggregateRating if these numbers are real and verifiable
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1000",
  },
};

const Page = () => {
  return (
    <>
      <div
        className="min-h-screen pt-20"
        style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cabServiceSchema) }}
        />

        <Nav />

        <main className="mt-10">
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Galary />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Kept outside the clipped wrapper so the fixed button is never cut off */}
      <CallButton phone="7776069948" countryCode="+91" label="Call now" />
    </>
  );
};

export default Page;