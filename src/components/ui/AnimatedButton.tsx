import { useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { EASE, softSpring, t } from "./Animated";

type Variant = "yellow" | "purple";
type Size = "sm" | "lg";

interface AnimatedButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: Variant;
    size?: Size;
    icon?: boolean;
    idleWiggle?: boolean;
    className?: string;
}

const styles: Record<Variant, { base: string; shadow: string; pressed: string }> = {
    yellow: {
        base: "bg-accent text-ink",
        shadow: "0 5px 0 #2B2B2B",
        pressed: "0 1px 0 #2B2B2B",
    },
    purple: {
        base: "bg-gradient-to-b from-brand-light to-brand-dark text-white",
        shadow: "0 3px 0 #4A1F96",
        pressed: "0 0px 0 #4A1F96",
    },
};

const sizes: Record<Size, string> = {
    sm: "h-[43px] gap-2 rounded-[10px] px-[18px] text-[12px] font-semibold",
    lg: "h-[62px] gap-6 rounded-[17px] px-9 text-[18px] font-medium lg:h-[70px] lg:px-[42px] lg:text-[19px]",
};

const SPARKLE_COLORS = ["#FF6FA8", "#3EC6C6", "#FF9F2E", "#FFFFFF", "#A157FF", "#7CDB5A"];
const STAR = "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

function Sparkles({ size }: { size: Size }) {
    const rx = size === "lg" ? 140 : 85;
    const ry = size === "lg" ? 55 : 35;
    return (
        <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2">
            {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * Math.PI * 2 + 0.3;
                const isStar = i % 2 === 0;
                return (
                    <motion.svg
                        key={i}
                        viewBox="0 0 24 24"
                        className="absolute -ml-[7px] -mt-[7px] h-[14px] w-[14px]"
                        initial={{ x: Math.cos(angle) * rx * 0.5, y: Math.sin(angle) * ry * 0.5, scale: 0, opacity: 0 }}
                        animate={{
                            x: Math.cos(angle) * rx,
                            y: Math.sin(angle) * ry,
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            rotate: 120,
                        }}
                        transition={{ duration: t(0.8), ease: EASE }}
                    >
                        {isStar ? (
                            <path d={STAR} fill={SPARKLE_COLORS[i % SPARKLE_COLORS.length]} />
                        ) : (
                            <circle cx="12" cy="12" r="6" fill={SPARKLE_COLORS[i % SPARKLE_COLORS.length]} />
                        )}
                    </motion.svg>
                );
            })}
        </span>
    );
}

export default function AnimatedButton({
    children,
    href,
    onClick,
    type = "button",
    variant = "yellow",
    size = "lg",
    icon = true,
    idleWiggle = false,
    className = "",
}: AnimatedButtonProps) {
    const [burst, setBurst] = useState(0);
    const s = styles[variant];

    const buttonVariants: Variants = {
        rest: { scale: 1, y: 0, rotate: 0, boxShadow: s.shadow },
        idle: {
            scale: 1,
            y: 0,
            boxShadow: s.shadow,
            rotate: [0, -2, 2, -1.5, 1.5, 0],
            transition: { rotate: { duration: t(0.9), repeat: Infinity, repeatDelay: 4, delay: 2, ease: "easeInOut" } },
        },
        hover: {
            scale: 1.05,
            y: -2,
            rotate: [0, -1.5, 1.5, -1, 0],
            boxShadow: s.shadow,
            transition: {
                scale: softSpring(0.45, 0.35),
                y: softSpring(0.45, 0.35),
                rotate: { duration: t(0.6), ease: "easeInOut" },
            },
        },
        tap: { scale: 0.93, y: 4, boxShadow: s.pressed, transition: { duration: 0.12, ease: "easeOut" } },
    };

    const arrowVariants: Variants = {
        rest: { x: 0 },
        idle: { x: [0, 4, 0], transition: { duration: t(1.3), repeat: Infinity, ease: "easeInOut" } },
        hover: { x: [0, 7, 0], transition: { duration: t(0.6), repeat: Infinity, ease: "easeInOut" } },
        tap: { x: 10 },
    };

    const shineVariants: Variants = {
        rest: { x: "-160%", transition: { duration: 0 } },
        idle: { x: "-160%", transition: { duration: 0 } },
        hover: { x: "160%", transition: { duration: t(0.8), ease: EASE } },
    };

    const motionProps = {
        variants: buttonVariants,
        initial: "rest",
        animate: idleWiggle ? "idle" : "rest",
        whileHover: "hover",
        whileTap: "tap",
        whileFocus: "hover",
        onHoverStart: () => setBurst((b) => b + 1),
        className: `relative inline-flex items-center justify-center font-heading select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${s.base} ${sizes[size]} ${className}`,
    };

    const content = (
        <>
            {/* shine sweep */}
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                <motion.span
                    variants={shineVariants}
                    className="absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                />
            </span>

            {burst > 0 && <Sparkles key={burst} size={size} />}

            <span className="relative">{children}</span>
            {icon && (
                <motion.svg
                    variants={arrowVariants}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={size === "lg" ? 2.4 : 2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`relative ${size === "lg" ? "h-6 w-6" : "h-[14px] w-[14px]"}`}
                    aria-hidden="true"
                >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                </motion.svg>
            )}
        </>
    );

    if (href) {
        return (
            <motion.a href={href} {...motionProps}>
                {content}
            </motion.a>
        );
    }
    return (
        <motion.button type={type} onClick={onClick} {...motionProps}>
            {content}
        </motion.button>
    );
}