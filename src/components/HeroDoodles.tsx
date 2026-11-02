import CloudsImage from "@/components/ui/Clouds";


const STAR =
    "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z";

export const Stars = () => (
    <svg viewBox="0 0 64 56" className="h-full w-full" aria-hidden="true">
        <g fill="#FFD84D" stroke="#F2B705" strokeWidth={1} strokeLinejoin="round">
            <path d={STAR} transform="translate(22 9) scale(1.75)" />
            <path d={STAR} transform="translate(1 0) scale(0.95)" />
            <path d={STAR} transform="translate(0 25) scale(1.05)" />
        </g>
        <g fill="#fff" opacity={0.7}>
            <circle cx="37" cy="20" r="2.2" />
            <circle cx="9" cy="8" r="1.4" />
        </g>
    </svg>
);

export const Burst = () => (
    <svg viewBox="0 0 52 42" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" className="h-full w-full" aria-hidden="true">
        <path d="M30 38L22 26" />
        <path d="M37 33L35 15" />
        <path d="M44 34L50 21" />
        <path d="M24 40L4 34" />
    </svg>
);

export const Rain = () => (
    <svg viewBox="0 0 30 48" fill="none" stroke="#fff" strokeWidth={1.6} strokeLinecap="round" className="h-full w-full" aria-hidden="true">
        <path d="M8 2l-3 6M16 4l-3 6M24 3l-3 6" />
        <path d="M10 14l-3 6M18 15l-3 6M26 14l-3 6" />
        <path d="M7 26l-3 6M15 27l-3 6M23 26l-3 6" />
        <path d="M11 38l-3 6M19 39l-3 6" />
    </svg>
);

export const Bulb = () => (
    <svg viewBox="0 0 52 68" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden="true">
        <g stroke="#1E1E1E" strokeWidth={1.8}>
            <path d="M26 4v6M10 10l4 4M42 10l-4 4M3 25h6M43 25h6" />
            <path
                d="M26 16c-8 0-13 6-13 12.5 0 4.6 2.6 7.6 4.8 9.9 1.5 1.6 2.4 3.4 2.4 5.6h11.6c0-2.2.9-4 2.4-5.6 2.2-2.3 4.8-5.3 4.8-9.9C39 22 34 16 26 16z"
                fill="#FFD335"
            />
            <path d="M20.5 48.5h11M21 53h10M22.5 57.5h7" />
            <path d="M24 61.5h4" />
        </g>
        <path d="M20 27c.6-3 2.6-5 5-5.6" stroke="#fff" strokeWidth={2} opacity={0.8} />
    </svg>
);

export const Arrows = () => (
    <svg viewBox="0 0 44 30" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden="true">
        <path d="M2 14l12 3-11 5" stroke="#3EC6C6" strokeWidth={3} />
        <path d="M18 24l8-11" stroke="#FF6FA8" strokeWidth={3.4} />
        <path d="M24 13l17-9-6 14" fill="#FF9F2E" stroke="#FF9F2E" strokeWidth={2} />
    </svg>
);

export const BookOutline = () => (
    <svg viewBox="0 0 64 40" fill="none" stroke="#fff" strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round" className="h-full w-full" aria-hidden="true">
        <path d="M32 12c-7-6-17-7-26-4v26c9-3 19-2 26 4 7-6 17-7 26-4V8c-9-3-19-2-26 4z" />
        <path d="M32 12v26" />
        <path d="M2 12v26c10-2 21-1 30 2 9-3 20-4 30-2V12" />
        <path d="M12 16c5-1 10 0 14 2M12 22c5-1 10 0 14 2M38 18c4-2 9-3 14-2M38 24c4-2 9-3 14-2" opacity={0.85} />
    </svg>
);

export const PencilDoodle = () => (
    <svg viewBox="0 0 64 42" fill="none" stroke="#fff" strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round" className="h-full w-full" aria-hidden="true">
        <g transform="rotate(38 20 20)">
            <rect x="2" y="15" width="26" height="9" rx="1.5" />
            <path d="M8 15v9" />
            <path d="M28 15l9 4.5-9 4.5" />
            <path d="M34 18v3" />
        </g>
        <path d="M34 34c3-4 5 3 8 0s5 3 8 0 5 3 8-1" />
    </svg>
);

export const GridPattern = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
            backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
        }}
    />
);

export const Clouds = () => <CloudsImage position="bottom" />;