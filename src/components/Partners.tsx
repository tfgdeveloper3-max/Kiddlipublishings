import { useState } from "react";
import { motion } from "framer-motion";
import { EASE, t } from "./ui/Animated";

const PARTNER_COUNT = 5;
const PARTNER_EXT = "png";

export interface Partner {
    src: string;
    alt: string;
}

const defaultPartners: Partner[] = Array.from({ length: PARTNER_COUNT }, (_, i) => ({
    src: `/images/Partner/partner${i + 1}.${PARTNER_EXT}`,
    alt: `Partner ${i + 1}`,
}));

function Logo({ partner }: { partner: Partner }) {
    const [ok, setOk] = useState(true);
    if (!ok) return null;
    return (
        <img
            src={partner.src}
            alt={partner.alt}
            onError={() => setOk(false)}
            draggable={false}
            className="h-[34px] w-auto max-w-[150px] select-none object-contain lg:h-[46px] lg:max-w-[175px]"
        />
    );
}

export default function Partners({ partners = defaultPartners }: { partners?: Partner[] }) {
    return (
        <section
            id="partners"
            aria-label="Our partners"
            className="relative overflow-hidden bg-gradient-to-r from-brand-light to-brand-dark"
        >
            <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                className="mx-auto hidden h-[123px] max-w-[1180px] items-center justify-between px-12 lg:flex"
            >
                {partners.map((p, i) => (
                    <motion.li
                        key={p.src}
                        variants={{
                            hidden: { opacity: 0, y: 24, scale: 0.85 },
                            show: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { duration: t(0.7), ease: EASE, delay: t(0.1 + i * 0.18) },
                            },
                        }}
                        whileHover={{ scale: 1.08, y: -3 }}
                        className="flex items-center"
                    >
                        <Logo partner={p} />
                    </motion.li>
                ))}
            </motion.ul>

            <div className="relative flex h-[96px] items-center overflow-hidden sm:h-[110px] lg:hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <motion.ul
                    className="flex w-max items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: t(10), ease: "linear", repeat: Infinity }}
                >
                    {[...partners, ...partners].map((p, i) => (
                        <li key={i} className="flex shrink-0 items-center px-8 sm:px-12" aria-hidden={i >= partners.length}>
                            <Logo partner={p} />
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}