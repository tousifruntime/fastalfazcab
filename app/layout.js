import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  icons: {
    icon: "/images/Logo/Logo.webp",
    shortcut: "/images/Logo/Logo.webp",
    apple: "/images/Logo/Logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
       
        {children}

        <GoogleAnalytics gaId="G-RQBM3BXV91" />

        <Toaster />
        
      </body>
    </html>
  );
}