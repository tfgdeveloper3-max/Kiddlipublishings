export type ServiceIconKey = "book" | "palette" | "play" | "megaphone" | "badge";

export interface ServiceLink {
    label: string;
    href: string;
}

export interface ServiceCategory {
    title: string;
    short: string;
    color: string;
    icon: ServiceIconKey;
    items: ServiceLink[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        title: "Full Book Creation & Publishing",
        short: "From first draft to a published book",
        color: "#F26522",
        icon: "book",
        items: [
            { label: "Creative Writing & Narrative Crafting", href: "/services/creative-writing" },
            { label: "Professional Editing & Manuscript Polishing", href: "/services/professional-editing" },
            { label: "Interior Formatting & Digital Conversion", href: "/services/interior-formatting" },
            { label: "Print Setup & Global ISBN Registration", href: "/services/print-setup-isbn" },
            { label: "Worldwide Retail & Library Distribution", href: "/services/worldwide-distribution" },
        ],
    },
    {
        title: "Artwork & Custom Design",
        short: "Characters and worlds kids love",
        color: "#F8AE1A",
        icon: "palette",
        items: [
            { label: "Full-Color Storybook Artwork", href: "/services/storybook-artwork" },
            { label: "Custom Character Concept & Development", href: "/services/character-design" },
            { label: "Eye-Catching Cover & Page Formatting", href: "/services/cover-page-formatting" },
            { label: "Publication-Ready Digital & Print Assets", href: "/services/print-digital-assets" },
        ],
    },
    {
        title: "Animation & Digital Magic",
        short: "Stories that move, talk and play",
        color: "#8BB625",
        icon: "play",
        items: [
            { label: "2D & 3D Motion Production", href: "/services/motion-production" },
            { label: "Cinematic Book Trailers & Video Content", href: "/services/book-trailers" },
            { label: "Professional Audiobooks & Voice Narration", href: "/services/audiobooks-narration" },
            { label: "Interactive & Motion-Enhanced eBooks", href: "/services/interactive-ebooks" },
        ],
    },
    {
        title: "Promotion and Book Launch",
        short: "Get your book into little hands",
        color: "#F96FA4",
        icon: "megaphone",
        items: [
            { label: "Amazon Book Marketing & Optimization", href: "/services/amazon-marketing" },
            { label: "Strategic Book Launch & Promotional Campaigns", href: "/services/book-launch" },
            { label: "Social Media & Influencer Partnerships", href: "/services/social-media-influencers" },
            { label: "Professional Author Websites & Email Funnels", href: "/services/author-websites" },
            { label: "Book Fairs, Libraries & Bookstore Outreach", href: "/services/bookstore-outreach" },
            { label: "School & Educational Book Marketing", href: "/services/school-marketing" },
        ],
    },
    {
        title: "Author World and Branding",
        short: "Grow your story into a brand",
        color: "#5BB5E8",
        icon: "badge",
        items: [
            { label: "Author & Character Branding", href: "/services/author-character-branding" },
            { label: "Character Merchandise & Product Design", href: "/services/character-merchandise" },
            { label: "Educational Materials & Printable Activities", href: "/services/educational-materials" },
            { label: "Character Licensing & Commercial Development", href: "/services/character-licensing" },
        ],
    },
];