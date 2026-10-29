import { motion } from "framer-motion";
import heroImage from "/images/HeroRight.png";
import AnimatedButton from "../ui/AnimatedButton";
import { AnimateCss, BouncyWords, Float, PopIn, Reveal, Twinkle, Wiggle, t } from "../ui/Animated";

interface HeroProps {
    titleLine1?: string;
    titleStart?: string;
    titleHighlight?: string;
    description?: string;
    buttonLabel?: string;
    buttonHref?: string;
}

const STAR =
    "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

const Stars = () => (
    <svg viewBox="0 0 64 56" className="h-full w-full" aria-hidden="true">
        <g fill="#FFD84D" stroke="#F2B705" strokeWidth={1} strokeLinejoin="round">
            <path d={STAR} transform="translate(22 9) scale(1.75)" />
            <path d={STAR} transform="translate(1 0) scale(0.95)" />
            <path d={STAR} transform="translate(0 25) scale(1.05)" />
        </g>
        <g fill="#fff" opacity={0.7}>
            <circle cx="37" cy="20" r="2.2" />
            <circle cx="9" cy="8" r="1.4" />
        </g>
    </svg>
);

const Burst = () => (
    <svg viewBox="0 0 52 42" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" className="h-full w-full" aria-hidden="true">
        <path d="M30 38L22 26" />
        <path d="M37 33L35 15" />
        <path d="M44 34L50 21" />
        <path d="M24 40L4 34" />
    </svg>
);

const Rain = () => (
    <svg viewBox="0 0 30 48" fill="none" stroke="#fff" strokeWidth={1.6} strokeLinecap="round" className="h-full w-full" aria-hidden="true">
        <path d="M8 2l-3 6M16 4l-3 6M24 3l-3 6" />
        <path d="M10 14l-3 6M18 15l-3 6M26 14l-3 6" />
        <path d="M7 26l-3 6M15 27l-3 6M23 26l-3 6" />
        <path d="M11 38l-3 6M19 39l-3 6" />
    </svg>
);

const Bulb = () => (
    <svg viewBox="0 0 52 68" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden="true">
        <g stroke="#1E1E1E" strokeWidth={1.8}>
            <path d="M26 4v6M10 10l4 4M42 10l-4 4M3 25h6M43 25h6" />
            <path
                d="M26 16c-8 0-13 6-13 12.5 0 4.6 2.6 7.6 4.8 9.9 1.5 1.6 2.4 3.4 2.4 5.6h11.6c0-2.2.9-4 2.4-5.6 2.2-2.3 4.8-5.3 4.8-9.9C39 22 34 16 26 16z"
                fill="#FFD335"
            />
            <path d="M20.5 48.5h11M21 53h10M22.5 57.5h7" />
            <path d="M24 61.5h4" />
        </g>
        <path d="M20 27c.6-3 2.6-5 5-5.6" stroke="#fff" strokeWidth={2} opacity={0.8} />
    </svg>
);

const Arrows = () => (
    <svg viewBox="0 0 44 30" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden="true">
        <path d="M2 14l12 3-11 5" stroke="#3EC6C6" strokeWidth={3} />
        <path d="M18 24l8-11" stroke="#FF6FA8" strokeWidth={3.4} />
        <path d="M24 13l17-9-6 14" fill="#FF9F2E" stroke="#FF9F2E" strokeWidth={2} />
    </svg>
);

const BookOutline = () => (
    <svg viewBox="0 0 64 40" fill="none" stroke="#fff" strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round" className="h-full w-full" aria-hidden="true">
        <path d="M32 12c-7-6-17-7-26-4v26c9-3 19-2 26 4 7-6 17-7 26-4V8c-9-3-19-2-26 4z" />
        <path d="M32 12v26" />
        <path d="M2 12v26c10-2 21-1 30 2 9-3 20-4 30-2V12" />
        <path d="M12 16c5-1 10 0 14 2M12 22c5-1 10 0 14 2M38 18c4-2 9-3 14-2M38 24c4-2 9-3 14-2" opacity={0.85} />
    </svg>
);

const PencilDoodle = () => (
    <svg viewBox="0 0 64 42" fill="none" stroke="#fff" strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round" className="h-full w-full" aria-hidden="true">
        <g transform="rotate(38 20 20)">
            <rect x="2" y="15" width="26" height="9" rx="1.5" />
            <path d="M8 15v9" />
            <path d="M28 15l9 4.5-9 4.5" />
            <path d="M34 18v3" />
        </g>
        <path d="M34 34c3-4 5 3 8 0s5 3 8 0 5 3 8-1" />
    </svg>
);

const Clouds = () => (
    <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[80px] w-full sm:h-[110px] lg:h-[140px]"
        aria-hidden="true"
    >
        <motion.g
            fill="#fff"
            fillOpacity={0.28}
            animate={{ x: [-18, 18] }}
            transition={{ duration: t(7), repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
            <circle cx="60" cy="152" r="80" />
            <circle cx="330" cy="147" r="90" />
            <circle cx="700" cy="140" r="110" />
            <circle cx="905" cy="136" r="100" />
            <circle cx="1220" cy="148" r="100" />
            <circle cx="1400" cy="156" r="90" />
        </motion.g>
        <g fill="#fff">
            <circle cx="25" cy="160" r="85" />
            <circle cx="205" cy="173" r="125" />
            <circle cx="400" cy="158" r="80" />
            <circle cx="580" cy="171" r="125" />
            <circle cx="820" cy="135" r="115" />
            <circle cx="1000" cy="167" r="95" />
            <circle cx="1145" cy="172" r="70" />
            <circle cx="1310" cy="184" r="130" />
            <circle cx="1440" cy="168" r="90" />
            <rect x="0" y="122" width="1440" height="18" />
        </g>
    </svg>
);

export default function Hero({
    titleLine1 = "Lorem Ipsum is simply",
    titleStart = "dummy",
    titleHighlight = "text industry.",
    description = "Welcome to Studyhub where each day brings new opportunities for discovery and growth. Our vibrant community is dedicated.",
    buttonLabel = "More About",
    buttonHref = "#about",
}: HeroProps) {
    const STAGGER = 0.1;
    const line1Count = titleLine1.split(" ").length;
    const startCount = titleStart.split(" ").length;
    const titleDelay = 0.3;

    return (
        <section
            id="home"
            className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark"
        >
            {/* faint grid pattern */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            {/* doodles: Animate.css entrance + Framer Motion loop */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <AnimateCss animation="bounceIn" delay={600} className="absolute left-[3.75%] top-[90px] h-[40px] w-[46px] lg:top-[15%] lg:h-[56px] lg:w-[64px]">
                    <Twinkle className="h-full w-full">
                        <Stars />
                    </Twinkle>
                </AnimateCss>

                <AnimateCss animation="zoomIn" delay={900} className="absolute left-[3.6%] top-[25%] hidden h-[42px] w-[52px] lg:block">
                    <motion.div
                        className="h-full w-full"
                        animate={{ scale: [1, 1.15, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: t(2), repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Burst />
                    </motion.div>
                </AnimateCss>

                <AnimateCss animation="fadeInDown" delay={1100} className="absolute left-[46.9%] top-[53%] hidden h-[48px] w-[30px] lg:block">
                    <motion.div
                        className="h-full w-full"
                        animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: t(2.2), repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Rain />
                    </motion.div>
                </AnimateCss>

                <AnimateCss animation="bounceInUp" delay={1300} className="absolute left-[40.3%] top-[72.6%] hidden h-[68px] w-[52px] lg:block">
                    <AnimateCss animation="swing" repeat="infinite" duration={2000} delay={1600} className="h-full w-full">
                        <Bulb />
                    </AnimateCss>
                </AnimateCss>

                <AnimateCss animation="backInLeft" delay={1500} className="absolute left-[5.5%] top-[75%] hidden h-[30px] w-[44px] lg:block">
                    <motion.div
                        className="h-full w-full"
                        animate={{ x: [0, 6, 0], rotate: [0, -6, 0] }}
                        transition={{ duration: t(2), repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Arrows />
                    </motion.div>
                </AnimateCss>

                <AnimateCss animation="bounceInDown" delay={800} className="absolute right-[3.9%] top-[14%] hidden h-[40px] w-[64px] lg:block">
                    <Float distance={8} duration={3.5}>
                        <BookOutline />
                    </Float>
                </AnimateCss>

                <AnimateCss animation="bounceInRight" delay={1000} className="absolute right-[4.4%] top-[29.7%] hidden h-[42px] w-[64px] lg:block">
                    <Wiggle angle={8} duration={2.4} className="h-full w-full">
                        <PencilDoodle />
                    </Wiggle>
                </AnimateCss>
            </div>

            {/* content */}
            <div className="relative mx-auto grid max-w-[1680px] items-center gap-10 px-6 pb-[110px] pt-[150px] sm:px-10 lg:min-h-[clamp(760px,52.8vw,1000px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:content-center lg:gap-6 lg:px-12 lg:pb-[108px] lg:pt-[120px] xl:pl-[6.5vw] xl:pr-[5.8vw]">
                {/* left */}
                <div className="max-w-[760px]">
                    <h1 className="font-heading text-[38px] font-extrabold leading-[1.2] tracking-[-0.01em] text-white sm:text-[48px] lg:text-[clamp(36px,3.75vw,62px)]">
                        <BouncyWords text={titleLine1} delay={titleDelay} stagger={STAGGER} />{" "}
                        <br className="hidden sm:block" />
                        <BouncyWords text={titleStart} delay={titleDelay + line1Count * STAGGER} stagger={STAGGER} />{" "}
                        <BouncyWords
                            text={titleHighlight}
                            className="text-accent"
                            delay={titleDelay + (line1Count + startCount) * STAGGER}
                            stagger={STAGGER}
                        />
                    </h1>

                    <Reveal delay={0.9}>
                        <p className="mt-6 max-w-[clamp(470px,33vw,640px)] font-body text-[16px] leading-[1.65] text-white lg:text-[clamp(16px,1.18vw,20px)]">
                            {description}
                        </p>
                    </Reveal>

                    <PopIn delay={1.1} className="mt-8 inline-block">
                        <AnimatedButton href={buttonHref} variant="yellow" size="lg" idleWiggle>
                            {buttonLabel}
                        </AnimatedButton>
                    </PopIn>
                </div>

                {/* right */}
                <PopIn delay={0.5} className="relative mx-auto w-full max-w-[520px] lg:max-w-[820px] lg:justify-self-end">
                    <Float distance={14} duration={4}>
                        <img
                            src={heroImage}
                            alt="Two kids reading a storybook in front of a stack of books labelled Imagine, Learn, Grow, Together"
                            width={1240}
                            height={943}
                            className="h-auto w-full select-none"
                            draggable={false}
                        />
                    </Float>
                </PopIn>
            </div>

            <Clouds />
        </section>
    );
}