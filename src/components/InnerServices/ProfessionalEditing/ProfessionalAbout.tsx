import { motion } from "framer-motion";
import serviceTop from "/images/ServiceTop.png";
import ProfessionalEditing from "/images/Services/ProfessionalEditing.png";
import { AnimateCss, EASE, Float, Reveal, t } from "@/components/ui/Animated";

const PaperPlane = () => (
    <svg
        viewBox="0 0 72 84"
        fill="none"
        stroke="#5E7387"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
        aria-hidden="true"
    >
        <path d="M4 30L68 4 40 60 32 38z" />
        <path d="M32 38L68 4" />
        <path d="M32 38l-2 14 10 8" />
        <path d="M10 33l22 5M14 34.5l-4 2" opacity={0.7} />
        <path d="M26 56c-6 3-13 6-11 11 2 5 9 1 6-3-3-5-12 2-10 8 2 5 8 4 6 0-3-4-10 3-6 9" />
    </svg>
);

interface ProfessionalAboutProps {
    label?: string;
    title?: string;
    paragraphs?: string[];
    image?: string;
    imageAlt?: string;
}

export default function ProfessionalAboutIntro({
    label = "Services",
    title = "Professional Editing & Manuscript Polishing",
    paragraphs = [
        "Transforming a draft into a captivating story requires meticulous attention to detail and a deep understanding of young readers. At Kiddli Publishing, our professional editing and manuscript polishing services ensure your voice shines while enhancing readability, grammar, tone, and pacing. We meticulously review every line to maintain consistency, strengthen character dialogue, and improve narrative flow—making sure your manuscript is flawless, engaging, and ready for publication.",
        "From fine-tuning word choice to ensuring age-appropriate vocabulary, our team works closely with you to elevate your manuscript to professional industry standards.",
    ],
    image = ProfessionalEditing,
    imageAlt = "Professional Editing",
}: ProfessionalAboutProps) {
    return (
        <section className="relative isolate overflow-hidden bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <AnimateCss
                    animation="bounceInDown"
                    onView
                    delay={300}
                    className="absolute right-[3%] top-[10px] w-[72px] sm:w-[88px] lg:right-[9%] lg:top-[16px] lg:w-[104px]"
                >
                    <Float distance={8} duration={3.5}>
                        <img src={serviceTop} alt="" width={184} height={273} className="h-auto w-full select-none" draggable={false} />
                    </Float>
                </AnimateCss>

                <AnimateCss
                    animation="backInLeft"
                    onView
                    delay={600}
                    className="absolute bottom-[12px] left-[3%] hidden h-[62px] w-[54px] sm:block lg:bottom-[20px] lg:h-[76px] lg:w-[66px]"
                >
                    <motion.div
                        className="h-full w-full"
                        animate={{ x: [0, 8, 0], y: [0, -8, 0], rotate: [0, -4, 0] }}
                        transition={{ duration: t(3), repeat: Infinity, ease: "easeInOut" }}
                    >
                        <PaperPlane />
                    </motion.div>
                </AnimateCss>
            </div>

            <div className="relative mx-auto grid max-w-[1300px] items-center gap-10 px-5 pb-20 pt-24 sm:px-10 sm:pt-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-[clamp(28px,3vw,52px)] lg:px-12 lg:pb-[110px] lg:pt-[110px]">
                <motion.div
                    initial={{ opacity: 0, x: -60, rotate: -3 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: t(0.9), ease: EASE }}
                    className="mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-[520px]"
                >
                    <motion.div
                        whileHover={{ scale: 1.02, rotate: -1 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        className="relative aspect-[27/26] w-full overflow-hidden rounded-[26px] bg-[#D9D9D9] shadow-[0_18px_40px_rgba(40,10,90,0.12)] lg:rounded-[30px]"
                    >
                        {image && (
                            <img
                                src={image}
                                alt={imageAlt}
                                className="h-full w-full select-none object-cover"
                                loading="lazy"
                                draggable={false}
                            />
                        )}
                    </motion.div>
                </motion.div>

                <div className="max-w-[640px]">
                    <Reveal from="right">
                        <span className="font-heading text-[15px] font-bold text-brand lg:text-[17px]">{label}</span>
                    </Reveal>

                    <Reveal from="right" delay={0.12}>
                        <h2 className="mt-1 font-heading text-[30px] font-extrabold leading-[1.15] text-black sm:text-[38px] lg:text-[clamp(34px,3vw,48px)]">
                            {title}
                        </h2>
                    </Reveal>

                    {paragraphs.map((p, i) => (
                        <Reveal key={i} from="right" delay={0.24 + i * 0.12}>
                            <p className="mt-4 font-body text-[16px] leading-[1.85] text-[#2B2B2B] sm:text-[17px] lg:text-[clamp(15.5px,1.05vw,17px)]">
                                {p}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}