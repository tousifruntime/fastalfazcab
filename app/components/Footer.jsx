"use client";

import { Car, Phone, MapPin, Mail, ArrowUp } from "lucide-react";

import {FaFacebookF,FaInstagram,FaYoutube,FaTwitter,} from "react-icons/fa";

 // FOOTER CONTENT 

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "North Goa", href: "/location/north-goa" },
  { label: "South Goa ", href: "/location/south-goa" },
  { label: "Ponda", href: "/location/ponda" },
  { label: "Margoa", href: "/location/margoa" },
];

const companyLinks = [
  { label: "Careers", href: "/#contact" },
  { label: "Customer Reviews", href: "/#contact" },
  { label: "Privacy Policy", href: "/#contact" },
  { label: "Terms of Service", href: "/#contact" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" text-white" style={{ backgroundColor: "#0C0C0C" }}>
      {/* CTA BAND */}
      <div className="mt-0 p-3 relative overflow-hidden border-t border-gray-800">
        {/* faint asphalt texture */}
        <div
          className=" pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 14px)",
          }}
        />
        
    <div className="grid grid-cols-[30%_60%] lg:grid-cols-[30%_40%_30%] border border-gray-700 rounded-lg p-5 sm:p-6 md:p-8 hover:border-gray-500 transition-colors duration-300">
       
       <div className="">
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
        <Phone size={24} className="text-green-400" />
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Get in Touch</h2>
       </div>

      <div className="space-y-4 ">
        <div> 
        </div>

        
      </div>
       </div>

       <div className="hidden lg:block">
        </div>

       <div className="">
         <button onClick={() => (window.location.href = "tel:+919876543210")} className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
          <Phone size={18} />
          Start Call
        </button>
       </div>
    </div>


      </div>





      {/* MAIN LINKS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[0.5fr_1fr] gap-x-8 gap-y-10">
        {/* BRAND */}
        <div className=" flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-linear-to-r from-blue-500 to-purple-600">
              <img src="/images/Logo/Logo.webp" alt="" />
            </span>
            <span className="text-lg font-bold tracking-tight">
              Fast Alfaz Cab
            </span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            Quality pre-owned and new vehicles, transparent pricing, and a
            team that treats every sale like it&apos;s the only one that matters.
          </p>

          <div className="flex  flex-col gap-2 text-sm text-gray-400 mt-2">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <Phone size={14} className="text-green-400 shrink-0" />
              +91 7489415896
            </a>
            <a  href="mailto:fastalfazcab@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300 break-all">
              <Mail size={14} className="text-purple-400 shrink-0" />
              fastalfazcab@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-400 shrink-0" />
              Panjim, Goa, India
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2 ">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>



        <div className="flex flex-row  w-full justify-between">
        {/* EXPLORE */}
        <nav aria-label="Explore">
          <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">
            Explore
          </p>
          <ul className="flex flex-col gap-3">
            {exploreLinks.map(({ label, href, sectionId }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(event) => {
                    if (sectionId) {
                      event.preventDefault();
                      scrollToSection(sectionId);
                    }
                  }}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* SERVICES */}
        <nav aria-label="Services">
          <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">
            Services
          </p>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* COMPANY */}
        <nav aria-label="Company">
          <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">
            Company
          </p>
          <ul className="flex flex-col gap-3">
            {companyLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        </div>
        



      </div>





      {/* ROAD-LINE DIVIDER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="border-t-2 border-dashed border-gray-800" />
      </div>




      {/* BOTTOM BAR */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500 text-center sm:text-left">
          © {year} Fast Alfaz Cab. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors duration-300"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}