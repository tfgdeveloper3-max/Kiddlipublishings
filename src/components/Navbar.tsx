import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";
import { EASE, softSpring, t } from "./ui/Animated";

export interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps {
    logoText?: string;
    links?: NavLink[];
    ctaLabel?: string;
    ctaHref?: string;
}

const defaultLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
];

const linkVariants: Variants = {
    rest: { y: 0, transition: { duration: t(0.3), ease: EASE } },
    hover: { y: -2, transition: { duration: t(0.3), ease: EASE } },
};

const squiggleVariants: Variants = {
    rest: { pathLength: 0, opacity: 0 },
    hover: { pathLength: 1, opacity: 1, transition: { duration: t(0.4), ease: EASE } },
};

const normalizePath = (p: string) => (p.replace(/\/+$/, "") || "/").toLowerCase();

function useCurrentLocation() {
    const read = () =>
        typeof window === "undefined"
            ? { path: "/", hash: "" }
            : { path: normalizePath(window.location.pathname), hash: window.location.hash };
    const [loc, setLoc] = useState(read);

    useEffect(() => {
        const update = () => setLoc(read());
        window.addEventListener("popstate", update);
        window.addEventListener("hashchange", update);
        return () => {
            window.removeEventListener("popstate", update);
            window.removeEventListener("hashchange", update);
        };
    }, []);

    return loc;
}

function isLinkActive(href: string, loc: { path: string; hash: string }) {
    if (href.startsWith("#")) return loc.hash === href;
    const url = new URL(href, "http://x");
    if (normalizePath(url.pathname) !== loc.path) return false;
    return url.hash ? url.hash === loc.hash : true;
}

function NavItem({ link, index, active }: { link: NavLink; index: number; active: boolean }) {
    return (
        <motion.li
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: t(0.6), ease: EASE, delay: t(0.3 + index * 0.1) }}
        >
            <motion.a
                href={link.href}
                variants={linkVariants}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileFocus="hover"
                aria-current={active ? "page" : undefined}
                className={`relative inline-block py-1 font-heading text-[17px] transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none ${active ? "font-bold text-brand" : "font-medium text-black"
                    }`}
            >
                {link.label}
                <svg
                    viewBox="0 0 60 8"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute -bottom-1 left-0 h-[7px] w-full"
                    aria-hidden="true"
                >
                    <motion.path
                        d="M1 4c5-4 9 4 14 0s9 4 14 0 9 4 14 0 9 4 14 0"
                        fill="none"
                        stroke="#FFD335"
                        strokeWidth={2.6}
                        strokeLinecap="round"
                        {...(active
                            ? {
                                initial: { pathLength: 0, opacity: 0 },
                                animate: { pathLength: 1, opacity: 1 },
                                transition: { duration: t(0.5), ease: EASE, delay: t(0.8 + index * 0.1) },
                            }
                            : { variants: squiggleVariants })}
                    />
                </svg>
            </motion.a>
        </motion.li>
    );
}

export default function Navbar({
    logoText = "Logo Here",
    links = defaultLinks,
    ctaLabel = "Get Your book",
    ctaHref = "#",
}: NavbarProps) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const loc = useCurrentLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 lg:px-0">
            <motion.nav
                initial={{ y: -110 }}
                animate={{ y: 0 }}
                transition={softSpring(1, 0.15)}
                className={`mx-auto flex h-[72px] w-full max-w-[1010px] items-center justify-between rounded-b-[22px] bg-white pl-6 pr-4 transition-shadow duration-300 lg:h-[90px] lg:rounded-b-[26px] lg:pl-9 lg:pr-[18px] ${scrolled ? "shadow-[0_10px_30px_rgba(60,20,120,0.22)]" : "shadow-[0_6px_24px_rgba(60,20,120,0.12)]"
                    }`}
            >
                {/* Logo */}
                <motion.a
                    href="/"
                    whileHover={{ rotate: [0, -3, 3, -1.5, 0], scale: 1.04 }}
                    transition={{ duration: t(0.6), ease: "easeInOut" }}
                    className="inline-block font-heading text-[26px] font-extrabold tracking-[-0.01em] text-brand lg:text-[32px]"
                >
                    {logoText}
                </motion.a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-12 md:flex lg:gap-[52px]">
                    {links.map((link, i) => (
                        <NavItem key={link.label} link={link} index={i} active={isLinkActive(link.href, loc)} />
                    ))}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <AnimatedButton href={ctaHref} variant="purple" size="sm">
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
                                const active = isLinkActive(link.href, loc);
                                return (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: t(0.35), ease: EASE, delay: t(0.05 * i) }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            aria-current={active ? "page" : undefined}
                                            className={`flex items-center gap-2 rounded-lg px-3 py-2.5 font-heading text-base hover:bg-brand-light/10 ${active ? "bg-brand-light/10 font-bold text-brand" : "font-medium text-black"
                                                }`}
                                        >
                                            {active && <span className="h-2 w-2 rounded-full bg-[#FFD335]" aria-hidden="true" />}
                                            {link.label}
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                        <AnimatedButton href={ctaHref} variant="purple" size="sm" className="mt-3 w-full">
                            {ctaLabel}
                        </AnimatedButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}