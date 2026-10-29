import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Clouds from "../ui/Clouds";
import { Reveal, softSpring, t } from "../ui/Animated";

const ILLUSTRATION_COUNT = 12;
const ILLUSTRATION_EXT = "jpg";

export interface Illustration {
    src: string;
    alt: string;
}

const defaultIllustrations: Illustration[] = Array.from({ length: ILLUSTRATION_COUNT }, (_, i) => ({
    src: `/images/illustration/illustration-${i + 1}.${ILLUSTRATION_EXT}`,
    alt: `Interior illustration ${i + 1}`,
}));

function useColumns() {
    const get = () => {
        if (typeof window === "undefined") return 4;
        if (window.matchMedia("(min-width: 1024px)").matches) return 4;
        if (window.matchMedia("(min-width: 640px)").matches) return 3;
        return 2;
    };
    const [cols, setCols] = useState(get);
    useEffect(() => {
        const onResize = () => setCols(get());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return cols;
}

interface IllustrationsProps {
    label?: string;
    title?: string;
    items?: Illustration[];
}

export default function Illustrations({
    label = "Interior Illustrations",
    title = "Lorem Ipsum is simply dummy text of the printing",
    items = defaultIllustrations,
}: IllustrationsProps) {
    const cols = useColumns();
    const rows = Math.ceil(items.length / cols);

    const gridRef = useRef<HTMLDivElement>(null);
    const inView = useInView(gridRef, { once: true, amount: 0.25 });
    const [spread, setSpread] = useState(false);
    const [settled, setSettled] = useState(false);

    useEffect(() => {
        if (!inView) return;
        const a = setTimeout(() => setSpread(true), t(0.9) * 1000);
        const b = setTimeout(() => setSettled(true), t(0.9 + items.length * 0.12 + 1.2) * 1000);
        return () => {
            clearTimeout(a);
            clearTimeout(b);
        };
    }, [inView, items.length]);

    return (
        <section id="illustrations" className="relative overflow-hidden bg-white">
            <Clouds position="top" color="#6B34C4" backColor="#6B34C4" backOpacity={0.55} />

            <div className="relative mx-auto max-w-[1300px] px-4 pb-20 pt-[110px] sm:px-8 sm:pt-[140px] lg:px-12 lg:pb-[90px] lg:pt-[170px]">
                <Reveal className="mx-auto max-w-[620px] text-center">
                    <span className="font-heading text-[13px] font-bold uppercase tracking-[0.04em] text-[#F7931E] lg:text-[14px]">
                        {label}
                    </span>
                    <h2 className="mx-auto mt-1.5 max-w-[340px] font-heading text-[26px] font-extrabold leading-[1.18] text-black sm:max-w-[520px] sm:text-[32px] lg:max-w-none lg:text-[36px]">
                        {title}
                    </h2>
                </Reveal>

                <div
                    ref={gridRef}
                    className="relative mx-auto mt-8 grid max-w-[1240px] grid-cols-2 gap-[5px] sm:grid-cols-3 lg:mt-[30px] lg:grid-cols-4 lg:gap-[6px]"
                >
                    {items.map((item, i) => {
                        const col = i % cols;
                        const row = Math.floor(i / cols);

                        const toCenterX = ((cols - 1) / 2 - col) * 100;
                        const toCenterY = ((rows - 1) / 2 - row) * 100;
                        const pileRotate = ((i * 37) % 15) - 7; 

                        const pile = {
                            x: `${toCenterX}%`,
                            y: `${toCenterY}%`,
                            rotate: pileRotate,
                            scale: 0.8,
                            opacity: inView ? 1 : 0,
                        };
                        const placed = { x: "0%", y: "0%", rotate: 0, scale: 1, opacity: 1 };

                        return (
                            <motion.figure
                                key={item.src}
                                initial={{ ...pile, opacity: 0 }}
                                animate={spread ? placed : pile}
                                transition={
                                    spread
                                        ? { ...softSpring(1, 0.2), delay: t(i * 0.12) }
                                        : { duration: t(0.6), delay: t(i * 0.04) }
                                }
                                whileHover={settled ? { scale: 1.04, zIndex: 30 } : undefined}
                                className="relative m-0 aspect-square overflow-hidden bg-[#EEE] shadow-[0_6px_18px_rgba(0,0,0,0.12)]"
                                style={{ zIndex: settled ? 1 : items.length - i }}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    loading="lazy"
                                    draggable={false}
                                    className="h-full w-full select-none object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </motion.figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}