// ─────────────────────────────────────────────────────────────
// Case Studies Data
// Single source of truth for all portfolio/case study content.
// Add new projects here — Portfolio and CaseStudy pages
// both pull from this file automatically.
// ─────────────────────────────────────────────────────────────

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category:
    | "Web Platform"
    | "Web App"
    | "Mobile App"
    | "AI & Automation"
    | "Branding";
  tags: string[];
  summary: string;
  liveUrl?: string;
  // Portfolio card
  thumbnail: string; // image path e.g. "/images/work/dsn-thumb.jpg"
  // Case study detail
  situation: string;
  challenge: string;
  approach: string;
  execution: string;
  outcome: string;
  images: string[]; // additional screenshots
  testimonial?: {
    quote: string;
    name: string;
    title: string;
  };
};

// export const CASE_STUDIES: CaseStudy[] = [
//   {
//     slug: "data-science-nigeria",
//     title: "Redesigning Nigeria's Largest Data Science Community Platform",
//     client: "Data Science Nigeria",
//     category: "Web Platform",
//     tags: ["Web Design", "Development", "React"],
//     summary:
//       "Elevated DSN's public platform to match the credibility of Nigeria's most influential data science organisation — improving trust with global academic and corporate partners.",
//     liveUrl: "https://datasciencenigeria.org",
//     thumbnail: "/images/work/dsn-thumb.jpg",
//     situation:
//       "Data Science Nigeria is the largest data science community in Nigeria, with over 50,000 members and partnerships with global organisations. Despite their scale and influence, their web presence didn't reflect that stature — creating a credibility gap when engaging international partners and sponsors.",
//     challenge:
//       "The existing site was difficult to navigate, visually inconsistent, and slow to load. The challenge wasn't just a redesign — it was rebuilding trust in the brand through the digital experience, without disrupting an active community that relied on the platform daily.",
//     approach:
//       "We started with a full audit of the existing site — content architecture, user flows, and performance. We identified the three primary audiences (community members, corporate partners, and academic institutions) and designed distinct pathways for each. The visual direction was elevated but approachable — serious enough for boardroom credibility, open enough for a community.",
//     execution:
//       "Built on React with a headless CMS for the DSN team to manage content independently. Performance was a priority — the site loads in under 2 seconds on a standard Nigerian mobile connection. We implemented structured data markup for better search visibility and built a custom events system for their training programmes.",
//     outcome:
//       "The new platform significantly improved DSN's credibility in international conversations. Partner organisations noted the improved professionalism on first visit. The DSN team reported a measurable reduction in the time spent explaining the organisation — the site now does that work for them.",
//     images: ["/images/work/dsn-1.jpg", "/images/work/dsn-2.jpg"],
//     testimonial: {
//       quote:
//         "The new platform changed how international partners perceive us from the first interaction. It finally reflects the scale of what DSN actually is.",
//       name: "DSN Team",
//       title: "Data Science Nigeria",
//     },
//   },
//   {
//     slug: "tradecrib",
//     title:
//       "Building a Credible Property Platform for a Growing Real Estate Brand",
//     client: "Tradecrib Limited",
//     category: "Web Platform",
//     tags: ["Web Design", "Development", "Real Estate"],
//     summary:
//       "Delivered a professional property platform that positioned Tradecrib as a serious player in Nigeria's competitive real estate market.",
//     liveUrl: "https://tradecriblimited.com",
//     thumbnail: "/images/work/tradecrib-thumb.jpg",
//     situation:
//       "Tradecrib was a growing real estate company with a strong local reputation but a web presence that undercut their credibility with serious property buyers and investors. They needed a platform that communicated professionalism and made it easy for buyers to find and inquire about properties.",
//     challenge:
//       "Real estate platforms need to balance visual impact with functional clarity — beautiful photography matters, but so does search, filtering, and a smooth inquiry flow. The brief was to build something that felt premium without being slow or complicated.",
//     approach:
//       "We focused on the buyer journey first — from landing to inquiry in as few steps as possible. The design prioritised photography, with a clean layout that let properties speak for themselves. We built a custom property listing system with filtering by location, type, and price range.",
//     execution:
//       "Full-stack build with a custom CMS that allows the Tradecrib team to add and update listings without developer support. Mobile-first responsive design — the majority of Nigerian property buyers browse on mobile. Integrated WhatsApp inquiry flow alongside a standard contact form.",
//     outcome:
//       "Tradecrib reported a significant increase in quality inquiries within the first month of launch. The platform is now a core part of their sales process — agents share property links directly with prospective buyers.",
//     images: ["/images/work/tradecrib-1.jpg", "/images/work/tradecrib-2.jpg"],
//   },
//   {
//     slug: "stories-click",
//     title: "A Portfolio Platform for a UK-Based Creative Professional",
//     client: "Stories Click",
//     category: "Web Platform",
//     tags: ["Web Design", "Portfolio", "Creative"],
//     summary:
//       "Designed and built a personal portfolio platform that helped a UK-based creative professional attract international clients and opportunities.",
//     liveUrl: "https://storiesclick.co.uk",
//     thumbnail: "/images/work/storiesclick-thumb.jpg",
//     situation:
//       "Stories Click needed a portfolio that did more than display work — it needed to communicate a distinctive creative voice and make an immediate impression on international clients and collaborators.",
//     challenge:
//       "Creative portfolios walk a fine line between personal expression and professional clarity. Too much personality and it alienates clients. Too corporate and it loses the creative edge. The design had to hold both.",
//     approach:
//       "We led with the work. The homepage is essentially a curated gallery — immediate visual impact, minimal interference from layout. Navigation is deliberately simple. The about section is short and voice-led — enough to establish the person behind the work.",
//     execution:
//       "Built with React, optimised for fast image loading across varying UK and international connection speeds. Custom transitions between portfolio items to maintain the editorial feel. SEO structured for discovery by creative directors and commissioning editors.",
//     outcome:
//       "The client reported attracting new international clients and opportunities within weeks of launch — directly attributing several inquiries to the new site.",
//     images: ["/images/work/storiesclick-1.jpg"],
//     testimonial: {
//       quote:
//         "They took the time to understand my vision and built something that perfectly showcases my work. It's already helping me attract more clients and opportunities internationally.",
//       name: "Oyindamola Olofinua",
//       title: "Global Marketing Communications Strategist",
//     },
//   },
// ];

export const CATEGORIES = [
  "All",
  "Web Platform",
  "Web App",
  "Mobile App",
  "AI & Automation",
  "Branding",
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tab-hse-services",
    title: "Repositioning an HSE Leader for Corporate Trust and Clarity",
    client: "TAB HSE Services",
    category: "Web Platform",
    tags: ["Web Design", "Development", "React"],
    summary:
      "Transformed TAB HSE’s digital presence into a clear, authoritative platform that reflects its standing in Nigeria’s health, safety, and environmental sector.",
    liveUrl: "https://tabhseservices.com/",
    thumbnail: "/img/portfolio/tabhse-1.jpg",
    situation:
      "TAB HSE operates in a credibility-sensitive industry where trust determines contract decisions. Despite strong expertise and client history, their previous website lacked the structure and clarity needed to communicate that authority to corporate stakeholders.",
    challenge:
      "The platform needed to present complex HSE services in a way that was both accessible and credible. It also had to support decision-makers who often evaluate multiple vendors quickly.",
    approach:
      "We restructured the entire information architecture around clarity and hierarchy, grouping services logically, simplifying navigation, and refining messaging to align with how corporate clients assess HSE providers.",
    execution:
      "Built a React-based platform with strong typographic hierarchy, clear service segmentation, and performance optimisation for mobile and desktop. Key pages were designed to answer common client questions upfront, reducing friction in decision-making.",
    outcome:
      "The new platform reinforces TAB HSE’s authority, shortens the sales conversation, and improves first impressions with corporate and industrial clients.",
    images: ["/img/portfolio/tabhse-1.jpg"],
  },

  {
    slug: "capricorn-global-properties",
    title: "Building a Real Estate Platform That Signals Investor Confidence",
    client: "Capricorn Global Properties",
    category: "Web Platform",
    tags: ["Web Design", "Development", "Real Estate"],
    summary:
      "Delivered a modern property platform that positions Capricorn Global Properties as a credible real estate brand for both local and international investors.",
    liveUrl: "https://cgpafrica.com/",
    thumbnail: "/images/work/cgp-thumb.jpg",
    situation:
      "Capricorn Global Properties was expanding its reach and needed a platform that could speak to both Nigerian buyers and international investors — audiences with different expectations around trust and usability.",
    challenge:
      "Real estate platforms must balance visual impact with functional clarity. The challenge was to showcase properties effectively while maintaining speed, usability, and a premium brand feel.",
    approach:
      "We mapped the buyer journey from discovery to inquiry and designed the platform to minimise friction at each stage, ensuring users could quickly browse, evaluate, and take action.",
    execution:
      "Developed a responsive platform with structured property listings, filtering by key attributes, and optimised performance for mobile-heavy traffic. Visual hierarchy was carefully controlled to keep focus on listings.",
    outcome:
      "The platform improves investor confidence, supports faster property discovery, and strengthens Capricorn’s positioning in a competitive market.",
    images: ["/images/work/cgp-1.jpg"],
  },

  {
    slug: "iwillvotein2027",
    title: "Designing a High-Conversion Platform for Civic Participation",
    client: "IWillVoteIn2027",
    category: "Web App",
    tags: ["Web Design", "Development"],
    summary:
      "Created a focused digital platform that drives user commitment and participation in Nigeria’s 2027 elections.",
    liveUrl: "https://iwillvotein2027.ng/",
    thumbnail: "/img/portfolio/iwill.jpg",
    situation:
      "The campaign required a platform that could quickly communicate its purpose and encourage action across a broad audience.",
    challenge:
      "The biggest risk was friction. Any complexity in the experience would reduce participation rates.",
    approach:
      "We reduced the platform to its essential functions, clear messaging, a single primary action, and minimal distractions.",
    execution:
      "Built a lightweight, mobile-first platform optimised for speed and ease of use, ensuring users could commit within seconds.",
    outcome:
      "A high-conversion platform that maximises engagement and supports viral sharing across social channels.",
    images: ["/img/portfolio/iwill.jpg"],
  },

  {
    slug: "equalyz-ai",
    title: "Translating Complex AI Into a Clear Product Narrative",
    client: "Equalyz AI",
    category: "Web Platform",
    tags: ["Web Design", "AI"],
    summary:
      "Redesigned the platform to make a technically complex voice AI product understandable and compelling to partners and stakeholders.",
    liveUrl: "https://equalyz.ai/",
    thumbnail: "/img/portfolio/eqai.jpg",
    situation:
      "Equalyz AI builds voice-first solutions for African dialects, but their previous platform did not clearly communicate the product’s capabilities or real-world applications.",
    challenge:
      "Bridging the gap between technical depth and user understanding without diluting the product’s sophistication.",
    approach:
      "We shifted the narrative from features to use cases, structuring the platform around how the technology is applied in real environments.",
    execution:
      "Delivered a redesigned interface with clearer content flow, improved messaging, and a refined visual system that supports comprehension.",
    outcome:
      "The platform now communicates the product more effectively, improving engagement with partners and reducing the need for additional explanation.",
    images: ["/img/portfolio/eqai.jpg"],
  },
  {
    slug: "data-science-nigeria",
    title: "Redesigning Nigeria's Largest Data Science Community Platform",
    client: "Data Science Nigeria",
    category: "Web Platform",
    tags: ["Web Design", "Development", "React"],
    summary:
      "Elevated DSN’s digital platform to reflect its position as Nigeria’s leading data science community, strengthening credibility with global partners and stakeholders.",
    liveUrl: "https://datasciencenigeria.org",
    thumbnail: "/img/portfolio/dsn.jpg",
    situation:
      "Data Science Nigeria is the largest data science community in the country, with over 50,000 members and partnerships with global organisations. Despite this scale, their web presence did not reflect their influence, creating a credibility gap in conversations with international partners and sponsors.",
    challenge:
      "The existing platform was difficult to navigate, visually inconsistent, and slow to load. The challenge went beyond redesign, it required rebuilding trust in the organisation’s digital presence without disrupting an active community that relied on the platform.",
    approach:
      "We began with a full audit of content structure, user flows, and performance. Three core audiences were identified, community members, corporate partners, and academic institutions, and the platform was restructured to provide clear, intentional pathways for each. The visual direction balanced credibility with accessibility.",
    execution:
      "The platform was rebuilt with a focus on performance, clarity, and scalability. Content was restructured to reduce cognitive load, while a flexible system was implemented to allow the DSN team to manage updates independently. Performance optimisation ensured fast load times even on lower-bandwidth mobile connections.",
    outcome:
      "The new platform significantly improved first impressions in partner conversations. DSN reported that the website now communicates their value more effectively, reducing the need for explanation and strengthening credibility with international stakeholders.",
    images: ["/img/portfolio/dsn.jpg"],
    testimonial: {
      quote:
        "The new platform changed how international partners perceive us from the first interaction. It finally reflects the scale of what DSN actually is.",
      name: "DSN Team",
      title: "Data Science Nigeria",
    },
  },

  {
    slug: "skills-sprint",
    title: "Building a Platform for Nationwide Digital Skills Delivery",
    client: "Skills Sprint",
    category: "Web Platform",
    tags: ["Web Design", "Development"],
    summary:
      "Developed a scalable platform supporting a Google-backed initiative delivering digital and creative skills at scale.",
    liveUrl: "https://skillsprint.ng/",
    thumbnail: "/img/portfolio/skill.jpg",
    situation:
      "The programme aimed to reach a large and diverse audience across Nigeria, requiring a platform that could handle scale while remaining accessible.",
    challenge:
      "Ensuring usability across varying levels of digital literacy and network conditions.",
    approach:
      "We designed for inclusivity, simplifying navigation, structuring content clearly, and prioritising performance across devices.",
    execution:
      "Built a responsive platform with structured learning pathways, optimised loading times, and clear content hierarchy.",
    outcome:
      "A platform capable of supporting large-scale participation and programme delivery without compromising usability.",
    images: ["/img/portfolio/skill.jpg"],
  },

  {
    slug: "mind-the-gap",
    title: "Clarifying Impact for a Youth-Focused Innovation Initiative",
    client: "MindTheGap",
    category: "Web Platform",
    tags: ["Web Design"],
    summary:
      "Redesigned the platform to better communicate programmes, impact, and mission.",
    liveUrl: "https://mindthegap.ng/",
    thumbnail: "/img/portfolio/mind.jpg",
    situation:
      "MindTheGap’s work spans AI literacy, youth empowerment, and entrepreneurship, but the platform did not clearly connect these initiatives.",
    challenge:
      "Creating a cohesive narrative that communicates both purpose and impact.",
    approach:
      "We aligned messaging, structure, and visual hierarchy to present programmes and outcomes more clearly.",
    execution:
      "Delivered a redesigned platform with improved navigation and content clarity.",
    outcome:
      "Stronger communication with stakeholders and improved perception of impact.",
    images: ["/img/portfolio/mind.jpg"],
  },

  {
    slug: "cyp-nigeria",
    title: "Structuring a Platform for Youth Leadership Development",
    client: "CYP Nigeria",
    category: "Web Platform",
    tags: ["Web Design", "Development"],
    summary:
      "Built a structured platform supporting youth leadership and policy engagement programmes.",
    liveUrl: "https://cypnigeria.org/",
    thumbnail: "/img/portfolio/cyp.jpg",
    situation:
      "CYP Nigeria engages a diverse audience of youth leaders, policymakers, and stakeholders.",
    challenge:
      "Communicating programmes clearly while maintaining institutional credibility.",
    approach:
      "We structured content around programmes, participation, and outcomes.",
    execution:
      "Developed a responsive platform with clear navigation and content hierarchy.",
    outcome: "Improved accessibility and programme visibility.",
    images: ["/img/portfolio/cyp.jpg"],
  },

  {
    slug: "brook-assets",
    title: "Balancing Mass Market and Luxury Real Estate Positioning",
    client: "Brook Assets and Resources Ltd",
    category: "Web Platform",
    tags: ["Web Design", "Real Estate"],
    summary:
      "Redesigned the platform to support both affordable and premium housing offerings.",
    liveUrl: "https://brooknig.com/",
    thumbnail: "/img/portfolio/brook.jpg",
    situation:
      "Brook Assets operates across multiple real estate segments, from affordable housing to luxury developments.",
    challenge:
      "Communicating both accessibility and premium value without confusing the brand.",
    approach:
      "We segmented offerings clearly while maintaining consistent branding.",
    execution:
      "Delivered a refined platform with structured navigation and improved clarity.",
    outcome: "Stronger positioning across different buyer segments.",
    images: ["/img/portfolio/brook.jpg"],
  },

  {
    slug: "functional-ways",
    title: "Designing for Clarity in Allied Health Services",
    client: "Functional Ways",
    category: "Web Platform",
    tags: ["Web Design", "Development"],
    summary:
      "Built a platform that simplifies how users understand and access allied health services.",
    liveUrl: "https://functionalways.com.au/",
    thumbnail: "/img/portfolio/fw.jpg",
    situation:
      "Healthcare users often navigate complex needs and require clear guidance.",
    challenge: "Ensuring services are easy to understand and access.",
    approach: "We prioritised clarity, structure, and ease of navigation.",
    execution:
      "Developed a clean, responsive platform with clear service pathways.",
    outcome: "Improved user understanding and service accessibility.",
    images: ["/img/portfolio/fw.jpg"],
  },

  {
    slug: "unity-lifecare",
    title: "Creating a Trust-First Digital Experience for Disability Services",
    client: "Unity Lifecare",
    category: "Web Platform",
    tags: ["Web Design", "Development"],
    summary:
      "Built a platform that communicates care, trust, and professionalism for disability support services.",
    liveUrl: "http://unitylifecare.com.au/",
    thumbnail: "/img/portfolio/unity.jpg",
    situation:
      "Families and coordinators rely on clear, trustworthy information when selecting care providers.",
    challenge: "Balancing emotional tone with structured information.",
    approach: "We combined clarity with warmth in both design and messaging.",
    execution:
      "Developed an accessible platform with structured content and intuitive navigation.",
    outcome: "Improved trust and clearer communication with users.",
    images: ["/img/portfolio/unity.jpg"],
  },

  {
    slug: "naact",
    title: "Building a Digital Hub for a Diaspora Community",
    client: "NAACT",
    category: "Web Platform",
    tags: ["Web Design", "Development"],
    summary:
      "Created a platform connecting Nigerians in Australia through events and shared identity.",
    liveUrl: "https://naact.org.au/",
    thumbnail: "/img/portfolio/naact.jpg",
    situation:
      "The association needed a centralised platform for communication and engagement.",
    challenge: "Creating a sense of community in a structured digital format.",
    approach: "We prioritised events, updates, and accessibility.",
    execution:
      "Built a responsive platform with clear navigation and event visibility.",
    outcome: "Improved engagement and communication within the community.",
    images: ["/img/portfolio/naact.jpg"],
  },

  {
    slug: "stories-click",
    title:
      "Designing a Portfolio That Converts Creative Work Into Opportunities",
    client: "Stories Click",
    category: "Web Platform",
    tags: ["Web Design", "Creative"],
    summary:
      "Built a portfolio platform that attracts international clients and showcases creative work effectively.",
    liveUrl: "https://storiesclick.co.uk/",
    thumbnail: "/img/portfolio/story.jpg",
    situation:
      "The client needed a platform that reflects both creative identity and professionalism.",
    challenge: "Balancing strong visual storytelling with usability.",
    approach: "We led with the work, reducing distractions in layout.",
    execution:
      "Developed a fast, image-focused platform with smooth transitions.",
    outcome: "Increased visibility and client inquiries.",
    images: ["/img/portfolio/story.jpg"],
  },

  {
    slug: "abimbola-alaka",
    title: "Building a Platform for Storytelling and Education",
    client: "Abimbola Alaka",
    category: "Web Platform",
    tags: ["Web Design"],
    summary:
      "Developed a platform that supports both storytelling and educational outreach.",
    liveUrl: "https://abimbolaalaka.com/",
    thumbnail: "/img/portfolio/bim.jpg",
    situation:
      "The platform needed to communicate both creative and educational value.",
    challenge: "Maintaining clarity while expressing personality.",
    approach: "We used a clean editorial layout.",
    execution: "Built a structured, readable platform.",
    outcome: "Improved audience engagement and visibility.",
    images: ["/img/portfolio/bim.jpg"],
  },

  {
    slug: "ceil",
    title:
      "Supporting Sustainability and Leadership Through Digital Infrastructure",
    client: "CEIL",
    category: "Web Platform",
    tags: ["Web Design"],
    summary:
      "Built a platform supporting sustainability and HSE awareness initiatives.",
    liveUrl: "https://theceil.org/",
    thumbnail: "/img/portfolio/ceil.jpg",
    situation:
      "The organisation needed a platform to communicate its initiatives and impact.",
    challenge: "Balancing authority with accessibility.",
    approach: "We structured content around programmes and outcomes.",
    execution: "Delivered a clean, structured platform.",
    outcome: "Improved awareness and engagement.",
    images: ["/img/portfolio/ceil.jpg"],
  },
];
