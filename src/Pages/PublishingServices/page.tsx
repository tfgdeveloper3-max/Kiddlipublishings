import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import { AnimateCss, BouncyWords, EASE, Float, PopIn, Reveal, Twinkle, Wiggle, softSpring, t } from "@/components/ui/Animated";
import Clouds from "@/components/ui/Clouds";
import { Arrows, BookOutline, GridPattern, PencilDoodle, Rain, Stars } from "@/components/HeroDoodles";
import { FROM_KEY, SERVICE_OPTIONS, THANK_YOU_PATH, useLeadModal } from "@/components/LeadModal";
import { LeadApiError, sendLead, type LeadPayload } from "@/data/Lead";
import Testimonials from "@/components/landing/Testimonials";
import { reviews } from "@/lib/reviewsData";
import logo from "/images/logo.png";
import mockupImg from "/images/About-mockup.png";
import book1 from "/images/Portfolio/Portfolio-4.png";
import book2 from "/images/Portfolio/Portfolio-6.png";
import book3 from "/images/Portfolio/Portfolio-5.png";

const PHONE = "(760) 478-6269";
const PHONE_HREF = "tel:+17604786269";
const STAR = "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

const ArrowRight = ({ className = "h-[18px] w-[18px]" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);
const PhoneGlyph = ({ className = "h-[18px] w-[18px]" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M5 3.5h3.5l1.8 4.6-2.3 1.4a11 11 0 0 0 6.5 6.5l1.4-2.3 4.6 1.8V19a1.8 1.8 0 0 1-1.9 1.8A16.5 16.5 0 0 1 3.2 5.4 1.8 1.8 0 0 1 5 3.5z" />
    </svg>
);
const Check = ({ className = "h-[12px] w-[12px]" }: { className?: string }) => (
    <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M2.5 6.2l2.2 2.2 4.8-4.8" />
    </svg>
);

function CtaButton({ children, onClick, href, variant = "yellow", className = "" }: { children: ReactNode; onClick?: () => void; href?: string; variant?: "yellow" | "outline"; className?: string }) {
    const base =
        variant === "yellow"
            ? "bg-[#FFD335] text-[#1E1E1E] shadow-[0_5px_0_#1E1E1E] hover:shadow-[0_8px_0_#1E1E1E]"
            : "border-2 border-white/75 text-white hover:border-white hover:bg-white hover:text-brand";
    const cls = `group inline-flex items-center justify-center gap-2.5 rounded-[16px] px-7 py-4 font-heading text-[16px] font-bold transition-[box-shadow,background-color,color,border-color] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B4DF0]/50 lg:text-[17px] ${base} ${className}`;
    const inner = (
        <>
            {children}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
            </span>
        </>
    );
    return href ? (
        <motion.a href={href} whileHover={{ y: -3 }} whileTap={{ y: 2, scale: 0.98 }} className={cls}>
            {inner}
        </motion.a>
    ) : (
        <motion.button type="button" onClick={onClick} whileHover={{ y: -3 }} whileTap={{ y: 2, scale: 0.98 }} className={cls}>
            {inner}
        </motion.button>
    );
}

function SectionHeading({ label, title, text, dark = false }: { label: string; title: string; text?: string; dark?: boolean }) {
    return (
        <Reveal className="mx-auto max-w-[760px] text-center">
            <span className={`font-heading text-[13px] font-bold uppercase tracking-[0.06em] lg:text-[14px] ${dark ? "text-accent" : "text-[#F7931E]"}`}>{label}</span>
            <h2 className={`mx-auto mt-1.5 text-balance font-heading text-[28px] font-extrabold leading-[1.18] sm:text-[34px] lg:text-[40px] ${dark ? "text-white" : "text-black"}`}>{title}</h2>
            {text && <p className={`mx-auto mt-4 max-w-[640px] font-body text-[15.5px] leading-[1.75] lg:text-[17px] ${dark ? "text-white/90" : "text-[#4A4A5A]"}`}>{text}</p>}
        </Reveal>
    );
}

const svgProps = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "#1E1E1E",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-full w-full overflow-visible",
    "aria-hidden": true,
};

const Sparkle = ({ x, y, size = 3, delay = 0 }: { x: number; y: number; size?: number; delay?: number }) => (
    <motion.path
        d={`M${x} ${y - size}v${size * 2}M${x - size} ${y}h${size * 2}`}
        stroke="#fff"
        strokeWidth={1.8}
        animate={{ opacity: [1, 0.25, 1], scale: [1, 0.7, 1] }}
        transition={{ duration: t(1.8), delay, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${x}px ${y}px` }}
    />
);

const bob = (delay = 0, dist = 2.5) => ({
    animate: { y: [0, -dist, 0] },
    transition: { duration: t(2.2), delay, repeat: Infinity, ease: "easeInOut" as const },
});

const PublishingIcon = () => (
    <svg {...svgProps}>
        <path d="M7 45c8.5-3 17-2.6 25 2 8-4.6 16.5-5 25-2v6c-8.5-3-17-2.6-25 2-8-4.6-16.5-5-25-2z" fill="#6B34C4" />
        <path d="M9 22c7.5-2.6 15.5-2 23 2.6v23c-7.5-4.6-15.5-5.2-23-2.6z" fill="#fff" />
        <path d="M55 22c-7.5-2.6-15.5-2-23 2.6v23c7.5-4.6 15.5-5.2 23-2.6z" fill="#fff" />
        <path d="M14 29c4.2-1 9-.6 13 1.2M14 34c4.2-1 9-.6 13 1.2M14 39c4.2-1 9-.6 13 1.2M50 29c-4.2-1-9-.6-13 1.2M50 34c-4.2-1-9-.6-13 1.2M50 39c-4.2-1-9-.6-13 1.2" strokeWidth={1.4} opacity={0.55} />
        <path d="M32 23c-2.5-3-1-6.5.5-8.5" strokeDasharray="2 3" stroke="#fff" />
        <motion.g {...bob(0, 3)}>
            <path d={STAR} transform="translate(23.5 -1) scale(0.75)" fill="#FFD335" />
        </motion.g>
        <Sparkle x={51} y={11} />
        <Sparkle x={12} y={13} size={2.4} delay={0.6} />
    </svg>
);

const ArtworkIcon = () => (
    <svg {...svgProps}>
        <path d="M31 8C17 8 6 17.5 6 30c0 10.5 7.5 17.5 16.5 17.5 4 0 5.4-2.8 4.2-5.8-1.1-2.7.6-5.4 3.6-5.4H37c10.2 0 19-5.2 19-14C56 14 45 8 31 8z" fill="#fff" />
        {[
            { cx: 18, cy: 27, r: 4, c: "#F26522" },
            { cx: 25.5, cy: 17.5, r: 4, c: "#F96FA4" },
            { cx: 37.5, cy: 16, r: 4, c: "#6B34C4" },
            { cx: 46.5, cy: 23.5, r: 4, c: "#5BB5E8" },
            { cx: 16.5, cy: 37.5, r: 3.2, c: "#8BB625" },
        ].map((d, i) => (
            <motion.circle
                key={i}
                cx={d.cx}
                cy={d.cy}
                r={d.r}
                fill={d.c}
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: t(1.6), delay: i * 0.25, repeat: Infinity, repeatDelay: t(1), ease: "easeInOut" }}
                style={{ transformOrigin: `${d.cx}px ${d.cy}px` }}
            />
        ))}
        <motion.g animate={{ rotate: [0, -8, 0] }} transition={{ duration: t(2), repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "44px 50px" }}>
            <path d="M37 59l-3.2-2.6 15-18.4 3.2 2.6z" fill="#6B34C4" />
            <path d="M48.8 38l3.2 2.6 2.4-3-3.2-2.6z" fill="#E6DEF7" />
            <path d="M51.2 35l3.2 2.6c2.8-2 5-5.6 3.6-8.6-3.4-.6-6 2.6-6.8 6z" fill="#F26522" />
        </motion.g>
        <Sparkle x={9} y={10} delay={0.2} />
    </svg>
);

const AnimationIcon = () => (
    <svg {...svgProps}>
        <path d="M22 50h14M29 43v7" strokeWidth={2.6} />
        <rect x="5" y="12" width="48" height="32" rx="4.5" fill="#6B34C4" />
        <rect x="9.5" y="16.5" width="39" height="23" rx="2" fill="#D9F1FF" />
        <path d="M9.5 36l9-7 6 4.5 5-3.5 19 9.5v.5a2 2 0 0 1-2 2h-35a2 2 0 0 1-2-2z" fill="#8BB625" strokeWidth={1.5} />
        <motion.g animate={{ scale: [1, 1.12, 1] }} transition={{ duration: t(1.4), repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "29px 27px" }}>
            <circle cx="29" cy="27" r="7" fill="#fff" strokeWidth={1.6} />
            <path d="M26.8 23.6v6.8l5.6-3.4z" fill="#F96FA4" strokeWidth={1.4} />
        </motion.g>
        <motion.g {...bob(0.3, 3)}>
            <path d={STAR} transform="translate(42 1) scale(0.75)" fill="#FFD335" />
        </motion.g>
        <Sparkle x={8} y={6} delay={0.3} />
    </svg>
);

const PromotionIcon = () => (
    <svg {...svgProps}>
        <motion.g animate={{ rotate: [0, -6, 0] }} transition={{ duration: t(1.8), repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "20px 32px" }}>
            <path d="M9 25h9l22-12v38L18 39H9a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z" fill="#F26522" />
            <path d="M14 39l3.5 12h6.5L21 39" fill="#fff" />
            <ellipse cx="40" cy="32" rx="4.5" ry="19" fill="#fff" />
        </motion.g>
        {["M50 22l7-4.5", "M51.5 32H59", "M50 42l7 4.5"].map((d, i) => (
            <motion.path
                key={d}
                d={d}
                stroke="#fff"
                strokeWidth={2.6}
                animate={{ opacity: [0.2, 1, 0.2], x: [0, 2, 0] }}
                transition={{ duration: t(1.2), delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
            />
        ))}
        <Sparkle x={56} y={8} delay={0.4} />
    </svg>
);

const BrandingIcon = () => (
    <svg {...svgProps}>
        <motion.circle cx="19" cy="20" r="4.5" fill="#F96FA4" {...bob(0.2, 3)} />
        <motion.circle cx="46" cy="18" r="4" fill="#FFD335" {...bob(0.5, 3)} />
        <motion.g {...bob(0, 4)}>
            <path d={STAR} transform="translate(22.5 3) scale(0.8)" fill="#FFD335" />
        </motion.g>
        <path d="M10 30l22-8 22 8-22 8z" fill="#4A2590" />
        <path d="M10 30l22 8 22-8v20l-22 8-22-8z" fill="#6B34C4" />
        <path d="M32 38v20" strokeWidth={1.5} />
        <rect x="38" y="44" width="11" height="6" rx="1.5" fill="#fff" strokeWidth={1.4} transform="rotate(-20 43.5 47)" />
        <Sparkle x={58} y={30} size={2.6} delay={0.4} />
    </svg>
);

const KidLitIcon = () => (
    <svg {...svgProps}>
        <circle cx="17" cy="20" r="7" fill="#C98A55" />
        <circle cx="47" cy="20" r="7" fill="#C98A55" />
        <circle cx="17" cy="20" r="3" fill="#F6D2A8" strokeWidth={1.3} />
        <circle cx="47" cy="20" r="3" fill="#F6D2A8" strokeWidth={1.3} />
        <circle cx="32" cy="34" r="18" fill="#E0A46B" />
        <ellipse cx="32" cy="40" rx="8.5" ry="6.5" fill="#F6D2A8" />
        <motion.g animate={{ scaleY: [1, 1, 0.1, 1] }} transition={{ duration: t(3.2), times: [0, 0.9, 0.95, 1], repeat: Infinity }} style={{ transformOrigin: "32px 30px" }}>
            <circle cx="25" cy="30" r="2" fill="#1E1E1E" stroke="none" />
            <circle cx="39" cy="30" r="2" fill="#1E1E1E" stroke="none" />
        </motion.g>
        <path d="M30 37.5h4l-2 2.2z" fill="#1E1E1E" />
        <path d="M29 42c1.8 1.6 4.2 1.6 6 0" strokeWidth={1.6} />
        <motion.path d="M54 10s-4.5-2.7-4.5-5.6a2.4 2.4 0 0 1 4.5-1.5 2.4 2.4 0 0 1 4.5 1.5c0 2.9-4.5 5.6-4.5 5.6z" fill="#F96FA4" strokeWidth={1.4} {...bob(0, 3)} />
        <Sparkle x={8} y={8} delay={0.5} />
    </svg>
);

const RightsIcon = () => (
    <svg {...svgProps}>
        <path d="M32 5l21 7.5V27c0 13.5-8.8 22.8-21 28-12.2-5.2-21-14.5-21-28V12.5z" fill="#FFD335" />
        <path d="M32 11l15 5.4V27c0 9.6-6.2 16.5-15 20.7-8.8-4.2-15-11.1-15-20.7V16.4z" fill="#fff" strokeWidth={1.4} />
        <motion.path d="M27.5 27v-3a4.5 4.5 0 0 1 9 0v3" strokeWidth={2} animate={{ y: [0, -2.5, 0, 0] }} transition={{ duration: t(2.4), times: [0, 0.2, 0.4, 1], repeat: Infinity }} />
        <rect x="24.5" y="27" width="15" height="12" rx="2.5" fill="#6B34C4" />
        <circle cx="32" cy="33" r="1.6" fill="#fff" stroke="none" />
        <Sparkle x={57} y={10} delay={0.3} />
        <Sparkle x={7} y={52} size={2.2} delay={0.9} />
    </svg>
);

const TeamIcon = () => (
    <svg {...svgProps}>
        <path d="M8 12h28a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H20l-8 7v-7H8a5 5 0 0 1-5-5V17a5 5 0 0 1 5-5z" fill="#6B34C4" />
        <path d="M30 26h24a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-2v7l-8-7H30a5 5 0 0 1-5-5V31a5 5 0 0 1 5-5z" fill="#fff" />
        {[14, 22, 30].map((cx, i) => (
            <motion.circle
                key={cx}
                cx={cx}
                cy={23.5}
                r={2.2}
                fill="#fff"
                stroke="none"
                animate={{ y: [0, -2.5, 0] }}
                transition={{ duration: t(0.9), delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
            />
        ))}
        <motion.path
            d="M42 42.5s-5-3-5-6.2a2.7 2.7 0 0 1 5-1.6 2.7 2.7 0 0 1 5 1.6c0 3.2-5 6.2-5 6.2z"
            fill="#F96FA4"
            strokeWidth={1.4}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: t(1.2), repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "42px 38px" }}
        />
        <Sparkle x={56} y={10} delay={0.4} />
    </svg>
);

const FormatsIcon = () => (
    <svg {...svgProps}>
        <rect x="6" y="14" width="22" height="32" rx="2.5" fill="#5BB5E8" />
        <path d="M10 14v32" strokeWidth={1.4} />
        <path d="M14 22h10M14 27h8" stroke="#fff" strokeWidth={1.6} />
        <rect x="24" y="18" width="20" height="30" rx="3.5" fill="#6B34C4" />
        <rect x="27" y="22" width="14" height="20" rx="1.2" fill="#fff" strokeWidth={1.4} />
        <path d="M30 27h8M30 31h8M30 35h5" strokeWidth={1.3} opacity={0.6} />
        <motion.g {...bob(0.2, 2.5)}>
            <path d="M42 42v-4a9 9 0 0 1 18 0v4" strokeWidth={2.4} />
            <rect x="39.5" y="40" width="6" height="10" rx="2.5" fill="#F26522" />
            <rect x="56.5" y="40" width="6" height="10" rx="2.5" fill="#F26522" />
        </motion.g>
        {[0, 1, 2].map((k) => (
            <motion.path
                key={k}
                d={`M${48 + k * 3} 56v-${2 + (k % 2) * 3}`}
                stroke="#F26522"
                strokeWidth={2}
                animate={{ scaleY: [1, 1.8, 1] }}
                transition={{ duration: t(0.8), delay: k * 0.15, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${48 + k * 3}px 56px` }}
            />
        ))}
        <Sparkle x={8} y={7} delay={0.5} />
    </svg>
);

function LpHeader() {
    const { openLeadModal } = useLeadModal();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const on = () => setScrolled(window.scrollY > 20);
        on();
        window.addEventListener("scroll", on, { passive: true });
        return () => window.removeEventListener("scroll", on);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 lg:px-0">
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={softSpring(1, 0.15)}
                className={`mx-auto flex h-[70px] max-w-[1180px] items-center justify-between rounded-b-[22px] bg-white pl-5 pr-3 transition-shadow duration-300 sm:pl-7 lg:h-[84px] lg:rounded-b-[26px] lg:pl-9 lg:pr-4 ${scrolled ? "shadow-[0_10px_30px_rgba(60,20,120,0.22)]" : "shadow-[0_6px_24px_rgba(60,20,120,0.12)]"
                    }`}
            >
                <Link to="/" aria-label="Kiddli Publishing – Home" className="shrink-0">
                    <img src={logo} alt="Kiddli Publishing" className="h-[40px] w-auto select-none sm:h-[46px] lg:h-[54px]" draggable={false} />
                </Link>
                <div className="flex items-center gap-2 sm:gap-4">
                    <a href={PHONE_HREF} className="hidden items-center gap-2 rounded-full px-3 py-2 font-heading text-[15px] font-bold text-brand transition-colors hover:bg-[#F6F1FF] md:inline-flex">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F6F1FF]">
                            <PhoneGlyph className="h-4 w-4" />
                        </span>
                        {PHONE}
                    </a>
                    <a href={PHONE_HREF} aria-label={`Call ${PHONE}`} className="grid h-10 w-10 place-items-center rounded-full bg-[#F6F1FF] text-brand md:hidden">
                        <PhoneGlyph />
                    </a>
                    <motion.button
                        type="button"
                        onClick={() => openLeadModal()}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-[14px] bg-gradient-to-b from-brand-light to-brand-dark px-4 py-2.5 font-heading text-[14px] font-bold text-white shadow-[0_4px_0_#3B1E7A] sm:px-5 lg:text-[15px]"
                    >
                        Get a Free Quote
                    </motion.button>
                </div>
            </motion.div>
        </header>
    );
}

interface FormValues {
    name: string;
    email: string;
    phone_number: string;
    service: string;
    message: string;
}
type FormKey = keyof FormValues;
const EMPTY: FormValues = { name: "", email: "", phone_number: "", service: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: FormValues) {
    const e: Partial<Record<FormKey, string>> = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email.";
    if (v.phone_number.replace(/\D/g, "").length < 7) e.phone_number = "Please enter a valid phone number.";
    if (!v.service) e.service = "Please choose a service.";
    return e;
}

function toPayload(v: FormValues): LeadPayload {
    return {
        name: v.name.trim(),
        email: v.email.trim(),
        phone_number: v.phone_number.trim(),
        message: `Service: ${v.service}\n\n${v.message.trim() || "(Submitted from the Publishing Services landing page)"}`,
    };
}

const inputCls =
    "w-full rounded-[16px] border border-white/80 bg-white/70 px-4 font-body text-[15px] font-medium text-[#1E1E1E] caret-brand backdrop-blur-xl placeholder:font-normal placeholder:text-[#7C7C8A] shadow-[0_6px_18px_rgba(76,29,149,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-[#6B34C4]/10 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#8B4DF0]/60";

function HeroForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [v, setV] = useState<FormValues>(EMPTY);
    const [errors, setErrors] = useState<Partial<Record<FormKey, string>>>({});
    const [sending, setSending] = useState(false);
    const [serverError, setServerError] = useState("");

    const change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const key = e.target.name as FormKey;
        setV((p) => ({ ...p, [key]: e.target.value }));
        if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
        if (serverError) setServerError("");
    };

    async function submit(e: FormEvent) {
        e.preventDefault();
        if (sending) return;
        const found = validate(v);
        setErrors(found);
        const first = Object.keys(found)[0];
        if (first) {
            document.getElementById(`lp-${first}`)?.focus();
            return;
        }
        setSending(true);
        try {
            await sendLead(toPayload(v));
            const from = location.pathname + location.search;
            try {
                sessionStorage.setItem(FROM_KEY, from);
            } catch {
                
            }
            navigate(THANK_YOU_PATH, { state: { from } });
        } catch (err) {
            setServerError(err instanceof LeadApiError ? err.message : "Message not sent. Please try again.");
        } finally {
            setSending(false);
        }
    }

    const err = (k: FormKey) =>
        errors[k] ? (
            <p id={`lp-${k}-error`} className="pl-4 pt-1 font-body text-[12.5px] font-medium text-[#D61F1F]">
                {errors[k]}
            </p>
        ) : null;
    const ring = (k: FormKey) => (errors[k] ? " ring-2 ring-[#E5484D]/70" : "");
    const a11y = (k: FormKey) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `lp-${k}-error` : undefined });

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: t(0.9), ease: EASE, delay: t(0.4) }}
            className="relative w-full max-w-[480px] overflow-hidden rounded-[30px] bg-white p-6 shadow-[0_30px_70px_rgba(30,0,70,0.4)] sm:p-8 lg:justify-self-end"
        >
            <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-14 h-[180px] w-[180px] rounded-full bg-[#FFD335] opacity-30 blur-[60px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-14 h-[180px] w-[180px] rounded-full bg-[#A157FF] opacity-25 blur-[60px]" />

            <div className="relative text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6F1FF] px-3 py-1 font-heading text-[12px] font-extrabold uppercase tracking-[0.08em] text-brand">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d={STAR} fill="#F8AE1A" />
                    </svg>
                    Free consultation
                </span>
                <h2 className="mt-3 font-heading text-[24px] font-extrabold leading-tight text-black sm:text-[26px]">Get Your Free Publishing Quote</h2>
                <p className="mt-1.5 font-body text-[14px] text-[#6B6B7B]">Our team replies within one business day.</p>
            </div>

            <form onSubmit={submit} noValidate className="relative mt-5 space-y-3">
                <div>
                    <label htmlFor="lp-name" className="sr-only">Your name</label>
                    <input id="lp-name" name="name" autoComplete="name" placeholder="Your name" value={v.name} onChange={change} {...a11y("name")} className={`${inputCls} h-[50px]${ring("name")}`} />
                    {err("name")}
                </div>
                <div>
                    <label htmlFor="lp-email" className="sr-only">Your email</label>
                    <input id="lp-email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="Your email" value={v.email} onChange={change} {...a11y("email")} className={`${inputCls} h-[50px]${ring("email")}`} />
                    {err("email")}
                </div>
                <div>
                    <label htmlFor="lp-phone_number" className="sr-only">Phone number</label>
                    <input id="lp-phone_number" name="phone_number" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone number" value={v.phone_number} onChange={change} {...a11y("phone_number")} className={`${inputCls} h-[50px]${ring("phone_number")}`} />
                    {err("phone_number")}
                </div>
                <div>
                    <label htmlFor="lp-service" className="sr-only">Service</label>
                    <div className="relative">
                        <select id="lp-service" name="service" value={v.service} onChange={change} {...a11y("service")} className={`${inputCls} h-[50px] cursor-pointer appearance-none pr-11 ${v.service ? "" : "!font-normal !text-[#7C7C8A]"}${ring("service")}`}>
                            <option value="" disabled>Select a service</option>
                            {SERVICE_OPTIONS.map((o) => (
                                <option key={o} value={o} className="text-[#1E1E1E]">{o}</option>
                            ))}
                        </select>
                        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute right-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-brand" aria-hidden="true">
                            <path d="M5.5 8l4.5 4.5L14.5 8" />
                        </svg>
                    </div>
                    {err("service")}
                </div>
                <div>
                    <label htmlFor="lp-message" className="sr-only">Tell us about your book (optional)</label>
                    <textarea id="lp-message" name="message" rows={3} placeholder="Tell us about your book (optional)" value={v.message} onChange={change} className={`${inputCls} resize-none py-3 leading-[1.55]`} />
                </div>

                <AnimatePresence>
                    {serverError && (
                        <motion.p role="alert" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-[12px] bg-[#FDECEC] px-3 py-2.5 text-center font-body text-[13.5px] font-medium text-[#B42318]">
                            {serverError}
                        </motion.p>
                    )}
                </AnimatePresence>

                <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ y: -3 }}
                    whileTap={{ y: 2, scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2.5 rounded-[16px] bg-[#FFD335] py-4 font-heading text-[17px] font-bold text-[#1E1E1E] shadow-[0_5px_0_#1E1E1E] transition-shadow hover:shadow-[0_8px_0_#1E1E1E] disabled:cursor-wait disabled:opacity-80"
                >
                    {sending ? "Sending…" : "Start My Book Journey"}
                    <ArrowRight />
                </motion.button>
                <p className="flex items-center justify-center gap-1.5 font-body text-[12.5px] text-[#7C7C8A]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="9" rx="2" />
                        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                    </svg>
                    Your details are safe with us. No spam, ever.
                </p>
            </form>
        </motion.div>
    );
}

const HERO_POINTS = ["Story writing & professional editing", "Full-color illustrations & cover design", "Worldwide print & eBook publishing", "Launch marketing that reaches families"];

function Hero() {
    const { openLeadModal } = useLeadModal();
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark">
            <GridPattern />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <AnimateCss animation="bounceIn" delay={500} className="absolute left-[3%] top-[110px] h-[44px] w-[52px] lg:top-[18%] lg:h-[56px] lg:w-[64px]">
                    <Twinkle className="h-full w-full">
                        <Stars />
                    </Twinkle>
                </AnimateCss>
                <AnimateCss animation="bounceInDown" delay={800} className="absolute right-[3%] top-[120px] hidden h-[40px] w-[64px] xl:block">
                    <Float distance={8} duration={3.5}>
                        <BookOutline />
                    </Float>
                </AnimateCss>
                <AnimateCss animation="backInLeft" delay={1200} className="absolute bottom-[22%] left-[3%] hidden h-[30px] w-[44px] xl:block">
                    <motion.div className="h-full w-full" animate={{ x: [0, 6, 0], rotate: [0, -6, 0] }} transition={{ duration: t(2), repeat: Infinity, ease: "easeInOut" }}>
                        <Arrows />
                    </motion.div>
                </AnimateCss>
                <AnimateCss animation="fadeInDown" delay={1100} className="absolute left-[48%] top-[72%] hidden h-[48px] w-[30px] lg:block">
                    <motion.div className="h-full w-full" animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }} transition={{ duration: t(2.2), repeat: Infinity, ease: "easeInOut" }}>
                        <Rain />
                    </motion.div>
                </AnimateCss>
            </div>

            <div className="relative z-20 mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-[max(150px,calc(7.6vw+90px))] pt-[120px] sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 lg:px-12 lg:pt-[150px]">
                <div className="max-w-[640px] text-center lg:text-left">
                    <PopIn delay={0.15} className="inline-block">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 py-1.5 pl-1.5 pr-4 font-body text-[13px] text-white backdrop-blur-sm sm:text-[14px]">
                            <span className="rounded-full bg-[#FFD335] px-2.5 py-1 font-heading text-[12px] font-extrabold text-[#2B1A55]">678+</span>
                            Happy authors &amp; illustrators
                        </span>
                    </PopIn>
                    <h1 className="mt-5 font-heading text-[36px] font-extrabold leading-[1.12] tracking-[-0.01em] text-white sm:text-[48px] lg:text-[clamp(42px,3.9vw,64px)]">
                        <BouncyWords text="Publish Your Children’s Book" delay={0.3} stagger={0.08} />{" "}
                        <BouncyWords text="the Magical Way." className="text-accent" delay={0.62} stagger={0.08} />
                    </h1>
                    <Reveal delay={0.9}>
                        <p className="mx-auto mt-5 max-w-[560px] font-body text-[16px] leading-[1.75] text-white/95 lg:mx-0 lg:text-[18px]">
                            From the first spark of an idea to a beautifully illustrated book on shelves worldwide, Kiddli Publishing handles writing, art, publishing, and promotion, so you can focus on the story.
                        </p>
                    </Reveal>
                    <ul className="mx-auto mt-6 grid max-w-[560px] gap-2.5 text-left sm:grid-cols-2 lg:mx-0">
                        {HERO_POINTS.map((p, i) => (
                            <motion.li key={p} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: t(0.5), ease: EASE, delay: t(1 + i * 0.1) }} className="flex items-start gap-2.5 font-body text-[15px] text-white">
                                <span className="mt-[2px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full bg-[#8BB625]">
                                    <Check />
                                </span>
                                {p}
                            </motion.li>
                        ))}
                    </ul>
                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                        <PopIn delay={1.3} className="inline-block">
                            <CtaButton onClick={() => openLeadModal()}>Get Started Today</CtaButton>
                        </PopIn>
                        <PopIn delay={1.45} className="inline-block">
                            <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 rounded-[16px] px-5 py-4 font-heading text-[16px] font-bold text-white transition-colors hover:bg-white/10">
                                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                                    <PhoneGlyph />
                                </span>
                                {PHONE}
                            </a>
                        </PopIn>
                    </div>
                </div>

                <HeroForm />
            </div>
            <Clouds position="bottom" />
        </section>
    );
}

const PLATFORMS = ["Amazon", "Barnes & Noble", "Apple Books", "Kobo", "Google Play Books", "IngramSpark", "Libraries"];

function Platforms() {
    return (
        <section className="relative bg-white py-10 lg:py-12">
            <Reveal className="mx-auto max-w-[1180px] px-5 text-center sm:px-10">
                <p className="font-heading text-[14px] font-bold uppercase tracking-[0.1em] text-[#8A85A0]">Get your book in front of readers on</p>
                <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    {PLATFORMS.map((p, i) => (
                        <motion.li
                            key={p}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: t(0.45), ease: EASE, delay: t(i * 0.06) }}
                            className="rounded-full border-2 border-dashed border-[#E6DEF7] bg-[#FBF9FF] px-5 py-2.5 font-heading text-[15px] font-extrabold text-[#3B2A6B] lg:text-[16px]"
                        >
                            {p}
                        </motion.li>
                    ))}
                </ul>
            </Reveal>
        </section>
    );
}

const STATS = [
    { value: 563, suffix: "+", label: "Books Published" },
    { value: 55, suffix: "+", label: "Industry Awards Won" },
    { value: 46, suffix: "K+", label: "Young Readers Reached" },
    { value: 678, suffix: "+", label: "Happy Authors & Illustrators" },
];

function Count({ to, start, delay }: { to: number; start: boolean; delay: number }) {
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!start) return;
        const c = animate(0, to, { duration: t(1.8), delay, ease: [0.16, 1, 0.3, 1], onUpdate: (x) => setN(Math.round(x)) });
        return () => c.stop();
    }, [start, to, delay]);
    return <>{n}</>;
}

function Stats() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    return (
        <section className="bg-white px-5 pb-16 sm:px-10 lg:pb-20">
            <div ref={ref} className="mx-auto grid max-w-[1100px] grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
                {STATS.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...softSpring(0.8, 0.3), delay: t(i * 0.12) }}
                        className="rounded-[24px] px-4 py-7 text-center text-white shadow-[0_6px_0_#1E1E1E]"
                        style={{ backgroundColor: ["#F26522", "#F8AE1A", "#8BB625", "#F96FA4"][i], borderRadius: ["26px 30px 24px 32px", "30px 24px 32px 26px", "24px 32px 26px 30px", "32px 26px 30px 24px"][i] }}
                    >
                        <p className="font-heading text-[38px] font-extrabold leading-none tabular-nums [text-shadow:0_2px_0_rgba(0,0,0,0.12)] lg:text-[48px]" aria-label={`${s.value}${s.suffix}`}>
                            <span aria-hidden="true">
                                <Count to={s.value} start={inView} delay={t(i * 0.12)} />
                                {s.suffix}
                            </span>
                        </p>
                        <p className="mt-2 font-body text-[13.5px] font-medium leading-tight lg:text-[15px]">{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

const SERVICES = [
    { title: "Full Book Creation & Publishing", text: "Writing, editing, formatting, ISBNs, and worldwide distribution, handled end to end.", color: "#F26522", icon: <PublishingIcon />, popular: true },
    { title: "Artwork & Custom Design", text: "Full-color storybook illustrations, lovable characters, and eye-catching covers.", color: "#F8AE1A", icon: <ArtworkIcon /> },
    { title: "Animation & Digital Magic", text: "2D & 3D animation, book trailers, audiobooks, and interactive eBooks.", color: "#8BB625", icon: <AnimationIcon /> },
    { title: "Promotion & Book Launch", text: "Amazon optimization, launch campaigns, influencers, and school outreach.", color: "#F96FA4", icon: <PromotionIcon /> },
    { title: "Author World & Branding", text: "Author branding, merchandise, printable activities, and character licensing.", color: "#5BB5E8", icon: <BrandingIcon /> },
];

function Services() {
    const { openLeadModal } = useLeadModal();
    return (
        <section className="relative overflow-hidden bg-[#FBF9FF] px-5 py-20 sm:px-10 lg:py-[100px]">
            <SectionHeading label="What we do" title="Everything Your Children’s Book Needs, Under One Roof" text="Pick one service or let us handle the whole journey. Every project gets a dedicated team that loves children’s stories as much as you do." />
            <div className="mx-auto mt-12 grid max-w-[1180px] gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
                {SERVICES.map((s, i) => (
                    <motion.article
                        key={s.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: t(0.7), ease: EASE, delay: t((i % 3) * 0.12) }}
                        className={`relative flex flex-col items-center rounded-[28px] border-2 border-dashed bg-white px-6 pb-7 pt-9 text-center lg:col-span-2 ${s.popular ? "" : "border-[#E6DEF7]"} ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-12px)] lg:col-span-2 lg:mx-0 lg:w-full" : ""}`}
                        style={s.popular ? { borderColor: s.color } : undefined}
                    >
                        {s.popular && (
                            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[10px] bg-gradient-to-r from-brand-light to-brand-dark px-4 py-1.5 font-heading text-[12px] font-extrabold uppercase tracking-[0.08em] text-white ring-2 ring-white">
                                <svg viewBox="0 0 24 24" className="mr-1 inline-block h-[13px] w-[13px] -translate-y-[1px]" aria-hidden="true">
                                    <path d={STAR} fill="#FFD335" />
                                </svg>
                                Most Popular
                            </span>
                        )}
                        <motion.span
                            className="grid h-[96px] w-[104px] place-items-center"
                            style={{ backgroundColor: s.color, borderRadius: "48% 52% 44% 56% / 54% 46% 54% 46%" }}
                            animate={{ borderRadius: ["48% 52% 44% 56% / 54% 46% 54% 46%", "56% 44% 52% 48% / 46% 54% 46% 54%", "48% 52% 44% 56% / 54% 46% 54% 46%"] }}
                            transition={{ duration: t(5), delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                            aria-hidden="true"
                        >
                            <span className="block h-[66px] w-[66px] drop-shadow-[0_3px_0_rgba(0,0,0,0.12)]">{s.icon}</span>
                        </motion.span>
                        <h3 className="mt-5 font-heading text-[20px] font-extrabold leading-tight text-black lg:text-[21px]">{s.title}</h3>
                        <p className="mt-2.5 font-body text-[15px] leading-[1.65] text-[#4A4A5A]">{s.text}</p>
                        <div className="mt-auto pt-6">
                            <button
                                type="button"
                                onClick={() => openLeadModal(s.title)}
                                className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-heading text-[15px] font-bold transition-colors hover:bg-[#F6F1FF]"
                                style={{ color: s.color === "#F8AE1A" ? "#C77E00" : s.color }}
                            >
                                Get a quote <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

const BriefIcon = () => (
    <svg {...svgProps}>
        <rect x="10" y="10" width="32" height="44" rx="4" fill="#6B34C4" />
        <rect x="14" y="16" width="24" height="34" rx="2" fill="#fff" />
        <rect x="20" y="7" width="12" height="7" rx="2" fill="#5BB5E8" />
        <path d="M18 24h10M18 30h15M18 36h11M18 42h8" strokeWidth={1.5} opacity={0.6} />
        <path d="M47 27a8 8 0 0 0-4.6 14.5V45h9.2v-3.5A8 8 0 0 0 47 27z" fill="#FFD335" />
        <path d="M43.6 48.5h6.8M44.8 52h4.4" />
        <Sparkle x={56} y={24} />
        <Sparkle x={52} y={14} size={2.2} delay={0.6} />
    </svg>
);

const DraftIcon = () => (
    <svg {...svgProps}>
        <rect x="11" y="9" width="34" height="46" rx="4" fill="#fff" />
        <path d="M11 13a4 4 0 0 1 4-4h4v46h-4a4 4 0 0 1-4-4z" fill="#F96FA4" />
        <path d="M8 17h6M8 25h6M8 33h6M8 41h6" />
        <path d="M24 20h15M24 27h15M24 34h10" strokeWidth={1.5} opacity={0.6} />
        <path d="M34 48.5l15-18 4.2 3.5-15 18z" fill="#F26522" />
        <path d="M34 48.5l4.2 3.5-6 2.6z" fill="#FBE3C4" />
        <path d="M49 30.5l2.3-2.7a2 2 0 0 1 2.8-.3l1.1.9a2 2 0 0 1 .3 2.8l-2.3 2.8z" fill="#FFD335" />
        <Sparkle x={54} y={14} delay={0.3} />
        <Sparkle x={57} y={44} size={2.2} delay={0.9} />
    </svg>
);

const PublishIcon = () => (
    <svg {...svgProps}>
        <circle cx="30" cy="32" r="20" fill="#5BB5E8" />
        <path d="M15 23c4-3 9-1 9 3s-4 3-4.5 6.5-5 2.5-6.5-.5-.5-7 2-9z" fill="#3FB950" strokeWidth={1.5} />
        <path d="M33 14c4.5-.5 9.5 2 12 6.5-3 1-5 4-8 3s-6-6.5-4-9.5z" fill="#3FB950" strokeWidth={1.5} />
        <path d="M34 37c3-2.5 8.5-1.5 9.5 1.5s-2 7-6 7-5.5-5.5-3.5-8.5z" fill="#3FB950" strokeWidth={1.5} />
        <path d="M5 43c8 9 40-2 53-22" stroke="#fff" strokeDasharray="2 3.5" />
        <circle cx="58" cy="21" r="3.6" fill="#FFD335" />
        <Sparkle x={54} y={50} size={2.6} delay={0.4} />
    </svg>
);

const LaunchIcon = () => (
    <svg {...svgProps}>
        <path d="M20 36l-8 8 2 9 10-8.5M44 36l8 8-2 9-10-8.5" fill="#F96FA4" />
        <path d="M26 44c0 8 3 12 6 16 3-4 6-8 6-16z" fill="#FFD335" />
        <path d="M32 5c8.5 6.5 12.5 17 12.5 29l-4 10H23.5l-4-10C19.5 22 23.5 11.5 32 5z" fill="#fff" />
        <circle cx="32" cy="24" r="5.5" fill="#5BB5E8" />
        <path d="M8 22h5M5 30h5" stroke="#fff" strokeWidth={2.2} />
        <Sparkle x={55} y={12} delay={0.3} />
    </svg>
);

const STEPS = [
    { title: "Share Your Idea", text: "Tell us about your story, age group, and goals in a free consultation. We’ll recommend the right plan.", color: "#F8AE1A", icon: <BriefIcon /> },
    { title: "We Write & Illustrate", text: "Our writers and illustrators craft your manuscript, characters, and artwork, with your feedback at every step.", color: "#D6297A", icon: <DraftIcon /> },
    { title: "Polish & Publish", text: "We edit, format, register ISBNs, and prepare print and digital editions for worldwide distribution.", color: "#F96FA4", icon: <PublishIcon /> },
    { title: "Launch & Celebrate", text: "Your book goes live, and our marketing team helps it reach the families, schools, and libraries it was made for.", color: "#8BB625", icon: <LaunchIcon /> },
];

function Process() {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark">
            <Clouds position="top" />
            <div className="relative mx-auto max-w-[1300px] px-5 pb-[max(130px,calc(7.6vw+70px))] pt-[max(130px,calc(7.6vw+60px))] sm:px-10 lg:px-12">
                <SectionHeading dark label="How it works" title="Your Book in 4 Simple Steps" text="A friendly, collaborative process that keeps you in control from first idea to finished book." />
                <div className="mx-auto mt-12 grid max-w-[460px] grid-cols-1 gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {STEPS.map((step, i) => (
                        <motion.article
                            key={step.title}
                            initial={{ opacity: 0, y: 50, rotate: -2 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ ...softSpring(0.9, 0.3), delay: t(0.15 + i * 0.15) }}
                            className="relative flex flex-col items-center overflow-hidden rounded-[24px] px-6 pb-8 pt-7 text-center shadow-[0_14px_30px_rgba(30,0,70,0.22)]"
                            style={{ backgroundColor: step.color }}
                        >
                            <span aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 h-[120px] w-[120px] rounded-full bg-white/15" />
                            <span aria-hidden="true" className="absolute right-4 top-3 font-heading text-[38px] font-extrabold leading-none text-white/20">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="relative h-[74px] w-[74px] drop-shadow-[0_3px_0_rgba(0,0,0,0.12)]">{step.icon}</div>
                            <h3 className="relative mt-4 font-heading text-[21px] font-extrabold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.18)]">{step.title}</h3>
                            <p className="relative mt-2.5 font-body text-[14.5px] leading-[1.7] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] lg:text-[15px]">{step.text}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
            <Clouds position="bottom" />
        </section>
    );
}

function Portfolio() {
    const { openLeadModal } = useLeadModal();
    const books = [
        { src: book1, alt: "Mouse Trap children’s book cover" },
        { src: book2, alt: "Lil’ Marisa Finds a New Friend book cover" },
        { src: book3, alt: "Kason the Kind Lion Prince book cover" },
    ];
    return (
        <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-10 lg:py-[100px]">
            <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6">
                <div className="text-center lg:text-left">
                    <SectionHeadingLeft label="Our bookshelf" title="Stories We’ve Helped Bring to Life" />
                    <Reveal delay={0.2}>
                        <p className="mx-auto mt-4 max-w-[540px] font-body text-[16px] leading-[1.8] text-[#4A4A5A] lg:mx-0 lg:text-[17px]">
                            Picture books, coloring books, early readers, and bedtime tales. Every book on our shelf started as an author’s idea, just like yours. Our writers, illustrators, and publishing experts turned them into books kids reach for again and again.
                        </p>
                    </Reveal>
                    <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                        {books.map((b, i) => (
                            <motion.img
                                key={b.alt}
                                src={b.src}
                                alt={b.alt}
                                initial={{ opacity: 0, y: 30, rotate: (i - 1) * 8 }}
                                whileInView={{ opacity: 1, y: 0, rotate: (i - 1) * 5 }}
                                whileHover={{ y: -12, rotate: 0, scale: 1.06 }}
                                viewport={{ once: true }}
                                transition={{ ...softSpring(0.7, 0.3), delay: t(0.2 + i * 0.12) }}
                                className="h-auto w-[28%] max-w-[150px] rounded-[6px] shadow-[4px_4px_0_#E3D9C6,14px_18px_28px_rgba(40,10,90,0.25)]"
                                loading="lazy"
                                draggable={false}
                            />
                        ))}
                    </div>
                    <div className="mt-10">
                        <CtaButton onClick={() => openLeadModal()}>Start Your Book</CtaButton>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 80, rotate: 6, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: t(1), ease: EASE }}
                    className="mx-auto w-full max-w-[600px] sm:max-w-[720px] lg:max-w-none"
                >
                    <Float distance={10} duration={4}>
                        <img
                            src={mockupImg}
                            alt="Two Kiddli Publishing children’s books"
                            className="h-auto w-full origin-center select-none lg:scale-[1.15] xl:scale-[1.25]"
                            loading="lazy"
                            draggable={false}
                        />
                    </Float>
                </motion.div>
            </div>
        </section>
    );
}

function SectionHeadingLeft({ label, title }: { label: string; title: string }) {
    return (
        <Reveal>
            <span className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-[#F7931E] lg:text-[14px]">{label}</span>
            <h2 className="mt-1.5 text-balance font-heading text-[28px] font-extrabold leading-[1.18] text-black sm:text-[34px] lg:text-[40px]">{title}</h2>
        </Reveal>
    );
}

const WHY = [
    { title: "Kid-Lit Specialists", text: "Writers and illustrators who focus only on children’s books, age groups, and reading levels.", color: "#F26522", icon: <KidLitIcon /> },
    { title: "Your Story, Your Rights", text: "Your manuscript and ideas stay yours. Ownership of commissioned work is set out clearly in your agreement.", color: "#6B34C4", icon: <RightsIcon /> },
    { title: "One Dedicated Team", text: "A single project manager guides you from the first draft to launch day, with updates at every stage.", color: "#8BB625", icon: <TeamIcon /> },
    { title: "Print, eBook & Audio", text: "One project, every format: hardcover, paperback, eBook, audiobook, and interactive editions.", color: "#F96FA4", icon: <FormatsIcon /> },
];

function WhyKiddli() {
    return (
        <section className="relative overflow-hidden bg-[#FBF9FF] px-5 py-20 sm:px-10 lg:py-[100px]">
            <SectionHeading label="Why Kiddli" title="Why Authors Choose Kiddli Publishing" />
            <div className="mx-auto mt-12 grid max-w-[1180px] gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {WHY.map((w, i) => (
                    <motion.div
                        key={w.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: t(0.7), ease: EASE, delay: t(i * 0.1) }}
                        className="rounded-[26px] bg-white p-7 shadow-[0_10px_30px_rgba(76,29,149,0.08)] ring-1 ring-[#EEE8F8]"
                    >
                        <span className="grid h-[72px] w-[72px] place-items-center rounded-[22px]" style={{ backgroundColor: `${w.color}1F` }} aria-hidden="true">
                            <span className="block h-[52px] w-[52px]">{w.icon}</span>
                        </span>
                        <h3 className="mt-5 font-heading text-[19px] font-extrabold text-black">{w.title}</h3>
                        <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#4A4A5A]">{w.text}</p>
                        <span className="mt-5 block h-[4px] w-12 rounded-full" style={{ backgroundColor: w.color }} aria-hidden="true" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

const FAQS = [
    { q: "How long does it take to publish a children’s book?", a: "It depends on your book’s length, the number of illustrations, and the services you choose. Your proposal will include an estimated timeline for every stage, and your project manager keeps you updated along the way." },
    { q: "Do I keep the rights to my book?", a: "Yes. Submitting your manuscript or ideas never transfers ownership of your intellectual property to us. Ownership and usage rights for commissioned work, like illustrations and characters, are set out clearly in your service agreement." },
    { q: "I only have a story idea. Can you still help?", a: "Absolutely. Our writers can develop your idea into a full manuscript, and our illustrators can bring it to life, so you don’t need a finished draft to get started." },
    { q: "Where will my book be available?", a: "We prepare and coordinate publishing and distribution across major retail, eBook, and library platforms. Final acceptance and availability are decided by each platform, and we guide you through their requirements." },
    { q: "Do you help with marketing after the book is published?", a: "Yes. We offer Amazon optimization, launch campaigns, social media and influencer outreach, author websites, and school and library marketing." },
    { q: "How much does it cost?", a: "Every book is different, so pricing depends on the services and scope you need. Fill in the form for a free consultation and a personalized quote, with no obligation." },
];

function Faq() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section className="bg-white px-5 py-20 sm:px-10 lg:py-[100px]">
            <SectionHeading label="FAQs" title="Questions Authors Often Ask" />
            <div className="mx-auto mt-10 max-w-[860px] space-y-3">
                {FAQS.map((f, i) => {
                    const isOpen = open === i;
                    return (
                        <motion.div
                            key={f.q}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: t(0.45), ease: EASE, delay: t(i * 0.05) }}
                            className={`overflow-hidden rounded-[22px] border-2 transition-colors ${isOpen ? "border-brand/30 bg-[#FBF9FF]" : "border-[#EEE8F8] bg-white"}`}
                        >
                            <button
                                type="button"
                                onClick={() => setOpen(isOpen ? null : i)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-${i}`}
                                className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                            >
                                <span className="flex-1 font-heading text-[16.5px] font-extrabold text-black sm:text-[18px]">{f.q}</span>
                                <motion.span
                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                    transition={{ duration: t(0.3), ease: EASE }}
                                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-heading text-[22px] font-bold leading-none ${isOpen ? "bg-brand text-white" : "bg-[#F6F1FF] text-brand"}`}
                                    aria-hidden="true"
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div id={`faq-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: t(0.35), ease: EASE }}>
                                        <p className="px-5 pb-5 font-body text-[15.5px] leading-[1.75] text-[#4A4A5A] sm:px-6">{f.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

function FinalCta() {
    const { openLeadModal } = useLeadModal();
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark">
            <Clouds position="top" />
            <GridPattern />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute left-[6%] top-[45%] hidden h-[52px] w-[60px] sm:block">
                    <Twinkle className="h-full w-full">
                        <Stars />
                    </Twinkle>
                </div>
                <div className="absolute right-[6%] top-[50%] hidden h-[42px] w-[64px] lg:block">
                    <Wiggle angle={8} duration={2.4} className="h-full w-full">
                        <PencilDoodle />
                    </Wiggle>
                </div>
            </div>
            <div className="relative mx-auto max-w-[860px] px-6 pb-20 pt-[max(130px,calc(7.6vw+70px))] text-center sm:px-10 lg:pb-24">
                <Reveal>
                    <h2 className="text-balance font-heading text-[32px] font-extrabold leading-[1.15] text-white sm:text-[42px] lg:text-[52px]">
                        Your Story Deserves to Be <span className="text-accent">on a Bookshelf.</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-[580px] font-body text-[16px] leading-[1.75] text-white/95 lg:text-[18px]">
                        Book a free consultation today. We’ll talk through your idea, answer your questions, and send you a personalized plan and quote.
                    </p>
                </Reveal>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <PopIn delay={0.2} className="inline-block">
                        <CtaButton onClick={() => openLeadModal()}>Get My Free Quote</CtaButton>
                    </PopIn>
                    <PopIn delay={0.35} className="inline-block">
                        <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 rounded-[16px] border-2 border-white/75 px-6 py-[14px] font-heading text-[16px] font-bold text-white transition-colors hover:bg-white hover:text-brand lg:text-[17px]">
                            <PhoneGlyph /> Call {PHONE}
                        </a>
                    </PopIn>
                </div>
            </div>
            <div className="relative border-t border-white/25">
                <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:px-10 sm:text-left">
                    <p className="font-body text-[13.5px] text-white/85">© {new Date().getFullYear()} Kiddli Publishings. All Rights Reserved.</p>
                    <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-5 gap-y-1">
                        {[
                            { label: "Privacy Policy", to: "/privacy-policy" },
                            { label: "Terms & Conditions", to: "/terms-and-conditions" },
                            { label: "Refund Policy", to: "/refund-policy" },
                        ].map((l) => (
                            <Link key={l.to} to={l.to} className="font-body text-[13.5px] text-white/85 hover:text-accent">
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default function PublishingServicesPage() {
    useEffect(() => {
        const prev = document.title;
        document.title = "Publish Your Children’s Book | Kiddli Publishing";
        return () => {
            document.title = prev;
        };
    }, []);

    return (
        <>
            <LpHeader />
            <main>
                <Hero />
                <Platforms />
                <Stats />
                <Services />
                <Process />
                <Portfolio />
                <WhyKiddli />
                <Testimonials label="Reviews" title="What Families & Authors Say About Kiddli" testimonials={reviews.slice(0, 6)} />
                <Faq />
                <FinalCta />
            </main>
        </>
    );
}