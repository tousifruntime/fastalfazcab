

// app/sitemap.js


export function sitemap() {
  const baseUrl = "https://yourdomain.com"
 
  const locations = [
    "north-goa",
    "south-goa",
    "ponda",
    "panjim",
    "margoa",
    "dabolim",
  ]
 
  const locationEntries = locations.map((loc) => ({
    url: `${baseUrl}/location/${loc}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))
 
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...locationEntries,
  ]
}