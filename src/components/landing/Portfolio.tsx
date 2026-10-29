import { useEffect, useRef, useState } from "react";
import { motion, useInView, type PanInfo } from "framer-motion";
import Clouds from "../ui/Clouds";
import { AnimateCss, EASE, Float, Reveal, SPEED, softSpring, t } from "../ui/Animated";

const PORTFOLIO_COUNT = 7;
const PORTFOLIO_EXT = "png";

const defaultCovers = Array.from({ length: PORTFOLIO_COUNT }, (_, i) => ({
    src: `/images/Portfolio/Portfolio-${i + 1}.${PORTFOLIO_EXT}`,
    alt: `Portfolio book cover ${i + 1}`,
}));

export interface Cover {
    src: string;
    alt: string;
}

const X = [0, 0.6, 1.095, 1.54, 1.9]; // horizontal offset, in cover widths
const SCALE = [1, 0.885, 0.775, 0.62, 0.5];
const OPACITY = [1, 1, 1, 1, 0];

const pose = (rel: number) => {
    const d = Math.min(Math.abs(rel), X.length - 1);
    const dir = Math.sign(rel);
    return {
        x: `${-50 + dir * X[d] * 100}%`,
        y: "-50%",
        scale: SCALE[d],
        opacity: OPACITY[d],
        rotate: 0,
    };
};

const stackPose = (rel: number) => ({
    x: "-50%",
    y: "-50%",
    scale: rel === 0 ? 1 : 0.9,
    opacity: 1,
    rotate: rel === 0 ? 0 : rel * 2.5,
});

interface PortfolioProps {
    label?: string;
    title?: string;
    covers?: Cover[];
    decorSrc?: string;
    interval?: number;
}

export default function Portfolio({
    label = "Portfolio",
    title = "Lorem Ipsum is simply dummy text of the printing",
    covers = defaultCovers,
    decorSrc = "/images/Portfolio/Portfolio-girl.png",
    interval = 2.2,
}: PortfolioProps) {
    const n = covers.length;
    const HALF = Math.floor(n / 2);

    const [step, setStep] = useState(Math.floor(n / 2));
    const [phase, setPhase] = useState<"stack" | "spread">("stack");
    const [playing, setPlaying] = useState(false);
    const [decorOk, setDecorOk] = useState(true);

    const stageRef = useRef<HTMLDivElement>(null);
    const inView = useInView(stageRef, { once: true, amount: 0.4 });

    const relOf = (i: number) => ((((i - step + HALF) % n) + n) % n) - HALF;
    const lapOf = (i: number) => Math.floor((i - step + HALF) / n);
    const active = ((step % n) + n) % n;

    useEffect(() => {
        if (!inView) return;
        const spreadTimer = setTimeout(() => setPhase("spread"), t(0.4) * 1000);
        const playTimer = setTimeout(() => setPlaying(true), t(0.4 + 0.35 * 3 + 1.2) * 1000);
        return () => {
            clearTimeout(spreadTimer);
            clearTimeout(playTimer);
        };
    }, [inView]);

    useEffect(() => {
        if (!playing) return;
        const id = setTimeout(() => setStep((s) => s + 1), interval * SPEED * 1000);
        return () => clearTimeout(id);
    }, [playing, step, interval]);

    const go = (delta: number) => {
        if (phase !== "spread") return;
        setStep((s) => s + delta);
    };

    const onPanEnd = (_: unknown, info: PanInfo) => {
        if (info.offset.x < -40) go(1);
        else if (info.offset.x > 40) go(-1);
    };

    const DASHES = 3;
    const activeDash = Math.min(DASHES - 1, Math.floor((active * DASHES) / n));
    const goToDash = (d: number) => {
        const target = Math.round((d * n) / DASHES);
        let delta = target - active;
        if (delta > HALF) delta -= n;
        if (delta < -HALF) delta += n;
        go(delta);
    };

    return (
        <section id="portfolio" className="relative overflow-hidden bg-white">
            {/* decoration: girl reading */}
            {decorOk && (
                <AnimateCss
                    animation="fadeInRight"
                    onView
                    delay={300}
                    className="pointer-events-none absolute right-0 top-[8px] hidden w-[130px] sm:block md:w-[160px] lg:top-[6px] lg:w-[210px]"
                >
                    <Float distance={8} duration={3.5}>
                        <img
                            src={decorSrc}
                            alt=""
                            onError={() => setDecorOk(false)}
                            className="h-auto w-full select-none"
                            draggable={false}
                        />
                    </Float>
                </AnimateCss>
            )}

            <div className="relative mx-auto max-w-[1680px] pb-[150px] pt-16 sm:pb-[170px] md:pt-20 lg:pb-[190px] lg:pt-[72px]">
                {/* heading */}
                <Reveal className="mx-auto max-w-[620px] px-5 text-center">
                    <span className="font-heading text-[13px] font-bold uppercase tracking-[0.04em] text-[#F7931E] lg:text-[14px]">
                        {label}
                    </span>
                    <h2 className="mx-auto mt-1.5 max-w-[340px] font-heading text-[26px] font-extrabold leading-[1.18] text-black sm:max-w-[520px] sm:text-[32px] lg:max-w-none lg:text-[36px]">
                        {title}
                    </h2>
                </Reveal>

                {/* coverflow stage */}
                <motion.div
                    ref={stageRef}
                    onPanEnd={onPanEnd}
                    className="relative mt-10 h-[calc(var(--w)*1.08)] touch-pan-y select-none [--w:62vw] sm:[--w:44vw] lg:mt-[50px] lg:[--w:29vw] 2xl:[--w:430px]"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Book portfolio"
                >
                    {covers.map((cover, i) => {
                        const rel = relOf(i);
                        const d = Math.abs(rel);
                        const target = phase === "stack" ? stackPose(rel) : pose(rel);

                        const transition =
                            phase === "stack"
                                ? { duration: 0 }
                                : playing
                                    ? { ...softSpring(0.9, 0.12), opacity: { duration: t(0.5), ease: EASE } }
                                    : { ...softSpring(1, 0.2), delay: t(Math.max(0, d - 1) * 0.35) };

                        return (
                            <motion.button
                                key={`${i}-${lapOf(i)}`}
                                type="button"
                                onClick={() => go(rel)}
                                tabIndex={d === 0 ? 0 : -1}
                                aria-label={d === 0 ? cover.alt : `Show ${cover.alt}`}
                                initial={playing ? { ...pose(rel), opacity: 0 } : stackPose(rel)}
                                animate={target}
                                transition={transition}
                                whileHover={phase === "spread" && d !== 0 ? { y: "-52%" } : undefined}
                                className="absolute left-1/2 top-1/2 block w-[var(--w)] cursor-pointer focus-visible:outline-none"
                                style={{ zIndex: 20 - d }}
                            >
                                <img
                                    src={cover.src}
                                    alt={cover.alt}
                                    draggable={false}
                                    className="pointer-events-none block aspect-square h-auto w-full object-contain drop-shadow-[0_18px_22px_rgba(30,20,60,0.28)]"
                                />
                            </motion.button>
                        );
                    })}
                </motion.div>

                <div className="mt-8 flex justify-center gap-[13px] lg:mt-[44px]">
                    {Array.from({ length: DASHES }).map((_, d) => (
                        <button
                            key={d}
                            type="button"
                            onClick={() => goToDash(d)}
                            aria-label={`Go to slide group ${d + 1}`}
                            aria-current={d === activeDash}
                            className="relative h-[6px] w-[50px] overflow-hidden rounded-full bg-[#C8C8C8] lg:w-[60px]"
                        >
                            <motion.span
                                className="absolute inset-0 rounded-full bg-brand"
                                initial={false}
                                animate={{ scaleX: d === activeDash ? 1 : 0 }}
                                transition={{ duration: t(0.5), ease: EASE }}
                                style={{ originX: 0 }}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <Clouds position="bottom" color="#A157FF" backColor="#A157FF" backOpacity={0.6} />
        </section>
    );
}