import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { EASE, softSpring, t } from "../ui/Animated";
import Clouds from "../ui/Clouds";

export interface CounterStat {
    label: string;
    value: string;
}

const defaultStats: CounterStat[] = [
    { label: "Books Published", value: "563+" },
    { label: "Industry Awards Won", value: "55+" },
    { label: "Young Readers Reached", value: "46K+" },
    { label: "Happy Authors & Illustrators", value: "678+" },
];

function parseValue(value: string) {
    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return { prefix: "", number: 0, decimals: 0, suffix: value };
    const [, prefix, num, suffix] = match;
    return { prefix, number: parseFloat(num), decimals: num.split(".")[1]?.length ?? 0, suffix };
}

function CountUp({ value, start, delay }: { value: string; start: boolean; delay: number }) {
    const { prefix, number, decimals, suffix } = parseValue(value);
    const reduce = useReducedMotion();
    const [display, setDisplay] = useState(reduce ? number : 0);

    useEffect(() => {
        if (!start || reduce) return;
        const controls = animate(0, number, {
            duration: t(2),
            delay,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setDisplay(v),
        });
        return () => controls.stop();
    }, [start, reduce, number, delay]);

    return (
        <>
            {prefix}
            {display.toFixed(decimals)}
            {suffix}
        </>
    );
}

// dashed dividers: 2x2 grid on mobile/tablet, single row on desktop
const dividerClasses = [
    "border-r border-b lg:border-b-0",
    "border-b lg:border-b-0 lg:border-r",
    "border-r",
    "",
];

interface ServiceCounterProps {
    stats?: CounterStat[];
}

export default function ServiceCounter({ stats = defaultStats }: ServiceCounterProps) {
    const gridRef = useRef<HTMLDivElement>(null);
    const inView = useInView(gridRef, { once: true, amount: 0.4 });

    return (
        <section
            id="service-counter"
            aria-label="Kiddli Publishings in numbers"
            className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark"
        >
            <Clouds position="top" />

            {/* top/bottom padding = cloud height (7.6vw) + breathing room, never below 120px */}
            <div className="relative mx-auto max-w-[1300px] px-5 pb-[max(120px,calc(7.6vw+56px))] pt-[max(120px,calc(7.6vw+56px))] sm:px-10 lg:px-12">
                <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: t(0.7), ease: EASE, delay: t(0.1 + i * 0.15) }}
                            className={`flex flex-col items-center justify-center border-dashed border-white/50 px-3 py-7 text-center sm:px-6 lg:py-2 ${dividerClasses[i] ?? ""
                                }`}
                        >
                            <span className="font-body text-[13px] font-medium leading-[1.35] text-white/95 sm:text-[15px] lg:text-[clamp(15px,1.05vw,18px)]">
                                {stat.label}
                            </span>

                            <motion.span
                                initial={{ scale: 0.6 }}
                                animate={inView ? { scale: 1 } : {}}
                                transition={{ ...softSpring(0.9, 0.4), delay: t(0.25 + i * 0.15) }}
                                className="mt-2 font-heading text-[38px] font-extrabold leading-none tracking-[-0.01em] text-white tabular-nums sm:text-[48px] lg:mt-3 lg:text-[clamp(48px,4.2vw,72px)]"
                                aria-label={stat.value}
                            >
                                <span aria-hidden="true">
                                    <CountUp value={stat.value} start={inView} delay={t(0.25 + i * 0.15)} />
                                </span>
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Clouds position="bottom" />
        </section>
    );
}