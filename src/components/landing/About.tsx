import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import book1 from "/images/About-1.png";
import book2 from "/images/About-2.png";
import book3 from "/images/About-3.png";
import bagImg from "/images/AboutBag.png";
import pencilImg from "/images/AboutPencil.png";
import AnimatedButton from "../ui/AnimatedButton";
import Clouds from "../ui/Clouds";
import { AnimateCss, EASE, Float, PopIn, Reveal, softSpring, t } from "../ui/Animated";

const BulbIcon = () => (
    <svg viewBox="0 0 28 28" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden="true">
        <path d="M14 2v2.5M5.5 5.5l1.8 1.8M22.5 5.5l-1.8 1.8M2.5 13h2.5M23 13h2.5" stroke="#fff" strokeWidth={1.6} />
        <path
            d="M14 7.5c-3.6 0-6 2.7-6 5.8 0 2.2 1.2 3.6 2.3 4.7.8.8 1.2 1.7 1.2 2.8h5c0-1.1.4-2 1.2-2.8 1.1-1.1 2.3-2.5 2.3-4.7 0-3.1-2.4-5.8-6-5.8z"
            fill="#FFD335"
            stroke="#E0A800"
            strokeWidth={1.2}
        />
        <path d="M11.5 23h5M12.5 25.5h3" stroke="#fff" strokeWidth={1.6} />
    </svg>
);

const RAINBOW_PATHS = [
    "M10 68a38 38 0 0 1 76 0",
    "M20 68a28 28 0 0 1 56 0",
    "M30 68a18 18 0 0 1 36 0",
    "M2 76c-2-6 4-10 8-7 1-5 9-5 10 0 4-2 8 2 6 6 3 2 1 7-3 7H5c-4 0-5-4-3-6z",
    "M72 76c-2-6 4-10 8-7 1-5 9-5 10 0 4-2 8 2 6 6 3 2 1 7-3 7H75c-4 0-5-4-3-6z",
];

const Rainbow = () => (
    <svg viewBox="0 0 100 88" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden="true">
        {RAINBOW_PATHS.map((d, i) => (
            <motion.path
                key={i}
                d={d}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: t(1.2), ease: EASE, delay: t(0.2 + i * 0.25) }}
            />
        ))}
    </svg>
);

export interface BookCover {
    src: string;
    alt: string;
}

const defaultBooks: BookCover[] = [
    { src: book1, alt: "Mouse Trap book cover" },
    { src: book2, alt: "Lil' Marisa finds a New Friend book cover" },
    { src: book3, alt: "Kason the Kind Lion Prince book cover" },
];

const slots = [
    { left: "0%", top: "0%" },
    { left: "22.8%", top: "17.6%" },
    { left: "45.9%", top: "35.3%" },
];

const bookVariants: Variants = {
    hidden: (i: number) => ({
        opacity: 0,
        x: 160,
        y: -90,
        rotate: 16 - i * 10,
        scale: 0.8,
    }),
    show: (i: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            ...softSpring(1.1, 0.25),
            opacity: { duration: t(0.4), delay: t(0.3 + i * 0.6) },
            delay: t(0.3 + i * 0.6),
        },
    }),
};

function BookStack({ books }: { books: BookCover[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative mx-auto aspect-[578/444] w-full max-w-[460px] sm:max-w-[540px] lg:mx-0 lg:max-w-[570px] lg:justify-self-end"
        >
            {books.slice(0, 3).map((book, i) => (
                <motion.div
                    key={book.src}
                    custom={i}
                    variants={bookVariants}
                    className="absolute w-[54%]"
                    style={{ ...slots[i], zIndex: hovered === i ? 10 : i + 1 }}
                >
                    <Float distance={6} duration={3.6} delay={1.6 + i * 0.5}>
                        <motion.img
                            src={book.src}
                            alt={book.alt}
                            width={640}
                            height={624}
                            draggable={false}
                            onHoverStart={() => setHovered(i)}
                            onHoverEnd={() => setHovered(null)}
                            style={{ rotateY: -12, rotateX: 4, transformPerspective: 1100 }}
                            whileHover={{ y: -14, scale: 1.05, rotateY: -3, rotateX: 0 }}
                            transition={softSpring(0.6, 0.3)}
                            className="block h-auto w-full select-none rounded-[3px] shadow-[3px_3px_0_#F4EFE6,6px_6px_0_#E3D9C6,18px_22px_30px_rgba(40,10,90,0.35)]"
                        />
                    </Float>
                </motion.div>
            ))}
        </motion.div>
    );
}

interface AboutProps {
    label?: string;
    title?: string;
    description?: string;
    buttonLabel?: string;
    buttonHref?: string;
    books?: BookCover[];
}

export default function About({
    label = "About Book",
    title = "Discover Our Mission for Studykids Academy",
    description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    buttonLabel = "More About",
    buttonHref = "#about",
    books = defaultBooks,
}: AboutProps) {
    return (
        <section id="about" className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark">
            <Clouds position="top" />

            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-[22px] top-[22.8%] hidden h-[80px] w-[92px] sm:block lg:-left-[18px] lg:h-[96px] lg:w-[110px]">
                    <Float distance={6} duration={4}>
                        <Rainbow />
                    </Float>
                </div>

                <AnimateCss
                    animation="bounceIn"
                    onView
                    delay={600}
                    className="absolute right-[6%] top-[110px] w-[48px] sm:right-[8%] sm:w-[56px] lg:left-[87.3%] lg:right-auto lg:top-[22.3%] lg:w-[68px]"
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
                    className="absolute -right-[36px] bottom-[60px] w-[100px] sm:w-[120px] lg:bottom-auto lg:top-[79%] lg:w-[150px]"
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

            <div className="relative mx-auto grid max-w-[1680px] items-center gap-14 px-6 pb-[140px] pt-[120px] sm:px-10 sm:pb-[170px] sm:pt-[150px] lg:min-h-[clamp(820px,60vw,1000px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:content-center lg:gap-8 lg:px-12 lg:pb-[170px] lg:pt-[160px] xl:pl-[9.2vw] xl:pr-[5vw]">
                <div className="max-w-[640px]">
                    <Reveal from="right">
                        <div className="flex items-center gap-2">
                            <motion.span
                                className="block h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]"
                                animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: t(2), repeat: Infinity, ease: "easeInOut" }}
                            >
                                <BulbIcon />
                            </motion.span>
                            <span className="font-heading text-[17px] font-semibold text-white lg:text-[19px]">{label}</span>
                        </div>
                    </Reveal>

                    <Reveal from="right" delay={0.15}>
                        <h2 className="mt-3 max-w-[600px] font-heading text-[32px] font-extrabold leading-[1.18] text-white sm:text-[42px] lg:text-[clamp(36px,3.35vw,54px)]">
                            {title}
                        </h2>
                    </Reveal>

                    <Reveal from="right" delay={0.3}>
                        <p className="mt-4 max-w-[620px] font-body text-[15px] leading-[1.85] text-white sm:text-[16px] lg:text-[clamp(16px,1.18vw,19px)]">
                            {description}
                        </p>
                    </Reveal>

                    <PopIn delay={0.5} className="mt-7 inline-block">
                        <AnimatedButton href={buttonHref} variant="yellow" size="lg" idleWiggle>
                            {buttonLabel}
                        </AnimatedButton>
                    </PopIn>
                </div>

                <BookStack books={books} />
            </div>

            <Clouds position="bottom" />
        </section>
    );
}