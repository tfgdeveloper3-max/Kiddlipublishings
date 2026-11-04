import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";
import { EASE, softSpring, t } from "./ui/Animated";
import Logo from "/images/logo.png";
import { serviceCategories, type ServiceCategory, type ServiceIconKey } from "@/data/ServiceMenu";
import { useLeadModal } from "./LeadModal";

export interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps {
    links?: NavLink[];
    ctaLabel?: string;
    ctaHref?: string;
    categories?: ServiceCategory[];
}

const SERVICES_HREF = "/services";

const defaultLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: SERVICES_HREF },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
];


const normalizePath = (p: string) => (p.replace(/\/+$/, "") || "/").toLowerCase();

function isLinkActive(href: string, path: string) {
    const linkPath = normalizePath(href.split("#")[0] || "/");
    if (linkPath === "/") return path === "/";
    return path === linkPath || path.startsWith(linkPath + "/");
}

const catIconPaths: Record<ServiceIconKey, ReactNode> = {
    book: (
        <>
            <path d="M4 5.5c3-1 6-.8 8 1 2-1.8 5-2 8-1v13c-3-1-6-.8-8 1-2-1.8-5-2-8-1z" />
            <path d="M12 6.5v13" />
        </>
    ),
    palette: (
        <>
            <path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 1.6-2.2-.4-1 .3-2 1.4-2H17a4 4 0 0 0 4-4C21 7 17 3 12 3z" />
            <circle cx="8" cy="11" r="1.2" fill="currentColor" />
            <circle cx="11" cy="7.5" r="1.2" fill="currentColor" />
            <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" />
        </>
    ),
    play: (
        <>
            <rect x="3" y="5" width="18" height="13" rx="2.5" />
            <path d="M10.2 9v5l4.3-2.5z" fill="currentColor" />
            <path d="M9 21h6" />
        </>
    ),
    megaphone: (
        <>
            <path d="M4 9.5h3l9-5v15l-9-5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z" />
            <path d="M7 14.5l1.5 5H11l-1.5-5" />
            <path d="M19 9.5a3.5 3.5 0 0 1 0 5" />
        </>
    ),
    badge: (
        <>
            <circle cx="12" cy="9.5" r="6" />
            <path d="M12 7l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 9.1l2-.3z" fill="currentColor" />
            <path d="M8.8 14.5L7 21l3-1.5 2 2.5M15.2 14.5L17 21l-3-1.5-2 2.5" />
        </>
    ),
};

function CategoryIcon({ icon, className = "h-[18px] w-[18px]" }: { icon: ServiceIconKey; className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
            {catIconPaths[icon]}
        </svg>
    );
}

const Chevron = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M5.5 8l4.5 4.5L14.5 8" />
    </svg>
);

const MiniStar = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" className="h-[12px] w-[12px] shrink-0" aria-hidden="true">
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" fill={color} />
    </svg>
);

const linkVariants: Variants = {
    rest: { y: 0, transition: { duration: t(0.3), ease: EASE } },
    on: { y: 0, transition: { duration: t(0.3), ease: EASE } },
    hover: { y: -2, transition: { duration: t(0.3), ease: EASE } },
};

const squiggleVariants: Variants = {
    rest: { pathLength: 0, opacity: 0, transition: { duration: t(0.3), ease: EASE } },
    on: { pathLength: 1, opacity: 1, transition: { duration: t(0.5), ease: EASE } },
    hover: { pathLength: 1, opacity: 1, transition: { duration: t(0.4), ease: EASE } },
};

function Squiggle() {
    return (
        <svg viewBox="0 0 60 8" preserveAspectRatio="none" className="pointer-events-none absolute -bottom-1 left-0 h-[7px] w-full" aria-hidden="true">
            <motion.path
                d="M1 4c5-4 9 4 14 0s9 4 14 0 9 4 14 0 9 4 14 0"
                fill="none"
                stroke="#FFD335"
                strokeWidth={2.6}
                strokeLinecap="round"
                variants={squiggleVariants}
            />
        </svg>
    );
}

const linkText = (active: boolean) =>
    `relative inline-flex items-center gap-1 py-1 font-heading text-[17px] transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none ${active ? "font-bold text-brand" : "font-medium text-black"
    }`;

function NavItem({ link, index, active }: { link: NavLink; index: number; active: boolean }) {
    return (
        <motion.li
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: t(0.6), ease: EASE, delay: t(0.3 + index * 0.1) }}
        >
            <Link to={link.href} aria-current={active ? "page" : undefined} className="inline-block focus-visible:outline-none">
                <motion.span variants={linkVariants} initial="rest" animate={active ? "on" : "rest"} whileHover="hover" className={linkText(active)}>
                    {link.label}
                    <Squiggle />
                </motion.span>
            </Link>
        </motion.li>
    );
}

function ServicesPanel({
    categories,
    activeCat,
    setActiveCat,
    path,
    onNavigate,
}: {
    categories: ServiceCategory[];
    activeCat: number;
    setActiveCat: (i: number) => void;
    path: string;
    onNavigate: () => void;
}) {
    const cat = categories[activeCat];
    const total = categories.reduce((n, c) => n + c.items.length, 0);

    return (
        <div className="flex gap-4 p-4">
            <ul className="w-[300px] shrink-0 space-y-1 rounded-[20px] bg-[#F6F1FF] p-2" role="menu" aria-label="Service categories">
                {categories.map((c, i) => {
                    const selected = i === activeCat;
                    return (
                        <li key={c.title} role="none">
                            <button
                                type="button"
                                role="menuitem"
                                aria-haspopup="true"
                                aria-expanded={selected}
                                onMouseEnter={() => setActiveCat(i)}
                                onFocus={() => setActiveCat(i)}
                                onClick={() => setActiveCat(i)}
                                className={`flex w-full items-center gap-3 rounded-[14px] px-2.5 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${selected ? "bg-white shadow-[0_6px_16px_rgba(76,29,149,0.12)]" : "hover:bg-white/70"
                                    }`}
                            >
                                <motion.span
                                    className="grid h-[36px] w-[36px] shrink-0 place-items-center text-white"
                                    style={{ backgroundColor: c.color, borderRadius: "46% 54% 42% 58% / 52% 44% 56% 48%" }}
                                    animate={selected ? { rotate: [0, -8, 8, 0], scale: 1.06 } : { rotate: 0, scale: 1 }}
                                    transition={{ duration: t(0.5), ease: "easeInOut" }}
                                >
                                    <CategoryIcon icon={c.icon} className="h-[17px] w-[17px]" />
                                </motion.span>
                                <span className="min-w-0 flex-1 font-heading text-[14px] font-bold leading-[1.25] text-black">{c.title}</span>
                                <Chevron
                                    className={`h-[16px] w-[16px] shrink-0 -rotate-90 transition-all duration-300 ${selected ? "translate-x-0.5 text-brand" : "text-[#B4B0C2]"
                                        }`}
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>

            <div className="flex min-w-0 flex-1 flex-col py-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: t(0.22), ease: EASE }}
                    >
                        <p className="font-heading text-[12px] font-extrabold uppercase tracking-[0.12em]" style={{ color: cat.color }}>
                            {cat.title}
                        </p>
                        <p className="mt-0.5 font-body text-[13px] text-[#6B6B7B]">{cat.short}</p>

                        <ul className="mt-3 grid grid-cols-2 gap-2" role="menu" aria-label={cat.title}>
                            {cat.items.map((item, i) => {
                                const active = normalizePath(item.href) === path;
                                return (
                                    <motion.li
                                        key={item.href}
                                        role="none"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: t(0.22), ease: EASE, delay: t(0.03 * i) }}
                                    >
                                        <Link
                                            to={item.href}
                                            role="menuitem"
                                            onClick={onNavigate}
                                            aria-current={active ? "page" : undefined}
                                            style={{ ["--c" as string]: cat.color }}
                                            className={`group flex h-full items-center gap-2.5 rounded-[14px] border px-3 py-3 font-body text-[13.5px] leading-[1.35] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--c)] hover:shadow-[0_6px_14px_rgba(76,29,149,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${active
                                                ? "border-[var(--c)] bg-[#FAF7FF] font-semibold text-brand"
                                                : "border-[#EFEAF8] text-[#2B2B2B] hover:text-brand"
                                                }`}
                                        >
                                            <span className="transition-transform duration-300 group-hover:rotate-[72deg] group-hover:scale-125">
                                                <MiniStar color={cat.color} />
                                            </span>
                                            <span className="flex-1">{item.label}</span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2.2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-[14px] w-[14px] shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                                aria-hidden="true"
                                            >
                                                <path d="M5 12h14M13 6l6 6-6 6" />
                                            </svg>
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-dashed border-[#E6DEF7] pt-3">
                    <p className="font-body text-[13px] text-[#6B6B7B]">
                        <span className="font-heading font-extrabold text-brand">{total}</span> services to bring your book to life
                    </p>
                    <Link
                        to={SERVICES_HREF}
                        onClick={onNavigate}
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#FFD335] px-4 py-2 font-heading text-[13px] font-bold text-[#1E1E1E] shadow-[0_3px_0_#1E1E1E] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                        View all services
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px]" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function MobileServices({
    categories,
    path,
    active,
    onNavigate,
}: {
    categories: ServiceCategory[];
    path: string;
    active: boolean;
    onNavigate: () => void;
}) {
    const [open, setOpen] = useState(active);
    const [openCat, setOpenCat] = useState<number | null>(() => {
        const i = categories.findIndex((c) => c.items.some((it) => normalizePath(it.href) === path));
        return i >= 0 ? i : null;
    });

    return (
        <>
            <div
                className={`flex w-full items-center rounded-lg font-heading text-base ${active ? "bg-brand-light/10 font-bold text-brand" : "font-medium text-black"
                    }`}
            >
                <Link
                    to={SERVICES_HREF}
                    onClick={onNavigate}
                    aria-current={path === SERVICES_HREF ? "page" : undefined}
                    className="flex flex-1 items-center gap-2 rounded-lg px-3 py-2.5 hover:bg-brand-light/10"
                >
                    {active && <span className="h-2 w-2 rounded-full bg-[#FFD335]" aria-hidden="true" />}
                    Services
                </Link>
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label={open ? "Hide services list" : "Show services list"}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-lg hover:bg-brand-light/10"
                >
                    <Chevron className={`h-[18px] w-[18px] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>
            </div>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: t(0.3), ease: EASE }}
                        className="overflow-hidden"
                    >
                        <ul className="mt-1 space-y-1.5 rounded-[16px] bg-[#F6F1FF] p-2">
                            {categories.map((c, i) => {
                                const catOpen = openCat === i;
                                return (
                                    <li key={c.title} className="rounded-[12px] bg-white/70">
                                        <button
                                            type="button"
                                            onClick={() => setOpenCat(catOpen ? null : i)}
                                            aria-expanded={catOpen}
                                            className="flex w-full items-center gap-2.5 rounded-[12px] px-2.5 py-2 text-left"
                                        >
                                            <span
                                                className="grid h-[32px] w-[32px] shrink-0 place-items-center text-white"
                                                style={{ backgroundColor: c.color, borderRadius: "46% 54% 42% 58% / 52% 44% 56% 48%" }}
                                            >
                                                <CategoryIcon icon={c.icon} className="h-[16px] w-[16px]" />
                                            </span>
                                            <span className="flex-1 font-heading text-[14px] font-bold leading-[1.25] text-black">{c.title}</span>
                                            <Chevron
                                                className={`h-[16px] w-[16px] shrink-0 text-[#8A85A0] transition-transform duration-300 ${catOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {catOpen && (
                                                <motion.ul
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: t(0.25), ease: EASE }}
                                                    className="overflow-hidden px-2 pb-2"
                                                >
                                                    {c.items.map((item) => {
                                                        const itemActive = normalizePath(item.href) === path;
                                                        return (
                                                            <li key={item.href}>
                                                                <Link
                                                                    to={item.href}
                                                                    onClick={onNavigate}
                                                                    aria-current={itemActive ? "page" : undefined}
                                                                    className={`flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 font-body text-[14px] leading-[1.35] ${itemActive ? "bg-[#F6F1FF] font-semibold text-brand" : "text-[#2B2B2B] hover:bg-[#FAF7FF]"
                                                                        }`}
                                                                >
                                                                    <MiniStar color={c.color} />
                                                                    {item.label}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link
                            to={SERVICES_HREF}
                            onClick={onNavigate}
                            className="mt-2 flex items-center justify-center gap-1.5 rounded-[12px] bg-[#FFD335] px-4 py-2.5 font-heading text-[14px] font-bold text-[#1E1E1E] shadow-[0_3px_0_#1E1E1E]"
                        >
                            View all services →
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* ---------- navbar ---------- */

export default function Navbar({
    links = defaultLinks,
    ctaLabel = "Get Your book",
    categories = serviceCategories,
}: NavbarProps) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [svcOpen, setSvcOpen] = useState(false);
    const [activeCat, setActiveCat] = useState(0);
    const closeTimer = useRef<number | undefined>(undefined);
    const navRef = useRef<HTMLElement>(null);

    const { openLeadModal } = useLeadModal();

    const { pathname } = useLocation();
    const path = normalizePath(pathname);

    const openServices = () => {
        window.clearTimeout(closeTimer.current);
        setSvcOpen(true);
    };
    const scheduleClose = () => {
        window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(() => setSvcOpen(false), 160);
    };
    const closeAll = () => {
        setSvcOpen(false);
        setOpen(false);
    };

    // when the dropdown opens, preselect the category of the current page
    useEffect(() => {
        if (!svcOpen) return;
        const i = categories.findIndex((c) => c.items.some((it) => normalizePath(it.href) === path));
        if (i >= 0) setActiveCat(i);
    }, [svcOpen, categories, path]);

    // close menus on route change
    useEffect(() => {
        closeAll();
    }, [pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Escape closes, click outside closes the dropdown
    useEffect(() => {
        if (!open && !svcOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
        const onDown = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) setSvcOpen(false);
        };
        window.addEventListener("keydown", onKey);
        window.addEventListener("mousedown", onDown);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("mousedown", onDown);
        };
    }, [open, svcOpen]);

    useEffect(() => () => window.clearTimeout(closeTimer.current), []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 lg:px-0">
            <motion.nav
                ref={navRef}
                initial={{ y: -110 }}
                animate={{ y: 0 }}
                transition={softSpring(1, 0.15)}
                className={`relative mx-auto flex h-[72px] w-full max-w-[1010px] items-center justify-between rounded-b-[22px] bg-white pl-6 pr-4 transition-[box-shadow,border-radius] duration-300 lg:h-[90px] lg:rounded-b-[26px] lg:pl-9 lg:pr-[18px] ${svcOpen ? "md:!rounded-b-none" : ""
                    } ${scrolled || svcOpen ? "shadow-[0_10px_30px_rgba(60,20,120,0.22)]" : "shadow-[0_6px_24px_rgba(60,20,120,0.12)]"}`}
            >
                {/* Logo */}
                <Link to="/" aria-label="Kiddli Publishing – Home" className="mr-6 inline-flex shrink-0 items-center lg:mr-10">
                    <motion.span
                        whileHover={{ rotate: [0, -3, 3, -1.5, 0], scale: 1.04 }}
                        transition={{ duration: t(0.6), ease: "easeInOut" }}
                        className="inline-flex"
                    >
                        <img
                            src={Logo}
                            alt="Kiddli Publishing"
                            className="h-[42px] w-auto select-none object-contain sm:h-[46px] lg:h-[58px]"
                            draggable={false}
                        />
                    </motion.span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden items-center gap-7 md:flex lg:gap-[52px]">
                    {links.map((link, i) => {
                        const active = isLinkActive(link.href, path);
                        if (link.href !== SERVICES_HREF) {
                            return <NavItem key={link.label} link={link} index={i} active={active} />;
                        }
                        return (
                            <motion.li
                                key={link.label}
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: t(0.6), ease: EASE, delay: t(0.3 + i * 0.1) }}
                                onMouseEnter={openServices}
                                onMouseLeave={scheduleClose}
                                className="flex items-center gap-0.5"
                            >
                                {/* click the label → main Services page */}
                                <Link
                                    to={SERVICES_HREF}
                                    onClick={closeAll}
                                    aria-current={active ? "page" : undefined}
                                    className="inline-block focus-visible:outline-none"
                                >
                                    <motion.span
                                        variants={linkVariants}
                                        initial="rest"
                                        animate={active || svcOpen ? "on" : "rest"}
                                        whileHover="hover"
                                        className={linkText(active)}
                                    >
                                        {link.label}
                                        <Squiggle />
                                    </motion.span>
                                </Link>
                                {/* chevron → open/close the dropdown (keyboard & touch screens) */}
                                <button
                                    type="button"
                                    onClick={() => (svcOpen ? setSvcOpen(false) : openServices())}
                                    aria-expanded={svcOpen}
                                    aria-haspopup="true"
                                    aria-controls="services-menu"
                                    aria-label={svcOpen ? "Close services menu" : "Open services menu"}
                                    className={`grid h-7 w-7 place-items-center rounded-full transition-colors hover:bg-[#F6F1FF] hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${active || svcOpen ? "text-brand" : "text-black"
                                        }`}
                                >
                                    <Chevron className={`h-[16px] w-[16px] transition-transform duration-300 ${svcOpen ? "rotate-180" : ""}`} />
                                </button>
                            </motion.li>
                        );
                    })}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <AnimatedButton onClick={openLeadModal} variant="purple" size="sm">
                        {ctaLabel}
                    </AnimatedButton>
                </div>

                {/* Mobile toggle */}
                <motion.button
                    type="button"
                    whileTap={{ scale: 0.85, rotate: -10 }}
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="grid h-10 w-10 place-items-center rounded-lg text-brand md:hidden"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" className="h-6 w-6">
                        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                    </svg>
                </motion.button>

                {/* Desktop services dropdown: attached under the navbar, same width */}
                <AnimatePresence>
                    {svcOpen && (
                        <div
                            key="services-menu"
                            id="services-menu"
                            className="absolute inset-x-0 top-full hidden md:block"
                            onMouseEnter={openServices}
                            onMouseLeave={scheduleClose}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: t(0.25), ease: EASE }}
                                className="w-full rounded-b-[26px] border-t border-dashed border-[#E6DEF7] bg-white shadow-[0_24px_50px_rgba(60,20,120,0.22)]"
                            >
                                <ServicesPanel
                                    categories={categories}
                                    activeCat={activeCat}
                                    setActiveCat={setActiveCat}
                                    path={path}
                                    onNavigate={closeAll}
                                />
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -16, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -16, scale: 0.95 }}
                        transition={{ duration: t(0.35), ease: EASE }}
                        className="mx-auto mt-2 max-h-[calc(100dvh-96px)] w-full max-w-[1010px] origin-top overflow-y-auto rounded-2xl bg-white p-4 shadow-lg md:hidden"
                    >
                        <ul className="flex flex-col">
                            {links.map((link, i) => {
                                const active = isLinkActive(link.href, path);
                                return (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: t(0.35), ease: EASE, delay: t(0.05 * i) }}
                                    >
                                        {link.href === SERVICES_HREF ? (
                                            <MobileServices categories={categories} path={path} active={active} onNavigate={closeAll} />
                                        ) : (
                                            <Link
                                                to={link.href}
                                                onClick={closeAll}
                                                aria-current={active ? "page" : undefined}
                                                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 font-heading text-base hover:bg-brand-light/10 ${active ? "bg-brand-light/10 font-bold text-brand" : "font-medium text-black"
                                                    }`}
                                            >
                                                {active && <span className="h-2 w-2 rounded-full bg-[#FFD335]" aria-hidden="true" />}
                                                {link.label}
                                            </Link>
                                        )}
                                    </motion.li>
                                );
                            })}
                        </ul>
                        <AnimatedButton
                            onClick={() => {
                                closeAll();
                                openLeadModal();
                            }}
                            variant="purple"
                            size="sm"
                            className="mt-3 w-full"
                        >
                            {ctaLabel}
                        </AnimatedButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}