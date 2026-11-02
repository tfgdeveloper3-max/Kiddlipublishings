import { motion } from "framer-motion";
import bagImg from "/images/AboutBag.png";
import pencilImg from "/images/AboutPencil.png";
import AnimatedButton from "../ui/AnimatedButton";
import Clouds from "../ui/Clouds";
import { AnimateCss, EASE, Float, PopIn, Reveal, t } from "../ui/Animated";
import mockupImg from "/images/About-mockup.png";

const BulbIcon = () => (
    <svg viewBox="0 0 28 28" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden="true">
        <path d="M14 2v2.5M5.5 5.5l1.8 1.8M22.5 5.5l-1.8 1.8M2.5 13h2.5M23 13h2.5" stroke="#F7931E" strokeWidth={1.6} />
        <path
            d="M14 7.5c-3.6 0-6 2.7-6 5.8 0 2.2 1.2 3.6 2.3 4.7.8.8 1.2 1.7 1.2 2.8h5c0-1.1.4-2 1.2-2.8 1.1-1.1 2.3-2.5 2.3-4.7 0-3.1-2.4-5.8-6-5.8z"
            fill="#FFD335"
            stroke="#E0A800"
            strokeWidth={1.2}
        />
        <path d="M11.5 23h5M12.5 25.5h3" stroke="#F7931E" strokeWidth={1.6} />
    </svg>
);

const BottomClouds = ({ bandClass = "bg-brand-light" }: { bandClass?: string }) => (
    <div aria-hidden="true" className={`absolute inset-x-0 bottom-0 z-10 ${bandClass}`}>
        <Clouds position="top" layout="static" />
    </div>
);

interface AboutStoryProps {
    label?: string;
    title?: string;
    description?: string;
    buttonLabel?: string;
    buttonHref?: string;
    image?: string;
    imageAlt?: string;
}

export default function AboutStory({
    label = "About Us",
    title = "Discover Our Story at Kiddli Publishings",
    description = "Founded with a deep passion for storytelling, Kiddli Publishings is dedicated to creating enchanting books that inspire, educate, and delight children everywhere. From our very first publication to our growing library of beloved titles, we work hand-in-hand with talented authors and illustrators to craft meaningful stories. Our mission is to spark imagination, nurture positive values, and make reading a magical daily adventure for kids and families around the world.",
    buttonLabel = "More About Us",
    buttonHref = "#books",
    image = mockupImg,
    imageAlt = "Robby the Rabbit and All You Need Is a Coloring Book, two Kiddli Publishings books",
}: AboutStoryProps) {
    return (
        <section id="about-story" className="relative isolate overflow-hidden bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <AnimateCss
                    animation="bounceIn"
                    onView
                    delay={500}
                    className="absolute -left-[6px] top-[40px] w-[44px] sm:w-[52px] lg:top-[8%] lg:w-[64px]"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [0, -6, 6, 0] }}
                        transition={{ duration: t(3.2), repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img src={bagImg} alt="" width={84} height={76} className="h-auto w-full" draggable={false} />
                    </motion.div>
                </AnimateCss>

                <AnimateCss
                    animation="backInRight"
                    onView
                    delay={900}
                    className="absolute -right-[20px] bottom-[80px] w-[90px] sm:bottom-[110px] sm:w-[110px] lg:bottom-[150px] lg:w-[130px]"
                >
                    <motion.div
                        className="origin-bottom-right"
                        animate={{ rotate: [0, -3, 2, -2, 0], x: [0, -3, 2, -1, 0], y: [0, 2, -2, 1, 0] }}
                        transition={{ duration: t(1.6), repeat: Infinity, repeatDelay: t(1), ease: "easeInOut" }}
                    >
                        <img src={pencilImg} alt="" width={264} height={219} className="h-auto w-full" draggable={false} />
                    </motion.div>
                </AnimateCss>
            </div>

            <div className="relative mx-auto grid max-w-[1680px] items-center gap-14 px-6 pb-[130px] pt-[90px] sm:px-10 sm:pb-[160px] sm:pt-[110px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-6 lg:px-12 lg:pb-[200px] lg:pt-[120px] xl:pl-[6.5vw] xl:pr-[3vw]">
                <div className="max-w-[640px]">
                    <Reveal from="right">
                        <div className="flex items-center gap-2">
                            <motion.span
                                className="block h-[22px] w-[22px] lg:h-[26px] lg:w-[26px]"
                                animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: t(2), repeat: Infinity, ease: "easeInOut" }}
                            >
                                <BulbIcon />
                            </motion.span>
                            <span className="font-heading text-[16px] font-bold text-brand-dark lg:text-[18px]">{label}</span>
                        </div>
                    </Reveal>

                    <Reveal from="right" delay={0.15}>
                        <h2 className="mt-3 max-w-[600px] font-heading text-[32px] font-extrabold leading-[1.18] text-black sm:text-[42px] lg:text-[clamp(36px,3.35vw,54px)]">
                            {title}
                        </h2>
                    </Reveal>

                    <Reveal from="right" delay={0.3}>
                        <p className="mt-4 max-w-[620px] font-body text-[15px] leading-[1.85] text-[#2B2B2B] sm:text-[16px] lg:text-[clamp(16px,1.12vw,18px)]">
                            {description}
                        </p>
                    </Reveal>

                    <PopIn delay={0.5} className="mt-7 inline-block">
                        <AnimatedButton href={buttonHref} variant="yellow" size="lg" idleWiggle>
                            {buttonLabel}
                        </AnimatedButton>
                    </PopIn>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 120, y: -60, rotate: 8, scale: 0.85 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: t(1), ease: EASE, delay: t(0.3) }}
                    className="relative mx-auto w-full max-w-[620px] sm:max-w-[760px] lg:mx-0 lg:max-w-[960px] lg:justify-self-end lg:scale-110 xl:scale-[1.15]"
                >
                    <Float distance={10} duration={4} delay={1.4}>
                        <motion.img
                            src={image}
                            alt={imageAlt}
                            width={1642}
                            height={1038}
                            draggable={false}
                            whileHover={{ scale: 1.04, rotate: -1.5 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="block h-auto w-full select-none"
                        />
                    </Float>
                </motion.div>
            </div>

            <BottomClouds />
        </section>
    );
}