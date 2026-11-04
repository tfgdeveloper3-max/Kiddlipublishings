import { useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import serviceTop from "/images/ServiceTop.png";
import { AnimateCss, EASE, Float, Reveal, Wiggle, softSpring, t } from "../ui/Animated";
import { useLeadModal } from "@/components/LeadModal";

/* ---------- illustrated icons (64x64, dark outline + flat brand fills) ---------- */

const INK = "#1E1E1E";
const PURPLE = "#6B34C4";
const DEEP_PURPLE = "#4A2590";
const YELLOW = "#FFD335";
const ORANGE = "#F26522";
const SKY = "#5BB5E8";
const PINK = "#F96FA4";
const ICE = "#D9F1FF";
const LAVENDER = "#E6DEF7";

const svgProps = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: INK,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-full w-full overflow-visible",
    "aria-hidden": true,
};

const STAR_PATH = "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

/** Tiny 4-point sparkle that twinkles on its own. */
const Sparkle = ({ x, y, size = 3, delay = 0 }: { x: number; y: number; size?: number; delay?: number }) => (
    <motion.path
        d={`M${x} ${y - size}v${size * 2}M${x - size} ${y}h${size * 2}`}
        stroke="#fff"
        strokeWidth={1.8}
        animate={{ opacity: [1, 0.25, 1], scale: [1, 0.7, 1] }}
        transition={{ duration: t(1.8), delay, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${x}px ${y}px` }}
    />
);

/** Full Book Creation & Publishing: open storybook with a star rising out of it */
const PublishingIcon = () => (
    <svg {...svgProps}>
        <path d="M7 45c8.5-3 17-2.6 25 2 8-4.6 16.5-5 25-2v6c-8.5-3-17-2.6-25 2-8-4.6-16.5-5-25-2z" fill={PURPLE} />
        <path d="M9 22c7.5-2.6 15.5-2 23 2.6v23c-7.5-4.6-15.5-5.2-23-2.6z" fill="#fff" />
        <path d="M55 22c-7.5-2.6-15.5-2-23 2.6v23c7.5-4.6 15.5-5.2 23-2.6z" fill="#fff" />
        <path d="M14 29c4.2-1 9-.6 13 1.2M14 34c4.2-1 9-.6 13 1.2M14 39c4.2-1 9-.6 13 1.2" strokeWidth={1.4} opacity={0.55} />
        <path d="M50 29c-4.2-1-9-.6-13 1.2M50 34c-4.2-1-9-.6-13 1.2M50 39c-4.2-1-9-.6-13 1.2" strokeWidth={1.4} opacity={0.55} />
        <path d="M32 23c-2.5-3-1-6.5.5-8.5" strokeDasharray="2 3" stroke="#fff" />
        <path d={STAR_PATH} transform="translate(23.5 -1) scale(0.75)" fill={YELLOW} />
        <Sparkle x={51} y={11} delay={0} />
        <Sparkle x={12} y={13} size={2.4} delay={0.6} />
    </svg>
);

/** Artwork & Custom Design: paint palette with colour dots and a brush */
const ArtworkIcon = () => (
    <svg {...svgProps}>
        <path
            d="M31 8C17 8 6 17.5 6 30c0 10.5 7.5 17.5 16.5 17.5 4 0 5.4-2.8 4.2-5.8-1.1-2.7.6-5.4 3.6-5.4H37c10.2 0 19-5.2 19-14C56 14 45 8 31 8z"
            fill="#fff"
        />
        <circle cx="18" cy="27" r="4" fill={ORANGE} />
        <circle cx="25.5" cy="17.5" r="4" fill={PINK} />
        <circle cx="37.5" cy="16" r="4" fill={PURPLE} />
        <circle cx="46.5" cy="23.5" r="4" fill={SKY} />
        <circle cx="16.5" cy="37.5" r="3.2" fill="#8BB625" />
        <path d="M37 59l-3.2-2.6 15-18.4 3.2 2.6z" fill={PURPLE} />
        <path d="M48.8 38l3.2 2.6 2.4-3-3.2-2.6z" fill={LAVENDER} />
        <path d="M51.2 35l3.2 2.6c2.8-2 5-5.6 3.6-8.6-3.4-.6-6 2.6-6.8 6z" fill={ORANGE} />
        <Sparkle x={9} y={10} delay={0.2} />
        <Sparkle x={58} y={51} size={2.4} delay={0.8} />
    </svg>
);

/** Animation & Digital Magic: screen playing a story, with a magic star */
const AnimationIcon = () => (
    <svg {...svgProps}>
        <path d="M22 50h14M29 43v7" strokeWidth={2.6} />
        <rect x="5" y="12" width="48" height="32" rx="4.5" fill={PURPLE} />
        <rect x="9.5" y="16.5" width="39" height="23" rx="2" fill={ICE} />
        <path d="M9.5 36l9-7 6 4.5 5-3.5 19 9.5v.5a2 2 0 0 1-2 2h-35a2 2 0 0 1-2-2z" fill="#8BB625" strokeWidth={1.5} />
        <circle cx="29" cy="27" r="7" fill="#fff" strokeWidth={1.6} />
        <path d="M26.8 23.6v6.8l5.6-3.4z" fill={PINK} strokeWidth={1.4} />
        <path d={STAR_PATH} transform="translate(42 1) scale(0.75)" fill={YELLOW} />
        <path d="M56 22l4-1.5M57 29h4" stroke="#fff" strokeWidth={2} />
        <Sparkle x={8} y={6} delay={0.3} />
        <Sparkle x={58} y={52} size={2.2} delay={0.9} />
    </svg>
);

const PromotionIcon = () => (
    <svg {...svgProps}>
        <path d="M9 25h9l22-12v38L18 39H9a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z" fill={ORANGE} />
        <path d="M14 39l3.5 12h6.5L21 39" fill="#fff" />
        <ellipse cx="40" cy="32" rx="4.5" ry="19" fill="#fff" />
        <path d="M50 22l7-4.5M51.5 32H59M50 42l7 4.5" stroke="#fff" strokeWidth={2.6} />
        <path d="M11 29.5h4" stroke="#fff" strokeWidth={1.8} opacity={0.7} />
        <path d={STAR_PATH} transform="translate(18 2) scale(0.55)" fill={YELLOW} />
        <Sparkle x={56} y={8} delay={0.4} />
        <Sparkle x={6} y={52} size={2.2} delay={1} />
    </svg>
);

const BrandingIcon = () => (
    <svg {...svgProps}>
        <circle cx="19" cy="20" r="4.5" fill={PINK} />
        <circle cx="46" cy="18" r="4" fill={YELLOW} />
        <path d={STAR_PATH} transform="translate(22.5 3) scale(0.8)" fill={YELLOW} />
        <path d="M10 30l22-8 22 8-22 8z" fill={DEEP_PURPLE} />
        <path d="M10 30l22 8 22-8v20l-22 8-22-8z" fill={PURPLE} />
        <path d="M32 38v20" strokeWidth={1.5} />
        <rect x="38" y="44" width="11" height="6" rx="1.5" fill="#fff" strokeWidth={1.4} transform="rotate(-20 43.5 47)" />
        <Sparkle x={58} y={30} size={2.6} delay={0.4} />
        <Sparkle x={6} y={12} size={2.2} delay={1} />
    </svg>
);

function PopularRibbon({ label = "Most Popular" }: { label?: string }) {
    return (
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
                initial={{ scale: 0, rotate: -8 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ ...softSpring(0.7, 0.45), delay: t(0.5) }}
                className="relative"
            >
                {/* folded tails */}
                <span
                    aria-hidden="true"
                    className="absolute -left-[14px] top-[7px] -z-10 h-[30px] w-[26px] bg-[#4A2590]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 32% 50%)" }}
                />
                <span
                    aria-hidden="true"
                    className="absolute -right-[14px] top-[7px] -z-10 h-[30px] w-[26px] bg-[#4A2590]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 68% 50%, 100% 100%, 0 100%)" }}
                />
                {/* band */}
                <span className="relative inline-flex items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-[10px] bg-gradient-to-r from-brand-light to-brand-dark px-5 py-2 font-heading text-[12.5px] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_6px_16px_rgba(76,29,149,0.35)] ring-2 ring-white">
                    <motion.svg
                        viewBox="0 0 24 24"
                        className="h-[15px] w-[15px]"
                        animate={{ rotate: [0, 18, -18, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: t(1.6), repeat: Infinity, repeatDelay: t(1.2), ease: "easeInOut" }}
                        aria-hidden="true"
                    >
                        <path d={STAR_PATH} fill={YELLOW} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
                    </motion.svg>
                    {label}
                    <motion.span
                        aria-hidden="true"
                        className="absolute inset-y-0 w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                        initial={{ left: "-50%" }}
                        animate={{ left: ["-50%", "130%"] }}
                        transition={{ duration: t(1.4), repeat: Infinity, repeatDelay: t(2.2), ease: "easeInOut" }}
                    />
                </span>
            </motion.div>
        </div>
    );
}

const STAR_OUTLINE =
    "M30 4l7.5 15.6 17.1 2.4-12.4 12 3 17-15.2-8.1-15.2 8.1 3-17-12.4-12 17.1-2.4z";

const StarOutline = ({ color }: { color: string }) => (
    <svg viewBox="0 0 60 60" fill="none" className="h-full w-full" aria-hidden="true">
        <path d={STAR_OUTLINE} stroke={color} strokeWidth={3} strokeLinejoin="round" />
    </svg>
);

const PaperPlane = () => (
    <svg
        viewBox="0 0 72 84"
        fill="none"
        stroke="#5E7387"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
        aria-hidden="true"
    >
        <path d="M4 30L68 4 40 60 32 38z" />
        <path d="M32 38L68 4" />
        <path d="M32 38l-2 14 10 8" />
        <path d="M10 33l22 5M14 34.5l-4 2" opacity={0.7} />
        <path d="M26 56c-6 3-13 6-11 11 2 5 9 1 6-3-3-5-12 2-10 8 2 5 8 4 6 0-3-4-10 3-6 9" />
    </svg>
);

export interface ServiceFeature {
    title: string;
    description: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    features: ServiceFeature[];
    icon: ReactNode;
    color: string;
    shape: [string, string];
    size: string;
    popular?: boolean;
}

const defaultServices: ServiceItem[] = [
    {
        title: "Full Book Creation & Publishing",
        description:
            "Transform your story from a spark of imagination into a polished masterpiece ready for readers worldwide with Kiddli Publishing.",
        features: [
            {
                title: "Creative Writing & Narrative Crafting",
                description:
                    "We help flesh out plots, structure storylines, and write captivating tales that resonate with children and parents alike.",
            },
            {
                title: "Professional Editing & Manuscript Polishing",
                description:
                    "Our expert editors refine your grammar, tone, and pacing while keeping your unique narrative voice intact.",
            },
            {
                title: "Interior Formatting & Digital Conversion",
                description:
                    "We design beautiful interior page layouts and convert your manuscript seamlessly into digital formats.",
            },
            {
                title: "Print Setup & Global ISBN Registration",
                description:
                    "We handle the technical setup, assign your global ISBNs, and prepare your books for physical printing.",
            },
            {
                title: "Worldwide Retail & Library Distribution",
                description:
                    "Get your books onto shelves and digital catalogs across global retail networks and libraries.",
            },
        ],
        icon: <PublishingIcon />,
        popular: true,
        color: "#F26522",
        shape: ["62% 38% 55% 45% / 58% 48% 52% 42%", "50% 50% 60% 40% / 48% 58% 42% 52%"],
        size: "h-[120px] w-[128px] lg:h-[132px] lg:w-[140px]",
    },
    {
        title: "Artwork & Custom Design",
        description: "Bring your characters and worlds to vibrant life with visual designs tailored specifically for young readers.",
        features: [
            {
                title: "Full-Color Storybook Artwork",
                description: "Stunning, imaginative illustrations that capture the wonder and magic of your story on every page.",
            },
            {
                title: "Custom Character Concept & Development",
                description: "We help design memorable, lovable characters that children will instantly fall in love with.",
            },
            {
                title: "Eye-Catching Cover & Page Formatting",
                description: "Professional covers and balanced interior formatting designed to grab attention on any bookshelf.",
            },
            {
                title: "Publication-Ready Digital & Print Assets",
                description: "High-resolution files perfectly optimized for both print production and digital viewing.",
            },
        ],
        icon: <ArtworkIcon />,
        color: "#F8AE1A",
        shape: ["42% 58% 45% 55% / 38% 42% 58% 62%", "52% 48% 55% 45% / 46% 38% 62% 54%"],
        size: "h-[124px] w-[114px] lg:h-[136px] lg:w-[124px]",
    },
    {
        title: "Animation & Digital Magic",
        description: "Step beyond traditional reading with dynamic, multimedia storytelling experiences.",
        features: [
            {
                title: "2D & 3D Motion Production",
                description: "Bring your illustrations to life with captivating 2D and 3D animations.",
            },
            {
                title: "Cinematic Book Trailers & Video Content",
                description: "Exciting promotional videos and book trailers designed to hook young readers and parents online.",
            },
            {
                title: "Professional Audiobooks & Voice Narration",
                description:
                    "Engaging, high-quality audio recordings featuring professional voice talent to make storytime portable.",
            },
            {
                title: "Interactive & Motion-Enhanced eBooks",
                description:
                    "Digital books packed with interactive elements, animations, and sound effects for an immersive reading experience.",
            },
        ],
        icon: <AnimationIcon />,
        color: "#8BB625",
        shape: ["48% 52% 42% 58% / 55% 45% 55% 45%", "56% 44% 50% 50% / 45% 55% 45% 55%"],
        size: "h-[112px] w-[122px] lg:h-[122px] lg:w-[134px]",
    },
    {
        title: "Promotion and Book Launch",
        description: "Maximize your book's reach and connect with your target audience through targeted marketing strategies.",
        features: [
            {
                title: "Amazon Book Marketing & Optimization",
                description: "Optimize your book listings on Amazon to improve visibility, ranking, and sales.",
            },
            {
                title: "Strategic Book Launch & Promotional Campaigns",
                description: "Comprehensive launch strategies to generate buzz and excitement from day one.",
            },
            {
                title: "Social Media & Influencer Partnerships",
                description:
                    "Connect with family, parenting, and kid-lit influencers to share your story with wider communities.",
            },
            {
                title: "Professional Author Websites & Email Funnels",
                description: "Build your author brand online with a custom website and reader mailing lists.",
            },
            {
                title: "Book Fairs, Libraries & Bookstore Outreach",
                description: "Expand your reach through direct outreach to physical bookstores, libraries, and book fairs.",
            },
            {
                title: "School & Educational Book Marketing",
                description: "Introduce your books to schools, teachers, and educational programs.",
            },
        ],
        icon: <PromotionIcon />,
        color: "#F96FA4",
        shape: ["46% 54% 42% 58% / 42% 48% 52% 58%", "54% 46% 52% 48% / 50% 42% 58% 50%"],
        size: "h-[124px] w-[114px] lg:h-[136px] lg:w-[124px]",
    },
    {
        title: "Author World and Branding",
        description:
            "Build a lasting literary brand and expand your intellectual property into commercial products and educational tools.",
        features: [
            {
                title: "Author & Character Branding",
                description:
                    "Establish a cohesive, professional brand identity for yourself as an author and for your book characters.",
            },
            {
                title: "Character Merchandise & Product Design",
                description: "Turn your book characters into fun toys, apparel, and merchandise.",
            },
            {
                title: "Educational Materials & Printable Activities",
                description: "Create companion activity books, lesson plans, and printables for classrooms and parents.",
            },
            {
                title: "Character Licensing & Commercial Development",
                description:
                    "Explore opportunities to license your characters for broader commercial and media development.",
            },
        ],
        icon: <BrandingIcon />,
        color: "#5BB5E8",
        shape: ["55% 45% 48% 52% / 50% 56% 44% 50%", "45% 55% 56% 44% / 56% 46% 54% 44%"],
        size: "h-[118px] w-[126px] lg:h-[130px] lg:w-[138px]",
    },
];

/* ---------- layout helpers ---------- */

/**
 * Desktop: 3 per row on a 6-col grid (each card spans 2).
 * A short last row is centered: 2 leftovers start at col 2, 1 leftover starts at col 3.
 * Tablet: 2 per row; an odd last card spans both columns and is centered at card width.
 */
function placement(index: number, total: number) {
    const classes: string[] = [];
    const lgRemainder = total % 3;
    const lgLastRowStart = total - lgRemainder;

    if (lgRemainder === 2 && index === lgLastRowStart) classes.push("lg:col-start-2");
    if (lgRemainder === 1 && index === lgLastRowStart) classes.push("lg:col-start-3");

    if (total % 2 === 1 && index === total - 1) {
        classes.push("sm:col-span-2 sm:mx-auto sm:w-[calc(50%-12px)] lg:col-span-2 lg:mx-0 lg:w-full");
    }
    return classes.join(" ");
}

/* ---------- animation ---------- */

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: t(0.9), ease: EASE, delay: t(0.15 + (i % 3) * 0.15) },
    }),
    hover: { y: -6, transition: { duration: t(0.4), ease: EASE } },
};

const blobVariants: Variants = {
    hidden: { scale: 0.6, rotate: -10 },
    show: (i: number) => ({
        scale: 1,
        rotate: 0,
        transition: { ...softSpring(1, 0.3), delay: t(0.3 + (i % 3) * 0.15) },
    }),
    hover: { scale: 1.08, rotate: 6, transition: softSpring(0.5, 0.35) },
};

const iconVariants: Variants = {
    hidden: { rotate: 0 },
    show: { rotate: 0 },
    hover: {
        rotate: [0, -10, 10, -6, 0],
        transition: { duration: t(0.7), ease: "easeInOut" },
    },
};

/* ---------- feature list (accordion) ---------- */

function FeatureList({ features, color, cardIndex }: { features: ServiceFeature[]; color: string; cardIndex: number }) {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <ul className="mt-6 w-full border-t border-dashed border-[#E2E2E2] pt-4 text-left">
            {features.map((f, i) => {
                const isOpen = open === i;
                const panelId = `service-${cardIndex}-feature-${i}`;
                return (
                    <li key={f.title} className="border-b border-dashed border-[#EFEFEF] last:border-b-0">
                        <button
                            type="button"
                            onClick={() => setOpen(isOpen ? null : i)}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            className="flex w-full items-start gap-3 rounded-lg py-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c)]"
                        >
                            <span
                                className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full"
                                style={{ backgroundColor: color }}
                                aria-hidden="true"
                            >
                                <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[10px] w-[10px]">
                                    <path d="M2.5 6.2l2.2 2.2 4.8-4.8" />
                                </svg>
                            </span>
                            <span className="flex-1 font-heading text-[15px] font-bold leading-[1.4] text-black">{f.title}</span>
                            <motion.svg
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#8A8A8A]"
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: t(0.3), ease: EASE }}
                                aria-hidden="true"
                            >
                                <path d="M5 8l5 5 5-5" />
                            </motion.svg>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    id={panelId}
                                    key="panel"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: t(0.35), ease: EASE }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-3 pl-[30px] font-body text-[14.5px] leading-[1.65] text-[#4A4A4A]">{f.description}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                );
            })}
        </ul>
    );
}

/* ---------- card ---------- */

function ServiceCard({ item, index, total }: { item: ServiceItem; index: number; total: number }) {
    const { openLeadModal } = useLeadModal();

    return (
        <motion.article
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            style={{ "--c": item.color } as CSSProperties}
            className={`relative flex flex-col items-center rounded-[28px] border-2 border-dashed bg-white px-6 py-9 text-center transition-colors duration-300 hover:border-[var(--c)] sm:px-7 lg:col-span-2 lg:px-8 lg:py-10 ${item.popular ? "border-[var(--c)] shadow-[0_18px_40px_rgba(242,101,34,0.14)]" : "border-[#E2E2E2]"
                } ${placement(index, total)}`}
        >
            {item.popular && <PopularRibbon />}

            {/* blob + icon */}
            <div className="flex h-[136px] items-center justify-center lg:h-[140px]">
                <motion.div custom={index} variants={blobVariants}>
                    <motion.div
                        className={`grid place-items-center ${item.size}`}
                        style={{ backgroundColor: item.color, borderRadius: item.shape[0] }}
                        animate={{ borderRadius: [item.shape[0], item.shape[1], item.shape[0]] }}
                        transition={{ duration: t(5), delay: index * 0.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div variants={iconVariants} className="h-[74px] w-[74px] drop-shadow-[0_3px_0_rgba(0,0,0,0.12)] lg:h-[82px] lg:w-[82px]">
                            {item.icon}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <h3 className="mt-6 max-w-[300px] font-heading text-[21px] font-extrabold leading-[1.22] text-black lg:mt-7 lg:text-[22px]">
                {item.title}
            </h3>

            <p className="mt-3 max-w-[340px] font-body text-[15px] leading-[1.7] text-[#2B2B2B] lg:text-[16px]">
                {item.description}
            </p>

            <FeatureList features={item.features} color={item.color} cardIndex={index} />

            {/* opens the lead form with this service already selected */}
            <div className="mt-auto w-full pt-6">
                <motion.button
                    type="button"
                    onClick={() => openLeadModal(item.title)}
                    whileHover={{ y: -3 }}
                    whileTap={{ y: 2, scale: 0.98 }}
                    transition={softSpring(0.4, 0.4)}
                    aria-label={`Get started with ${item.title}`}
                    className="group/btn inline-flex w-full items-center justify-center gap-2.5 rounded-[16px] bg-[#FFD335] px-6 py-3.5 font-heading text-[16px] font-bold text-[#1E1E1E] shadow-[0_4px_0_#1E1E1E] transition-shadow hover:shadow-[0_7px_0_#1E1E1E] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 sm:w-auto"
                >
                    Get Started
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-[18px] w-[18px] transition-transform duration-300 group-hover/btn:translate-x-1"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </motion.button>
            </div>
        </motion.article>
    );
}

/* ---------- section ---------- */

interface ServicesProps {
    label?: string;
    title?: string;
    services?: ServiceItem[];
}

export default function ServiceFeatures({
    label = "Services",
    title = "Bringing Little Imaginations to Life with Kiddli Publishing",
    services = defaultServices,
}: ServicesProps) {
    return (
        <section id="services" className="relative overflow-hidden bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <AnimateCss
                    animation="zoomIn"
                    onView
                    className="absolute left-[4%] top-[40px] h-[38px] w-[38px] sm:h-[48px] sm:w-[48px] lg:left-[6.5%] lg:top-[90px] lg:h-[60px] lg:w-[60px]"
                >
                    <Wiggle angle={14} duration={3.5} className="h-full w-full">
                        <StarOutline color="#8BB625" />
                    </Wiggle>
                </AnimateCss>

                <AnimateCss
                    animation="bounceInDown"
                    onView
                    delay={300}
                    className="absolute right-[3%] top-[8px] hidden w-[80px] sm:block md:w-[96px] lg:right-[7%] lg:w-[110px]"
                >
                    <Float distance={8} duration={3.5}>
                        <img src={serviceTop} alt="" width={184} height={273} className="h-auto w-full select-none" draggable={false} />
                    </Float>
                </AnimateCss>

                <AnimateCss
                    animation="backInLeft"
                    onView
                    delay={500}
                    className="absolute bottom-[16px] left-[3%] hidden h-[70px] w-[60px] sm:block lg:bottom-[24px] lg:left-[5%] lg:h-[84px] lg:w-[72px]"
                >
                    <motion.div
                        className="h-full w-full"
                        animate={{ x: [0, 8, 0], y: [0, -8, 0], rotate: [0, -4, 0] }}
                        transition={{ duration: t(3), repeat: Infinity, ease: "easeInOut" }}
                    >
                        <PaperPlane />
                    </motion.div>
                </AnimateCss>

                <AnimateCss
                    animation="zoomIn"
                    onView
                    delay={700}
                    className="absolute bottom-[24px] right-[4%] h-[40px] w-[40px] sm:h-[48px] sm:w-[48px] lg:bottom-[34px] lg:right-[5.3%] lg:h-[58px] lg:w-[58px]"
                >
                    <motion.div
                        className="h-full w-full"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: t(14), repeat: Infinity, ease: "linear" }}
                    >
                        <StarOutline color="#F26522" />
                    </motion.div>
                </AnimateCss>
            </div>

            <div className="relative mx-auto max-w-[1300px] px-5 pb-24 pt-16 sm:px-10 md:pt-20 lg:px-12 lg:pb-[120px] lg:pt-[76px]">
                <Reveal className="mx-auto max-w-[680px] text-center">
                    <span className="font-heading text-[13px] font-bold uppercase tracking-[0.04em] text-[#F7931E] lg:text-[14px]">
                        {label}
                    </span>
                    <h2 className="mx-auto mt-1.5 max-w-[340px] font-heading text-[26px] font-extrabold leading-[1.18] text-black sm:max-w-[560px] sm:text-[32px] lg:max-w-none lg:text-[36px]">
                        {title}
                    </h2>
                </Reveal>

                <div className="mx-auto mt-12 grid max-w-[480px] grid-cols-1 gap-8 sm:gap-6 sm:max-w-none sm:grid-cols-2 lg:mt-[54px] lg:grid-cols-6 lg:gap-7">
                    {services.map((item, i) => (
                        <ServiceCard key={item.title} item={item} index={i} total={services.length} />
                    ))}
                </div>
            </div>
        </section>
    );
}