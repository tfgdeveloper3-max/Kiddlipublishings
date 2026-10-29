import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { EASE, Reveal, softSpring, t } from "../ui/Animated";

const CLOUD = "M32.7 80.1A34.6 34.6 0 0 1 80.9 52.0A46.6 46.6 0 0 1 156.9 36.1A55.1 55.1 0 0 1 243.1 36.1A43.7 43.7 0 0 1 314.4 50.4A33.7 33.7 0 0 1 362.6 75.5A19.9 19.9 0 0 1 377.9 101.6A17.1 17.1 0 0 1 367.3 127.9A34.6 34.6 0 0 1 319.1 156.0A53.9 53.9 0 0 1 230.9 172.9A62.5 62.5 0 0 1 133.3 168.9A46.0 46.0 0 0 1 59.7 147.1A29.0 29.0 0 0 1 24.7 116.2A24.4 24.4 0 0 1 32.7 80.1Z";
const CLOUD_INNER = "M46.8 84.5A30.8 30.8 0 0 1 90.9 61.6A42.5 42.5 0 0 1 160.6 48.7A50.5 50.5 0 0 1 239.4 48.7A39.8 39.8 0 0 1 304.8 60.3A30.2 30.2 0 0 1 348.9 80.8A16.8 16.8 0 0 1 362.9 102.0A14.2 14.2 0 0 1 353.2 123.5A30.8 30.8 0 0 1 309.1 146.4A49.2 49.2 0 0 1 228.3 160.1A57.2 57.2 0 0 1 138.9 156.8A41.8 41.8 0 0 1 71.6 139.1A25.3 25.3 0 0 1 39.5 113.9A20.0 20.0 0 0 1 46.8 84.5Z";
const TAIL = "M58 150L52 196L96 160Z";

export interface Testimonial {
    quote: string;
    name: string;
    avatar: string;
    color: string;
    rating?: number;
}

const defaultTestimonials: Testimonial[] = [
    {
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "Renzo Eike's Mom",
        avatar: "/images/Testimonials/testimonial-1.png",
        color: "#8BB625",
    },
    {
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "Maxi Gina's Mom",
        avatar: "/images/Testimonials/testimonial-2.png",
        color: "#F26522",
    },
    {
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "Ines Emilia's Mom",
        avatar: "/images/Testimonials/testimonial-3.png",
        color: "#3C6178",
    },
];

const STAR = "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

function Avatar({ src, name, color }: { src: string; name: string; color: string }) {
    const [ok, setOk] = useState(true);
    const initials = name
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("");
    return (
        <span
            className="grid h-[52px] w-[52px] shrink-0 place-items-center overflow-hidden rounded-full font-heading text-[15px] font-bold text-white ring-2 ring-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] lg:h-[58px] lg:w-[58px]"
            style={{ backgroundColor: color }}
        >
            {ok ? (
                <img src={src} alt="" onError={() => setOk(false)} className="h-full w-full object-cover" draggable={false} />
            ) : (
                initials
            )}
        </span>
    );
}

const cardVariants: Variants = {
    hidden: {},
    show: {},
};

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
    const base = 0.2 + index * 0.6; 
    const rating = item.rating ?? 5;

    return (
        <motion.figure
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto m-0 w-full max-w-[400px]"
        >
            <motion.div
                variants={{
                    hidden: { scale: 0, opacity: 0 },
                    show: {
                        scale: 1,
                        opacity: 1,
                        transition: { ...softSpring(0.9, 0.4), delay: t(base + 0.75) },
                    },
                }}
                style={{ originX: 0.13, originY: 0.93 }}
                className="relative"
            >
                <div
                    className="thought-float relative aspect-[400/210] w-full transition-transform duration-500 hover:scale-[1.03]"
                    style={{ animationDuration: `${t(3 + index * 0.4)}s`, animationDelay: `${t(base + 1.6)}s` }}
                >
                    <svg viewBox="0 0 400 210" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
                        <path d={CLOUD} fill={item.color} />
                        <path d={TAIL} fill={item.color} />
                        <motion.path
                            d={CLOUD_INNER}
                            fill="none"
                            stroke="#fff"
                            strokeWidth={1.6}
                            strokeDasharray="6 5"
                            animate={{ strokeDashoffset: [0, -22] }}
                            transition={{ duration: t(1.4), repeat: Infinity, ease: "linear" }}
                        />
                    </svg>

                    <div className="absolute inset-x-[20%] top-[27%] bottom-[30%] flex flex-col items-center justify-center text-center">
                        <div className="flex gap-[6px]" aria-label={`${rating} out of 5 stars`}>
                            {Array.from({ length: rating }).map((_, s) => (
                                <motion.svg
                                    key={s}
                                    viewBox="0 0 24 24"
                                    className="h-[12px] w-[12px] lg:h-[13px] lg:w-[13px]"
                                    variants={{
                                        hidden: { scale: 0, rotate: -90 },
                                        show: {
                                            scale: 1,
                                            rotate: 0,
                                            transition: { ...softSpring(0.5, 0.5), delay: t(base + 1.1 + s * 0.1) },
                                        },
                                    }}
                                >
                                    <path d={STAR} fill="#fff" />
                                </motion.svg>
                            ))}
                        </div>
                        <motion.blockquote
                            variants={{
                                hidden: { opacity: 0, y: 8 },
                                show: { opacity: 1, y: 0, transition: { duration: t(0.6), ease: EASE, delay: t(base + 1.3) } },
                            }}
                            className="m-0 mt-2 font-body text-[13px] leading-[1.6] text-white sm:text-[14px] lg:text-[clamp(13px,1.05vw,15.5px)]"
                        >
                            {item.quote}
                        </motion.blockquote>
                    </div>
                </div>
            </motion.div>

            <div aria-hidden="true" className="pointer-events-none absolute left-[9%] top-[86%]">
                {[
                    { x: 22, y: 30, s: 8 },
                    { x: 30, y: 12, s: 11 },
                    { x: 40, y: -8, s: 14 },
                ].map((d, k) => (
                    <motion.span
                        key={k}
                        className="absolute rounded-full"
                        style={{ left: d.x, top: d.y, width: d.s, height: d.s, backgroundColor: item.color }}
                        variants={{
                            hidden: { scale: 0, opacity: 0 },
                            show: {
                                scale: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                                transition: { duration: t(1.6), times: [0, 0.2, 0.7, 1], ease: "easeInOut", delay: t(base + 0.3 + k * 0.15) },
                            },
                        }}
                    />
                ))}
            </div>

            <figcaption className="mt-3 flex items-center gap-3 pl-[7%]">
                <motion.span
                    variants={{
                        hidden: { scale: 0, opacity: 0 },
                        show: { scale: 1, opacity: 1, transition: { ...softSpring(0.7, 0.4), delay: t(base) } },
                    }}
                >
                    <Avatar src={item.avatar} name={item.name} color={item.color} />
                </motion.span>
                <motion.span
                    variants={{
                        hidden: { opacity: 0, x: -10 },
                        show: { opacity: 1, x: 0, transition: { duration: t(0.5), ease: EASE, delay: t(base + 0.15) } },
                    }}
                    className="font-heading text-[14px] font-medium text-black lg:text-[15px]"
                >
                    {item.name}
                </motion.span>
            </figcaption>
        </motion.figure>
    );
}

interface TestimonialsProps {
    label?: string;
    title?: string;
    testimonials?: Testimonial[];
}

export default function Testimonials({
    label = "Testimonials",
    title = "Lorem Ipsum is simply dummy text of the printing",
    testimonials = defaultTestimonials,
}: TestimonialsProps) {
    return (
        <section id="testimonials" className="relative overflow-hidden bg-white">
            <div className="relative mx-auto max-w-[1360px] px-5 pb-20 pt-14 sm:px-10 lg:px-12 lg:pb-[110px] lg:pt-[72px]">
                <Reveal className="mx-auto max-w-[620px] text-center">
                    <span className="font-heading text-[13px] font-bold uppercase tracking-[0.04em] text-[#F7931E] lg:text-[14px]">
                        {label}
                    </span>
                    <h2 className="mx-auto mt-1.5 max-w-[340px] font-heading text-[26px] font-extrabold leading-[1.18] text-black sm:max-w-[520px] sm:text-[32px] lg:max-w-none lg:text-[36px]">
                        {title}
                    </h2>
                </Reveal>

                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-[40px] lg:grid-cols-3 lg:gap-x-[clamp(24px,2.5vw,40px)]">
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className={
                                i === testimonials.length - 1 && testimonials.length % 2 === 1
                                    ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-full"
                                    : ""
                            }
                        >
                            <TestimonialCard item={item} index={i % 3} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}