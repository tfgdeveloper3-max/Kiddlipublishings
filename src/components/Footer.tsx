import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";
import Clouds from "./ui/Clouds";
import { EASE, softSpring, t } from "./ui/Animated";

const SPARKLE = "M12 0C13 7 17 11 24 12 17 13 13 17 12 24 11 17 7 13 0 12 7 11 11 7 12 0z";

function Sparkle({ color, className, delay }: { color: string; className: string; delay: number }) {
    return (
        <motion.svg
            viewBox="0 0 24 24"
            className={`absolute ${className}`}
            aria-hidden="true"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ ...softSpring(0.8, 0.45), delay: t(delay) }}
        >
            <motion.path
                d={SPARKLE}
                fill={color}
                stroke="#3B2A6B"
                strokeWidth={0.8}
                strokeLinejoin="round"
                style={{ originX: 0.5, originY: 0.5 }}
                animate={{ scale: [1, 0.75, 1], rotate: [0, 20, 0] }}
                transition={{ duration: t(2), delay: t(delay + 1), repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.svg>
    );
}

function Mushroom() {
    const leg = (d: string, from: number, to: number) => (
        <motion.path
            d={d}
            stroke="#3B2A6B"
            strokeWidth={1.6}
            fill="#F8B21A"
            strokeLinejoin="round"
            style={{ originX: 0.5, originY: 0 }}
            animate={{ rotate: [from, to, from] }}
            transition={{ duration: t(0.9), repeat: Infinity, ease: "easeInOut" }}
        />
    );
    return (
        <motion.svg
            viewBox="0 0 70 84"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: t(0.45), repeat: Infinity, ease: "easeInOut" }}
        >
            {leg("M27 56l-6 18c-1 3 0 5 3 5h7l-1-4h-3l5-17z", -14, 14)}
            {leg("M40 56l4 18-3 1v4h7c3 0 4-2 3-5l-5-18z", 14, -14)}
            <path d="M24 44c0-4 4-6 10-6s11 2 11 6v12c0 3-4 5-10.5 5S24 59 24 56z" fill="#F8B21A" stroke="#3B2A6B" strokeWidth={1.6} />
            <motion.path
                d="M44 46c5 2 8 6 8 11"
                stroke="#3B2A6B"
                strokeWidth={4.5}
                strokeLinecap="round"
                fill="none"
                style={{ originX: 0, originY: 0 }}
                animate={{ rotate: [-10, 12, -10] }}
                transition={{ duration: t(0.9), repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M18 30c0-4 7-7 16-7s17 3 17 7-6 13-16.5 13S18 34 18 30z" fill="#F7E6D2" stroke="#3B2A6B" strokeWidth={1.6} />
            <path d="M4 28C4 13 18 3 35 3s31 10 31 25c0 3-3 4-6 3-7-3-16-4-25-4s-18 1-25 4c-3 1-6 0-6-3z" fill="#EA5A2A" stroke="#3B2A6B" strokeWidth={1.6} />
            <ellipse cx="22" cy="12" rx="5" ry="3.5" fill="#FFE3C4" />
            <ellipse cx="45" cy="10" rx="4" ry="3" fill="#FFE3C4" />
            <ellipse cx="56" cy="21" rx="3.5" ry="2.6" fill="#FFE3C4" />
            <ellipse cx="11" cy="23" rx="3" ry="2.4" fill="#FFE3C4" />
            <motion.g
                style={{ originX: 0.5, originY: 0.5 }}
                animate={{ scaleY: [1, 1, 0.1, 1] }}
                transition={{ duration: t(3), times: [0, 0.9, 0.95, 1], repeat: Infinity }}
            >
                <ellipse cx="29" cy="33" rx="3.8" ry="5" fill="#1E1E1E" />
                <ellipse cx="40" cy="33" rx="3.8" ry="5" fill="#1E1E1E" />
                <circle cx="30" cy="31" r="1.2" fill="#fff" />
                <circle cx="41" cy="31" r="1.2" fill="#fff" />
            </motion.g>
        </motion.svg>
    );
}

const SocialIcons: Record<string, ReactNode> = {
    Instagram: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-[13px] w-[13px]">
            <rect x="4" y="4" width="16" height="16" rx="4.5" />
            <circle cx="12" cy="12" r="3.6" />
            <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
        </svg>
    ),
    Facebook: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[13px] w-[13px]">
            <path d="M14 8h2.5V4.5H13.6C10.9 4.5 10 6.3 10 8.4V10.5H7.5V14H10v7h3.6v-7h2.6l.5-3.5h-3.1V8.9c0-.6.3-.9.9-.9z" />
        </svg>
    ),
    YouTube: (
        <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]">
            <rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="currentColor" />
            <path d="M10 9.2v5.6l4.8-2.8z" fill="#fff" />
        </svg>
    ),
    X: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[12px] w-[12px]">
            <path d="M3.5 3.5l7 9.3-7 7.7h1.7l6.1-6.7 5 6.7h5.2l-7.4-9.9 6.5-7.1h-1.7l-5.6 6.2-4.6-6.2z" />
        </svg>
    ),
};

function Newsletter({ onSubscribe }: { onSubscribe?: (email: string) => void }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError("");
        onSubscribe?.(email);
        setDone(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: t(0.9), ease: EASE }}
            className="relative mx-auto max-w-[1078px] rounded-[28px] px-5 py-10 text-center sm:px-10 lg:rounded-[35px] lg:py-[34px]"
        >
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
                <motion.rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="32"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: t(1.4), repeat: Infinity, ease: "linear" }}
                />
            </svg>

            <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
                <Sparkle color="#F8C33C" className="left-[84.5%] top-[49%] h-[50px] w-[50px]" delay={0.5} />
                <Sparkle color="#EA5A2A" className="left-[88.6%] top-[33%] h-[32px] w-[32px]" delay={0.7} />
                <Sparkle color="#5BB55B" className="left-[90.4%] top-[48%] h-[22px] w-[22px]" delay={0.9} />
                <Sparkle color="#F0A0B8" className="left-[93.4%] top-[32%] h-[18px] w-[18px]" delay={1.1} />
            </div>

            <span className="font-heading text-[13px] font-bold uppercase tracking-[0.04em] text-accent lg:text-[14px]">
                Our Newsletter
            </span>
            <h2 className="mx-auto mt-1 max-w-[680px] font-heading text-[24px] font-extrabold leading-[1.2] text-white sm:text-[28px] lg:text-[32px]">
                Sign Up Now To Receive 25% Off On Order.
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] font-body text-[13px] leading-[1.7] text-white/90">
                Sollicitudin tempor id eu nisl nunc. Non curabitur gravida arcu ac tortor dignissim convallis. Suspendisse sed
                nisi lacus sed viverra tellus habitasse.
            </p>

            <div className="mx-auto mt-6 max-w-[640px]">
                <AnimatePresence mode="wait">
                    {done ? (
                        <motion.p
                            key="done"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={softSpring(0.6, 0.4)}
                            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 font-heading text-[15px] font-bold text-white"
                            role="status"
                        >
                            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-ink">✓</span>
                            You’re subscribed! Check your inbox for the 25% code.
                        </motion.p>
                    ) : (
                        <motion.form
                            key="form"
                            exit={{ opacity: 0, y: -10 }}
                            onSubmit={submit}
                            noValidate
                            className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
                        >
                            <label htmlFor="newsletter-email" className="sr-only">
                                Email address
                            </label>
                            <motion.input
                                id="newsletter-email"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (error) setError("");
                                }}
                                placeholder="Enter Your Email ID"
                                aria-invalid={!!error}
                                aria-describedby={error ? "newsletter-error" : undefined}
                                animate={error ? { x: [0, -8, 8, -5, 5, 0] } : { x: 0 }}
                                transition={{ duration: 0.4 }}
                                className="h-[44px] w-full rounded-full bg-white px-6 font-body text-[14px] text-ink outline-none ring-accent placeholder:text-[#9A9A9A] focus-visible:ring-4 sm:max-w-[480px] lg:h-[40px]"
                            />
                            <AnimatedButton type="submit" variant="yellow" size="sm" className="h-[44px]! shrink-0 px-6! uppercase lg:h-[40px]!">
                                Subscribe
                            </AnimatedButton>
                        </motion.form>
                    )}
                </AnimatePresence>
                {error && (
                    <p id="newsletter-error" className="mt-2 font-body text-[13px] text-accent" role="alert">
                        {error}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

const colVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: t(0.7), ease: EASE, delay: t(0.1 + i * 0.15) },
    }),
};

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <li>
            <motion.a
                href={href}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="group inline-flex items-center font-body text-[14px] text-white/90 transition-colors hover:text-accent"
            >
                <motion.span
                    className="mr-0 inline-block h-[6px] w-0 rounded-full bg-accent"
                    variants={{ rest: { width: 0, marginRight: 0 }, hover: { width: 6, marginRight: 8 } }}
                    transition={{ duration: t(0.25) }}
                />
                {children}
            </motion.a>
        </li>
    );
}

export interface FooterLinkItem {
    label: string;
    href: string;
}

interface FooterProps {
    logoText?: string;
    about?: string;
    phone?: string;
    email?: string;
    usefulLinks?: FooterLinkItem[];
    serviceLinks?: FooterLinkItem[];
    socials?: { name: keyof typeof SocialIcons; href: string }[];
    onSubscribe?: (email: string) => void;
}

const lorem = (n: number) => Array.from({ length: n }, () => ({ label: "Lorem Ipsum", href: "#" }));

export default function Footer({
    logoText = "Logo Here",
    about = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    phone = "+00 (0) 123 456 789",
    email = "admin@example.com",
    usefulLinks = lorem(5),
    serviceLinks = lorem(5),
    socials = [
        { name: "Instagram", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "YouTube", href: "#" },
        { name: "X", href: "#" },
    ],
    onSubscribe,
}: FooterProps) {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark text-white">
            <Clouds position="top" />

            <div className="relative mx-auto max-w-[1440px] px-5 pt-[110px] sm:px-10 sm:pt-[140px] lg:px-[7.3%] lg:pt-[178px]">
                <Newsletter onSubscribe={onSubscribe} />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-10 pb-12 sm:grid-cols-2 sm:gap-x-8 lg:mt-[84px] lg:grid-cols-[304fr_234fr_180fr_150fr] lg:gap-x-0 lg:pb-[100px]"
                >
                    <motion.div custom={0} variants={colVariants} className="col-span-2 sm:col-span-1 lg:pr-10">
                        <a href="#home" className="inline-block font-heading text-[30px] font-extrabold leading-none text-white lg:text-[32px]">
                            {logoText}
                        </a>
                        <p className="mt-5 max-w-[270px] font-body text-[14px] leading-[1.7] text-white/90">{about}</p>

                        <h3 className="mt-7 font-heading text-[18px] font-bold">Social Media</h3>
                        <ul className="mt-4 flex gap-3">
                            {socials.map((s, i) => (
                                <motion.li
                                    key={s.name}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ ...softSpring(0.6, 0.45), delay: t(0.5 + i * 0.12) }}
                                >
                                    <motion.a
                                        href={s.href}
                                        aria-label={s.name}
                                        whileHover={{ y: -4, rotate: [0, -12, 12, 0], scale: 1.12 }}
                                        transition={{ duration: t(0.4) }}
                                        className="grid h-[26px] w-[26px] place-items-center rounded-full bg-white text-brand-dark transition-colors hover:bg-accent hover:text-ink"
                                    >
                                        {SocialIcons[s.name]}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div custom={1} variants={colVariants} className="col-span-2 sm:col-span-1">
                        <h3 className="font-heading text-[18px] font-bold">Get In Touch</h3>
                        <p className="mt-5 max-w-[200px] font-body text-[14px] leading-[1.7] text-white/90">{about}</p>
                        <dl className="mt-4 space-y-3 font-body text-[14px] text-white/90">
                            <div className="flex gap-6">
                                <dt className="w-[52px]">Call Us :</dt>
                                <dd>
                                    <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-accent">
                                        {phone}
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-6">
                                <dt className="w-[52px]">E-Mail :</dt>
                                <dd>
                                    <a href={`mailto:${email}`} className="hover:text-accent">
                                        {email}
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </motion.div>

                    <motion.div custom={2} variants={colVariants} className="relative">
                        <h3 className="font-heading text-[18px] font-bold">Useful Links</h3>
                        <ul className="mt-5 space-y-3">
                            {usefulLinks.map((l, i) => (
                                <FooterLink key={i} href={l.href}>
                                    {l.label}
                                </FooterLink>
                            ))}
                        </ul>

                        <div aria-hidden="true" className="mt-5 hidden h-[18px] lg:ml-[75px] lg:block">
                            {["#F8B21A", "#4A86E8", "#5BB55B"].map((c, k) => (
                                <motion.span
                                    key={c}
                                    className="absolute h-[18px] w-[18px] rounded-full border border-[#3B2A6B]/40"
                                    style={{ backgroundColor: c, marginLeft: k * 12 }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: t(0.8), delay: k * 0.15, repeat: Infinity, repeatDelay: t(1.2), ease: "easeInOut" }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div custom={3} variants={colVariants}>
                        <h3 className="font-heading text-[18px] font-bold">Customer Services</h3>
                        <ul className="mt-5 space-y-3">
                            {serviceLinks.map((l, i) => (
                                <FooterLink key={i} href={l.href}>
                                    {l.label}
                                </FooterLink>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-2 right-0 hidden h-[84px] w-[70px] sm:block lg:bottom-[34px] lg:right-[-2%]"
                        initial={{ x: 120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: t(2.2), ease: "easeOut", delay: t(0.8) }}
                    >
                        <Mushroom />
                    </motion.div>
                </motion.div>
            </div>

            <div className="border-t border-white/50">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: t(0.8), ease: EASE }}
                    className="mx-auto max-w-[1440px] px-5 py-4 sm:px-10 lg:px-[7.3%]"
                >
                    <p className="font-body text-[13px] text-white/90">
                        © {new Date().getFullYear()} . All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}