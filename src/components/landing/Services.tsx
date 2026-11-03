import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import serviceTop from "/images/ServiceTop.png";
import { AnimateCss, EASE, Float, Reveal, Wiggle, softSpring, t } from "../ui/Animated";

/* ---------- illustrated service icons (64x64, dark outline + flat colour fills) ---------- */

const INK = "#1E1E1E";
const PURPLE = "#6B34C4";
const YELLOW = "#FFD335";
const PINK = "#F96FA4";
const ORANGE = "#F26522";
const SKY = "#5BB5E8";

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

const STAR_PATH = "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

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

const AuthorCareIcon = () => (
    <svg {...svgProps}>
        <path d="M11 12h33a6 6 0 0 1 6 6v15a6 6 0 0 1-6 6H25l-9 8v-8h-5a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" fill="#fff" />
        <path d="M27.5 33.5s-8.5-5-8.5-10.4a4.8 4.8 0 0 1 8.5-3 4.8 4.8 0 0 1 8.5 3c0 5.4-8.5 10.4-8.5 10.4z" fill={PINK} />
        <path d="M22.6 22.2c.3-1.2 1.2-2 2.3-2.2" stroke="#fff" strokeWidth={1.4} />
        <path d="M44.5 53.5l12-12 4 4-12 12z" fill={ORANGE} />
        <path d="M44.5 53.5l4 4-6 2z" fill="#FBE3C4" />
        <path d="M43.6 58.3l-1.1 1.2" strokeWidth={2.4} />
        <path d="M56.5 41.5l2-2a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8l-2 2z" fill={PINK} />
        <Sparkle x={54} y={9} delay={0.3} />
        <Sparkle x={57} y={20} size={2.2} delay={0.9} />
    </svg>
);

const IllustrationIcon = () => (
    <svg {...svgProps}>
        <path
            d="M31 8C17 8 6 17.5 6 30c0 10.5 7.5 17.5 16.5 17.5 4 0 5.4-2.8 4.2-5.8-1.1-2.7.6-5.4 3.6-5.4H37c10.2 0 19-5.2 19-14C56 14 45 8 31 8z"
            fill="#fff"
        />
        <circle cx="18" cy="27" r="4" fill={ORANGE} />
        <circle cx="25.5" cy="17.5" r="4" fill={YELLOW} />
        <circle cx="37.5" cy="16" r="4" fill={PINK} />
        <circle cx="46.5" cy="23.5" r="4" fill={SKY} />
        <circle cx="16.5" cy="37.5" r="3.2" fill={PURPLE} />
        {/* brush */}
        <path d="M37 59l-3.2-2.6 15-18.4 3.2 2.6z" fill={PURPLE} />
        <path d="M48.8 38l3.2 2.6 2.4-3-3.2-2.6z" fill="#D9D3E8" />
        <path d="M51.2 35l3.2 2.6c2.8-2 5-5.6 3.6-8.6-3.4-.6-6 2.6-6.8 6z" fill={ORANGE} />
        <Sparkle x={9} y={10} delay={0.2} />
        <Sparkle x={58} y={51} size={2.4} delay={0.8} />
    </svg>
);

const EducationIcon = () => (
    <svg {...svgProps}>
        {/* books */}
        <rect x="9" y="47" width="44" height="9" rx="2.5" fill={SKY} />
        <path d="M14 49.5h34v4H14" fill="#fff" strokeWidth={1.4} />
        <rect x="13" y="38" width="40" height="9" rx="2.5" fill={YELLOW} />
        <path d="M18 40.5h30v4H18" fill="#fff" strokeWidth={1.4} />
        {/* cap */}
        <path d="M20 24v7.5c0 3 5.4 5.5 12 5.5s12-2.5 12-5.5V24l-12 5z" fill="#4A2590" />
        <path d="M32 9l23 9.5L32 28 9 18.5z" fill={PURPLE} />
        <path d="M24.5 16.5c2.6-1.2 5.2-1.8 7.5-1.8" stroke="#fff" strokeWidth={1.4} opacity={0.8} />
        {/* tassel */}
        <path d="M32 18.5l18 3.5v10" />
        <path d="M48 32h4l1.2 5h-6.4z" fill={YELLOW} />
        <Sparkle x={9} y={33} delay={0.4} />
        <Sparkle x={57} y={9} size={2.4} delay={1} />
    </svg>
);

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

export interface ServiceItem {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
    shape: [string, string];
    size: string;
}

const defaultServices: ServiceItem[] = [
    {
        title: "Creative Book Publishing",
        description: "We turn imaginative drafts into beautifully formatted children's books designed to spark curiosity, joy, and wonder in young readers.",
        icon: <PublishingIcon />,
        color: "#F26522",
        shape: ["62% 38% 55% 45% / 58% 48% 52% 42%", "50% 50% 60% 40% / 48% 58% 42% 52%"],
        size: "h-[120px] w-[128px] lg:h-[132px] lg:w-[140px]",
    },
    {
        title: "Collaborative Author Care",
        description: "At Kiddli Publishings, we work hand-in-hand with authors to guide, polish, and support your storytelling journey every step of the way.",
        icon: <AuthorCareIcon />,
        color: "#F8AE1A",
        shape: ["42% 58% 45% 55% / 38% 42% 58% 62%", "52% 48% 55% 45% / 46% 38% 62% 54%"],
        size: "h-[124px] w-[114px] lg:h-[136px] lg:w-[124px]",
    },
    {
        title: "Vibrant Story Illustration",
        description: "Our team brings your words to life with captivating artwork, colorful characters, and visually stunning layouts children will love.",
        icon: <IllustrationIcon />,
        color: "#8BB625",
        shape: ["48% 52% 42% 58% / 55% 45% 55% 45%", "56% 44% 50% 50% / 45% 55% 45% 55%"],
        size: "h-[112px] w-[122px] lg:h-[122px] lg:w-[134px]",
    },
    {
        title: "Educational & Fun Content",
        description: "We craft stories that blend valuable life lessons and foundational learning with fun adventures to help young minds grow.",
        icon: <EducationIcon />,
        color: "#F96FA4",
        shape: ["46% 54% 42% 58% / 42% 48% 52% 58%", "54% 46% 52% 48% / 50% 42% 58% 50%"],
        size: "h-[124px] w-[114px] lg:h-[136px] lg:w-[124px]",
    },
];

const dividerClasses = [
    "border-b sm:border-r lg:border-b-0",
    "border-b lg:border-r lg:border-b-0",
    "border-b sm:border-b-0 sm:border-r",
    "",
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: t(0.9), ease: EASE, delay: t(0.15 + i * 0.15) },
    }),
    hover: { y: -6, transition: { duration: t(0.4), ease: EASE } },
};

const blobVariants: Variants = {
    hidden: { scale: 0.6, rotate: -10 },
    show: (i: number) => ({
        scale: 1,
        rotate: 0,
        transition: { ...softSpring(1, 0.3), delay: t(0.3 + i * 0.15) },
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

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
    return (
        <motion.article
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col items-center border-dashed border-[#D6D6D6] px-6 py-10 text-center sm:px-8 lg:px-6 lg:py-7 ${dividerClasses[index] ?? ""}`}
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
                        <motion.div variants={iconVariants} className="h-[74px] w-[74px] drop-shadow-[0_3px_0_rgba(0,0,0,0.12)] lg:h-[82px] lg:w-[82px]">
                            {item.icon}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <h3 className="mt-6 max-w-[220px] font-heading text-[20px] font-extrabold leading-[1.22] text-black lg:mt-7">
                {item.title}
            </h3>

            <p className="mt-4 max-w-[260px] font-body text-[15px] leading-[1.7] text-[#2B2B2B] lg:max-w-[215px] lg:text-[16px]">
                {item.description}
            </p>
        </motion.article>
    );
}

interface ServicesProps {
    label?: string;
    title?: string;
    services?: ServiceItem[];
}

export default function Services({
    label = "Services",
    title = "Bringing Children's Stories to Life with Care & Magic",
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

            <div className="relative mx-auto max-w-[1300px] px-5 pb-20 pt-16 sm:px-10 md:pt-20 lg:px-12 lg:pb-[102px] lg:pt-[76px]">
                <Reveal className="mx-auto max-w-[620px] text-center">
                    <span className="font-heading text-[13px] font-bold uppercase tracking-[0.04em] text-[#F7931E] lg:text-[14px]">
                        {label}
                    </span>
                    <h2 className="mx-auto mt-1.5 max-w-[340px] font-heading text-[26px] font-extrabold leading-[1.18] text-black sm:max-w-[520px] sm:text-[32px] lg:max-w-none lg:text-[36px]">
                        {title}
                    </h2>
                </Reveal>

                <div className="mx-auto mt-10 grid max-w-[480px] grid-cols-1 sm:max-w-none sm:grid-cols-2 lg:mt-[54px] lg:grid-cols-4">
                    {services.map((item, i) => (
                        <ServiceCard key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}