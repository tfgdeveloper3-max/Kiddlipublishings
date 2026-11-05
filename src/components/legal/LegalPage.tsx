import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimateCss, BouncyWords, EASE, Float, Reveal, Twinkle, Wiggle, softSpring, t } from "@/components/ui/Animated";
import Clouds from "@/components/ui/Clouds";
import { BookOutline, GridPattern, PencilDoodle, Stars } from "@/components/HeroDoodles";

/* =========================================================
   Reusable legal page (Privacy Policy, Terms, Refund Policy)
   ========================================================= */

export type LegalBlock =
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] }
    | { type: "clauses"; items: { num: string; text: string }[] }
    | { type: "sub"; title: string; blocks: LegalBlock[] }
    | { type: "contact"; rows: { label: string; value: string; href?: string }[] };

export interface LegalSection {
    id: string;
    title: string;
    blocks: LegalBlock[];
}

interface LegalPageProps {
    title: string;
    subtitle?: string;
    updated?: string;
    icon?: ReactNode;
    /** Unnumbered opening paragraphs, shown in a highlighted card above section 1 */
    intro?: string[];
    sections: LegalSection[];
    /** Unnumbered closing card after the last section (e.g. "Acknowledgment and Acceptance") */
    outro?: { title: string; text: string[] };
}

const COLORS = ["#F26522", "#F8AE1A", "#8BB625", "#F96FA4", "#5BB5E8", "#6B34C4"];
const STAR = "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

/** "Essential cookies: Enable core…" → bold lead + text */
function splitLead(text: string) {
    const i = text.indexOf(":");
    if (i > 0 && i < 40) return { lead: text.slice(0, i + 1), rest: text.slice(i + 1) };
    return { lead: "", rest: text };
}

function Blocks({ blocks, color }: { blocks: LegalBlock[]; color: string }) {
    return (
        <>
            {blocks.map((b, i) => {
                if (b.type === "p")
                    return (
                        <p key={i} className="mt-4 font-body text-[15.5px] leading-[1.85] text-[#2B2B2B] first:mt-0 lg:text-[16.5px]">
                            {b.text}
                        </p>
                    );

                if (b.type === "ul")
                    return (
                        <ul key={i} className="mt-4 space-y-2.5">
                            {b.items.map((item, k) => {
                                const { lead, rest } = splitLead(item);
                                return (
                                    <li key={k} className="flex gap-3 font-body text-[15.5px] leading-[1.7] text-[#2B2B2B] lg:text-[16px]">
                                        <svg viewBox="0 0 24 24" className="mt-[5px] h-[13px] w-[13px] shrink-0" aria-hidden="true">
                                            <path d={STAR} fill={color} />
                                        </svg>
                                        <span>
                                            {lead && <strong className="font-heading font-bold text-black">{lead}</strong>}
                                            {rest}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    );

                if (b.type === "ol")
                    return (
                        <ol key={i} className="mt-4 space-y-2.5">
                            {b.items.map((item, k) => (
                                <li key={k} className="flex gap-3 font-body text-[15.5px] leading-[1.7] text-[#2B2B2B] lg:text-[16px]">
                                    <span
                                        className="mt-[2px] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full font-heading text-[11.5px] font-extrabold text-white"
                                        style={{ backgroundColor: color }}
                                        aria-hidden="true"
                                    >
                                        {String.fromCharCode(97 + k)}
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ol>
                    );

                if (b.type === "clauses")
                    return (
                        <div key={i} className="mt-4 space-y-3 first:mt-0">
                            {b.items.map((c) => (
                                <div key={c.num} className="flex gap-3.5">
                                    <span
                                        className="mt-[1px] inline-flex h-[26px] min-w-[44px] shrink-0 items-center justify-center rounded-full px-2 font-heading text-[12px] font-extrabold"
                                        style={{ backgroundColor: `${color}1F`, color }}
                                    >
                                        {c.num}
                                    </span>
                                    <p className="font-body text-[15.5px] leading-[1.75] text-[#2B2B2B] lg:text-[16px]">{c.text}</p>
                                </div>
                            ))}
                        </div>
                    );

                if (b.type === "sub")
                    return (
                        <div key={i} className="mt-6 rounded-[20px] border border-dashed border-[#E6DEF7] bg-[#FBF9FF] p-5 sm:p-6">
                            <h3 className="font-heading text-[17px] font-extrabold text-black lg:text-[18px]">{b.title}</h3>
                            <div className="mt-3">
                                <Blocks blocks={b.blocks} color={color} />
                            </div>
                        </div>
                    );

                return (
                    <dl key={i} className="mt-5 grid gap-3 rounded-[20px] bg-gradient-to-br from-brand-light to-brand-dark p-5 text-white sm:grid-cols-2 sm:p-6">
                        {b.rows.map((row) => (
                            <div key={row.label} className="rounded-[14px] bg-white/12 px-4 py-3 ring-1 ring-white/20">
                                <dt className="font-heading text-[12px] font-extrabold uppercase tracking-[0.1em] text-accent">{row.label}</dt>
                                <dd className="mt-1 break-words font-body text-[15px]">
                                    {row.href ? (
                                        <a href={row.href} className="underline decoration-white/40 underline-offset-4 hover:decoration-accent">
                                            {row.value}
                                        </a>
                                    ) : (
                                        row.value
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                );
            })}
        </>
    );
}

/** Highlights the section currently in view. */
function useActiveSection(ids: string[]) {
    const [active, setActive] = useState(ids[0]);
    useEffect(() => {
        const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
        const io = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: "-130px 0px -60% 0px" },
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [ids]);
    return active;
}

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
}

function Toc({ sections, active, onPick }: { sections: LegalSection[]; active: string; onPick?: () => void }) {
    return (
        <ol className="space-y-1">
            {sections.map((s, i) => {
                const on = s.id === active;
                const color = COLORS[i % COLORS.length];
                return (
                    <li key={s.id}>
                        <a
                            href={`#${s.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(s.id);
                                onPick?.();
                            }}
                            aria-current={on ? "true" : undefined}
                            className={`flex items-center gap-2.5 rounded-[12px] px-3 py-2 font-body text-[14px] leading-[1.35] transition-colors ${on ? "bg-white font-semibold text-brand shadow-[0_4px_12px_rgba(76,29,149,0.1)]" : "text-[#4A4A5A] hover:bg-white/70 hover:text-brand"
                                }`}
                        >
                            <span
                                className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full font-heading text-[11px] font-extrabold text-white"
                                style={{ backgroundColor: color }}
                            >
                                {i + 1}
                            </span>
                            {s.title}
                        </a>
                    </li>
                );
            })}
        </ol>
    );
}

export default function LegalPage({ title, subtitle, icon, intro, sections, outro }: LegalPageProps) {
    const active = useActiveSection(sections.map((s) => s.id));
    const [tocOpen, setTocOpen] = useState(false);

    return (
        <>
            {/* ---------- hero ---------- */}
            <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark">
                <GridPattern />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <AnimateCss animation="bounceIn" delay={500} className="absolute left-[4%] top-[120px] h-[44px] w-[52px] lg:top-[22%] lg:h-[56px] lg:w-[64px]">
                        <Twinkle className="h-full w-full">
                            <Stars />
                        </Twinkle>
                    </AnimateCss>
                    <AnimateCss animation="bounceInDown" delay={700} className="absolute right-[4%] top-[130px] hidden h-[40px] w-[64px] sm:block lg:top-[20%]">
                        <Float distance={8} duration={3.5}>
                            <BookOutline />
                        </Float>
                    </AnimateCss>
                    <AnimateCss animation="bounceInRight" delay={900} className="absolute right-[6%] top-[58%] hidden h-[42px] w-[64px] lg:block">
                        <Wiggle angle={8} duration={2.4} className="h-full w-full">
                            <PencilDoodle />
                        </Wiggle>
                    </AnimateCss>
                </div>

                <div className="relative z-20 mx-auto flex max-w-[900px] flex-col items-center px-6 pb-[max(140px,calc(7.6vw+80px))] pt-[140px] text-center sm:px-10 lg:pt-[160px]">
                    {icon && (
                        <motion.div
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ ...softSpring(0.8, 0.45), delay: t(0.2) }}
                            className="mb-5 grid h-[76px] w-[76px] place-items-center rounded-[24px] bg-white/15 ring-1 ring-white/25 backdrop-blur-sm"
                        >
                            {icon}
                        </motion.div>
                    )}
                    <h1 className="font-heading text-[42px] font-extrabold leading-[1.12] text-white sm:text-[54px] lg:text-[clamp(52px,4.4vw,72px)]">
                        <BouncyWords text={title} delay={0.3} stagger={0.1} />
                    </h1>
                    {subtitle && (
                        <Reveal delay={0.6}>
                            <p className="mx-auto mt-4 max-w-[620px] font-body text-[15.5px] leading-[1.75] text-white/95 lg:text-[17px]">{subtitle}</p>
                        </Reveal>
                    )}
                </div>
                <Clouds position="bottom" />
            </section>

            {/* ---------- content ---------- */}
            <section className="relative bg-white">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-24 top-[10%] h-[320px] w-[320px] rounded-full bg-[#A157FF] opacity-[0.08] blur-[90px]" />
                    <div className="absolute -right-24 top-[45%] h-[320px] w-[320px] rounded-full bg-[#FFD335] opacity-[0.14] blur-[90px]" />
                </div>

                <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 pb-24 pt-6 sm:px-10 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-12 lg:px-12 lg:pb-[120px]">
                    {/* table of contents: sticky sidebar on desktop, dropdown on mobile */}
                    <aside className="lg:sticky lg:top-[120px] lg:self-start">
                        <div className="rounded-[24px] bg-[#F6F1FF] p-3">
                            <button
                                type="button"
                                onClick={() => setTocOpen((v) => !v)}
                                aria-expanded={tocOpen}
                                className="flex w-full items-center justify-between rounded-[14px] px-3 py-2.5 font-heading text-[15px] font-extrabold text-black lg:pointer-events-none"
                            >
                                On this page
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`h-[18px] w-[18px] text-brand transition-transform duration-300 lg:hidden ${tocOpen ? "rotate-180" : ""}`}
                                    aria-hidden="true"
                                >
                                    <path d="M5.5 8l4.5 4.5L14.5 8" />
                                </svg>
                            </button>
                            <div className="hidden max-h-[calc(100dvh-200px)] overflow-y-auto pr-1 lg:block">
                                <Toc sections={sections} active={active} />
                            </div>
                            <AnimatePresence initial={false}>
                                {tocOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: t(0.3), ease: EASE }}
                                        className="overflow-hidden lg:hidden"
                                    >
                                        <Toc sections={sections} active={active} onPick={() => setTocOpen(false)} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </aside>

                    {/* sections */}
                    <div className="space-y-6 lg:space-y-8">
                        {intro && intro.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: t(0.6), ease: EASE }}
                                className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-light to-brand-dark p-6 text-white shadow-[0_18px_40px_rgba(76,29,149,0.25)] sm:p-8 lg:p-10"
                            >
                                <svg viewBox="0 0 24 24" className="absolute right-6 top-6 h-[34px] w-[34px] opacity-90" aria-hidden="true">
                                    <path d={STAR} fill="#FFD335" />
                                </svg>
                                <span className="font-heading text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-accent">Please read carefully</span>
                                {intro.map((p, k) => (
                                    <p key={k} className="mt-3 font-body text-[15.5px] leading-[1.8] text-white/95 lg:text-[16.5px]">
                                        {p}
                                    </p>
                                ))}
                            </motion.div>
                        )}

                        {sections.map((s, i) => {
                            const color = COLORS[i % COLORS.length];
                            return (
                                <motion.article
                                    key={s.id}
                                    id={s.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.08 }}
                                    transition={{ duration: t(0.6), ease: EASE }}
                                    className="scroll-mt-[120px] rounded-[28px] border-2 border-dashed border-[#EEE8F8] bg-white/90 p-6 shadow-[0_10px_30px_rgba(76,29,149,0.06)] sm:p-8 lg:p-10"
                                >
                                    <header className="mb-5 flex items-center gap-4">
                                        <span
                                            className="grid h-[46px] w-[46px] shrink-0 place-items-center font-heading text-[18px] font-extrabold text-white shadow-[0_4px_0_rgba(0,0,0,0.12)]"
                                            style={{ backgroundColor: color, borderRadius: "46% 54% 42% 58% / 52% 44% 56% 48%" }}
                                        >
                                            {i + 1}
                                        </span>
                                        <h2 className="font-heading text-[22px] font-extrabold leading-[1.25] text-black sm:text-[26px]">{s.title}</h2>
                                    </header>
                                    <Blocks blocks={s.blocks} color={color} />
                                </motion.article>
                            );
                        })}

                        {outro && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: t(0.6), ease: EASE }}
                                className="rounded-[28px] border-2 border-[#FFD335] bg-[#FFF9E0] p-6 sm:p-8 lg:p-10"
                            >
                                <header className="mb-4 flex items-center gap-4">
                                    <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-[#8BB625] shadow-[0_4px_0_rgba(0,0,0,0.12)]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]" aria-hidden="true">
                                            <path d="M5 12.5l4.5 4.5L19 7.5" />
                                        </svg>
                                    </span>
                                    <h2 className="font-heading text-[22px] font-extrabold leading-[1.25] text-black sm:text-[26px]">{outro.title}</h2>
                                </header>
                                {outro.text.map((p, k) => (
                                    <p key={k} className="mt-3 font-body text-[15.5px] leading-[1.8] text-[#2B2B2B] first:mt-0 lg:text-[16.5px]">
                                        {p}
                                    </p>
                                ))}
                            </motion.div>
                        )}

                        <div className="flex justify-center pt-2">
                            <motion.button
                                type="button"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                whileHover={{ y: -3 }}
                                whileTap={{ y: 2, scale: 0.98 }}
                                className="inline-flex items-center gap-2 rounded-[16px] bg-[#FFD335] px-6 py-3 font-heading text-[15px] font-bold text-[#1E1E1E] shadow-[0_4px_0_#1E1E1E] transition-shadow hover:shadow-[0_7px_0_#1E1E1E]"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
                                    <path d="M12 19V5M6 11l6-6 6 6" />
                                </svg>
                                Back to top
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}