// app/sitemap.js

export default function sitemap() {
  const baseUrl = "https://fastalfazcab.in";

  const locations = [
    "north-goa",
    "south-goa",
    "ponda",
    "panjim",
    "margoa",
    "dabolim",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...locations.map((loc) => ({
      url: `${baseUrl}/location/${loc}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}