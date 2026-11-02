import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimateCss, EASE, Reveal, Twinkle, softSpring, t } from "../ui/Animated";
import { Stars } from "@/components/HeroDoodles";
import { ContactApiError, sendContactMessage, type ContactPayload } from "@/lib/contact";

/* ---------- icons ---------- */

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
    delay,
    suggestions,
    helperText,
}: {
    id: keyof ContactPayload;
    label: string;
    value: string;
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: () => void;
    as?: "input" | "textarea";
    type?: string;
    autoComplete?: string;
    delay: number;
    suggestions?: string[];
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
            {as === "textarea" ? (
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

type FormErrors = Partial<Record<keyof ContactPayload, string>>;

const EMPTY: ContactPayload = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUBJECT_SUGGESTIONS = [
    "Manuscript Submission & Review Inquiry",
    "Custom Illustration & Artwork Consultation",
    "Book Launch & Marketing Strategy",
    "General Inquiries & Author Support",
];

const MESSAGE_HELPER = "Tell us about your book idea, target age group, story themes, or specific publishing goals! Our team will get back to you within 24 hours.";

function validate(v: ContactPayload): FormErrors {
    const e: FormErrors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
    if (v.subject.trim().length < 3) e.subject = "Please add a subject.";
    if (v.message.trim().length < 10) e.message = "Your message should be at least 10 characters.";
    return e;
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
        value: "(800) 555-KIDD (5433)",
        href: "tel:8005555433",
        subText: "Mon–Fri from 9am to 6pm EST",
        color: "#7A4A12",
        icon: <PhoneIcon />,
        shape: "26px 30px 24px 32px / 30px 24px 32px 26px",
    },
    {
        title: "Location",
        value: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        href: "https://maps.google.com/?q=1901+Thornridge+Cir.+Shiloh,+Hawaii+81063",
        subText: "Kiddli Publishing Headquarters",
        color: "#3C6178",
        icon: <PinIcon />,
        shape: "30px 24px 32px 26px / 24px 32px 26px 30px",
    },
    {
        title: "Email",
        value: "support@kiddlipublishing.com",
        href: "mailto:support@kiddlipublishing.com",
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
    successMessage?: string;
    info?: ContactInfo[];
    onSubmit?: (data: ContactPayload, signal: AbortSignal) => Promise<unknown>;
}

export default function ContactSection({
    label = "Contact Us",
    title = "Get in Touch with Our Publishing Team",
    submitLabel = "Send Message",
    successMessage = "Thanks! Your message is on its way. Our team will get back to you within 24 hours.",
    info = defaultInfo,
    onSubmit = sendContactMessage,
}: ContactSectionProps) {
    const [values, setValues] = useState<ContactPayload>(EMPTY);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Partial<Record<keyof ContactPayload, boolean>>>({});
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [serverError, setServerError] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const abortRef = useRef<AbortController | null>(null);

    useEffect(() => () => abortRef.current?.abort(), []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = e.target.name as keyof ContactPayload;
        const next = { ...values, [key]: e.target.value };
        setValues(next);
        if (touched[key]) setErrors((prev) => ({ ...prev, [key]: validate(next)[key] }));
        if (status !== "idle" && status !== "sending") setStatus("idle");
    };

    const handleBlur = (key: keyof ContactPayload) => () => {
        setTouched((prev) => ({ ...prev, [key]: true }));
        setErrors((prev) => ({ ...prev, [key]: validate(values)[key] }));
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (status === "sending") return;

        const found = validate(values);
        setErrors(found);
        setTouched({ name: true, email: true, subject: true, message: true });
        if (Object.keys(found).length) {
            const first = Object.keys(found)[0];
            document.getElementById(first)?.focus();
            return;
        }

        if (honeypot) {
            setStatus("sent");
            return;
        }

        const payload: ContactPayload = {
            name: values.name.trim(),
            email: values.email.trim(),
            subject: values.subject.trim(),
            message: values.message.trim(),
        };

        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        setStatus("sending");
        setServerError("");
        try {
            await onSubmit(payload, controller.signal);
            setStatus("sent");
            setValues(EMPTY);
            setTouched({});
            setErrors({});
        } catch (err) {
            if ((err as Error).name === "AbortError") return;
            if (err instanceof ContactApiError) {
                if (err.fieldErrors) setErrors((prev) => ({ ...prev, ...err.fieldErrors }));
                setServerError(err.message);
            } else {
                setServerError("Message not sent. Please try again.");
            }
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
                        <Field id="email" label="Your email" type="email" autoComplete="email" value={values.email} error={errors.email} onChange={handleChange} onBlur={handleBlur("email")} delay={0.18} />
                    </div>
                    <Field id="subject" label="Subject" value={values.subject} error={errors.subject} onChange={handleChange} onBlur={handleBlur("subject")} suggestions={SUBJECT_SUGGESTIONS} delay={0.26} />
                    <Field id="message" label="Message" as="textarea" value={values.message} error={errors.message} onChange={handleChange} onBlur={handleBlur("message")} helperText={MESSAGE_HELPER} delay={0.34} />

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
                            <AnimatePresence mode="wait">
                                {status === "sent" && (
                                    <motion.p
                                        key="sent"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="font-body text-[15px] font-medium text-[#0B8A2F]"
                                    >
                                        {successMessage}
                                    </motion.p>
                                )}
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