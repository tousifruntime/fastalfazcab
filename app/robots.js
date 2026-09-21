

// app/robots.js 

export function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [], // add paths here later if you ever need to block something, e.g. "/admin"
    },
    sitemap: "https://fastalfazcab.in/sitemap.xml",
  }
}
 
