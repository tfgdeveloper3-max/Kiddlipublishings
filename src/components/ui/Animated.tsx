import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export const SPEED = 1.8;

export const EASE = [0.22, 1, 0.36, 1] as const;

export const softSpring = (duration = 1, bounce = 0.2) => ({
    type: "spring" as const,
    duration: duration * SPEED,
    bounce,
});

export const t = (seconds: number) => seconds * SPEED;

type Direction = "up" | "down" | "left" | "right";

const offsets: Record<Direction, { x?: number; y?: number }> = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
};

interface BaseProps {
    children: ReactNode;
    className?: string;
    delay?: number; 
}

export function Reveal({ children, className, delay = 0, from = "up" }: BaseProps & { from?: Direction }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...offsets[from] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: t(0.9), ease: EASE, delay: t(delay) }}
        >
            {children}
        </motion.div>
    );
}

export function PopIn({ children, className, delay = 0 }: BaseProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...softSpring(1, 0.3), delay: t(delay) }}
        >
            {children}
        </motion.div>
    );
}

export function Float({
    children,
    className,
    delay = 0,
    distance = 12,
    duration = 4,
}: BaseProps & { distance?: number; duration?: number }) {
    return (
        <motion.div
            className={className}
            animate={{ y: [0, -distance, 0] }}
            transition={{ duration: t(duration), delay: t(delay), repeat: Infinity, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
}

export function Wiggle({
    children,
    className,
    delay = 0,
    angle = 8,
    duration = 2.4,
}: BaseProps & { angle?: number; duration?: number }) {
    return (
        <motion.div
            className={className}
            animate={{ rotate: [0, -angle, angle, 0] }}
            transition={{ duration: t(duration), delay: t(delay), repeat: Infinity, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
}

export function Twinkle({ children, className, delay = 0, duration = 2 }: BaseProps & { duration?: number }) {
    return (
        <motion.div
            className={className}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0], opacity: [1, 0.8, 1] }}
            transition={{ duration: t(duration), delay: t(delay), repeat: Infinity, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
}

export function BouncyWords({
    text,
    className,
    delay = 0,
    stagger = 0.08,
}: {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
}) {
    const words = text.split(" ");
    return (
        <>
            {words.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    className={`inline-block ${className ?? ""}`}
                    initial={{ opacity: 0, y: 40, rotate: 4 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ ...softSpring(0.9, 0.25), delay: t(delay + i * stagger) }}
                >
                    {word}
                    {i < words.length - 1 ? "\u00A0" : ""}
                </motion.span>
            ))}
        </>
    );
}

export function AnimateCss({
    children,
    className = "",
    animation,
    delay = 0, 
    duration, 
    repeat = 1,
    onView = false,
}: {
    children: ReactNode;
    className?: string;
    animation: string;
    delay?: number;
    duration?: number;
    repeat?: number | "infinite";
    onView?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });
    const active = onView ? inView : true;

    const style: CSSProperties = {
        animationDelay: `${delay * SPEED}ms`,
        animationDuration: `${(duration ?? 1000) * SPEED}ms`,
        animationIterationCount: repeat === "infinite" ? "infinite" : repeat,
    };

    return (
        <div
            ref={ref}
            style={active ? style : undefined}
            className={`${className} ${active ? `animate__animated animate__${animation}` : "opacity-0"}`}
        >
            {children}
        </div>
    );
}