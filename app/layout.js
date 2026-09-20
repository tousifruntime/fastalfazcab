 
import "./globals.css";
import { Toaster } from "react-hot-toast";
 

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className="h-full antialiased"  >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
