import { motion } from "framer-motion";
import { t } from "./Animated";

interface CloudsProps {
    position?: "top" | "bottom";
    className?: string;
    color?: string;
    backColor?: string;
    backOpacity?: number;
}

export default function Clouds({
    position = "bottom",
    className = "",
    color = "#fff",
    backColor = "#fff",
    backOpacity = 0.28,
}: CloudsProps) {
    const isTop = position === "top";
    return (
        <svg
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 z-10 h-[70px] w-full sm:h-[100px] lg:h-[140px] ${isTop ? "top-0 scale-y-[-1]" : "bottom-0"
                } ${className}`}
        >
            <motion.g
                fill={backColor}
                fillOpacity={backOpacity}
                animate={{ x: [-18, 18] }}
                transition={{ duration: t(7), repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            >
                <circle cx="60" cy="152" r="80" />
                <circle cx="330" cy="147" r="90" />
                <circle cx="700" cy="140" r="110" />
                <circle cx="905" cy="136" r="100" />
                <circle cx="1220" cy="148" r="100" />
                <circle cx="1400" cy="156" r="90" />
            </motion.g>
            <g fill={color}>
                <circle cx="25" cy="160" r="85" />
                <circle cx="205" cy="173" r="125" />
                <circle cx="400" cy="158" r="80" />
                <circle cx="580" cy="171" r="125" />
                <circle cx="820" cy="135" r="115" />
                <circle cx="1000" cy="167" r="95" />
                <circle cx="1145" cy="172" r="70" />
                <circle cx="1310" cy="184" r="130" />
                <circle cx="1440" cy="168" r="90" />
                <rect x="0" y="122" width="1440" height="18" />
            </g>
        </svg>
    );
}