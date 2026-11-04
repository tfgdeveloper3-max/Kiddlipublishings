import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
    type ChangeEvent,
    type FormEvent,
    type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, softSpring, t } from "./ui/Animated";
import Clouds from "./ui/Clouds";
import { LeadApiError, sendLead, type LeadPayload } from "@/data/Lead";

export const LEAD_MODAL_HASH = "#get-your-book";
export const THANK_YOU_PATH = "/thank-you";
export const FROM_KEY = "kiddli:lead-from";

const LeadModalContext = createContext<{ openLeadModal: () => void; closeLeadModal: () => void } | null>(null);

export function useLeadModal() {
    const ctx = useContext(LeadModalContext);
    if (!ctx) throw new Error("useLeadModal must be used inside <LeadModalProvider>");
    return ctx;
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const openLeadModal = useCallback(() => setOpen(true), []);
    const closeLeadModal = useCallback(() => setOpen(false), []);

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const a = (e.target as HTMLElement | null)?.closest?.("a");
            if (a && a.getAttribute("href") === LEAD_MODAL_HASH) {
                e.preventDefault();
                setOpen(true);
            }
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return (
        <LeadModalContext.Provider value={{ openLeadModal, closeLeadModal }}>
            {children}
            <LeadModal open={open} onClose={closeLeadModal} />
        </LeadModalContext.Provider>
    );
}

interface LeadValues {
    name: string;
    email: string;
    phone_number: string;
    service: string;
    message: string;
}

type FieldKey = keyof LeadValues;
type Errors = Partial<Record<FieldKey, string>>;
const EMPTY: LeadValues = { name: "", email: "", phone_number: "", service: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_OPTIONS = [
    "Full Book Creation & Publishing",
    "Artwork & Custom Design",
    "Animation & Digital Magic",
    "Promotion & Book Launch",
    "Author World & Branding",
    "Not sure yet / General Inquiry",
];

function validate(v: LeadValues): Errors {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
    if (v.phone_number.replace(/\D/g, "").length < 7) e.phone_number = "Please enter a valid phone number.";
    if (!v.service) e.service = "Please choose a service.";
    if (v.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
    return e;
}

function toLeadPayload(v: LeadValues): LeadPayload {
    return {
        name: v.name.trim(),
        email: v.email.trim(),
        phone_number: v.phone_number.trim(),
        message: `Service: ${v.service}\n\n${v.message.trim()}`,
    };
}

const fieldBase =
    "w-full rounded-[20px] border border-white/80 bg-white/60 px-5 font-body text-[15.5px] font-medium text-[#1E1E1E] caret-brand " +
    "backdrop-blur-xl placeholder:font-normal placeholder:text-[#7C7C8A] " +
    "shadow-[0_8px_24px_rgba(76,29,149,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-[#6B34C4]/10 outline-none transition-all duration-300 " +
    "hover:bg-white/75 focus:bg-white/90 focus:ring-2 focus:ring-[#8B4DF0]/60";

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
    options,
}: {
    id: FieldKey;
    label: string;
    value: string;
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onBlur: () => void;
    as?: "input" | "textarea" | "select";
    options?: string[];
    type?: string;
    autoComplete?: string;
    inputMode?: "text" | "email" | "tel";
}) {
    const errId = `lead-${id}-error`;
    const shared = {
        id: `lead-${id}`,
        name: id,
        value,
        onChange,
        onBlur,
        placeholder: label,
        "aria-invalid": !!error,
        "aria-describedby": error ? errId : undefined,
    };
    const ring = error ? " ring-2 ring-[#E5484D]/70 focus:ring-[#E5484D]" : "";
    return (
        <div>
            <label htmlFor={`lead-${id}`} className="sr-only">
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
                        className={`${fieldBase} h-[52px] cursor-pointer appearance-none pr-12 ${value ? "" : "!font-normal !text-[#7C7C8A]"}${ring}`}
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
                        className="pointer-events-none absolute right-5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-brand"
                        aria-hidden="true"
                    >
                        <path d="M5.5 8l4.5 4.5L14.5 8" />
                    </svg>
                </div>
            ) : as === "textarea" ? (
                <textarea {...shared} rows={4} className={`${fieldBase} min-h-[120px] resize-y py-4 leading-[1.6]${ring}`} />
            ) : (
                <input {...shared} type={type} autoComplete={autoComplete} inputMode={inputMode} className={`${fieldBase} h-[52px]${ring}`} />
            )}
            <AnimatePresence>
                {error && (
                    <motion.p
                        id={errId}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-5 pt-1.5 font-body text-[13px] font-medium text-[#D61F1F]"
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ---------- modal ---------- */

const STAR = "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [values, setValues] = useState<LeadValues>(EMPTY);
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
    const [sending, setSending] = useState(false);
    const [serverError, setServerError] = useState("");
    const dialogRef = useRef<HTMLDivElement>(null);
    const lastFocus = useRef<HTMLElement | null>(null);
    const abortRef = useRef<AbortController | null>(null);
    const sendingRef = useRef(false);
    sendingRef.current = sending;

    // lock page scroll, remember + restore focus, Escape closes, keep Tab inside the dialog
    useEffect(() => {
        if (!open) return;
        lastFocus.current = document.activeElement as HTMLElement;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const focusFirst = window.setTimeout(() => dialogRef.current?.querySelector<HTMLElement>("input")?.focus(), 80);

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && !sendingRef.current) onClose();
            if (e.key !== "Tab" || !dialogRef.current) return;
            const items = dialogRef.current.querySelectorAll<HTMLElement>("button, input, select, textarea, a[href]");
            if (!items.length) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => {
            window.clearTimeout(focusFirst);
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
            lastFocus.current?.focus?.();
        };
    }, [open, onClose]);

    useEffect(() => () => abortRef.current?.abort(), []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const key = e.target.name as FieldKey;
        const next = { ...values, [key]: e.target.value };
        setValues(next);
        if (touched[key]) setErrors((p) => ({ ...p, [key]: validate(next)[key] }));
        if (serverError) setServerError("");
    };
    const handleBlur = (key: FieldKey) => () => {
        setTouched((p) => ({ ...p, [key]: true }));
        setErrors((p) => ({ ...p, [key]: validate(values)[key] }));
    };

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (sending) return;
        const found = validate(values);
        setErrors(found);
        setTouched({ name: true, email: true, phone_number: true, service: true, message: true });
        const firstBad = Object.keys(found)[0];
        if (firstBad) {
            document.getElementById(`lead-${firstBad}`)?.focus();
            return;
        }

        const controller = new AbortController();
        abortRef.current = controller;
        setSending(true);
        setServerError("");
        try {
            await sendLead(toLeadPayload(values), controller.signal);
            const from = location.pathname + location.search;
            try {
                sessionStorage.setItem(FROM_KEY, from);
            } catch {
                
            }
            setValues(EMPTY);
            setTouched({});
            setErrors({});
            onClose();
            navigate(THANK_YOU_PATH, { state: { from } });
        } catch (err) {
            if ((err as Error).name === "AbortError") return;
            setServerError(err instanceof LeadApiError ? err.message : "Message not sent. Please try again.");
        } finally {
            setSending(false);
        }
    }

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    key="lead-modal"
                    className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto p-4 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: t(0.25) }}
                >
                    {/* backdrop */}
                    <div className="absolute inset-0 bg-[#1B0B3D]/60 backdrop-blur-[6px]" onClick={() => !sending && onClose()} aria-hidden="true" />

                    <motion.div
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="lead-title"
                        aria-describedby="lead-desc"
                        initial={{ opacity: 0, y: 40, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.96 }}
                        transition={softSpring(0.6, 0.3)}
                        className="relative w-full max-w-[600px] overflow-hidden rounded-[30px] bg-white shadow-[0_30px_80px_rgba(30,0,70,0.45)]"
                    >
                        {/* header */}
                        <div className="relative overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark px-6 pb-[70px] pt-8 text-center sm:px-10 sm:pb-[84px]">
                            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
                            {[
                                { x: "8%", y: "22%", s: 22, c: "#FFD335", d: 0 },
                                { x: "86%", y: "18%", s: 16, c: "#F96FA4", d: 0.4 },
                                { x: "90%", y: "52%", s: 12, c: "#FFD335", d: 0.8 },
                            ].map((st, i) => (
                                <motion.svg
                                    key={i}
                                    viewBox="0 0 24 24"
                                    className="absolute"
                                    style={{ left: st.x, top: st.y, width: st.s, height: st.s }}
                                    animate={{ rotate: [0, 20, 0], scale: [1, 0.8, 1] }}
                                    transition={{ duration: t(2.2), delay: st.d, repeat: Infinity, ease: "easeInOut" }}
                                    aria-hidden="true"
                                >
                                    <path d={STAR} fill={st.c} />
                                </motion.svg>
                            ))}

                            <h2 id="lead-title" className="font-heading text-[26px] font-extrabold leading-tight text-white sm:text-[30px]">
                                Let's Bring Your Story to Life!
                            </h2>
                            <p id="lead-desc" className="mx-auto mt-2 max-w-[420px] font-body text-[14.5px] leading-[1.6] text-white/90">
                                Share a few details and our publishing team will get back to you within one business day.
                            </p>

                            <div className="absolute inset-x-0 bottom-0">
                                <Clouds position="bottom" layout="static" />
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                disabled={sending}
                                aria-label="Close form"
                                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white transition hover:rotate-90 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" className="h-5 w-5">
                                    <path d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </button>
                        </div>

                        {/* form */}
                        <form onSubmit={handleSubmit} noValidate className="relative space-y-3.5 px-6 pb-8 pt-2 sm:px-10">
                            <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-10 h-[200px] w-[200px] rounded-full bg-[#A157FF] opacity-20 blur-[70px]" />
                            <div aria-hidden="true" className="pointer-events-none absolute -right-16 bottom-10 h-[200px] w-[200px] rounded-full bg-[#FFD335] opacity-30 blur-[70px]" />

                            <div className="relative grid gap-3.5 sm:grid-cols-2">
                                <Field id="name" label="Your name" autoComplete="name" value={values.name} error={errors.name} onChange={handleChange} onBlur={handleBlur("name")} />
                                <Field id="email" label="Your email" type="email" inputMode="email" autoComplete="email" value={values.email} error={errors.email} onChange={handleChange} onBlur={handleBlur("email")} />
                            </div>
                            <div className="relative grid gap-3.5 sm:grid-cols-2">
                                <Field id="phone_number" label="Phone number" type="tel" inputMode="tel" autoComplete="tel" value={values.phone_number} error={errors.phone_number} onChange={handleChange} onBlur={handleBlur("phone_number")} />
                                <Field id="service" label="Select a service" as="select" options={SERVICE_OPTIONS} value={values.service} error={errors.service} onChange={handleChange} onBlur={handleBlur("service")} />
                            </div>
                            <div className="relative">
                                <Field id="message" label="Tell us about your book idea" as="textarea" value={values.message} error={errors.message} onChange={handleChange} onBlur={handleBlur("message")} />
                            </div>

                            <AnimatePresence>
                                {serverError && (
                                    <motion.p
                                        role="alert"
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="relative rounded-[14px] bg-[#FDECEC] px-4 py-3 text-center font-body text-[14px] font-medium text-[#B42318]"
                                    >
                                        {serverError}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                            <div className="relative flex justify-center pt-2">
                                <motion.button
                                    type="submit"
                                    disabled={sending}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ y: 2, scale: 0.98 }}
                                    transition={softSpring(0.4, 0.4)}
                                    className="inline-flex items-center gap-3 rounded-[16px] bg-[#FFD335] px-8 py-4 font-heading text-[17px] font-bold text-[#1E1E1E] shadow-[0_5px_0_#1E1E1E] transition-shadow hover:shadow-[0_8px_0_#1E1E1E] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B4DF0]/50 disabled:cursor-wait disabled:opacity-80"
                                >
                                    {sending ? "Sending…" : "Submit Now"}
                                    <motion.svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.4}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                        animate={sending ? { x: [0, 6, 0] } : { x: 0 }}
                                        transition={{ duration: t(0.8), repeat: sending ? Infinity : 0, ease: EASE }}
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </motion.svg>
                                </motion.button>
                            </div>
                            <p className="relative text-center font-body text-[12.5px] text-[#7C7C8A]">We respect your privacy. No spam, ever.</p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}