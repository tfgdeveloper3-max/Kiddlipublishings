import { motion } from "framer-motion";
import { t } from "../ui/Animated";

const PURPLE = "#6B34C4";
const DEEP_PURPLE = "#4A2590";
const YELLOW = "#FFD335";
const ORANGE = "#F26522";
const SKY = "#5BB5E8";
const PINK = "#F96FA4";
const GREEN = "#3FB950";
const RED = "#E5484D";
const WHITE = "#FFFFFF";
const LAVENDER = "#E6DEF7";
const ICE = "#D9F1FF";
const CREAM = "#FBE3C4";
const KRAFT = "#E7B07A";
const KRAFT_LIGHT = "#F6CE9C";
const INK = "#1E1E1E";

const svgProps = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: INK,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-full w-full overflow-visible",
    "aria-hidden": true,
};

const Sparkle = ({ x, y, size = 3, delay = 0 }: { x: number; y: number; size?: number; delay?: number }) => (
    <motion.path
        d={`M${x} ${y - size}v${size * 2}M${x - size} ${y}h${size * 2}`}
        stroke={WHITE}
        strokeWidth={1.8}
        animate={{ opacity: [1, 0.25, 1], scale: [1, 0.7, 1] }}
        transition={{ duration: t(1.8), delay, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${x}px ${y}px` }}
    />
);

export const BriefIcon = () => (
    <svg {...svgProps}>
        <rect x="10" y="10" width="32" height="44" rx="4" fill={PURPLE} />
        <rect x="14" y="16" width="24" height="34" rx="2" fill={WHITE} />
        <rect x="20" y="7" width="12" height="7" rx="2" fill={SKY} />
        <path d="M18 24h10M18 30h15M18 36h11M18 42h8" strokeWidth={1.5} opacity={0.6} />
        <path d="M47 27a8 8 0 0 0-4.6 14.5V45h9.2v-3.5A8 8 0 0 0 47 27z" fill={YELLOW} />
        <path d="M43.6 48.5h6.8M44.8 52h4.4" />
        <path d="M44 32.5c.6-1.4 1.8-2.3 3.2-2.5" stroke={WHITE} strokeWidth={1.4} />
        <Sparkle x={56} y={24} size={3} delay={0} />
        <Sparkle x={52} y={14} size={2.2} delay={0.6} />
    </svg>
);

export const DraftIcon = () => (
    <svg {...svgProps}>
        <rect x="11" y="9" width="34" height="46" rx="4" fill={WHITE} />
        <path d="M11 13a4 4 0 0 1 4-4h4v46h-4a4 4 0 0 1-4-4z" fill={PINK} />
        <path d="M8 17h6M8 25h6M8 33h6M8 41h6" />
        <path d="M24 20h15M24 27h15M24 34h10" strokeWidth={1.5} opacity={0.6} />
        <path d="M34 48.5l15-18 4.2 3.5-15 18z" fill={ORANGE} />
        <path d="M34 48.5l4.2 3.5-6 2.6z" fill={CREAM} />
        <path d="M32.6 54l-.9.4" strokeWidth={2.4} />
        <path d="M49 30.5l2.3-2.7a2 2 0 0 1 2.8-.3l1.1.9a2 2 0 0 1 .3 2.8l-2.3 2.8z" fill={YELLOW} />
        <Sparkle x={54} y={14} size={3} delay={0.3} />
        <Sparkle x={57} y={44} size={2.2} delay={0.9} />
    </svg>
);

export const RefineIcon = () => (
    <svg {...svgProps}>
        <rect x="9" y="7" width="32" height="42" rx="3.5" fill={WHITE} />
        <path d="M15 15h20M15 21h20M15 27h14M15 33h18M15 39h10" strokeWidth={1.5} opacity={0.6} />
        <path d="M47.5 46.5l8.5 8.5" strokeWidth={5} />
        <path d="M47.5 46.5l8.5 8.5" stroke={PURPLE} strokeWidth={2.4} />
        <circle cx="39" cy="38" r="11" fill={ICE} />
        <path d="M39 31.5l1.6 3.4 3.7.5-2.7 2.6.7 3.7-3.3-1.8-3.3 1.8.7-3.7-2.7-2.6 3.7-.5z" fill={YELLOW} />
        <path d="M32.5 34.5a7.5 7.5 0 0 1 4-4.2" stroke={WHITE} strokeWidth={1.6} />
        <Sparkle x={52} y={13} size={3} delay={0.2} />
        <Sparkle x={6} y={55} size={2.2} delay={0.8} />
    </svg>
);

export const FinalIcon = () => (
    <svg {...svgProps}>
        <rect x="17" y="7" width="31" height="41" rx="3.5" fill={LAVENDER} />
        <rect x="10" y="13" width="31" height="41" rx="3.5" fill={WHITE} />
        <path d="M16 22h19M16 28h19M16 34h13M16 40h16" strokeWidth={1.5} opacity={0.6} />
        <circle cx="45" cy="45" r="11" fill={PURPLE} />
        <path d="M40 45.2l3.4 3.4 6.6-6.8" stroke={WHITE} strokeWidth={2.6} />
        <Sparkle x={55} y={14} size={3} delay={0.4} />
        <Sparkle x={58} y={30} size={2.2} delay={1} />
    </svg>
);

export const ReviewIcon = () => (
    <svg {...svgProps}>
        <rect x="12" y="6" width="36" height="44" rx="3.5" fill={WHITE} />
        <path d="M18 14h24M18 20h24M18 26h18M18 32h20" strokeWidth={1.5} opacity={0.6} />
        <circle cx="23" cy="44" r="8.5" fill={ICE} />
        <circle cx="43" cy="44" r="8.5" fill={ICE} />
        <path d="M31.5 43c1.7-1.6 3.3-1.6 3 0" />
        <path d="M14.6 42L8 38.5M51.4 42l6.6-3.5" />
        <path d="M18.5 40.5a5 5 0 0 1 3.5-2.8M38.5 40.5a5 5 0 0 1 3.5-2.8" stroke={WHITE} strokeWidth={1.6} />
        <Sparkle x={56} y={12} size={3} delay={0} />
        <Sparkle x={6} y={18} size={2.2} delay={0.7} />
    </svg>
);

export const RedPenIcon = () => (
    <svg {...svgProps}>
        <rect x="9" y="7" width="33" height="46" rx="3.5" fill={WHITE} />
        <path d="M15 16h21M15 23h21M15 30h15M15 37h18M15 44h10" strokeWidth={1.5} opacity={0.6} />
        <path d="M15 23h12" stroke={RED} strokeWidth={2.2} />
        <ellipse cx="25" cy="37" rx="9" ry="4.2" stroke={RED} strokeWidth={2} />
        <path d="M38 52l14-16.5 4 3.4-14 16.5z" fill={PURPLE} />
        <path d="M38 52l4 3.4-5.8 2.3z" fill={CREAM} />
        <path d="M36.4 57.6l-.9.4" stroke={RED} strokeWidth={2.6} />
        <path d="M52 35.5l2.3-2.7a2 2 0 0 1 2.8-.2l1 .9a2 2 0 0 1 .2 2.8L56 39z" fill={RED} />
        <Sparkle x={54} y={14} size={3} delay={0.3} />
        <Sparkle x={56} y={25} size={2.2} delay={0.9} />
    </svg>
);

export const SpellCheckIcon = () => (
    <svg {...svgProps}>
        <rect x="8" y="8" width="38" height="44" rx="3.5" fill={WHITE} />
        <path d="M14 36l5.5-16 5.5 16M16 31h7" strokeWidth={2.4} />
        <circle cx="33" cy="31.5" r="4.5" strokeWidth={2.2} />
        <path d="M37.5 26.5v9.5" strokeWidth={2.2} />
        <path d="M14 42c2-2 4 2 6 0s4 2 6 0 4 2 6 0 4 2 6 0" stroke={RED} strokeWidth={1.8} />
        <circle cx="46" cy="46" r="10.5" fill={GREEN} />
        <path d="M41 46.2l3.4 3.4 6.6-6.8" stroke={WHITE} strokeWidth={2.6} />
        <Sparkle x={55} y={12} size={3} delay={0.4} />
        <Sparkle x={8} y={57} size={2.2} delay={1} />
    </svg>
);

export const UploadIcon = () => (
    <svg {...svgProps}>
        <path d="M14 8h20l10 10v34a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z" fill={WHITE} />
        <path d="M34 8v10h10" fill={LAVENDER} />
        <path d="M17 24h14M17 30h20M17 36h12" strokeWidth={1.5} opacity={0.6} />
        <circle cx="44" cy="45" r="11" fill={SKY} />
        <path d="M44 51v-12M38.5 44l5.5-5.5 5.5 5.5" stroke={WHITE} strokeWidth={2.6} />
        <Sparkle x={54} y={12} size={3} delay={0.2} />
        <Sparkle x={6} y={30} size={2.2} delay={0.8} />
    </svg>
);

export const LayoutIcon = () => (
    <svg {...svgProps}>
        <rect x="10" y="7" width="40" height="50" rx="3.5" fill={WHITE} />
        <rect x="15" y="12" width="30" height="15" rx="2" fill={ICE} />
        <path d="M15 25l8-6.5 5 4 4-3 13 7" strokeWidth={1.6} />
        <circle cx="39" cy="16.5" r="2.4" fill={YELLOW} strokeWidth={1.4} />
        <path d="M15 33h12M15 38h12M15 43h12M33 33h12M33 38h12M33 43h8" strokeWidth={1.5} opacity={0.6} />
        <rect x="15" y="48" width="30" height="4" rx="2" fill={PINK} />
        <Sparkle x={56} y={10} size={3} delay={0.3} />
        <Sparkle x={5} y={50} size={2.2} delay={0.9} />
    </svg>
);

export const DevicesIcon = () => (
    <svg {...svgProps}>
        <rect x="5" y="10" width="32" height="42" rx="4.5" fill={PURPLE} />
        <rect x="9" y="14.5" width="24" height="31" rx="1.5" fill={WHITE} />
        <path d="M13 24c2.8-1 5.4-.8 8 .6 2.6-1.4 5.2-1.6 8-.6v11c-2.8-1-5.4-.8-8 .6-2.6-1.4-5.2-1.6-8-.6z" fill={YELLOW} strokeWidth={1.4} />
        <path d="M21 24.6v11" strokeWidth={1.2} />
        <circle cx="21" cy="49" r="1.2" fill={WHITE} stroke="none" />
        <rect x="39" y="24" width="20" height="32" rx="4" fill={SKY} />
        <rect x="42" y="28.5" width="14" height="21" rx="1.2" fill={WHITE} />
        <path d="M46.5 35v7l5.5-3.5z" fill={PINK} strokeWidth={1.3} />
        <Sparkle x={47} y={12} size={3} delay={0} />
        <Sparkle x={58} y={17} size={2.2} delay={0.6} />
    </svg>
);

export const ShieldCheckIcon = () => (
    <svg {...svgProps}>
        <path d="M32 5l21 7.5V27c0 13.5-8.8 22.8-21 28-12.2-5.2-21-14.5-21-28V12.5z" fill={PURPLE} />
        <path d="M32 11l15 5.4V27c0 9.6-6.2 16.5-15 20.7-8.8-4.2-15-11.1-15-20.7V16.4z" fill={DEEP_PURPLE} strokeWidth={1.4} />
        <path d="M23.5 29l6 6 11.5-12" stroke={WHITE} strokeWidth={3.2} />
        <path d="M17.5 15.5L28 11.7" stroke={WHITE} strokeWidth={1.6} opacity={0.6} />
        <Sparkle x={57} y={10} size={3} delay={0.4} />
        <Sparkle x={7} y={52} size={2.2} delay={1} />
    </svg>
);

export const BarcodeIcon = () => (
    <svg {...svgProps}>
        <rect x="7" y="12" width="50" height="40" rx="5" fill={WHITE} />
        <path d="M14 19v20M22.5 19v20M31 19v20M37 19v20M45 19v20M50 19v20" strokeWidth={3} />
        <path d="M17.5 19v20M26 19v20M34 19v20M41 19v20M47.5 19v20" strokeWidth={1.4} />
        <path d="M14 45h7M24 45h7M34 45h7M44 45h6" strokeWidth={1.6} opacity={0.7} />
        <circle cx="51" cy="12" r="6.5" fill={YELLOW} />
        <path d="M48 12h6M51 9v6" strokeWidth={1.8} />
        <Sparkle x={8} y={6} size={2.6} delay={0.3} />
        <Sparkle x={58} y={56} size={2.2} delay={0.9} />
    </svg>
);

export const PrepressGearIcon = () => (
    <svg {...svgProps}>
        <path d="M14 8h20l10 10v34a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z" fill={WHITE} />
        <path d="M34 8v10h10" fill={LAVENDER} />
        <rect x="16" y="22" width="18" height="12" rx="1.5" fill={ICE} strokeWidth={1.4} />
        <path d="M16 40h12M16 45h8" strokeWidth={1.5} opacity={0.6} />
        <path d="M44 33v4.2M44 50.8V55M33 44h4.2M50.8 44H55M36.2 36.2l3 3M48.8 48.8l3 3M36.2 51.8l3-3M48.8 39.2l3-3" strokeWidth={3.4} />
        <circle cx="44" cy="44" r="7.5" fill={YELLOW} />
        <circle cx="44" cy="44" r="2.8" fill={WHITE} />
        <Sparkle x={56} y={12} size={3} delay={0.5} />
    </svg>
);

export const PrinterIcon = () => (
    <svg {...svgProps}>
        <rect x="18" y="8" width="28" height="18" rx="1.5" fill={WHITE} />
        <path d="M23 14h18M23 19h12" strokeWidth={1.5} opacity={0.6} />
        <rect x="7" y="22" width="50" height="22" rx="4.5" fill={SKY} />
        <path d="M13 36h38" strokeWidth={2} />
        <circle cx="49" cy="29" r="2.2" fill={YELLOW} strokeWidth={1.4} />
        <path d="M18 38h28v18H18z" fill={WHITE} />
        <path d="M23 44h18M23 49h12" strokeWidth={1.5} opacity={0.6} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(36.5 43.5) scale(0.42)" fill={PINK} />
        <Sparkle x={56} y={12} size={3} delay={0.2} />
        <Sparkle x={8} y={12} size={2.2} delay={0.8} />
    </svg>
);

export const GlobeIcon = () => (
    <svg {...svgProps}>
        <circle cx="30" cy="32" r="20" fill={SKY} />
        <path d="M15 23c4-3 9-1 9 3s-4 3-4.5 6.5-5 2.5-6.5-.5-.5-7 2-9z" fill={GREEN} strokeWidth={1.5} />
        <path d="M33 14c4.5-.5 9.5 2 12 6.5-3 1-5 4-8 3s-6-6.5-4-9.5z" fill={GREEN} strokeWidth={1.5} />
        <path d="M34 37c3-2.5 8.5-1.5 9.5 1.5s-2 7-6 7-5.5-5.5-3.5-8.5z" fill={GREEN} strokeWidth={1.5} />
        <path d="M5 43c8 9 40-2 53-22" stroke={WHITE} strokeWidth={1.8} strokeDasharray="2 3.5" />
        <circle cx="58" cy="21" r="3.6" fill={YELLOW} />
        <Sparkle x={54} y={50} size={2.6} delay={0.4} />
        <Sparkle x={8} y={10} size={2.2} delay={1} />
    </svg>
);

export const TagIcon = () => (
    <svg {...svgProps}>
        <path d="M30 8h20a4 4 0 0 1 4 4v20L32 54a4 4 0 0 1-5.6 0L10 37.6a4 4 0 0 1 0-5.6z" fill={PINK} />
        <circle cx="45" cy="17" r="3.6" fill={WHITE} />
        <path d="M24 34l12-12M29 40l9-9" strokeWidth={2} opacity={0.55} />
        <path d="M45 17c3-7 10-9 13-4" strokeWidth={1.6} />
        <Sparkle x={12} y={14} size={3} delay={0.3} />
        <Sparkle x={56} y={44} size={2.2} delay={0.9} />
    </svg>
);

export const LibraryIcon = () => (
    <svg {...svgProps}>
        <path d="M7 22L32 8l25 14z" fill={DEEP_PURPLE} />
        <circle cx="32" cy="16.5" r="3" fill={YELLOW} strokeWidth={1.4} />
        <rect x="10" y="22" width="44" height="5" rx="1" fill={LAVENDER} />
        <rect x="14" y="27" width="6" height="20" fill={WHITE} />
        <rect x="24" y="27" width="6" height="20" fill={WHITE} />
        <rect x="34" y="27" width="6" height="20" fill={WHITE} />
        <rect x="44" y="27" width="6" height="20" fill={WHITE} />
        <rect x="7" y="47" width="50" height="7" rx="1.5" fill={LAVENDER} />
        <Sparkle x={56} y={10} size={3} delay={0.4} />
        <Sparkle x={8} y={10} size={2.2} delay={1} />
    </svg>
);

export const ChartIcon = () => (
    <svg {...svgProps}>
        <rect x="7" y="9" width="42" height="38" rx="4" fill={WHITE} />
        <rect x="13" y="31" width="6.5" height="10" rx="1" fill={SKY} strokeWidth={1.5} />
        <rect x="23.5" y="25" width="6.5" height="16" rx="1" fill={PINK} strokeWidth={1.5} />
        <rect x="34" y="18" width="6.5" height="23" rx="1" fill={YELLOW} strokeWidth={1.5} />
        <path d="M13 24l10-6.5 7.5 3.5 11.5-8" stroke={PURPLE} strokeWidth={2.2} />
        <path d="M37 13h5v5" stroke={PURPLE} strokeWidth={2.2} />
        <circle cx="49" cy="47" r="9.5" fill={YELLOW} />
        <path d="M49 41.5v11M52 44c-.8-1.5-5.8-1.8-5.8.8 0 2.8 6 1.6 6 4.4 0 2.4-5 2.4-6.2.5" strokeWidth={1.6} />
        <Sparkle x={57} y={12} size={3} delay={0.3} />
    </svg>
);

export const PaletteIcon = () => (
    <svg {...svgProps}>
        <path d="M31 8C17 8 6 17.5 6 30c0 10.5 7.5 17.5 16.5 17.5 4 0 5.4-2.8 4.2-5.8-1.1-2.7.6-5.4 3.6-5.4H37c10.2 0 19-5.2 19-14C56 14 45 8 31 8z" fill={WHITE} />
        <circle cx="18" cy="27" r="4" fill={ORANGE} />
        <circle cx="25.5" cy="17.5" r="4" fill={YELLOW} />
        <circle cx="37.5" cy="16" r="4" fill={PINK} />
        <circle cx="46.5" cy="23.5" r="4" fill={SKY} />
        <circle cx="16.5" cy="37.5" r="3.2" fill={PURPLE} />
        <path d="M37 59l-3.2-2.6 15-18.4 3.2 2.6z" fill={PURPLE} />
        <path d="M48.8 38l3.2 2.6 2.4-3-3.2-2.6z" fill={LAVENDER} />
        <path d="M51.2 35l3.2 2.6c2.8-2 5-5.6 3.6-8.6-3.4-.6-6 2.6-6.8 6z" fill={ORANGE} />
        <Sparkle x={9} y={10} size={3} delay={0.2} />
        <Sparkle x={58} y={51} size={2.4} delay={0.8} />
    </svg>
);

export const StoryboardIcon = () => (
    <svg {...svgProps}>
        <rect x="5" y="9" width="54" height="44" rx="4.5" fill={PURPLE} />
        <rect x="9.5" y="13.5" width="21" height="16" rx="2" fill={WHITE} />
        <rect x="33.5" y="13.5" width="21" height="16" rx="2" fill={WHITE} />
        <rect x="9.5" y="33" width="21" height="15.5" rx="2" fill={WHITE} />
        <rect x="33.5" y="33" width="21" height="15.5" rx="2" fill={WHITE} />
        <circle cx="16" cy="19" r="2.4" fill={YELLOW} strokeWidth={1.3} />
        <path d="M11.5 27l5-4 4 3 3-2 5 3" strokeWidth={1.4} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(38.5 15.5) scale(0.5)" fill={YELLOW} />
        <path d="M48 19h4M48 23h4" strokeWidth={1.4} opacity={0.6} />
        <circle cx="20" cy="37.5" r="2.3" fill={PINK} strokeWidth={1.3} />
        <path d="M20 40v4M17.5 42h5M20 44l-2 3M20 44l2 3" strokeWidth={1.3} />
        <path d="M44 45s-5-3-5-6.2a2.8 2.8 0 0 1 5-1.6 2.8 2.8 0 0 1 5 1.6C49 42 44 45 44 45z" fill={PINK} strokeWidth={1.3} />
        <path d="M31 21.5h2M31 40.5h2" stroke={WHITE} strokeWidth={1.6} />
        <Sparkle x={58} y={5} size={2.6} delay={0.3} />
        <Sparkle x={5} y={58} size={2.2} delay={0.9} />
    </svg>
);

export const ColorBrushIcon = () => (
    <svg {...svgProps}>
        <path d="M6 48c9-10 18-12 26-7s15 2 24-8" stroke={PINK} strokeWidth={5} />
        <path d="M6 54c9-10 18-12 26-7s15 2 24-8" stroke={YELLOW} strokeWidth={5} />
        <path d="M6 42c9-10 18-12 26-7s15 2 24-8" stroke={SKY} strokeWidth={5} />
        <path d="M33 27L50 10l4.5 4.5-17 17z" fill={PURPLE} />
        <path d="M29.5 30.5l3.5-3.5 4.5 4.5-3.5 3.5z" fill={LAVENDER} />
        <path d="M29.5 30.5c-4.5.6-8 4-8.5 9 5-.4 8.4-4 9-8.5z" fill={ORANGE} />
        <Sparkle x={12} y={12} size={3} delay={0.3} />
        <Sparkle x={22} y={6} size={2.2} delay={0.9} />
    </svg>
);

export const HiResImageIcon = () => (
    <svg {...svgProps}>
        <rect x="5" y="9" width="46" height="36" rx="4" fill={WHITE} />
        <rect x="9.5" y="13.5" width="37" height="27" rx="2" fill={ICE} />
        <path d="M9.5 38.5V36l10-9 7 6 6-5 14 11v-.5 2a2 2 0 0 1-2 2h-33a2 2 0 0 1-2-2z" fill={GREEN} strokeWidth={1.5} />
        <circle cx="38" cy="20" r="3.2" fill={YELLOW} strokeWidth={1.5} />
        <rect x="36" y="38" width="23" height="15" rx="4.5" fill={PURPLE} />
        <path d="M41 41.5v8M41 45.5h4.6M45.6 41.5v8" stroke={WHITE} strokeWidth={1.9} />
        <path d="M49.6 41.5v8h1.6a4 4 0 0 0 0-8z" stroke={WHITE} strokeWidth={1.9} />
        <Sparkle x={56} y={10} size={3} delay={0.4} />
    </svg>
);

export const ProfileCardIcon = () => (
    <svg {...svgProps}>
        <rect x="7" y="10" width="50" height="44" rx="5" fill={WHITE} />
        <path d="M7 15a5 5 0 0 1 5-5h40a5 5 0 0 1 5 5v6H7z" fill={PINK} />
        <circle cx="32" cy="15.5" r="2" fill={WHITE} strokeWidth={1.3} />
        <circle cx="21" cy="36" r="9" fill={YELLOW} />
        <circle cx="18" cy="34.5" r="1.1" fill={INK} stroke="none" />
        <circle cx="24" cy="34.5" r="1.1" fill={INK} stroke="none" />
        <path d="M18 38.5c1.7 1.8 4.3 1.8 6 0" strokeWidth={1.5} />
        <path d="M35 31h16M35 37h16M35 43h10" strokeWidth={1.5} opacity={0.6} />
        <Sparkle x={58} y={6} size={2.6} delay={0.4} />
        <Sparkle x={5} y={58} size={2.2} delay={1} />
    </svg>
);

export const ModelSheetIcon = () => (
    <svg {...svgProps}>
        <rect x="4" y="9" width="56" height="46" rx="4.5" fill={WHITE} />
        <path d="M4 48h56" strokeWidth={1.2} opacity={0.35} />
        <path d="M10 45c0-6 3-9.5 7-9.5s7 3.5 7 9.5z" fill={PURPLE} />
        <circle cx="17" cy="25" r="7" fill={YELLOW} />
        <circle cx="14.5" cy="24" r="1" fill={INK} stroke="none" />
        <circle cx="19.5" cy="24" r="1" fill={INK} stroke="none" />
        <path d="M14.5 27.5c1.4 1.4 3.6 1.4 5 0" strokeWidth={1.4} />
        <path d="M25 45c0-6 3-9.5 7-9.5s7 3.5 7 9.5z" fill={PINK} />
        <circle cx="32" cy="25" r="7" fill={YELLOW} />
        <circle cx="29.5" cy="24" r="1" fill={INK} stroke="none" />
        <circle cx="34.5" cy="24" r="1" fill={INK} stroke="none" />
        <circle cx="32" cy="28" r="1.6" fill={INK} stroke="none" />
        <path d="M40 45c0-6 3-9.5 7-9.5s7 3.5 7 9.5z" fill={SKY} />
        <circle cx="47" cy="25" r="7" fill={YELLOW} />
        <circle cx="44.5" cy="24" r="1" fill={INK} stroke="none" />
        <circle cx="49.5" cy="24" r="1" fill={INK} stroke="none" />
        <path d="M44.5 28h5" strokeWidth={1.4} />
        <Sparkle x={58} y={5} size={2.6} delay={0.3} />
    </svg>
);

export const TurnaroundIcon = () => (
    <svg {...svgProps}>
        <path d="M22 50c0-9.5 4.5-15 10-15s10 5.5 10 15z" fill={SKY} />
        <circle cx="32" cy="24" r="9" fill={YELLOW} />
        <circle cx="29" cy="22.5" r="1.2" fill={INK} stroke="none" />
        <circle cx="35" cy="22.5" r="1.2" fill={INK} stroke="none" />
        <path d="M29 27c1.8 1.8 4.2 1.8 6 0" strokeWidth={1.5} />
        <path d="M10 34a23 23 0 0 1 12-20" stroke={WHITE} strokeWidth={2.6} />
        <path d="M17 12.5l5.5 1.2-1.6 5.4" stroke={WHITE} strokeWidth={2.6} />
        <path d="M54 30a23 23 0 0 1-12 20" stroke={WHITE} strokeWidth={2.6} />
        <path d="M47 51.5l-5.5-1.2 1.6-5.4" stroke={WHITE} strokeWidth={2.6} />
        <path d="M14 54h36" strokeWidth={2} opacity={0.4} />
        <Sparkle x={54} y={12} size={3} delay={0.2} />
        <Sparkle x={9} y={50} size={2.2} delay={0.8} />
    </svg>
);

export const BrandKitIcon = () => (
    <svg {...svgProps}>
        <circle cx="19" cy="20" r="4.5" fill={PINK} />
        <circle cx="46" cy="18" r="4" fill={SKY} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(22.5 3) scale(0.8)" fill={YELLOW} />
        <path d="M10 30l22-8 22 8-22 8z" fill={DEEP_PURPLE} />
        <path d="M10 30l22 8 22-8v20l-22 8-22-8z" fill={PURPLE} />
        <path d="M32 38v20" strokeWidth={1.5} />
        <rect x="38" y="44" width="11" height="6" rx="1.5" fill={WHITE} strokeWidth={1.4} transform="rotate(-20 43.5 47)" />
        <Sparkle x={58} y={30} size={2.6} delay={0.4} />
        <Sparkle x={6} y={12} size={2.2} delay={1} />
    </svg>
);

export const TypographyIcon = () => (
    <svg {...svgProps}>
        <rect x="6" y="10" width="52" height="44" rx="5" fill={WHITE} />
        <path d="M13 45l8.5-25 8.5 25M16.5 37h10" strokeWidth={2.8} />
        <circle cx="41" cy="39" r="5.5" strokeWidth={2.6} />
        <path d="M46.5 32.5v12.5" strokeWidth={2.6} />
        <path d="M52 16v10" stroke={PINK} strokeWidth={2.4} />
        <path d="M13 50h33" stroke={YELLOW} strokeWidth={2.4} />
        <Sparkle x={58} y={6} size={2.6} delay={0.3} />
        <Sparkle x={5} y={58} size={2.2} delay={0.9} />
    </svg>
);

export const CoverWrapIcon = () => (
    <svg {...svgProps}>
        <rect x="4" y="14" width="24" height="38" rx="2" fill={SKY} />
        <rect x="28" y="14" width="8" height="38" fill={DEEP_PURPLE} />
        <rect x="36" y="14" width="24" height="38" rx="2" fill={YELLOW} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(42 19) scale(0.5)" fill={WHITE} />
        <path d="M41 40h14M43 45h10" strokeWidth={2} />
        <path d="M9 22h14M9 27h14M9 32h10" strokeWidth={1.5} opacity={0.6} />
        <rect x="10" y="40" width="11" height="7" rx="1" fill={WHITE} strokeWidth={1.4} />
        <path d="M32 20v26" stroke={WHITE} strokeWidth={1.4} opacity={0.8} />
        <Sparkle x={56} y={8} size={2.6} delay={0.4} />
        <Sparkle x={8} y={7} size={2.2} delay={1} />
    </svg>
);

export const DownloadIcon = () => (
    <svg {...svgProps}>
        <path d="M17 44a10 10 0 0 1 1.2-19.9A14 14 0 0 1 45 24a9.8 9.8 0 0 1 1 20z" fill={WHITE} />
        <path d="M32 26v16M26 36.5l6 6 6-6" stroke={PURPLE} strokeWidth={2.8} />
        <path d="M22 52h20" stroke={YELLOW} strokeWidth={3} />
        <Sparkle x={54} y={12} size={3} delay={0.3} />
        <Sparkle x={9} y={14} size={2.2} delay={0.9} />
    </svg>
);

export const CropMarksIcon = () => (
    <svg {...svgProps}>
        <rect x="12" y="12" width="40" height="40" stroke={PINK} strokeWidth={1.6} strokeDasharray="2.5 2.5" />
        <rect x="16" y="16" width="32" height="32" rx="1.5" fill={WHITE} />
        <rect x="20" y="20" width="24" height="24" rx="2" fill={ICE} strokeWidth={1.4} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(24.5 24) scale(0.62)" fill={YELLOW} />
        <path d="M4 16h7M16 4v7M53 16h7M48 4v7M4 48h7M16 53v7M53 48h7M48 53v7" strokeWidth={2} />
        <Sparkle x={58} y={30} size={2.4} delay={0.5} />
    </svg>
);

export const GaugeIcon = () => (
    <svg {...svgProps}>
        <path d="M7 42a25 25 0 0 1 50 0z" fill={WHITE} />
        <path d="M12 42a20 20 0 0 1 5.9-14.1" stroke={SKY} strokeWidth={4.5} />
        <path d="M17.9 27.9a20 20 0 0 1 28.2 0" stroke={YELLOW} strokeWidth={4.5} />
        <path d="M46.1 27.9a20 20 0 0 1 5.9 14.1" stroke={GREEN} strokeWidth={4.5} />
        <path d="M32 42l11-12" strokeWidth={2.8} />
        <circle cx="32" cy="42" r="3.6" fill={PURPLE} />
        <path d="M5 42h54" strokeWidth={2} />
        <path d="M48 45l-5.5 8.5h4.5l-2 6.5 7.5-9.5h-4.5l2.5-5.5z" fill={YELLOW} strokeWidth={1.5} />
        <Sparkle x={12} y={14} size={3} delay={0.3} />
        <Sparkle x={56} y={14} size={2.2} delay={0.9} />
    </svg>
);

export const PackageIcon = () => (
    <svg {...svgProps}>
        <path d="M9 22l23-10 23 10v24L32 56 9 46z" fill={KRAFT} />
        <path d="M9 22l23 10 23-10-23-10z" fill={KRAFT_LIGHT} />
        <path d="M32 32v24" />
        <path d="M20 17.2l23 10v6.5" stroke={WHITE} strokeWidth={3} />
        <circle cx="49" cy="47" r="9.5" fill={PURPLE} />
        <path d="M44 47.2l3.4 3.4 6.6-6.8" stroke={WHITE} strokeWidth={2.6} />
        <Sparkle x={56} y={10} size={3} delay={0.4} />
        <Sparkle x={6} y={12} size={2.2} delay={1} />
    </svg>
);

export const RetailBoxIcon = () => (
    <svg {...svgProps}>
        <path d="M9 22l23-10 23 10v24L32 56 9 46z" fill={KRAFT} />
        <path d="M9 22l23 10 23-10-23-10z" fill={KRAFT_LIGHT} />
        <path d="M32 32v24" />
        <path d="M20 17.2l23 10v6.5" stroke={WHITE} strokeWidth={3} />
        <circle cx="21" cy="40" r="6" fill={PINK} strokeWidth={1.5} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(16.5 35.5) scale(0.38)" fill={WHITE} />
        <path d="M44 48l8-8h6v6l-8 8z" fill={YELLOW} strokeWidth={1.5} />
        <circle cx="54.5" cy="43.5" r="1.3" fill={WHITE} strokeWidth={1} />
        <Sparkle x={56} y={10} size={3} delay={0.4} />
        <Sparkle x={6} y={12} size={2.2} delay={1} />
    </svg>
);

export const Cube3DIcon = () => (
    <svg {...svgProps}>
        <path d="M32 30L12 19v24l20 11z" fill={SKY} />
        <path d="M32 30l20-11v24L32 54z" fill={PURPLE} />
        <path d="M32 8l20 11-20 11-20-11z" fill={ICE} />
        <path d="M12 19l20 11 20-11M32 30v24" strokeWidth={1.5} />
        <circle cx="32" cy="8" r="2.8" fill={YELLOW} />
        <circle cx="12" cy="19" r="2.8" fill={YELLOW} />
        <circle cx="52" cy="19" r="2.8" fill={YELLOW} />
        <circle cx="32" cy="30" r="2.8" fill={YELLOW} />
        <circle cx="12" cy="43" r="2.8" fill={YELLOW} />
        <circle cx="52" cy="43" r="2.8" fill={YELLOW} />
        <circle cx="32" cy="54" r="2.8" fill={YELLOW} />
        <Sparkle x={57} y={7} size={2.6} delay={0.4} />
        <Sparkle x={5} y={56} size={2.2} delay={1} />
    </svg>
);

export const WandIcon = () => (
    <svg {...svgProps}>
        <path d="M10 52l25-25 4.5 4.5-25 25z" fill={PURPLE} />
        <path d="M31 31l4.5 4.5" stroke={WHITE} strokeWidth={2.4} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(33 4) scale(1.05)" fill={YELLOW} />
        <circle cx="53" cy="34" r="3" fill={PINK} strokeWidth={1.4} />
        <circle cx="26" cy="13" r="2.6" fill={SKY} strokeWidth={1.4} />
        <path d="M56 12l4-3M58 24h4M45 5V1" stroke={WHITE} strokeWidth={2} />
        <Sparkle x={47} y={44} size={3} delay={0.2} />
        <Sparkle x={14} y={26} size={2.2} delay={0.8} />
    </svg>
);

export const ClapperIcon = () => (
    <svg {...svgProps}>
        <rect x="7" y="27" width="50" height="28" rx="3.5" fill={WHITE} />
        <rect x="7" y="27" width="50" height="7.5" fill={DEEP_PURPLE} />
        <path d="M14 27l4.5 7.5M26 27l4.5 7.5M38 27l4.5 7.5M50 27l4.5 7.5" stroke={WHITE} strokeWidth={2.2} />
        <path d="M6.5 25.5L53 13.5l2 7.4-46.5 12z" fill={DEEP_PURPLE} />
        <path d="M15 23.3l6.4 3.6M27 20.2l6.4 3.6M39 17.1l6.4 3.6" stroke={WHITE} strokeWidth={2.2} />
        <path d="M13 42h20M13 48h14" strokeWidth={1.5} opacity={0.6} />
        <circle cx="46" cy="45" r="6.5" fill={PINK} />
        <path d="M44.2 41.8v6.4l5-3.2z" fill={WHITE} strokeWidth={1.2} />
        <Sparkle x={57} y={6} size={2.6} delay={0.4} />
    </svg>
);

export const LayersIcon = () => (
    <svg {...svgProps}>
        <path d="M12 36l-5 2.6 25 13 25-13-5-2.6-20 10.4z" fill={SKY} />
        <path d="M12 27l-5 2.6 25 13 25-13-5-2.6-20 10.4z" fill={PINK} />
        <path d="M32 8l25 13-25 13L7 21z" fill={YELLOW} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(26.5 15.5) scale(0.46)" fill={WHITE} />
        <path d="M58 30l4-1.5M58 39l4-1.5" stroke={WHITE} strokeWidth={2} />
        <Sparkle x={8} y={8} size={3} delay={0.3} />
        <Sparkle x={56} y={54} size={2.2} delay={0.9} />
    </svg>
);

export const MicrophoneIcon = () => (
    <svg {...svgProps}>
        <path d="M16 27v2a16 16 0 0 0 32 0v-2" strokeWidth={2.2} />
        <path d="M32 45v8M22 56h20" strokeWidth={2.6} />
        <rect x="22" y="6" width="20" height="31" rx="10" fill={PURPLE} />
        <path d="M23 17h18M23 23h18M23 29h18" stroke={WHITE} strokeWidth={1.5} opacity={0.7} />
        <path d="M27 10.5a6 6 0 0 1 4-2" stroke={WHITE} strokeWidth={1.6} />
        <path d="M9 17c-3 4.5-3 10.5 0 15M55 17c3 4.5 3 10.5 0 15" stroke={WHITE} strokeWidth={2.2} />
        <Sparkle x={57} y={6} size={2.6} delay={0.4} />
    </svg>
);

export const CastingIcon = () => (
    <svg {...svgProps}>
        <g transform="rotate(-9 17 32)">
            <rect x="5" y="16" width="24" height="34" rx="4" fill={WHITE} />
            <circle cx="17" cy="28" r="6" fill={PINK} />
            <path d="M9 44c0-5 3.5-8.5 8-8.5s8 3.5 8 8.5" fill={PINK} />
        </g>
        <g transform="rotate(9 47 32)">
            <rect x="35" y="16" width="24" height="34" rx="4" fill={WHITE} />
            <circle cx="47" cy="28" r="6" fill={SKY} />
            <path d="M39 44c0-5 3.5-8.5 8-8.5s8 3.5 8 8.5" fill={SKY} />
        </g>
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(22 0) scale(0.85)" fill={YELLOW} />
        <Sparkle x={58} y={56} size={2.6} delay={0.4} />
        <Sparkle x={5} y={57} size={2.2} delay={1} />
    </svg>
);

export const MixerIcon = () => (
    <svg {...svgProps}>
        <rect x="7" y="9" width="50" height="46" rx="5" fill={PURPLE} />
        <path d="M18 17v30M32 17v30M46 17v30" stroke={WHITE} strokeWidth={2} opacity={0.55} />
        <rect x="12.5" y="31" width="11" height="7" rx="2.2" fill={YELLOW} />
        <rect x="26.5" y="20" width="11" height="7" rx="2.2" fill={PINK} />
        <rect x="40.5" y="36" width="11" height="7" rx="2.2" fill={SKY} />
        <circle cx="51" cy="49.5" r="1.4" fill={GREEN} stroke="none" />
        <circle cx="46" cy="49.5" r="1.4" fill={GREEN} stroke="none" />
        <Sparkle x={58} y={5} size={2.6} delay={0.4} />
    </svg>
);

export const AudioFileIcon = () => (
    <svg {...svgProps}>
        <path d="M14 8h20l10 10v34a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z" fill={WHITE} />
        <path d="M34 8v10h10" fill={LAVENDER} />
        <path d="M17 36v-4M21.5 40V28M26 38v-8M30.5 42V26M35 37v-6M39.5 39V29" stroke={PURPLE} strokeWidth={2.6} />
        <circle cx="46" cy="49" r="9" fill={GREEN} />
        <path d="M41 49.2l3.4 3.4 6.6-6.8" stroke={WHITE} strokeWidth={2.6} />
        <Sparkle x={55} y={12} size={3} delay={0.4} />
        <Sparkle x={6} y={20} size={2.2} delay={1} />
    </svg>
);

export const MapIcon = () => (
    <svg {...svgProps}>
        <path d="M7 15l15-6 20 6 15-6v39l-15 6-20-6-15 6z" fill={WHITE} />
        <path d="M22 9v39M42 15v39" strokeWidth={1.4} opacity={0.5} />
        <path d="M13 41c6-1 6-13 14-13s9 9 15 4" stroke={PINK} strokeWidth={2.2} strokeDasharray="2.5 3" />
        <path d="M11 37.5l4 4M15 37.5l-4 4" stroke={PURPLE} strokeWidth={2.2} />
        <path d="M39 23a5.5 5.5 0 0 1 11 0c0 4.3-5.5 9.5-5.5 9.5S39 27.3 39 23z" fill={RED} />
        <circle cx="44.5" cy="23" r="2" fill={WHITE} strokeWidth={1.2} />
        <Sparkle x={55} y={6} size={2.6} delay={0.4} />
        <Sparkle x={5} y={57} size={2.2} delay={1} />
    </svg>
);

export const SoundWaveIcon = () => (
    <svg {...svgProps}>
        <path d="M15 32v-6M21 36V22M27 33v-8M33 38V18M39 32v-6M45 35V23M51 31v-4" stroke={WHITE} strokeWidth={3} />
        <path d="M6 44c9-3 17.5-2.6 26 2 8.5-4.6 17-5 26-2v9c-9-3-17.5-2.6-26 2-8.5-4.6-17-5-26-2z" fill={YELLOW} />
        <path d="M32 46v9" strokeWidth={1.5} />
        <path d="M52 8v9.5" strokeWidth={1.8} />
        <path d="M52 8l6 2v4l-6-2" fill={PINK} strokeWidth={1.5} />
        <circle cx="49.5" cy="17.5" r="2.6" fill={PINK} strokeWidth={1.5} />
        <Sparkle x={10} y={12} size={2.6} delay={0.4} />
    </svg>
);

export const SearchIcon = () => (
    <svg {...svgProps}>
        <path d="M40 40l12 12" strokeWidth={7} />
        <path d="M40 40l12 12" stroke={PURPLE} strokeWidth={3.6} />
        <circle cx="28" cy="28" r="17" fill={ICE} />
        <rect x="17" y="21" width="22" height="5.5" rx="2.75" fill={YELLOW} strokeWidth={1.5} />
        <rect x="17" y="30" width="15" height="5.5" rx="2.75" fill={PINK} strokeWidth={1.5} />
        <path d="M17 17a14 14 0 0 1 8-5.5" stroke={WHITE} strokeWidth={1.8} />
        <Sparkle x={56} y={10} size={3} delay={0.3} />
        <Sparkle x={56} y={24} size={2.2} delay={0.9} />
    </svg>
);

export const ListingIcon = () => (
    <svg {...svgProps}>
        <rect x="7" y="7" width="50" height="50" rx="5" fill={WHITE} />
        <rect x="13" y="13" width="15" height="20" rx="1.5" fill={SKY} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(15.5 17.5) scale(0.42)" fill={WHITE} />
        <path d="M32 16h19M32 21.5h14" strokeWidth={2} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(31.0 25.5) scale(0.22)" fill={YELLOW} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(36.2 25.5) scale(0.22)" fill={YELLOW} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(41.4 25.5) scale(0.22)" fill={YELLOW} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(46.6 25.5) scale(0.22)" fill={YELLOW} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(51.8 25.5) scale(0.22)" fill={YELLOW} />
        <rect x="13" y="40" width="38" height="10" rx="5" fill={YELLOW} />
        <path d="M27 45h10" strokeWidth={2} />
        <Sparkle x={58} y={5} size={2.6} delay={0.4} />
    </svg>
);

export const TargetIcon = () => (
    <svg {...svgProps}>
        <circle cx="29" cy="35" r="21" fill={WHITE} />
        <circle cx="29" cy="35" r="14" fill={PINK} />
        <circle cx="29" cy="35" r="7" fill={WHITE} />
        <circle cx="29" cy="35" r="2.2" fill={RED} stroke="none" />
        <path d="M29 35L53 11" strokeWidth={2.6} />
        <path d="M53 11l1.5-7.5M53 11l7.5-1.5M49 15l1.4-7M49 15l7-1.4" stroke={ORANGE} strokeWidth={2.4} />
        <Sparkle x={56} y={40} size={2.6} delay={0.4} />
    </svg>
);

export const CalendarIcon = () => (
    <svg {...svgProps}>
        <rect x="7" y="12" width="50" height="43" rx="5" fill={WHITE} />
        <path d="M7 17a5 5 0 0 1 5-5h40a5 5 0 0 1 5 5v8H7z" fill={PINK} />
        <path d="M20 7v9M44 7v9" strokeWidth={2.8} />
        <path d="M15 33h5M26 33h5M37 33h5M15 43h5M26 43h5" strokeWidth={2.6} opacity={0.45} />
        <circle cx="46" cy="44" r="7" fill={YELLOW} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(41.8 39.6) scale(0.36)" fill={ORANGE} />
        <Sparkle x={58} y={6} size={2.6} delay={0.4} />
        <Sparkle x={5} y={6} size={2.2} delay={1} />
    </svg>
);

export const PosterIcon = () => (
    <svg {...svgProps}>
        <g transform="rotate(-5 32 32)">
            <rect x="13" y="7" width="38" height="50" rx="3" fill={WHITE} />
            <rect x="17" y="11" width="30" height="24" rx="2" fill={YELLOW} />
            <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(23 13) scale(0.85)" fill={ORANGE} />
            <path d="M18 41h28M22 47h20" strokeWidth={2.4} />
        </g>
        <circle cx="31" cy="6.5" r="3" fill={PINK} />
        <Sparkle x={58} y={18} size={2.6} delay={0.4} />
        <Sparkle x={5} y={50} size={2.2} delay={1} />
    </svg>
);

export const MegaphoneIcon = () => (
    <svg {...svgProps}>
        <path d="M9 25h9l22-12v38L18 39H9a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z" fill={ORANGE} />
        <path d="M14 39l3.5 12h6.5L21 39" fill={WHITE} />
        <ellipse cx="40" cy="32" rx="4.5" ry="19" fill={WHITE} />
        <path d="M50 22l7-4.5M51.5 32H59M50 42l7 4.5" stroke={WHITE} strokeWidth={2.6} />
        <path d="M11 29.5h4" stroke={WHITE} strokeWidth={1.8} opacity={0.7} />
        <Sparkle x={56} y={8} size={2.6} delay={0.4} />
    </svg>
);

export const RocketIcon = () => (
    <svg {...svgProps}>
        <path d="M20 36l-8 8 2 9 10-8.5M44 36l8 8-2 9-10-8.5" fill={PINK} />
        <path d="M26 44c0 8 3 12 6 16 3-4 6-8 6-16z" fill={YELLOW} />
        <path d="M30 44c0 5 1 8 2 10.5 1-2.5 2-5.5 2-10.5z" fill={ORANGE} strokeWidth={1.3} />
        <path d="M32 5c8.5 6.5 12.5 17 12.5 29l-4 10H23.5l-4-10C19.5 22 23.5 11.5 32 5z" fill={WHITE} />
        <circle cx="32" cy="24" r="5.5" fill={SKY} />
        <path d="M29.5 21.5a3 3 0 0 1 2.2-1.2" stroke={WHITE} strokeWidth={1.4} />
        <path d="M8 22h5M5 30h5" stroke={WHITE} strokeWidth={2.2} />
        <Sparkle x={55} y={12} size={3} delay={0.3} />
    </svg>
);

export const InfluencerIcon = () => (
    <svg {...svgProps}>
        <path d="M9 54c0-12 7.5-19 16-19s16 7 16 19z" fill={SKY} />
        <circle cx="25" cy="22" r="10" fill={YELLOW} />
        <circle cx="21.5" cy="21" r="1.2" fill={INK} stroke="none" />
        <circle cx="28.5" cy="21" r="1.2" fill={INK} stroke="none" />
        <path d="M21.5 25.5c2 2 5 2 7 0" strokeWidth={1.5} />
        <path d="M48 32s-9.5-5.6-9.5-11.6a5.3 5.3 0 0 1 9.5-3.3 5.3 5.3 0 0 1 9.5 3.3c0 6-9.5 11.6-9.5 11.6z" fill={PINK} />
        <path d="M42.6 19.5c.3-1.3 1.3-2.2 2.5-2.4" stroke={WHITE} strokeWidth={1.4} />
        <circle cx="48" cy="44" r="6.5" fill={WHITE} />
        <path d="M48 41v6M45 44h6" strokeWidth={2} />
        <Sparkle x={12} y={8} size={2.6} delay={0.4} />
    </svg>
);

export const ContentKitIcon = () => (
    <svg {...svgProps}>
        <g transform="rotate(12 47 26)">
            <rect x="37" y="16" width="20" height="17" rx="2" fill={YELLOW} />
            <path d="M39 30l5-5 4 3 3-2 4 3" strokeWidth={1.4} />
        </g>
        <rect x="15" y="6" width="28" height="51" rx="5" fill={PURPLE} />
        <rect x="18.5" y="11" width="21" height="39" rx="2" fill={WHITE} />
        <rect x="21.5" y="14" width="15" height="12" rx="1.5" fill={ICE} strokeWidth={1.4} />
        <circle cx="32" cy="18" r="2" fill={YELLOW} strokeWidth={1.2} />
        <path d="M21.5 31h15M21.5 35.5h10" strokeWidth={1.5} opacity={0.6} />
        <path d="M29 46s-4-2.4-4-5a2.1 2.1 0 0 1 4-1.3 2.1 2.1 0 0 1 4 1.3c0 2.6-4 5-4 5z" fill={PINK} strokeWidth={1.3} />
        <Sparkle x={8} y={14} size={2.6} delay={0.4} />
        <Sparkle x={54} y={52} size={2.2} delay={1} />
    </svg>
);

export const GiftIcon = () => (
    <svg {...svgProps}>
        <rect x="10" y="29" width="44" height="26" rx="3" fill={SKY} />
        <rect x="7" y="21" width="50" height="10" rx="3" fill={ICE} />
        <rect x="28" y="21" width="8" height="34" fill={YELLOW} />
        <path d="M32 21c-4-8.5-15-10.5-15-4s10.5 4 15 4zM32 21c4-8.5 15-10.5 15-4s-10.5 4-15 4z" fill={YELLOW} />
        <Sparkle x={56} y={10} size={3} delay={0.3} />
        <Sparkle x={7} y={10} size={2.2} delay={0.9} />
    </svg>
);

export const BrowserIcon = () => (
    <svg {...svgProps}>
        <rect x="5" y="9" width="54" height="44" rx="5" fill={WHITE} />
        <path d="M5 14a5 5 0 0 1 5-5h44a5 5 0 0 1 5 5v6H5z" fill={PURPLE} />
        <circle cx="11" cy="14.5" r="1.6" fill={WHITE} stroke="none" />
        <circle cx="16" cy="14.5" r="1.6" fill={WHITE} stroke="none" />
        <circle cx="21" cy="14.5" r="1.6" fill={WHITE} stroke="none" />
        <rect x="10" y="25" width="20" height="22" rx="2" fill={ICE} strokeWidth={1.5} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(14.5 30) scale(0.46)" fill={YELLOW} />
        <path d="M35 27h18M35 32h14M35 37h16" strokeWidth={1.5} opacity={0.6} />
        <rect x="35" y="41" width="14" height="6" rx="3" fill={YELLOW} strokeWidth={1.5} />
        <path d="M46 42l.2 13.5 3.5-3.6 3 6.2 2.6-1.2-3-6.1 5-.4z" fill={WHITE} strokeWidth={1.5} />
    </svg>
);

export const MagnetIcon = () => (
    <svg {...svgProps}>
        <path d="M14 18h10v18a8 8 0 0 0 16 0V18h10v18a18 18 0 0 1-36 0z" fill={RED} />
        <rect x="14" y="18" width="10" height="7" fill={WHITE} />
        <rect x="40" y="18" width="10" height="7" fill={WHITE} />
        <path d="M32 13s-5.5-3.2-5.5-6.8a3 3 0 0 1 5.5-1.8 3 3 0 0 1 5.5 1.8c0 3.6-5.5 6.8-5.5 6.8z" fill={PINK} strokeWidth={1.5} />
        <path d="M19 13V9M45 13V9M12 10l-2-3M52 10l2-3" stroke={WHITE} strokeWidth={2.2} />
        <path d="M28 50a10 10 0 0 0 8-3" stroke={WHITE} strokeWidth={1.6} opacity={0.6} />
    </svg>
);

export const EnvelopeIcon = () => (
    <svg {...svgProps}>
        <rect x="14" y="8" width="44" height="30" rx="4" fill={YELLOW} />
        <path d="M14 12l22 14 22-14" strokeWidth={1.5} />
        <rect x="6" y="20" width="46" height="34" rx="4" fill={WHITE} />
        <path d="M6 24l23 16 23-16" />
        <circle cx="50" cy="49" r="9" fill={SKY} />
        <path d="M51.5 43.5l-5 7h3.5l-1.5 5 5-7h-3.5z" fill={WHITE} strokeWidth={1.2} />
    </svg>
);

export const CartIcon = () => (
    <svg {...svgProps}>
        <rect x="21" y="9" width="11" height="14" rx="1.5" fill={PINK} transform="rotate(-10 26.5 16)" />
        <rect x="34" y="12" width="12" height="11" rx="1.5" fill={YELLOW} />
        <path d="M16 22h39l-6.5 19H20z" fill={WHITE} />
        <path d="M5 13h7.5l7.5 28h30" strokeWidth={2.6} />
        <path d="M26 30h20" strokeWidth={1.5} opacity={0.5} />
        <circle cx="23" cy="49" r="4.2" fill={PURPLE} />
        <circle cx="45" cy="49" r="4.2" fill={PURPLE} />
        <Sparkle x={56} y={8} size={2.6} delay={0.4} />
    </svg>
);

export const PressKitIcon = () => (
    <svg {...svgProps}>
        <path d="M50 16h5v34a4 4 0 0 1-4 4" fill={LAVENDER} />
        <rect x="7" y="9" width="44" height="45" rx="3.5" fill={WHITE} />
        <rect x="12" y="14" width="34" height="7" rx="1.5" fill={PURPLE} />
        <rect x="12" y="25" width="15" height="13" rx="1.5" fill={ICE} strokeWidth={1.4} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(14.5 26.5) scale(0.42)" fill={YELLOW} />
        <path d="M31 26h15M31 31h15M31 36h10M12 43h34M12 48h24" strokeWidth={1.5} opacity={0.6} />
        <Sparkle x={58} y={8} size={2.6} delay={0.4} />
    </svg>
);

export const SchoolIcon = () => (
    <svg {...svgProps}>
        <path d="M32 4v9" />
        <path d="M32 4l7.5 2.6L32 9.2" fill={PINK} strokeWidth={1.5} />
        <path d="M5 29l27-16 27 16z" fill={RED} />
        <rect x="10" y="29" width="44" height="26" fill={YELLOW} />
        <circle cx="32" cy="23" r="3.6" fill={WHITE} strokeWidth={1.4} />
        <rect x="15" y="34" width="9" height="8" rx="1" fill={WHITE} strokeWidth={1.5} />
        <rect x="40" y="34" width="9" height="8" rx="1" fill={WHITE} strokeWidth={1.5} />
        <path d="M27 55V44a5 5 0 0 1 10 0v11z" fill={PURPLE} />
        <path d="M4 55h56" strokeWidth={2} />
    </svg>
);

export const ShopIcon = () => (
    <svg {...svgProps}>
        <rect x="10" y="26" width="44" height="28" fill={LAVENDER} />
        <path d="M7 22l4-12h42l4 12z" fill={WHITE} />
        <path d="M7 22a6.25 6.25 0 0 0 12.5 0 6.25 6.25 0 0 0 12.5 0 6.25 6.25 0 0 0 12.5 0 6.25 6.25 0 0 0 12.5 0z" fill={PINK} />
        <path d="M21 10l-1.5 12M32 10v12M43 10l1.5 12" strokeWidth={1.5} />
        <rect x="14" y="32" width="19" height="13" rx="1.5" fill={ICE} strokeWidth={1.5} />
        <path d="M18 45v-8M22 45v-6M26 45v-9M30 45v-5" stroke={PURPLE} strokeWidth={2.4} />
        <rect x="37" y="32" width="13" height="22" rx="1.5" fill={PURPLE} />
        <circle cx="46.5" cy="44" r="1.3" fill={YELLOW} stroke="none" />
        <path d="M5 54h54" strokeWidth={2} />
    </svg>
);

export const BoothIcon = () => (
    <svg {...svgProps}>
        <path d="M32 9V3l6.5 2.2L32 7.4" fill={YELLOW} strokeWidth={1.5} />
        <path d="M12 26v28M52 26v28" strokeWidth={2.4} />
        <path d="M7 26L32 9l25 17z" fill={PINK} />
        <path d="M32 9L20 26M32 9l12 17" strokeWidth={1.5} />
        <rect x="20" y="28" width="6" height="9" rx="1" fill={YELLOW} strokeWidth={1.5} />
        <rect x="27" y="26" width="6" height="11" rx="1" fill={ORANGE} strokeWidth={1.5} />
        <rect x="34" y="29" width="6" height="8" rx="1" fill={SKY} strokeWidth={1.5} />
        <rect x="15" y="37" width="34" height="15" rx="2" fill={WHITE} />
        <path d="M15 43h34" strokeWidth={1.4} opacity={0.4} />
        <path d="M5 54h54" strokeWidth={2} />
    </svg>
);

export const CurriculumIcon = () => (
    <svg {...svgProps}>
        <rect x="7" y="43" width="50" height="11" rx="2.5" fill={SKY} />
        <path d="M12 46.5h40v4H12" fill={WHITE} strokeWidth={1.3} />
        <rect x="11" y="34" width="42" height="9" rx="2.5" fill={PINK} />
        <path d="M16 36.5h32v4H16" fill={WHITE} strokeWidth={1.3} />
        <path d="M32 14c-4-3-12-2-12 6.5 0 7.5 5.5 12 9 12 1.4 0 2-.7 3-.7s1.6.7 3 .7c3.5 0 9-4.5 9-12 0-8.5-8-9.5-12-6.5z" fill={RED} />
        <path d="M32 14c0-5 3-8 7.5-8-1 5-4 7.2-7.5 8z" fill={GREEN} strokeWidth={1.5} />
        <path d="M24 19.5c.5-2 2-3.4 4-3.9" stroke={WHITE} strokeWidth={1.6} />
        <Sparkle x={56} y={10} size={3} delay={0.4} />
    </svg>
);

export const VideoCallIcon = () => (
    <svg {...svgProps}>
        <rect x="7" y="9" width="50" height="34" rx="3.5" fill={DEEP_PURPLE} />
        <rect x="10.5" y="12.5" width="43" height="27" rx="2" fill={ICE} />
        <path d="M22 39.5c0-6.5 4.5-10 10-10s10 3.5 10 10z" fill={PINK} strokeWidth={1.5} />
        <circle cx="32" cy="23" r="5.5" fill={YELLOW} strokeWidth={1.5} />
        <rect x="44" y="15" width="7" height="6" rx="1" fill={WHITE} strokeWidth={1.3} />
        <circle cx="15" cy="16.5" r="1.8" fill={RED} stroke="none" />
        <path d="M3 47h58l-4.5 7H7.5z" fill={LAVENDER} />
        <Sparkle x={58} y={5} size={2.6} delay={0.4} />
    </svg>
);

export const TruckIcon = () => (
    <svg {...svgProps}>
        <rect x="4" y="15" width="35" height="28" rx="3" fill={WHITE} />
        <path d="M14 24c2.8-1 5.4-.8 8 .6 2.6-1.4 5.2-1.6 8-.6v9c-2.8-1-5.4-.8-8 .6-2.6-1.4-5.2-1.6-8-.6z" fill={YELLOW} strokeWidth={1.4} />
        <path d="M39 24h10l8.5 9.5V43H39z" fill={ORANGE} />
        <path d="M43 27.5h5l5 6h-10z" fill={ICE} strokeWidth={1.4} />
        <circle cx="15" cy="46" r="5" fill={PURPLE} />
        <circle cx="47" cy="46" r="5" fill={PURPLE} />
        <circle cx="15" cy="46" r="1.6" fill={WHITE} stroke="none" />
        <circle cx="47" cy="46" r="1.6" fill={WHITE} stroke="none" />
        <path d="M2 55h10M18 55h8" stroke={WHITE} strokeWidth={2.2} />
        <Sparkle x={56} y={12} size={2.6} delay={0.4} />
    </svg>
);

export const PenToolIcon = () => (
    <svg {...svgProps}>
        <path d="M7 46C15 31 49 31 57 46" stroke={PINK} strokeWidth={2.4} />
        <path d="M5 31h12M47 31h12" strokeWidth={1.5} />
        <circle cx="5" cy="31" r="2.4" fill={WHITE} strokeWidth={1.4} />
        <circle cx="59" cy="31" r="2.4" fill={WHITE} strokeWidth={1.4} />
        <rect x="4" y="43" width="6" height="6" rx="1" fill={YELLOW} />
        <rect x="54" y="43" width="6" height="6" rx="1" fill={YELLOW} />
        <path d="M32 4l11 22-11 22-11-22z" fill={PURPLE} />
        <path d="M32 30V12" stroke={WHITE} strokeWidth={1.6} />
        <circle cx="32" cy="30" r="3" fill={WHITE} />
        <path d="M27 52h10" strokeWidth={3} />
        <Sparkle x={56} y={10} size={2.6} delay={0.4} />
    </svg>
);

export const StyleGuideIcon = () => (
    <svg {...svgProps}>
        <rect x="10" y="7" width="42" height="50" rx="3.5" fill={WHITE} />
        <path d="M10 10.5A3.5 3.5 0 0 1 13.5 7H19v50h-5.5a3.5 3.5 0 0 1-3.5-3.5z" fill={PURPLE} />
        <circle cx="27" cy="18" r="3.6" fill={YELLOW} strokeWidth={1.5} />
        <circle cx="36" cy="18" r="3.6" fill={PINK} strokeWidth={1.5} />
        <circle cx="45" cy="18" r="3.6" fill={SKY} strokeWidth={1.5} />
        <path d="M24 42l4.5-12 4.5 12M25.6 38h5.8" strokeWidth={2} />
        <path d="M37 31h10M37 36h10M37 41h7" strokeWidth={1.5} opacity={0.6} />
        <path d="M42 7v12l3-2 3 2V7" fill={RED} strokeWidth={1.4} />
        <path d="M24 49h24" stroke={YELLOW} strokeWidth={2.4} />
    </svg>
);

export const TShirtIcon = () => (
    <svg {...svgProps}>
        <path d="M22 8L8 16l6 11 6-3v31h24V24l6 3 6-11-14-8c-1 4.2-5 7-10 7s-9-2.8-10-7z" fill={SKY} />
        <path d="M22 8c1 4.2 5 7 10 7s9-2.8 10-7" strokeWidth={1.6} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(23 24) scale(0.75)" fill={YELLOW} />
        <path d="M14 27l-2-3.6M50 27l2-3.6" strokeWidth={1.3} opacity={0.5} />
        <Sparkle x={56} y={40} size={3} delay={0.3} />
        <Sparkle x={7} y={42} size={2.2} delay={0.9} />
    </svg>
);

export const BlueprintIcon = () => (
    <svg {...svgProps}>
        <rect x="5" y="9" width="54" height="44" rx="3.5" fill={SKY} />
        <path d="M5 20h54M5 31h54M5 42h54M18 9v44M31 9v44M44 9v44" stroke={WHITE} strokeWidth={1} opacity={0.35} />
        <path d="M24 16l-7.5 4.2 3 5.4 3.2-1.6V40h18V24l3.2 1.6 3-5.4L39.5 16c-.6 2.4-3.2 4-7.5 4s-6.9-1.6-7.5-4z" stroke={WHITE} strokeWidth={1.9} />
        <path d="M17 47h30M17 45v4M47 45v4" stroke={YELLOW} strokeWidth={2} />
        <path d="M53 15v24M51 15h4M51 39h4" stroke={YELLOW} strokeWidth={1.6} />
        <Sparkle x={58} y={5} size={2.4} delay={0.4} />
    </svg>
);

export const GradBulbIcon = () => (
    <svg {...svgProps}>
        <path d="M7 33h4M53 33h4M12 22l3 2M52 22l-3 2" stroke={WHITE} strokeWidth={2.2} />
        <path d="M32 18a14 14 0 0 0-8 25.5V48h16v-4.5A14 14 0 0 0 32 18z" fill={WHITE} />
        <path d="M28.5 40l3.5-6 3.5 6" stroke={ORANGE} strokeWidth={1.8} />
        <path d="M26 52h12M28.5 56h7" strokeWidth={2} />
        <path d="M24 11v5c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-5l-8 3.5z" fill={DEEP_PURPLE} />
        <path d="M32 3l15 6.5-15 6.5-15-6.5z" fill={PURPLE} />
        <path d="M32 9.5l14 2v7" strokeWidth={1.5} />
        <path d="M44.5 18.5h3l.8 3.5h-4.6z" fill={PINK} strokeWidth={1.3} />
        <Sparkle x={56} y={34} size={3} delay={0.3} />
        <Sparkle x={8} y={40} size={2.2} delay={0.9} />
    </svg>
);

export const PuzzleIcon = () => (
    <svg {...svgProps}>
        <path d="M10 12h13a5 5 0 1 1 10 0h11v11a5 5 0 1 1 0 10v12H33a5 5 0 1 0-10 0H10V33a5 5 0 1 0 0-10z" fill={YELLOW} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(20.5 20.5) scale(0.62)" fill={PINK} />
        <path d="M40 52h6a3.5 3.5 0 1 1 7 0h5v6H40z" fill={SKY} strokeWidth={1.5} />
        <Sparkle x={56} y={10} size={3} delay={0.3} />
        <Sparkle x={6} y={54} size={2.2} delay={0.9} />
    </svg>
);

export const LessonPlanIcon = () => (
    <svg {...svgProps}>
        <rect x="11" y="10" width="38" height="45" rx="4" fill={SKY} />
        <rect x="15" y="16" width="30" height="35" rx="2" fill={WHITE} />
        <rect x="24" y="7" width="12" height="7" rx="2" fill={YELLOW} />
        <rect x="19" y="21" width="6" height="6" rx="1.3" fill={WHITE} strokeWidth={1.5} />
        <path d="M20.2 24l1.7 1.7 3.6-3.6" stroke={GREEN} strokeWidth={2} />
        <path d="M29 24h11" strokeWidth={1.5} opacity={0.6} />
        <rect x="19" y="30" width="6" height="6" rx="1.3" fill={WHITE} strokeWidth={1.5} />
        <path d="M20.2 33l1.7 1.7 3.6-3.6" stroke={GREEN} strokeWidth={2} />
        <path d="M29 33h11" strokeWidth={1.5} opacity={0.6} />
        <rect x="19" y="39" width="6" height="6" rx="1.3" fill={WHITE} strokeWidth={1.5} />
        <path d="M29 42h11" strokeWidth={1.5} opacity={0.6} />
        <path d="M44 55l10-12 3.5 2.8-10 12z" fill={ORANGE} strokeWidth={1.6} />
        <path d="M44 55l3.5 2.8-5 2z" fill={CREAM} strokeWidth={1.4} />
        <Sparkle x={56} y={12} size={3} delay={0.4} />
    </svg>
);

export const PrintablePDFIcon = () => (
    <svg {...svgProps}>
        <path d="M14 8h20l10 10v34a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z" fill={WHITE} />
        <path d="M34 8v10h10" fill={LAVENDER} />
        <path d="M17 22h14M17 27h18" strokeWidth={1.5} opacity={0.6} />
        <rect x="7" y="33" width="32" height="13" rx="3" fill={RED} />
        <path d="M12 43v-7h2.6a2.1 2.1 0 0 1 0 4.2H12" stroke={WHITE} strokeWidth={1.7} />
        <path d="M19.5 36v7h1.6a3.5 3.5 0 0 0 0-7z" stroke={WHITE} strokeWidth={1.7} />
        <path d="M28 43v-7h4.5M28 39.3h3.5" stroke={WHITE} strokeWidth={1.7} />
        <circle cx="48" cy="48" r="8.5" fill={PURPLE} />
        <path d="M48 44v8M44.5 48.5l3.5 3.5 3.5-3.5" stroke={WHITE} strokeWidth={2.2} />
    </svg>
);

export const DiamondIcon = () => (
    <svg {...svgProps}>
        <path d="M18 14h28l10 12-24 28L8 26z" fill={SKY} />
        <path d="M8 26h48M18 14l8 12 6-12 6 12 8-12M26 26l6 28 6-28" strokeWidth={1.5} />
        <path d="M26 26l6-12 6 12z" fill={ICE} strokeWidth={1.5} />
        <path d="M15 21l4-4" stroke={WHITE} strokeWidth={2} />
        <Sparkle x={56} y={10} size={3.4} delay={0.2} />
        <Sparkle x={8} y={10} size={2.6} delay={0.7} />
        <Sparkle x={56} y={44} size={2.2} delay={1.1} />
    </svg>
);

export const PitchDeckIcon = () => (
    <svg {...svgProps}>
        <path d="M30 8V4h4v4" />
        <path d="M24 40l-6.5 16M40 40l6.5 16M32 40v9" strokeWidth={2.6} />
        <rect x="7" y="8" width="50" height="32" rx="3" fill={WHITE} />
        <rect x="13" y="25" width="5.5" height="9" rx="1" fill={PINK} strokeWidth={1.4} />
        <rect x="21.5" y="20" width="5.5" height="14" rx="1" fill={YELLOW} strokeWidth={1.4} />
        <rect x="30" y="15" width="5.5" height="19" rx="1" fill={SKY} strokeWidth={1.4} />
        <circle cx="46.5" cy="24" r="6.5" fill={PURPLE} strokeWidth={1.5} />
        <path d="M46.5 24v-6.5a6.5 6.5 0 0 1 6.5 6.5z" fill={YELLOW} strokeWidth={1.5} />
        <Sparkle x={58} y={50} size={2.6} delay={0.4} />
    </svg>
);

export const DealIcon = () => (
    <svg {...svgProps}>
        <rect x="10" y="7" width="36" height="48" rx="3.5" fill={WHITE} />
        <path d="M16 15h24M16 21h24M16 27h16M16 33h20" strokeWidth={1.5} opacity={0.6} />
        <path d="M15 45c3-7 5 4 8-2s5 6 8 0 3 3 5 1" stroke={PURPLE} strokeWidth={2} />
        <path d="M15 49h18" strokeWidth={1.3} opacity={0.5} />
        <path d="M42 46l-3 11 5-2.5 3 4 2-12zM52 46l3 11-5-2.5-3 4-2-12z" fill={PINK} strokeWidth={1.4} />
        <circle cx="47" cy="43" r="8.5" fill={RED} />
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z" transform="translate(42.2 38.2) scale(0.4)" fill={WHITE} />
        <Sparkle x={56} y={10} size={3} delay={0.4} />
    </svg>
);