import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { EASE, Reveal, SPEED, softSpring, t } from "../ui/Animated";

const iconProps = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "#fff",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-full w-full",
    "aria-hidden": true,
};

const TelescopeIcon = () => (
    <svg {...iconProps}>
        <path d="M11 27.5l21-11.5 3.6 6.6-21 11.5z" />
        <path d="M6.5 29.6l4.2-2.3 3.6 6.6-4.2 2.3z" />
        <path d="M32 15.4l4.6-2.5 4.4 8-4.6 2.5z" />
        <path d="M24 29.5l-6 11M25 29l6 11.5M24.6 29.4V41" />
        <path d="M15 41.5h19" />
        <circle cx="22" cy="10" r="1.4" />
        <circle cx="9" cy="16" r="1.2" />
        <circle cx="40" cy="33" r="1.4" />
        <path d="M15 7v3M13.5 8.5h3M41 8v3M39.5 9.5h3" />
    </svg>
);

const GraduateIcon = () => (
    <svg {...iconProps}>
        <path d="M14 14.5l10-5 10 5-10 5z" />
        <path d="M34 14.5v6" />
        <path d="M18.5 17.5v3.5a5.5 5.5 0 0 0 11 0v-3.5" />
        <path d="M11 42c0-7 5.5-11 13-11s13 4 13 11z" />
        <path d="M19.5 31.5l4.5 5.5 4.5-5.5M24 37v5" />
        <circle cx="9" cy="12" r="1.4" />
        <circle cx="40" cy="27" r="1.3" />
        <path d="M40 8v3M38.5 9.5h3M8 24v3M6.5 25.5h3" />
    </svg>
);

const AbacusIcon = () => (
    <svg {...iconProps}>
        <rect x="11" y="5" width="26" height="36" rx="2.5" />
        <path d="M13 41v3M35 41v3" />
        <path d="M11 13h26M11 20h26M11 27h26M11 34h26" />
        {[
            [16, 13], [20, 13], [31, 13],
            [16, 20], [26, 20], [30, 20],
            [19, 27], [23, 27], [32, 27],
            [16, 34], [27, 34], [31, 34],
        ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.2" fill="#F96FA4" />
        ))}
    </svg>
);

const CapIcon = () => (
    <svg {...iconProps}>
        <path d="M7 19l17-7.5L41 19l-17 7.5z" />
        <path d="M13.5 22v7.5c0 2.4 4.7 4.5 10.5 4.5s10.5-2.1 10.5-4.5V22" />
        <path d="M37 20.5v10" />
        <path d="M35.2 30.5h3.6l.8 5h-5.2z" />
        <circle cx="11" cy="9" r="1.4" />
        <circle cx="40" cy="10" r="1.3" />
        <circle cx="9" cy="37" r="1.3" />
        <path d="M24 39v3M22.5 40.5h3" />
    </svg>
);

export interface ProcessStep {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
}

const defaultSteps: ProcessStep[] = [
    { title: "Heading Here", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", icon: <TelescopeIcon />, color: "#F8AE1A" },
    { title: "Heading Here", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", icon: <GraduateIcon />, color: "#D6297A" },
    { title: "Heading Here", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", icon: <AbacusIcon />, color: "#F96FA4" },
    { title: "Heading Here", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", icon: <CapIcon />, color: "#8BB625" },
];

const STEP_GAP = 0.9;
const stepStart = (i: number) => 0.2 + i * STEP_GAP;

const desktopArrows = [
    { dir: "down" as const, left: "21.6%", top: "72px" },
    { dir: "up" as const, left: "45.8%", top: "84px" },
    { dir: "down" as const, left: "71.6%", top: "87px" },
];

function DiagonalArrow({ dir, started, index }: { dir: "up" | "down"; started: boolean; index: number }) {
    const line = dir === "down" ? "M3 4L45 28" : "M3 46L45 22";
    const head = dir === "down" ? "M88 36v10H78" : "M78 4h10v10";
    const delay = t(stepStart(index) + 0.65);
    return (
        <svg viewBox="0 0 92 50" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden="true">
            <motion.path
                d={line}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={started ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: t(0.45), ease: EASE, delay }}
            />
            <motion.path
                d={head}
                initial={{ opacity: 0, x: dir === "down" ? -10 : -10, y: dir === "down" ? -6 : 6 }}
                animate={started ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: t(0.35), ease: EASE, delay: delay + t(0.3) }}
            />
        </svg>
    );
}

function DownArrow({ started, index }: { started: boolean; index: number }) {
    const delay = t(stepStart(index) + 0.65);
    return (
        <svg viewBox="0 0 20 46" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mx-auto my-3 h-[46px] w-[20px] sm:hidden" aria-hidden="true">
            <motion.path
                d="M10 3v30"
                initial={{ pathLength: 0 }}
                animate={started ? { pathLength: 1 } : {}}
                transition={{ duration: t(0.45), ease: EASE, delay }}
            />
            <motion.path
                d="M4 36l6 7 6-7"
                initial={{ opacity: 0, y: -6 }}
                animate={started ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: t(0.35), ease: EASE, delay: delay + t(0.3) }}
            />
        </svg>
    );
}

function Step({
    step,
    index,
    started,
    active,
    isLast,
}: {
    step: ProcessStep;
    index: number;
    started: boolean;
    active: boolean;
    isLast: boolean;
}) {
    const start = t(stepStart(index));
    const lowered = index % 2 === 1;

    return (
        <div className={lowered ? "sm:mt-20 lg:mt-[140px]" : ""}>
            <div className="flex flex-col items-center px-4 text-center">
                <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={started ? { scale: 1, rotate: 0 } : {}}
                    transition={{ ...softSpring(0.9, 0.35), delay: start }}
                    className="relative"
                >
                    <AnimatePresence>
                        {active && (
                            <motion.span
                                key="ring"
                                className="absolute inset-0 rounded-full"
                                style={{ border: `3px solid ${step.color}` }}
                                initial={{ scale: 1, opacity: 0.9 }}
                                animate={{ scale: 1.45, opacity: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: t(1.1), ease: "easeOut" }}
                            />
                        )}
                    </AnimatePresence>

                    <motion.div
                        className="relative grid h-[104px] w-[104px] place-items-center rounded-full shadow-[0_10px_24px_rgba(40,0,90,0.25)] lg:h-[125px] lg:w-[125px]"
                        style={{ backgroundColor: step.color }}
                        animate={{ scale: active ? 1.08 : 1 }}
                        transition={softSpring(0.6, 0.35)}
                    >
                        <motion.div
                            className="h-[56px] w-[56px] lg:h-[66px] lg:w-[66px]"
                            animate={active ? { rotate: [0, -10, 10, -5, 0], y: [0, -4, 0] } : { rotate: 0, y: 0 }}
                            transition={{ duration: t(0.8), ease: "easeInOut" }}
                        >
                            {step.icon}
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 24 }}
                    animate={started ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: t(0.6), ease: EASE, delay: start + t(0.3) }}
                    className="mt-8 font-heading text-[22px] font-extrabold text-white lg:mt-[44px] lg:text-[26px]"
                >
                    {step.title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={started ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: t(0.6), ease: EASE, delay: start + t(0.45) }}
                    className="mt-3 max-w-[340px] font-body text-[15px] leading-[1.75] text-white lg:mt-4 lg:max-w-[350px] lg:text-[16.5px]"
                >
                    {step.description}
                </motion.p>
            </div>

            {!isLast && <DownArrow started={started} index={index} />}
        </div>
    );
}

interface ProcessProps {
    label?: string;
    title?: string;
    steps?: ProcessStep[];
}

export default function Process({
    label = "Process",
    title = "Lorem Ipsum is simply dummy text of the printing",
    steps = defaultSteps,
}: ProcessProps) {
    const gridRef = useRef<HTMLDivElement>(null);
    const started = useInView(gridRef, { once: true, amount: 0.3 });
    const [active, setActive] = useState<number | null>(null);

    useEffect(() => {
        if (!started) return;
        const introEnd = t(stepStart(steps.length - 1) + 1.2) * 1000;
        let id: ReturnType<typeof setInterval>;
        const startId = setTimeout(() => {
            setActive(0);
            id = setInterval(() => setActive((a) => ((a ?? -1) + 1) % steps.length), 1.4 * SPEED * 1000);
        }, introEnd);
        return () => {
            clearTimeout(startId);
            clearInterval(id);
        };
    }, [started, steps.length]);

    return (
        <section id="process" className="relative overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark">
            <div className="relative mx-auto max-w-[1680px] px-5 pb-20 pt-12 sm:px-10 lg:px-12 lg:pb-[64px] lg:pt-[44px]">
                <Reveal className="mx-auto max-w-[620px] text-center">
                    <span className="font-heading text-[13px] font-bold uppercase tracking-[0.04em] text-accent lg:text-[14px]">
                        {label}
                    </span>
                    <h2 className="mx-auto mt-1.5 max-w-[340px] font-heading text-[26px] font-extrabold leading-[1.18] text-white sm:max-w-[520px] sm:text-[32px] lg:max-w-none lg:text-[36px]">
                        {title}
                    </h2>
                </Reveal>

                <div
                    ref={gridRef}
                    className="relative mx-auto mt-12 grid max-w-[440px] grid-cols-1 sm:max-w-[760px] sm:grid-cols-2 sm:gap-x-6 lg:mt-[26px] lg:max-w-[1240px] lg:grid-cols-4 lg:gap-x-0"
                >
                    {steps.map((step, i) => (
                        <Step
                            key={i}
                            step={step}
                            index={i}
                            started={started}
                            active={active === i}
                            isLast={i === steps.length - 1}
                        />
                    ))}

                    {steps.length === 4 &&
                        desktopArrows.map((a, i) => (
                            <div
                                key={i}
                                className="pointer-events-none absolute hidden h-[54px] w-[100px] lg:block"
                                style={{ left: a.left, top: a.top }}
                            >
                                <DiagonalArrow dir={a.dir} started={started} index={i} />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}