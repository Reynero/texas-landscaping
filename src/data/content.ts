export const siteContent = {
    business: {
    name: "Texas Crown Landscaping",
    phones: {
      primary: "(972) 603-5330",
      secondary: "(972) 480-1640",
    },
    tagline: "Trusted landscaping, done right.",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
    contact: {
    address: "237 Roscoe Drive 75087",
    hours: "Mon–Fri: 8am–6pm",
    email: "torrico_32@hotmail.com",
  },
  serviceGroups: [
    {
      title: "Design & Construction",
      items: ["Landscape Design", "Hardscaping & Patios", "Retaining Walls", "Outdoor Kitchens"],
    },
    {
      title: "Irrigation & Water",
      items: ["Sprinkler Installation & Repair", "Drip Irrigation Conversion", "Water Features"],
    },
    {
      title: "Outdoor Living",
      items: ["Fire Pits & Fireplaces", "Pergolas & Arbors", "Landscape Lighting"],
    },
  ],
  promo: {
    text: "PROMOS COMING SOON!",
  },
} as const;

