import { useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import serviceTop from "/images/ServiceTop.png";
import { AnimateCss, EASE, Float, Reveal, Wiggle, softSpring, t } from "../ui/Animated";

const iconProps = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "#1E1E1E",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-full w-full",
    "aria-hidden": true,
};

/* ---------- icons ---------- */

const BrainGearIcon = () => (
    <svg {...iconProps}>
        <path d="M21.5 4h5l.9 4.4a16 16 0 0 1 4.3 1.8l3.7-2.5 3.5 3.5-2.5 3.7a16 16 0 0 1 1.8 4.3l4.4.9v5l-4.4.9a16 16 0 0 1-1.8 4.3l2.5 3.7-3.5 3.5-3.7-2.5a16 16 0 0 1-4.3 1.8l-.9 4.4h-5l-.9-4.4a16 16 0 0 1-4.3-1.8l-3.7 2.5-3.5-3.5 2.5-3.7a16 16 0 0 1-1.8-4.3L4 26.5v-5l4.4-.9a16 16 0 0 1 1.8-4.3l-2.5-3.7 3.5-3.5 3.7 2.5a16 16 0 0 1 4.3-1.8z" />
        <path d="M24 13.5c-1.6-1.4-4.6-1.4-5.8.6-2.4-.2-4 1.8-3.4 3.9-2 .8-2.4 3.4-.9 4.8-1.3 1.6-.6 4.2 1.4 4.8-.2 2.4 2 4 4.2 3.4 1 1.8 3.4 2.1 4.5.8z" />
        <path d="M24 13.5c1.6-1.4 4.6-1.4 5.8.6 2.4-.2 4 1.8 3.4 3.9 2 .8 2.4 3.4.9 4.8 1.3 1.6.6 4.2-1.4 4.8.2 2.4-2 4-4.2 3.4-1 1.8-3.4 2.1-4.5.8z" />
        <path d="M24 13.5v18.3M18.2 14.1c.6 1.4 2 2 3.2 1.8M14.8 18c1.3.9 3 .8 4 0M14 22.8c1.6.4 3-.3 3.6-1.4M15.4 27.6c1.4-.3 2.4-1.4 2.4-2.8M19.6 31c.2-1.3 1.2-2.2 2.4-2.4M29.8 14.1c-.6 1.4-2 2-3.2 1.8M33.2 18c-1.3.9-3 .8-4 0M34 22.8c-1.6.4-3-.3-3.6-1.4M32.6 27.6c-1.4-.3-2.4-1.4-2.4-2.8M28.4 31c-.2-1.3-1.2-2.2-2.4-2.4" />
    </svg>
);

const BulbPuzzleIcon = () => (
    <svg {...iconProps}>
        <path d="M22 13c-6 0-9.5 4.4-9.5 9 0 3.4 1.9 5.6 3.5 7.3 1.1 1.2 1.8 2.5 1.8 4.2h8.4c0-1.7.7-3 1.8-4.2" />
        <path d="M18.5 37h7.5M19 40.5h6.5M20.5 44h3.5" />
        <path d="M26 8h4.2a2.6 2.6 0 1 1 5 0H39v4.6a2.6 2.6 0 1 1 0 5V22h-4.6a2.6 2.6 0 1 0-5 0H26v-4.4a2.6 2.6 0 1 0 0-5z" />
        <path d="M12 9l1.8 1.8M7 21h2.6M8.8 14.5l2.2 1M36.2 27.8l-1.8-1.2M33.8 32.8l-1.4-1.4" />
    </svg>
);

const PlayScreenIcon = () => (
    <svg {...iconProps}>
        <rect x="5" y="9" width="36" height="26" rx="3" />
        <path d="M20.5 16.5v11l9-5.5z" />
        <path d="M17 41.5h12M23 35v6.5" />
        <path d="M42 4v4M40 6h4M8 4.5l1.5 1.5" />
        <circle cx="44" cy="15" r="1.2" />
    </svg>
);

const MegaphoneIcon = () => (
    <svg {...iconProps}>
        <path d="M8 18.5h7l17-8.5v27l-17-8.5H8a2.5 2.5 0 0 1-2.5-2.5v-5A2.5 2.5 0 0 1 8 18.5z" />
        <path d="M15 18.5v10" />
        <path d="M11 28.5l3 10h5.5l-2.5-10" />
        <path d="M37 18c1.8 1.5 2.8 3.4 2.8 5.5s-1 4-2.8 5.5" />
        <path d="M40.5 13c3 2.8 4.5 6.3 4.5 10.5S43.5 31.2 40.5 34" />
    </svg>
);

const BadgeIcon = () => (
    <svg {...iconProps}>
        <circle cx="24" cy="19" r="13" />
        <circle cx="24" cy="19" r="9" />
        <path d="M24 13l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z" />
        <path d="M16.5 29.5L12.5 43l5.5-2.5 3.5 4.5 3-12.5" />
        <path d="M31.5 29.5l4 13.5-5.5-2.5-3.5 4.5-3-12.5" />
    </svg>
);

/* ---------- doodles ---------- */

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

/* ---------- data ---------- */

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
        icon: <BrainGearIcon />,
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
        icon: <BulbPuzzleIcon />,
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
        icon: <PlayScreenIcon />,
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
        icon: <MegaphoneIcon />,
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
        icon: <BadgeIcon />,
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
    return (
        <motion.article
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            style={{ "--c": item.color } as CSSProperties}
            className={`flex flex-col items-center rounded-[28px] border-2 border-dashed border-[#E2E2E2] bg-white px-6 py-9 text-center transition-colors duration-300 hover:border-[var(--c)] sm:px-7 lg:col-span-2 lg:px-8 lg:py-10 ${placement(
                index,
                total,
            )}`}
        >
            {/* blob + icon */}
            <div className="flex h-[136px] items-center justify-center lg:h-[140px]">
                <motion.div custom={index} variants={blobVariants}>
                    <motion.div
                        className={`grid place-items-center ${item.size}`}
                        style={{ backgroundColor: item.color, borderRadius: item.shape[0] }}
                        animate={{ borderRadius: [item.shape[0], item.shape[1], item.shape[0]] }}
                        transition={{ duration: t(5), delay: index * 0.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div variants={iconVariants} className="h-[64px] w-[64px] lg:h-[72px] lg:w-[72px]">
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

                <div className="mx-auto mt-10 grid max-w-[480px] grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-2 lg:mt-[54px] lg:grid-cols-6 lg:gap-7">
                    {services.map((item, i) => (
                        <ServiceCard key={item.title} item={item} index={i} total={services.length} />
                    ))}
                </div>
            </div>
        </section>
    );
}