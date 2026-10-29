import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
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

const BrainGearIcon = () => (
    <svg {...iconProps}>
        <path d="M21.5 4h5l.9 4.4a16 16 0 0 1 4.3 1.8l3.7-2.5 3.5 3.5-2.5 3.7a16 16 0 0 1 1.8 4.3l4.4.9v5l-4.4.9a16 16 0 0 1-1.8 4.3l2.5 3.7-3.5 3.5-3.7-2.5a16 16 0 0 1-4.3 1.8l-.9 4.4h-5l-.9-4.4a16 16 0 0 1-4.3-1.8l-3.7 2.5-3.5-3.5 2.5-3.7a16 16 0 0 1-1.8-4.3L4 26.5v-5l4.4-.9a16 16 0 0 1 1.8-4.3l-2.5-3.7 3.5-3.5 3.7 2.5a16 16 0 0 1 4.3-1.8z" />
        <path d="M24 13.5c-1.6-1.4-4.6-1.4-5.8.6-2.4-.2-4 1.8-3.4 3.9-2 .8-2.4 3.4-.9 4.8-1.3 1.6-.6 4.2 1.4 4.8-.2 2.4 2 4 4.2 3.4 1 1.8 3.4 2.1 4.5.8z" />
        <path d="M24 13.5c1.6-1.4 4.6-1.4 5.8.6 2.4-.2 4 1.8 3.4 3.9 2 .8 2.4 3.4.9 4.8 1.3 1.6.6 4.2-1.4 4.8.2 2.4-2 4-4.2 3.4-1 1.8-3.4 2.1-4.5.8z" />
        <path d="M24 13.5v18.3M18.2 14.1c.6 1.4 2 2 3.2 1.8M14.8 18c1.3.9 3 .8 4 0M14 22.8c1.6.4 3-.3 3.6-1.4M15.4 27.6c1.4-.3 2.4-1.4 2.4-2.8M19.6 31c.2-1.3 1.2-2.2 2.4-2.4M29.8 14.1c-.6 1.4-2 2-3.2 1.8M33.2 18c-1.3.9-3 .8-4 0M34 22.8c-1.6.4-3-.3-3.6-1.4M32.6 27.6c-1.4-.3-2.4-1.4-2.4-2.8M28.4 31c-.2-1.3-1.2-2.2-2.4-2.4" />
    </svg>
);

const HandsIcon = () => (
    <svg {...iconProps}>
        {[0, 90, 180, 270].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 24 24)`}>
                <path d="M3 8.5h12v10H3" />
                <path d="M6.5 8.5v10" />
                <path d="M15 8.5h8.5a2.5 2.5 0 0 1 0 5H20" />
                <path d="M20 13.5h4.5a2.5 2.5 0 0 1 0 5H15" />
                <path d="M15 8.5c1.5-2 4-2.5 5.5-1" />
            </g>
        ))}
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

const GradCapIcon = () => (
    <svg {...iconProps}>
        <path d="M3 18.5L24 10l21 8.5L24 27z" />
        <path d="M12 22.5v8.2c0 2.8 5.4 5.3 12 5.3s12-2.5 12-5.3v-8.2" />
        <path d="M24 18.5l-14 3.7v10.3" />
        <path d="M8.2 32.5h3.6l.9 6.5H7.3z" />
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
        title: "Place Your Services Heading Here",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        icon: <BrainGearIcon />,
        color: "#F26522",
        shape: ["62% 38% 55% 45% / 58% 48% 52% 42%", "50% 50% 60% 40% / 48% 58% 42% 52%"],
        size: "h-[120px] w-[128px] lg:h-[132px] lg:w-[140px]",
    },
    {
        title: "Place Your Services Heading Here",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        icon: <HandsIcon />,
        color: "#F8AE1A",
        shape: ["42% 58% 45% 55% / 38% 42% 58% 62%", "52% 48% 55% 45% / 46% 38% 62% 54%"],
        size: "h-[124px] w-[114px] lg:h-[136px] lg:w-[124px]",
    },
    {
        title: "Place Your Services Heading Here",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        icon: <BulbPuzzleIcon />,
        color: "#8BB625",
        shape: ["48% 52% 42% 58% / 55% 45% 55% 45%", "56% 44% 50% 50% / 45% 55% 45% 55%"],
        size: "h-[112px] w-[122px] lg:h-[122px] lg:w-[134px]",
    },
    {
        title: "Place Your Services Heading Here",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        icon: <GradCapIcon />,
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
                        <motion.div variants={iconVariants} className="h-[64px] w-[64px] lg:h-[72px] lg:w-[72px]">
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
    title = "Lorem Ipsum is simply dummy text of the printing",
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