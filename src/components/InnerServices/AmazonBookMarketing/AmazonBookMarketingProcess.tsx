import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { Reveal, softSpring, t } from "@/components/ui/Animated";
import Clouds from "@/components/ui/Clouds";
import { ChartIcon, ListingIcon, SearchIcon, TargetIcon } from "../processIcons";

const INK = "#1E1E1E";
const PURPLE = "#6B34C4";
const YELLOW = "#FFD335";
const ORANGE = "#F26522";
const SKY = "#5BB5E8";
const PINK = "#F96FA4";

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

export const BriefIcon = () => (
    <svg {...svgProps}>
        <rect x="10" y="10" width="32" height="44" rx="4" fill={PURPLE} />
        <rect x="14" y="16" width="24" height="34" rx="2" fill="#fff" />
        <rect x="20" y="7" width="12" height="7" rx="2" fill={SKY} />
        <path d="M18 24h10M18 30h15M18 36h11M18 42h8" strokeWidth={1.5} opacity={0.6} />
        <path d="M47 27a8 8 0 0 0-4.6 14.5V45h9.2v-3.5A8 8 0 0 0 47 27z" fill={YELLOW} />
        <path d="M43.6 48.5h6.8M44.8 52h4.4" />
        <path d="M44 32.5c.6-1.4 1.8-2.3 3.2-2.5" stroke="#fff" strokeWidth={1.4} />
        <Sparkle x={56} y={24} delay={0} />
        <Sparkle x={52} y={14} size={2.2} delay={0.6} />
    </svg>
);

export const DraftIcon = () => (
    <svg {...svgProps}>
        <rect x="11" y="9" width="34" height="46" rx="4" fill="#fff" />
        <path d="M11 13a4 4 0 0 1 4-4h4v46h-4a4 4 0 0 1-4-4z" fill={PINK} />
        <path d="M8 17h6M8 25h6M8 33h6M8 41h6" />
        <path d="M24 20h15M24 27h15M24 34h10" strokeWidth={1.5} opacity={0.6} />
        <path d="M34 48.5l15-18 4.2 3.5-15 18z" fill={ORANGE} />
        <path d="M34 48.5l4.2 3.5-6 2.6z" fill="#FBE3C4" />
        <path d="M32.6 54l-.9.4" strokeWidth={2.4} />
        <path d="M49 30.5l2.3-2.7a2 2 0 0 1 2.8-.3l1.1.9a2 2 0 0 1 .3 2.8l-2.3 2.8z" fill={YELLOW} />
        <Sparkle x={54} y={14} delay={0.3} />
        <Sparkle x={57} y={44} size={2.2} delay={0.9} />
    </svg>
);

export const RefineIcon = () => (
    <svg {...svgProps}>
        <rect x="9" y="7" width="32" height="42" rx="3.5" fill="#fff" />
        <path d="M15 15h20M15 21h20M15 27h14M15 33h18M15 39h10" strokeWidth={1.5} opacity={0.6} />
        <path d="M47.5 46.5l8.5 8.5" strokeWidth={5} />
        <path d="M47.5 46.5l8.5 8.5" stroke={PURPLE} strokeWidth={2.4} />
        <circle cx="39" cy="38" r="11" fill="#D9F1FF" />
        <path d="M39 31.5l1.6 3.4 3.7.5-2.7 2.6.7 3.7-3.3-1.8-3.3 1.8.7-3.7-2.7-2.6 3.7-.5z" fill={YELLOW} />
        <path d="M32.5 34.5a7.5 7.5 0 0 1 4-4.2" stroke="#fff" strokeWidth={1.6} />
        <Sparkle x={52} y={13} delay={0.2} />
        <Sparkle x={6} y={55} size={2.2} delay={0.8} />
    </svg>
);

export const FinalIcon = () => (
    <svg {...svgProps}>
        <rect x="17" y="7" width="31" height="41" rx="3.5" fill="#E6DEF7" />
        <rect x="10" y="13" width="31" height="41" rx="3.5" fill="#fff" />
        <path d="M16 22h19M16 28h19M16 34h13M16 40h16" strokeWidth={1.5} opacity={0.6} />
        <circle cx="45" cy="45" r="11" fill={PURPLE} />
        <path d="M40 45.2l3.4 3.4 6.6-6.8" stroke="#fff" strokeWidth={2.6} />
        <Sparkle x={55} y={14} delay={0.4} />
        <Sparkle x={58} y={30} size={2.2} delay={1} />
    </svg>
);

/* ---------- section ---------- */

export interface ProcessStepCard {
    title: string;
    description: string;
    color: string;
    icon: ReactNode;
}

const defaultSteps: ProcessStepCard[] = [
    {
        title: "Keyword & Category Research",
        description:
            "We analyze reader search trends and competitor metrics to select high-converting keywords and optimal sub-categories for maximum ranking potential.",
        color: "#F8AE1A",
        icon: <SearchIcon />,
    },
    {
        title: "Sales Page & Listing Optimization",
        description:
            "Our team rewrites your title, subtitle, bullet points, and description to maximize SEO search relevance and boost reader conversion rates.",
        color: "#D6297A",
        icon: <ListingIcon />,
    },
    {
        title: "Amazon Ad Campaign Setup",
        description:
            "We launch and manage targeted Amazon Advertising (AMS) sponsored campaigns to put your book in front of parents, teachers, and gift buyers.",
        color: "#F96FA4",
        icon: <TargetIcon />,
    },
    {
        title: "Analytics & Ongoing Optimization",
        description:
            "We track click-through rates, advertising cost of sales (ACoS), and ranking performance, continually refining strategies for peak return on investment.",
        color: "#8BB625",
        icon: <ChartIcon />,
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: { ...softSpring(0.9, 0.3), delay: t(0.15 + i * 0.15) },
    }),
    hover: { y: -10, transition: softSpring(0.5, 0.35) },
};

const iconVariants: Variants = {
    hidden: { scale: 0.4, rotate: -20 },
    show: (i: number) => ({
        scale: 1,
        rotate: 0,
        transition: { ...softSpring(0.8, 0.45), delay: t(0.35 + i * 0.15) },
    }),
    hover: { rotate: [0, -10, 10, -6, 0], scale: 1.12, transition: { duration: t(0.7), ease: "easeInOut" } },
};

interface AmazonBookMarketingProcessProps {
    title?: string;
    description?: string;
    steps?: ProcessStepCard[];
}

export default function AmazonBookMarketingProcess({
    title = "Our Amazon Book Marketing & Optimization Process",
    description = "At Kiddli Publishing, we follow a data-driven marketing workflow to elevate your product listing and drive targeted sales performance on Amazon.",
    steps = defaultSteps,
}: AmazonBookMarketingProcessProps) {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark">
            <Clouds position="top" />
            <div className="relative mx-auto max-w-[1300px] px-5 pb-[max(130px,calc(7.6vw+70px))] pt-[max(130px,calc(7.6vw+60px))] sm:px-10 lg:px-12">
                <Reveal className="mx-auto max-w-[860px] text-center">
                    <h2 className="text-balance font-heading text-[28px] font-extrabold leading-[1.18] text-white sm:text-[36px] lg:text-[clamp(36px,3vw,48px)]">
                        {title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-[720px] font-body text-[15px] leading-[1.75] text-white/95 sm:text-[16px] lg:text-[17px]">
                        {description}
                    </p>
                </Reveal>

                <div className="mx-auto mt-10 grid max-w-[460px] grid-cols-1 gap-5 sm:max-w-none sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
                    {steps.map((step, i) => (
                        <motion.article
                            key={step.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            whileHover="hover"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative flex flex-col items-center overflow-hidden rounded-[22px] px-6 pb-8 pt-7 text-center shadow-[0_14px_30px_rgba(30,0,70,0.22)] lg:rounded-[24px] lg:px-7"
                            style={{ backgroundColor: step.color }}
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -left-10 -top-10 h-[120px] w-[120px] rounded-full bg-white/15"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute right-4 top-3 font-heading text-[34px] font-extrabold leading-none text-white/20 lg:text-[40px]"
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            <motion.div custom={i} variants={iconVariants} className="relative h-[70px] w-[70px] drop-shadow-[0_3px_0_rgba(0,0,0,0.12)] lg:h-[78px] lg:w-[78px]">
                                {step.icon}
                            </motion.div>

                            <h3 className="relative mt-4 font-heading text-[20px] font-extrabold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.18)] lg:text-[22px]">
                                {step.title}
                            </h3>
                            <p className="relative mt-2.5 font-body text-[14.5px] leading-[1.7] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] lg:text-[15px]">
                                {step.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>

            <Clouds position="bottom" />
        </section>
    );
}