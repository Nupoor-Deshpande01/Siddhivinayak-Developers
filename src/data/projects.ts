export interface ProjectDetail {
  id: string;
  category: "residential" | "commercial" | "redevelopment";
  title: string;
  location: string;
  specs: string;
  price: string;
  status: "Featured" | "Completed" | "Pre-Launch" | "Under Construction";
  image: string;
  overview: string;
  highlights: string[];
  features: {
    label: string;
    value: string;
  }[];
}

export const projectsList: ProjectDetail[] = [
  // --- RESIDENTIAL PROJECTS ---
  {
    id: "vista",
    category: "residential",
    title: "Siddhivinayak Vista",
    location: "Koregaon Park, Pune",
    specs: "3 & 4 BHK Sky Condominiums",
    price: "Starting at ₹4.2 Cr*",
    status: "Featured",
    image: "/assets/project_highrise.png",
    overview: "Siddhivinayak Vista represents the peak of high-end sky residences in Koregaon Park. Each home spans an entire half-floor, offering 360-degree panoramic views of the river and Mula-Mutha greens. Crafted for modern icons, it balances privacy with ultra-luxury specs.",
    highlights: [
      "Private elevator access opening directly into your personal lobby",
      "Double-height wrap-around sky decks with wooden panel finishes",
      "Fully integrated Italian marble flooring and premium automated kitchen appliances",
      "A 50,000 sq. ft. private clubhouse featuring temperature-controlled pools"
    ],
    features: [
      { label: "RERA ID", value: "P52100987654" },
      { label: "Possession", value: "December 2027" },
      { label: "Total Towers", value: "2 Towers (22 Stories)" }
    ]
  },
  {
    id: "villas",
    category: "residential",
    title: "Siddhivinayak Signature Villas",
    location: "Lonavala Hills",
    specs: "4 & 5 BHK Private Pool Estates",
    price: "Sold Out",
    status: "Completed",
    image: "/assets/hero_villa.png",
    overview: "Nestled in the tranquil valleys of Lonavala, Signature Villas is a collection of limited-edition vacation estates. Designed with massive glass panes, cantilever balconies, and private temperature-controlled pools, it brings the misty hills into your living room.",
    highlights: [
      "Private heated infinity edge pools overlooking the Sahyadri valley",
      "Over 10,000 sq. ft. of private landscaped lawns and gazebos per villa",
      "Eco-conscious design with rainwater harvest grids and solar microgrids",
      "Professional concierge and 24/7 on-site hospitality management"
    ],
    features: [
      { label: "RERA ID", value: "P52100123456" },
      { label: "Project Area", value: "12 Acres" },
      { label: "Villas Count", value: "24 Exclusive Estates" }
    ]
  },
  {
    id: "crown",
    category: "residential",
    title: "Siddhivinayak Crown",
    location: "Baner, Pune",
    specs: "2 & 3 BHK Premium Residences",
    price: "Starting at ₹1.65 Cr*",
    status: "Under Construction",
    image: "/assets/project_highrise.png",
    overview: "Siddhivinayak Crown brings premium high-rise living to Pune's technology corridor in Baner. Designed for modern professionals, it blends premium layouts with excellent connectivity, lush landscaped gardens, and a host of physical wellness amenities.",
    highlights: [
      "Vastu-compliant layouts with zero-waste floor design",
      "Full-height structural windows ensuring plenty of natural light and breeze",
      "Rooftop jogging tracks and open-air meditation decks",
      "Equipped with multi-tier video intercom systems and fire suppression grids"
    ],
    features: [
      { label: "RERA ID", value: "P52100889900" },
      { label: "Possession", value: "June 2028" },
      { label: "Total Units", value: "180 Apartments" }
    ]
  },

  // --- COMMERCIAL PROJECTS ---
  {
    id: "lumina",
    category: "commercial",
    title: "Siddhivinayak Lumina",
    location: "Baner, Pune",
    specs: "Grade-A Retail & Office Spaces",
    price: "Starting at ₹2.5 Cr*",
    status: "Pre-Launch",
    image: "/assets/project_highrise.png",
    overview: "Siddhivinayak Lumina is a futuristic business hub situated directly on the Baner main highway. Boasting a striking curtain-wall glass facade and triple-height designer lobbies, it is structured to host premium MNC offices and luxury retail outlets.",
    highlights: [
      "Double-height grand entrance lobby with access control turnstiles",
      "LEED Gold certified building with energy-saving solar glass curtain walls",
      "Advanced multi-level mechanical parking system for over 400 cars",
      "Exclusive rooftop business club and premium executive conference suites"
    ],
    features: [
      { label: "RERA ID", value: "P52100654321" },
      { label: "Launch Date", value: "November 2026" },
      { label: "Floor Plates", value: "22,000 sq. ft. average" }
    ]
  },
  {
    id: "plaza",
    category: "commercial",
    title: "Siddhivinayak Plaza",
    location: "Kalyani Nagar, Pune",
    specs: "High-Street Boutique Retail Plaza",
    price: "Starting at ₹3.8 Cr*",
    status: "Under Construction",
    image: "/assets/hero_villa.png",
    overview: "Siddhivinayak Plaza is designed as Pune's next major high-street luxury destination. Catering to international fashion houses, fine dining brands, and designer showrooms, it offers maximum visual exposure and heavy foot traffic layouts.",
    highlights: [
      "Open-to-sky walking avenues with integrated water fountains",
      "Individual shop frontages spanning over 25 feet in full glass",
      "Equipped with central water-cooled chillers and low-maintenance designs",
      "Centrally located in Pune's premium residential and commercial neighborhood"
    ],
    features: [
      { label: "RERA ID", value: "P52100554433" },
      { label: "Possession", value: "April 2027" },
      { label: "Total Outlets", value: "45 Premium Retail Spaces" }
    ]
  },
  {
    id: "hub",
    category: "commercial",
    title: "Siddhivinayak Hub",
    location: "Senapati Bapat Road, Pune",
    specs: "Bespoke Corporate Offices",
    price: "Starting at ₹1.9 Cr*",
    status: "Pre-Launch",
    image: "/assets/project_highrise.png",
    overview: "Siddhivinayak Hub offers tailored workspace solutions on Senapati Bapat Road. Ideal for corporate headquarters, software centers, and financial consultancy firms, it features custom floor plates, high-speed fiber routes, and smart building features.",
    highlights: [
      "Smart BMS (Building Management System) managing climate controls dynamically",
      "Supercharged co-working desks, video meeting pods, and creative break lounges",
      "Zero-carbon waste management and greywater recycling systems",
      "Direct backup generator capacity ensuring 100% server uptime"
    ],
    features: [
      { label: "RERA ID", value: "P52100776655" },
      { label: "Launch Date", value: "March 2027" },
      { label: "Height Plates", value: "Stilt + 12 Office Levels" }
    ]
  },

  // --- REDEVELOPMENT PROJECTS ---
  {
    id: "legacy",
    category: "redevelopment",
    title: "Siddhivinayak Legacy",
    location: "Erandwane, Pune",
    specs: "Premium 3 BHK Residences",
    price: "Starting at ₹3.1 Cr*",
    status: "Under Construction",
    image: "/assets/project_highrise.png",
    overview: "Siddhivinayak Legacy represents the modernization of a historic landmark society in Erandwane. The project upgrades old residences into earthquake-resistant high-rise structures featuring modern luxury and automated parking systems.",
    highlights: [
      "Substantial elevation increase with panoramic views of Erandwane green lanes",
      "Automated robotic car parking elevator tower for hassle-free space utilization",
      "Fully optimized layouts with separate utility balconies and servant quarters",
      "Constructed with premium fly-ash bricks and high-strength concrete mixes"
    ],
    features: [
      { label: "RERA ID", value: "P52100112233" },
      { label: "Possession", value: "September 2027" },
      { label: "Upgraded Families", value: "48 Happy Original Owners" }
    ]
  },
  {
    id: "heritage",
    category: "redevelopment",
    title: "Siddhivinayak Heritage",
    location: "Sadashiv Peth, Pune",
    specs: "2 & 3 BHK Cultural Residences",
    price: "Starting at ₹1.4 Cr*",
    status: "Featured",
    image: "/assets/hero_villa.png",
    overview: "Siddhivinayak Heritage blends the historic charm of Sadashiv Peth with modern security features. This project redevelops traditional housing layouts into multi-tier earthquake-resilient structures while preserving traditional Wada design details.",
    highlights: [
      "Wada-inspired entrance gateway with traditional teakwood accent features",
      "State-of-the-art biometric locking handles and CCTV camera systems",
      "Rooftop solar water heaters and solar panels for lobby lighting",
      "Quiet community library and senior citizen community sitting decks"
    ],
    features: [
      { label: "RERA ID", value: "P52100223344" },
      { label: "Possession", value: "June 2027" },
      { label: "Structure", value: "Earthquake Zone III Compliance" }
    ]
  },
  {
    id: "heights",
    category: "redevelopment",
    title: "Siddhivinayak Heights",
    location: "Shivajinagar, Pune",
    specs: "4 BHK Luxury Sky Suites",
    price: "Starting at ₹5.5 Cr*",
    status: "Featured",
    image: "/assets/project_highrise.png",
    overview: "Siddhivinayak Heights is a major redevelopment high-rise standing high in Shivajinagar. Upgrading a legacy estate, it transforms the space into a grand residential tower with custom 4 BHK apartments, private servant zones, and advanced home tech.",
    highlights: [
      "Spacious single-family layout with over 3,200 sq. ft. of carpet area",
      "Private video gate pass, biometric lobby elevator access controls",
      "Equipped with advanced multi-zone water softening and purification filters",
      "Eco-certified design with greywater gardens and solid waste compost units"
    ],
    features: [
      { label: "RERA ID", value: "P52100334455" },
      { label: "Possession", value: "March 2028" },
      { label: "Height", value: "G + 24 Luxury Suites" }
    ]
  }
];
