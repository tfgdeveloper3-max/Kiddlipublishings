import { useId } from "react";
import CloudsImage from "/images/cloud.png";

const IMG_W = 1920;
const IMG_H = 145;

interface CloudsProps {
    position?: "top" | "bottom";
    layout?: "absolute" | "static";
    color?: string;
    backColor?: string;
    backOpacity?: number;
    className?: string;
}

export default function Clouds({
    position = "bottom",
    layout = "absolute",
    color = "#fff",
    backColor,
    backOpacity = 0.2,
    className = "",
}: CloudsProps) {
    const id = useId().replace(/[^a-zA-Z0-9]/g, "");
    const backId = `clouds-back-${id}`;
    const frontId = `clouds-front-${id}`;

    const pin =
        layout === "absolute"
            ? `absolute inset-x-0 z-10 ${position === "top" ? "-top-px" : "-bottom-px"}`
            : "relative";

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none ${pin} min-h-[56px] w-full sm:min-h-[80px] ${position === "bottom" ? "rotate-180" : ""
                } ${className}`}
            style={{ aspectRatio: `${IMG_W} / ${IMG_H}` }}
        >
            <svg viewBox={`0 0 ${IMG_W} ${IMG_H}`} preserveAspectRatio="xMidYMid slice" className="block h-full w-full">
                <defs>
                    <filter id={backId} x="0" y="0" width="1" height="1" colorInterpolationFilters="sRGB">
                        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 5 0" result="mask" />
                        <feFlood floodColor={backColor ?? color} floodOpacity={backOpacity} />
                        <feComposite in2="mask" operator="in" />
                    </filter>
                    <filter id={frontId} x="0" y="0" width="1" height="1" colorInterpolationFilters="sRGB">
                        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.6 -0.6" result="mask" />
                        <feFlood floodColor={color} />
                        <feComposite in2="mask" operator="in" />
                    </filter>
                </defs>
                <image href={CloudsImage} width={IMG_W} height={IMG_H} filter={`url(#${backId})`} />
                <image href={CloudsImage} width={IMG_W} height={IMG_H} filter={`url(#${frontId})`} />
            </svg>
        </div>
    );
}