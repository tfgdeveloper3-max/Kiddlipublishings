import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { Reveal, softSpring, t } from "@/components/ui/Animated";
import Clouds from "@/components/ui/Clouds";
import { CropMarksIcon, GaugeIcon, PackageIcon, RefineIcon } from "../processIcons";

/* ---------- section ---------- */

export interface ProcessStepCard {
    title: string;
    description: string;
    color: string;
    icon: ReactNode;
}

const defaultSteps: ProcessStepCard[] = [
    {
        title: "Prepress Color & File Audit",
        description:
            "We convert artwork to CMYK color profiles, adjust image resolutions to 300+ DPI, and embed all required typography fonts.",
        color: "#F8AE1A",
        icon: <RefineIcon />,
    },
    {
        title: "Bleed & Trim Layout Setup",
        description:
            "Our team sets up exact page bleed areas, crop marks, and margin safe zones tailored to printer specifications.",
        color: "#D6297A",
        icon: <CropMarksIcon />,
    },
    {
        title: "Digital Asset Optimization",
        description:
            "We build optimized web and digital image assets (RGB ePUB, MOBI, and web previews) for fast rendering on mobile screens and e-readers.",
        color: "#F96FA4",
        icon: <GaugeIcon />,
    },
    {
        title: "Final Quality Control & Package Delivery",
        description:
            "We run thorough preflight checks and deliver your master digital asset archive, fully formatted for printers and online retailers.",
        color: "#8BB625",
        icon: <PackageIcon />,
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

interface PublicationReadyProcessProps {
    title?: string;
    description?: string;
    steps?: ProcessStepCard[];
}

export default function PublicationReadyProcess({
    title = "Our Publication-Ready Assets Process",
    description = "At Kiddli Publishing, we conduct a detailed technical conversion and quality assurance workflow to ensure your assets perform flawlessly across all formats.",
    steps = defaultSteps,
}: PublicationReadyProcessProps) {
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