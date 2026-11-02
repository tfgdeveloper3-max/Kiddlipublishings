import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";
import Clouds from "../ui/Clouds";
import { AnimateCss, BouncyWords, EASE, Float, PopIn, Reveal, Twinkle, Wiggle, softSpring, t } from "../ui/Animated";
import { Arrows, BookOutline, GridPattern, PencilDoodle, Stars } from "@/components/HeroDoodles";
import type { Testimonial } from "./ReviewsTestimonial";
import { reviews as allReviews } from "@/lib/reviewsData";

const STAR = "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

const StarIcon = ({ className = "", fill = "#fff" }: { className?: string; fill?: string }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d={STAR} fill={fill} />
    </svg>
);

function StarTiles({ count = 5, size = "md", delay = 0 }: { count?: number; size?: "sm" | "md"; delay?: number }) {
    const box = size === "md" ? "h-[34px] w-[34px] sm:h-[40px] sm:w-[40px]" : "h-[22px] w-[22px]";
    const star = size === "md" ? "h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" : "h-[13px] w-[13px]";
    return (
        <div className="flex gap-[4px]" role="img" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                    key={i}
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ ...softSpring(0.5, 0.45), delay: t(delay + i * 0.08) }}
                    className={`grid place-items-center rounded-[5px] ${box}`}
                    style={{ backgroundColor: i < count ? "#F8AE1A" : "#E4DDF2" }}
                >
                    <StarIcon className={star} />
                </motion.span>
            ))}
        </div>
    );
}

function Avatar({ src, name, color }: { src: string; name: string; color: string }) {
    const [ok, setOk] = useState(true);
    const initials = name.split(" ").slice(0, 2).map((w) => w[0]).join("");
    return (
        <span
            className="grid h-[38px] w-[38px] shrink-0 place-items-center overflow-hidden rounded-full font-heading text-[13px] font-bold text-white ring-2 ring-white shadow-[0_3px_10px_rgba(0,0,0,0.15)]"
            style={{ backgroundColor: color }}
        >
            {ok ? <img src={src} alt="" onError={() => setOk(false)} className="h-full w-full object-cover" draggable={false} /> : initials}
        </span>
    );
}

interface ReviewsHeroProps {
    badgeText?: string;
    titleLine?: string;
    titleHighlight?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    brandName?: string;
    reviews?: Testimonial[];
    featured?: Testimonial[];
}

export default function ReviewsHero({
    badgeText = "Rated 5.0 out of 5 by our authors & families",
    titleLine = "Reviews from authors & families",
    titleHighlight = "who published with Kiddli Publishing",
    description = "Welcome to Kiddli Publishing, where stories come to life and inspire readers across the globe. Hear from our authors, parents, educators, and young readers about their publishing journeys and reading experiences with us.",
    primaryLabel = "Read the Reviews",
    primaryHref = "#reviews",
    brandName = "Kiddli Publishing",
    reviews = allReviews,
    featured = [allReviews[1], allReviews[4], allReviews[8]],
}: ReviewsHeroProps) {
    const stats = useMemo(() => {
        const total = reviews.length;
        const counts = [5, 4, 3, 2, 1].map((star) => reviews.filter((r) => (r.rating ?? 5) === star).length);
        const avg = total ? reviews.reduce((sum, r) => sum + (r.rating ?? 5), 0) / total : 0;
        const pct = counts.map((c) => (total ? Math.round((c / total) * 100) : 0));
        return { total, counts, pct, avg: avg.toFixed(1), label: avg >= 4.5 ? "Excellent" : avg >= 4 ? "Great" : "Good" };
    }, [reviews]);

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        if (featured.length < 2) return;
        const id = setInterval(() => setCurrent((c) => (c + 1) % featured.length), 5000);
        return () => clearInterval(id);
    }, [featured.length]);
    const review = featured[current];

    const lineWords = titleLine.split(" ").length;
    const titleDelay = 0.3;
    const afterTitle = titleDelay + (lineWords + titleHighlight.split(" ").length) * 0.08;

    return (
        <section id="reviews-hero" className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark">
            <GridPattern />

            {/* doodles */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <AnimateCss animation="bounceIn" delay={600} className="absolute left-[2.5%] top-[110px] hidden h-[40px] w-[46px] sm:block lg:top-[16%] lg:h-[52px] lg:w-[58px]">
                    <Twinkle className="h-full w-full">
                        <Stars />
                    </Twinkle>
                </AnimateCss>
                <AnimateCss animation="backInLeft" delay={1300} className="absolute bottom-[22%] left-[2.5%] hidden h-[30px] w-[44px] xl:block">
                    <motion.div
                        className="h-full w-full"
                        animate={{ x: [0, 6, 0], rotate: [0, -6, 0] }}
                        transition={{ duration: t(2), repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Arrows />
                    </motion.div>
                </AnimateCss>
                <AnimateCss animation="bounceInDown" delay={800} className="absolute right-[2.5%] top-[130px] hidden h-[40px] w-[64px] xl:block">
                    <Float distance={8} duration={3.5}>
                        <BookOutline />
                    </Float>
                </AnimateCss>
                <AnimateCss animation="bounceInRight" delay={1000} className="absolute bottom-[26%] right-[2%] hidden h-[42px] w-[64px] xl:block">
                    <Wiggle angle={8} duration={2.4} className="h-full w-full">
                        <PencilDoodle />
                    </Wiggle>
                </AnimateCss>
            </div>

            <div className="relative z-20 mx-auto grid max-w-[1560px] items-center gap-14 px-5 pb-[max(150px,calc(7.6vw+80px))] pt-[130px] sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10 lg:px-12 lg:pt-[150px] xl:pl-[6vw] xl:pr-[5vw]">
                <div className="max-w-[720px]">
                    <PopIn delay={0.2} className="inline-block">
                        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/15 py-1.5 pl-1.5 pr-4 font-body text-[13px] text-white backdrop-blur-sm sm:text-[14px]">
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#FFD335] px-2.5 py-1 font-heading text-[12px] font-extrabold text-[#2B1A55]">
                                <StarIcon className="h-[12px] w-[12px]" fill="#2B1A55" />
                                {stats.avg}
                            </span>
                            {badgeText}
                        </span>
                    </PopIn>

                    <h1 className="mt-6 font-heading text-[36px] font-extrabold leading-[1.12] tracking-[-0.01em] text-white sm:text-[48px] lg:text-[clamp(40px,3.9vw,66px)]">
                        <BouncyWords text={titleLine} delay={titleDelay} stagger={0.08} />{" "}
                        <BouncyWords text={titleHighlight} className="text-accent" delay={titleDelay + lineWords * 0.08} stagger={0.08} />
                    </h1>

                    <Reveal delay={afterTitle + 0.2}>
                        <p className="mt-6 max-w-[600px] font-body text-[15px] leading-[1.75] text-white/95 sm:text-[16px] lg:text-[clamp(16px,1.12vw,19px)]">
                            {description}
                        </p>
                    </Reveal>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <PopIn delay={afterTitle + 0.4} className="inline-block">
                            <AnimatedButton href={primaryHref} variant="yellow" size="lg" idleWiggle>
                                {primaryLabel}
                            </AnimatedButton>
                        </PopIn>
                    </div>
                    <Reveal delay={afterTitle + 0.7}>
                        <dl className="mt-10 grid max-w-[560px] grid-cols-3 divide-x divide-dashed divide-white/40">
                            {[
                                { value: `${stats.pct[0]}%`, label: "5-star ratings" },
                                { value: stats.avg, label: "Average rating" },
                            ].map((s, i) => (
                                <div key={s.label} className={i === 0 ? "pr-4" : "px-4 sm:px-6"}>
                                    <dt className="sr-only">{s.label}</dt>
                                    <dd className="font-heading text-[30px] font-extrabold leading-none text-white sm:text-[38px] lg:text-[clamp(34px,2.6vw,44px)]">
                                        {s.value}
                                    </dd>
                                    <dd className="mt-2 font-body text-[12.5px] leading-tight text-white/85 sm:text-[14px]" aria-hidden="true">
                                        {s.label}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                </div>

                <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotate: 2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: t(0.9), ease: EASE, delay: t(0.5) }}
                        className="rounded-[28px] bg-white px-6 pb-16 pt-7 shadow-[0_24px_60px_rgba(40,10,90,0.3)] sm:px-9 sm:pb-24 sm:pt-9 lg:ml-[8%]"
                    >
                        <span className="font-heading text-[12px] font-extrabold uppercase tracking-[0.14em] text-brand sm:text-[13px]">
                            {brandName}
                        </span>

                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                            <span className="font-heading text-[28px] font-extrabold text-black sm:text-[34px]">{stats.label}</span>
                            <StarTiles count={Math.round(Number(stats.avg))} delay={0.9} />
                        </div>

                        <p className="mt-3 font-body text-[15px] text-[#4A4A4A] sm:text-[16px]">
                            Rated <strong className="text-black">{stats.avg}</strong> / 5 based on{" "}
                            <a href={primaryHref} className="font-semibold text-black underline decoration-[#FFD335] decoration-2 underline-offset-4 hover:text-brand">
                                {stats.total} reviews
                            </a>
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[5, 4, 3, 2, 1].map((star, i) => (
                                <li key={star} className="flex items-center gap-3 font-body text-[14px] text-[#4A4A4A] sm:gap-4 sm:text-[15px]">
                                    <span className="w-[46px] shrink-0">{star}-star</span>
                                    <span className="relative h-[8px] flex-1 overflow-hidden rounded-full bg-[#EEE9F7]">
                                        <motion.span
                                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-light to-brand-dark"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${stats.pct[i]}%` }}
                                            transition={{ duration: t(1.1), ease: EASE, delay: t(1.1 + i * 0.1) }}
                                        />
                                    </span>
                                    <span className="w-[42px] shrink-0 text-right tabular-nums">{stats.pct[i]}%</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {review && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...softSpring(1, 0.3), delay: t(1.2) }}
                            className="relative -mt-12 mx-3 sm:-mt-16 sm:mx-6 lg:-ml-[2%] lg:mr-[10%]"
                        >
                            <Float distance={6} duration={4} delay={2.4}>
                                <div className="relative overflow-hidden rounded-[22px] border-t-[5px] bg-white px-5 py-5 shadow-[0_18px_44px_rgba(40,10,90,0.28)] sm:px-7 sm:py-6" style={{ borderTopColor: review.color }}>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={current}
                                            initial={{ opacity: 0, x: 24 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -24 }}
                                            transition={{ duration: t(0.4), ease: EASE }}
                                        >
                                            <div className="flex items-center justify-between gap-3">
                                                <StarTiles count={review.rating ?? 5} size="sm" />
                                                {featured.length > 1 && (
                                                    <div className="flex gap-1.5" aria-hidden="true">
                                                        {featured.map((_, d) => (
                                                            <span
                                                                key={d}
                                                                className="h-[7px] rounded-full transition-all duration-300"
                                                                style={{ width: d === current ? 20 : 7, backgroundColor: d === current ? review.color : "#E4DDF2" }}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <p className="mt-3 font-body text-[14.5px] leading-[1.7] text-[#3A3A3A] sm:text-[15px]">
                                                “{review.quote}”
                                            </p>
                                            <div className="mt-4 flex items-center gap-3">
                                                <Avatar src={review.avatar} name={review.name} color={review.color} />
                                                <span className="font-heading text-[14px] font-bold text-black sm:text-[15px]">
                                                    {review.name}
                                                    <span className="font-body font-medium text-[#3E9E2E]"> · Verified</span>
                                                </span>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </Float>
                        </motion.div>
                    )}
                </div>
            </div>

            <Clouds position="bottom" />
        </section>
    );
}