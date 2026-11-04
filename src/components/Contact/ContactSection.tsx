import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AnimateCss, EASE, Reveal, Twinkle, softSpring, t } from "../ui/Animated";
import { Stars } from "@/components/HeroDoodles";
import { LeadApiError, sendLead, type LeadPayload } from "@/data/Lead";
import { FROM_KEY, THANK_YOU_PATH } from "@/components/LeadModal";

const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-[22px] w-[22px]",
    "aria-hidden": true,
};

const PhoneIcon = () => (
    <svg {...iconProps}>
        <path d="M5 3.5h3.5l1.8 4.6-2.3 1.4a11 11 0 0 0 6.5 6.5l1.4-2.3 4.6 1.8V19a1.8 1.8 0 0 1-1.9 1.8A16.5 16.5 0 0 1 3.2 5.4 1.8 1.8 0 0 1 5 3.5z" />
    </svg>
);
const PinIcon = () => (
    <svg {...iconProps}>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.6" />
    </svg>
);
const MailIcon = () => (
    <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </svg>
);
const ArrowRight = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-[20px] w-[20px]" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

export interface ContactValues {
    name: string;
    email: string;
    phone_number: string;
    service: string;
    message: string;
}

type FieldKey = keyof ContactValues;
type FormErrors = Partial<Record<FieldKey, string>>;

const EMPTY: ContactValues = { name: "", email: "", phone_number: "", service: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_OPTIONS = [
    "Full Book Creation & Publishing",
    "Artwork & Custom Design",
    "Animation & Digital Magic",
    "Promotion & Book Launch",
    "Author World & Branding",
    "Not sure yet / General Inquiry",
];

const MESSAGE_HELPER = "Tell us about your book idea, target age group, story themes, or specific publishing goals! Our team will get back to you within 24 hours.";

function validate(v: ContactValues): FormErrors {
    const e: FormErrors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
    if (v.phone_number.replace(/\D/g, "").length < 7) e.phone_number = "Please enter a valid phone number.";
    if (!v.service) e.service = "Please choose a service.";
    if (v.message.trim().length < 10) e.message = "Your message should be at least 10 characters.";
    return e;
}

function toLeadPayload(v: ContactValues): LeadPayload {
    return {
        name: v.name.trim(),
        email: v.email.trim(),
        phone_number: v.phone_number.trim(),
        message: `Service: ${v.service}\n\n${v.message.trim()}`,
    };
}

const fieldBase =
    "w-full rounded-[26px] border border-white/80 bg-white/55 px-6 font-body text-[16px] font-medium text-[#1E1E1E] caret-brand " +
    "backdrop-blur-xl backdrop-saturate-150 placeholder:font-normal placeholder:text-[#7C7C8A] " +
    "shadow-[0_10px_30px_rgba(76,29,149,0.12),0_2px_6px_rgba(76,29,149,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] " +
    "ring-1 ring-[#6B34C4]/10 outline-none transition-all duration-300 " +
    "hover:bg-white/70 hover:ring-[#6B34C4]/20 " +
    "focus:bg-white/85 focus:ring-2 focus:ring-[#8B4DF0]/60 focus:shadow-[0_14px_36px_rgba(76,29,149,0.2),inset_0_1px_0_rgba(255,255,255,1)] " +
    "lg:text-[17px]";

function Field({
    id,
    label,
    value,
    error,
    onChange,
    onBlur,
    as = "input",
    type = "text",
    autoComplete,
    inputMode,
    delay,
    suggestions,
    options,
    helperText,
}: {
    id: FieldKey;
    label: string;
    value: string;
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onBlur: () => void;
    as?: "input" | "textarea" | "select";
    type?: string;
    autoComplete?: string;
    inputMode?: "text" | "email" | "tel";
    delay: number;
    suggestions?: string[];
    options?: string[];
    helperText?: string;
}) {
    const errorId = `${id}-error`;
    const listId = `${id}-list`;
    const helperId = `${id}-helper`;
    const shared = {
        id,
        name: id,
        value,
        onChange,
        onBlur,
        placeholder: label,
        "aria-invalid": !!error,
        "aria-describedby": [error ? errorId : null, helperText ? helperId : null].filter(Boolean).join(" ") || undefined,
    };
    const errorRing = error ? " ring-2 ring-[#E5484D]/70 focus:ring-[#E5484D]" : "";

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: t(0.6), ease: EASE, delay: t(delay) }}
        >
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            {as === "select" ? (
                <div className="relative">
                    <select
                        id={shared.id}
                        name={shared.name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-invalid={shared["aria-invalid"]}
                        aria-describedby={shared["aria-describedby"]}
                        className={`${fieldBase} h-[56px] cursor-pointer appearance-none pr-14 lg:h-[60px] ${value ? "" : "!font-normal !text-[#7C7C8A]"}${errorRing}`}
                    >
                        <option value="" disabled>
                            {label}
                        </option>
                        {options?.map((o) => (
                            <option key={o} value={o} className="font-medium text-[#1E1E1E]">
                                {o}
                            </option>
                        ))}
                    </select>
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none absolute right-6 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-brand"
                        aria-hidden="true"
                    >
                        <path d="M5.5 8l4.5 4.5L14.5 8" />
                    </svg>
                </div>
            ) : as === "textarea" ? (
                <textarea
                    {...shared}
                    rows={6}
                    className={`${fieldBase} min-h-[170px] resize-y py-5 leading-[1.6] lg:min-h-[190px]${errorRing}`}
                />
            ) : (
                <input
                    {...shared}
                    type={type}
                    autoComplete={autoComplete}
                    inputMode={inputMode}
                    list={suggestions ? listId : undefined}
                    className={`${fieldBase} h-[56px] lg:h-[60px]${errorRing}`}
                />
            )}

            {suggestions && (
                <datalist id={listId}>
                    {suggestions.map((s) => (
                        <option key={s} value={s} />
                    ))}
                </datalist>
            )}

            {helperText && !error && (
                <p id={helperId} className="pl-6 pt-2 font-body text-[13px] leading-[1.5] text-[#7C7C8A]">
                    {helperText}
                </p>
            )}

            <AnimatePresence>
                {error && (
                    <motion.p
                        id={errorId}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: t(0.25), ease: EASE }}
                        className="overflow-hidden pl-6 pt-2 font-body text-[13.5px] font-medium text-[#D61F1F]"
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export interface ContactInfo {
    title: string;
    value: string;
    href?: string;
    subText?: string;
    color: string;
    icon: ReactNode;
    shape: string;
}

const defaultInfo: ContactInfo[] = [
    {
        title: "Phone",
        value: "(760) 478-6269",
        href: "tel:+17604786269",
        color: "#7A4A12",
        icon: <PhoneIcon />,
        shape: "26px 30px 24px 32px / 30px 24px 32px 26px",
    },
    {
        title: "Location",
        value: "11113 Kernville Rd, Kernville, CA 93238",
        subText: "Kiddli Publishing Headquarters",
        color: "#3C6178",
        icon: <PinIcon />,
        shape: "30px 24px 32px 26px / 24px 32px 26px 30px",
    },
    {
        title: "Email",
        value: "support@kiddlipublishings.com",
        href: "mailto:support@kiddlipublishings.com",
        subText: "Online support 24/7",
        color: "#0B8A2F",
        icon: <MailIcon />,
        shape: "24px 32px 26px 30px / 32px 26px 30px 24px",
    },
];

function InfoCard({ info, index }: { info: ContactInfo; index: number }) {
    const external = info.href?.startsWith("http");
    const tilt = index === 0 ? -1.5 : index === 2 ? 1.5 : 0;
    const lift = index === 1 ? -10 : 0;

    const motionProps = {
        initial: { opacity: 0, y: 40, rotate: tilt * 2.5 },
        whileInView: { opacity: 1, y: lift, rotate: 0 },
        viewport: { once: true, amount: 0.5 },
        whileHover: { y: lift - 8, rotate: tilt },
        transition: { ...softSpring(0.8, 0.3), delay: t(0.15 + index * 0.15) },
        className:
            "group block px-8 py-7 text-white shadow-[0_6px_0_#1E1E1E] transition-shadow hover:shadow-[0_10px_0_#1E1E1E] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD335] lg:px-9 lg:py-8",
        style: { backgroundColor: info.color, borderRadius: info.shape },
    };

    const content = (
        <>
            <div className="flex items-center gap-3">
                <span className="grid h-[40px] w-[40px] place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {info.icon}
                </span>
                <span className="font-heading text-[20px] font-bold lg:text-[22px]">{info.title}</span>
            </div>
            <p className="mt-4 break-words font-body text-[15px] leading-[1.55] text-white/95 lg:text-[16px]">{info.value}</p>
            {info.subText && (
                <p className="mt-2 font-body text-[13px] leading-[1.5] text-white/80 lg:text-[13.5px]">{info.subText}</p>
            )}
        </>
    );

    if (!info.href) return <motion.div {...motionProps}>{content}</motion.div>;
    return (
        <motion.a href={info.href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} {...motionProps}>
            {content}
        </motion.a>
    );
}

interface ContactSectionProps {
    label?: string;
    title?: string;
    submitLabel?: string;
    info?: ContactInfo[];
    onSubmit?: (data: LeadPayload, signal: AbortSignal) => Promise<unknown>;
}

export default function ContactSection({
    label = "Contact Us",
    title = "Get in Touch with Our Publishing Team",
    submitLabel = "Send Message",
    info = defaultInfo,
    onSubmit = sendLead,
}: ContactSectionProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [values, setValues] = useState<ContactValues>(EMPTY);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
    const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
    const [serverError, setServerError] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const abortRef = useRef<AbortController | null>(null);

    useEffect(() => () => abortRef.current?.abort(), []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const key = e.target.name as FieldKey;
        const next = { ...values, [key]: e.target.value };
        setValues(next);
        if (touched[key]) setErrors((prev) => ({ ...prev, [key]: validate(next)[key] }));
        if (status === "error") setStatus("idle");
    };

    const handleBlur = (key: FieldKey) => () => {
        setTouched((prev) => ({ ...prev, [key]: true }));
        setErrors((prev) => ({ ...prev, [key]: validate(values)[key] }));
    };

    const goToThankYou = () => {
        const from = location.pathname + location.search;
        try {
            sessionStorage.setItem(FROM_KEY, from);
        } catch {

        }
        navigate(THANK_YOU_PATH, { state: { from } });
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (status === "sending") return;

        const found = validate(values);
        setErrors(found);
        setTouched({ name: true, email: true, phone_number: true, service: true, message: true });
        if (Object.keys(found).length) {
            const first = Object.keys(found)[0];
            document.getElementById(first)?.focus();
            return;
        }

        if (honeypot) {
            goToThankYou();
            return;
        }

        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        setStatus("sending");
        setServerError("");
        try {
            await onSubmit(toLeadPayload(values), controller.signal);
            setValues(EMPTY);
            setTouched({});
            setErrors({});
            setStatus("idle");
            goToThankYou();
        } catch (err) {
            if ((err as Error).name === "AbortError") return;
            setServerError(err instanceof LeadApiError ? err.message : "Message not sent. Please try again.");
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="relative isolate overflow-hidden bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-[8%] top-[22%] h-[280px] w-[280px] rounded-full bg-[#A157FF] opacity-25 blur-[90px] lg:h-[380px] lg:w-[380px]" />
                <div className="absolute right-[10%] top-[34%] h-[260px] w-[260px] rounded-full bg-[#FFD335] opacity-35 blur-[90px] lg:h-[340px] lg:w-[340px]" />
                <div className="absolute left-[38%] top-[52%] h-[220px] w-[220px] rounded-full bg-[#F96FA4] opacity-20 blur-[90px] lg:h-[300px] lg:w-[300px]" />
            </div>

            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <AnimateCss animation="bounceIn" onView className="absolute left-[5%] top-[30px] h-[52px] w-[60px] sm:left-[10%] lg:left-[14%] lg:top-[40px] lg:h-[72px] lg:w-[82px]">
                    <Twinkle className="h-full w-full">
                        <Stars />
                    </Twinkle>
                </AnimateCss>
                <AnimateCss animation="bounceIn" onView delay={500} className="absolute right-[5%] top-[52%] hidden h-[42px] w-[48px] sm:block lg:right-[15%] lg:top-[56%] lg:h-[54px] lg:w-[60px]">
                    <Twinkle className="h-full w-full">
                        <Stars />
                    </Twinkle>
                </AnimateCss>
            </div>

            <div className="relative mx-auto max-w-[1060px] px-5 pb-20 pt-16 sm:px-10 lg:pb-[110px] lg:pt-[72px]">
                <Reveal className="mx-auto max-w-[620px] text-center">
                    <span className="font-heading text-[13px] font-bold uppercase tracking-[0.04em] text-[#F7931E] lg:text-[14px]">
                        {label}
                    </span>
                    <h2 className="mx-auto mt-1.5 max-w-[340px] font-heading text-[26px] font-extrabold leading-[1.18] text-black sm:max-w-[520px] sm:text-[32px] lg:max-w-none lg:text-[36px]">
                        {title}
                    </h2>
                </Reveal>

                <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-4 lg:mt-12 lg:space-y-5">
                    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                        <label htmlFor="company">Company</label>
                        <input id="company" name="company" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                        <Field id="name" label="Your name" autoComplete="name" value={values.name} error={errors.name} onChange={handleChange} onBlur={handleBlur("name")} delay={0.1} />
                        <Field id="email" label="Your email" type="email" inputMode="email" autoComplete="email" value={values.email} error={errors.email} onChange={handleChange} onBlur={handleBlur("email")} delay={0.18} />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                        <Field id="phone_number" label="Phone number" type="tel" inputMode="tel" autoComplete="tel" value={values.phone_number} error={errors.phone_number} onChange={handleChange} onBlur={handleBlur("phone_number")} delay={0.24} />
                        <Field id="service" label="Select a service" as="select" value={values.service} error={errors.service} onChange={handleChange} onBlur={handleBlur("service")} options={SERVICE_OPTIONS} delay={0.3} />
                    </div>
                    <Field id="message" label="Message" as="textarea" value={values.message} error={errors.message} onChange={handleChange} onBlur={handleBlur("message")} helperText={MESSAGE_HELPER} delay={0.36} />

                    <div className="flex flex-col items-center pt-4">
                        <motion.button
                            type="submit"
                            disabled={status === "sending"}
                            whileHover={{ y: -3 }}
                            whileTap={{ y: 2, scale: 0.98 }}
                            transition={softSpring(0.4, 0.4)}
                            className="inline-flex items-center gap-3 rounded-[16px] bg-[#FFD335] px-8 py-4 font-heading text-[17px] font-bold text-[#1E1E1E] shadow-[0_5px_0_#1E1E1E] transition-shadow hover:shadow-[0_8px_0_#1E1E1E] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B4DF0]/50 disabled:cursor-wait disabled:opacity-80 lg:text-[18px]"
                        >
                            {status === "sending" ? "Sending…" : submitLabel}
                            <motion.span
                                animate={status === "sending" ? { x: [0, 6, 0] } : { x: 0 }}
                                transition={{ duration: t(0.8), repeat: status === "sending" ? Infinity : 0 }}
                            >
                                <ArrowRight />
                            </motion.span>
                        </motion.button>

                        <div aria-live="polite" className="min-h-[28px] pt-3 text-center">
                            <AnimatePresence>
                                {status === "error" && (
                                    <motion.p
                                        key="error"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="font-body text-[15px] font-medium text-[#D61F1F]"
                                    >
                                        {serverError}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </form>

                <div className="mx-auto mt-10 grid max-w-[420px] gap-6 sm:max-w-none sm:grid-cols-3 sm:gap-5 lg:mt-14 lg:gap-8 lg:px-10">
                    {info.map((item, i) => (
                        <InfoCard key={item.title} info={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}