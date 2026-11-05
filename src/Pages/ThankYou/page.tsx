import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { BouncyWords, Float, PopIn, Reveal, Twinkle, Wiggle, softSpring, t } from "@/components/ui/Animated";
import { BookOutline, GridPattern, PencilDoodle, Rain, Stars } from "@/components/HeroDoodles";
import { FROM_KEY, THANK_YOU_PATH } from "@/components/LeadModal";

const STAR = "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

const CONFETTI = [
    { x: -150, y: -90, c: "#FFD335", s: 18, star: true },
    { x: 140, y: -110, c: "#F96FA4", s: 14, star: true },
    { x: -170, y: 30, c: "#5BB5E8", s: 10, star: false },
    { x: 175, y: 20, c: "#FFD335", s: 12, star: false },
    { x: -90, y: -150, c: "#8BB625", s: 10, star: false },
    { x: 80, y: -160, c: "#FFD335", s: 16, star: true },
    { x: -120, y: 110, c: "#F96FA4", s: 10, star: false },
    { x: 130, y: 115, c: "#5BB5E8", s: 14, star: true },
];

function SuccessBadge() {
    return (
        <div className="relative mx-auto grid h-[150px] w-[150px] place-items-center sm:h-[180px] sm:w-[180px]">
            {[0, 1].map((k) => (
                <motion.span
                    key={k}
                    className="absolute inset-0 rounded-full border-[3px] border-white/50"
                    animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                    transition={{ duration: t(2.2), delay: 1.2 + k * 1.1, repeat: Infinity, ease: "easeOut" }}
                    aria-hidden="true"
                />
            ))}

            {CONFETTI.map((p, i) => (
                <motion.span
                    key={i}
                    className="absolute"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{ x: p.x, y: p.y, scale: 1, opacity: 1, rotate: p.star ? 180 : 0 }}
                    transition={{ ...softSpring(1.2, 0.35), delay: t(0.55 + i * 0.04) }}
                    aria-hidden="true"
                >
                    <Twinkle>
                        {p.star ? (
                            <svg viewBox="0 0 24 24" style={{ width: p.s, height: p.s }}>
                                <path d={STAR} fill={p.c} />
                            </svg>
                        ) : (
                            <span className="block rounded-full" style={{ width: p.s, height: p.s, backgroundColor: p.c }} />
                        )}
                    </Twinkle>
                </motion.span>
            ))}

            <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ ...softSpring(0.9, 0.45), delay: t(0.2) }}
                className="relative grid h-full w-full place-items-center rounded-full bg-white shadow-[0_20px_50px_rgba(30,0,70,0.35)]"
                style={{ borderRadius: "48% 52% 46% 54% / 52% 46% 54% 48%" }}
            >
                <div className="grid h-[72%] w-[72%] place-items-center rounded-full bg-[#8BB625] shadow-[inset_0_-6px_0_rgba(0,0,0,0.12)]">
                    <svg viewBox="0 0 52 52" className="h-[58%] w-[58%]" fill="none" aria-hidden="true">
                        <motion.path
                            d="M13 27l9 9 17-19"
                            stroke="#fff"
                            strokeWidth={6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: t(0.6), ease: "easeOut", delay: t(0.6) }}
                        />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
}

export default function ThankYouPage() {
    const location = useLocation();

    const from = useMemo(() => {
        const stateFrom = (location.state as { from?: string } | null)?.from;
        let stored: string | null = null;
        try {
            stored = sessionStorage.getItem(FROM_KEY);
        } catch {

        }
        const value = stateFrom || stored || "/";
        return value.startsWith("/") && value !== THANK_YOU_PATH ? value : "/";
    }, [location.state]);

    const cameFromHome = from === "/";

    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex, nofollow";
        document.head.appendChild(meta);
        return () => meta.remove(); 
    }, []);

    return (
        <main>
            <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark">
                <GridPattern />

                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[5%] top-[130px] h-[46px] w-[54px] lg:top-[20%] lg:h-[60px] lg:w-[70px]">
                        <Twinkle className="h-full w-full">
                            <Stars />
                        </Twinkle>
                    </div>
                    <div className="absolute right-[5%] top-[140px] hidden h-[40px] w-[64px] sm:block lg:top-[18%]">
                        <Float distance={8} duration={3.5}>
                            <BookOutline />
                        </Float>
                    </div>
                    <div className="absolute right-[7%] top-[52%] hidden h-[42px] w-[64px] lg:block">
                        <Wiggle angle={8} duration={2.4} className="h-full w-full">
                            <PencilDoodle />
                        </Wiggle>
                    </div>
                    <div className="absolute left-[8%] top-[60%] hidden h-[48px] w-[30px] lg:block">
                        <motion.div
                            className="h-full w-full"
                            animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
                            transition={{ duration: t(2.2), repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Rain />
                        </motion.div>
                    </div>
                </div>

                <div className="relative z-20 mx-auto flex min-h-[100dvh] max-w-[900px] flex-col items-center justify-center px-6 pb-[max(150px,calc(7.6vw+90px))] pt-[140px] text-center sm:px-10 lg:pt-[150px]">
                    <SuccessBadge />

                    <span className="mt-10 font-heading text-[13px] font-bold uppercase tracking-[0.12em] text-accent lg:text-[14px]">
                        Message received
                    </span>
                    <h1 className="mt-2 font-heading text-[44px] font-extrabold leading-[1.1] text-white sm:text-[58px] lg:text-[72px]">
                        <BouncyWords text="Thank You!" delay={0.9} stagger={0.12} />
                    </h1>

                    <Reveal delay={1.2}>
                        <p className="mx-auto mt-5 max-w-[580px] font-body text-[16px] leading-[1.75] text-white/95 lg:text-[18px]">
                            Your story has landed safely with the Kiddli Publishing team. One of our publishing experts will reach out to you
                            within one business day to start bringing your book to life.
                        </p>
                    </Reveal>

                    <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
                        {!cameFromHome && (
                            <PopIn delay={1.45} className="inline-block">
                                <AnimatedButton href={from} variant="yellow" size="lg" idleWiggle>
                                    Back to Previous Page
                                </AnimatedButton>
                            </PopIn>
                        )}
                        <PopIn delay={cameFromHome ? 1.45 : 1.6} className="inline-block">
                            {cameFromHome ? (
                                <AnimatedButton href="/" variant="yellow" size="lg" idleWiggle>
                                    Back to Home
                                </AnimatedButton>
                            ) : (
                                <motion.a
                                    href="/"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/75 px-7 py-[15px] font-heading text-[17px] font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
                                        <path d="M4 11l8-7 8 7v8.5a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H5.5A1.5 1.5 0 0 1 4 19.5z" />
                                    </svg>
                                    Back to Home
                                </motion.a>
                            )}
                        </PopIn>
                    </div>
                </div>
            </section>
        </main>
    );
}