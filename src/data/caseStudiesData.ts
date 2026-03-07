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
    category: "Web Platform" | "Web App" | "Mobile App" | "AI & Automation" | "Branding";
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

export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "data-science-nigeria",
        title: "Redesigning Nigeria's Largest Data Science Community Platform",
        client: "Data Science Nigeria",
        category: "Web Platform",
        tags: ["Web Design", "Development", "React"],
        summary:
            "Elevated DSN's public platform to match the credibility of Nigeria's most influential data science organisation — improving trust with global academic and corporate partners.",
        liveUrl: "https://datasciencenigeria.org",
        thumbnail: "/images/work/dsn-thumb.jpg",
        situation:
            "Data Science Nigeria is the largest data science community in Nigeria, with over 50,000 members and partnerships with global organisations. Despite their scale and influence, their web presence didn't reflect that stature — creating a credibility gap when engaging international partners and sponsors.",
        challenge:
            "The existing site was difficult to navigate, visually inconsistent, and slow to load. The challenge wasn't just a redesign — it was rebuilding trust in the brand through the digital experience, without disrupting an active community that relied on the platform daily.",
        approach:
            "We started with a full audit of the existing site — content architecture, user flows, and performance. We identified the three primary audiences (community members, corporate partners, and academic institutions) and designed distinct pathways for each. The visual direction was elevated but approachable — serious enough for boardroom credibility, open enough for a community.",
        execution:
            "Built on React with a headless CMS for the DSN team to manage content independently. Performance was a priority — the site loads in under 2 seconds on a standard Nigerian mobile connection. We implemented structured data markup for better search visibility and built a custom events system for their training programmes.",
        outcome:
            "The new platform significantly improved DSN's credibility in international conversations. Partner organisations noted the improved professionalism on first visit. The DSN team reported a measurable reduction in the time spent explaining the organisation — the site now does that work for them.",
        images: [
            "/images/work/dsn-1.jpg",
            "/images/work/dsn-2.jpg",
        ],
        testimonial: {
            quote:
                "The new platform changed how international partners perceive us from the first interaction. It finally reflects the scale of what DSN actually is.",
            name: "DSN Team",
            title: "Data Science Nigeria",
        },
    },
    {
        slug: "tradecrib",
        title: "Building a Credible Property Platform for a Growing Real Estate Brand",
        client: "Tradecrib Limited",
        category: "Web Platform",
        tags: ["Web Design", "Development", "Real Estate"],
        summary:
            "Delivered a professional property platform that positioned Tradecrib as a serious player in Nigeria's competitive real estate market.",
        liveUrl: "https://tradecriblimited.com",
        thumbnail: "/images/work/tradecrib-thumb.jpg",
        situation:
            "Tradecrib was a growing real estate company with a strong local reputation but a web presence that undercut their credibility with serious property buyers and investors. They needed a platform that communicated professionalism and made it easy for buyers to find and inquire about properties.",
        challenge:
            "Real estate platforms need to balance visual impact with functional clarity — beautiful photography matters, but so does search, filtering, and a smooth inquiry flow. The brief was to build something that felt premium without being slow or complicated.",
        approach:
            "We focused on the buyer journey first — from landing to inquiry in as few steps as possible. The design prioritised photography, with a clean layout that let properties speak for themselves. We built a custom property listing system with filtering by location, type, and price range.",
        execution:
            "Full-stack build with a custom CMS that allows the Tradecrib team to add and update listings without developer support. Mobile-first responsive design — the majority of Nigerian property buyers browse on mobile. Integrated WhatsApp inquiry flow alongside a standard contact form.",
        outcome:
            "Tradecrib reported a significant increase in quality inquiries within the first month of launch. The platform is now a core part of their sales process — agents share property links directly with prospective buyers.",
        images: [
            "/images/work/tradecrib-1.jpg",
            "/images/work/tradecrib-2.jpg",
        ],
    },
    {
        slug: "stories-click",
        title: "A Portfolio Platform for a UK-Based Creative Professional",
        client: "Stories Click",
        category: "Web Platform",
        tags: ["Web Design", "Portfolio", "Creative"],
        summary:
            "Designed and built a personal portfolio platform that helped a UK-based creative professional attract international clients and opportunities.",
        liveUrl: "https://storiesclick.co.uk",
        thumbnail: "/images/work/storiesclick-thumb.jpg",
        situation:
            "Stories Click needed a portfolio that did more than display work — it needed to communicate a distinctive creative voice and make an immediate impression on international clients and collaborators.",
        challenge:
            "Creative portfolios walk a fine line between personal expression and professional clarity. Too much personality and it alienates clients. Too corporate and it loses the creative edge. The design had to hold both.",
        approach:
            "We led with the work. The homepage is essentially a curated gallery — immediate visual impact, minimal interference from layout. Navigation is deliberately simple. The about section is short and voice-led — enough to establish the person behind the work.",
        execution:
            "Built with React, optimised for fast image loading across varying UK and international connection speeds. Custom transitions between portfolio items to maintain the editorial feel. SEO structured for discovery by creative directors and commissioning editors.",
        outcome:
            "The client reported attracting new international clients and opportunities within weeks of launch — directly attributing several inquiries to the new site.",
        images: [
            "/images/work/storiesclick-1.jpg",
        ],
        testimonial: {
            quote:
                "They took the time to understand my vision and built something that perfectly showcases my work. It's already helping me attract more clients and opportunities internationally.",
            name: "Oyindamola Olofinua",
            title: "Global Marketing Communications Strategist",
        },
    },
];

export const CATEGORIES = [
    "All",
    "Web Platform",
    "Web App",
    "Mobile App",
    "AI & Automation",
    "Branding",
] as const;