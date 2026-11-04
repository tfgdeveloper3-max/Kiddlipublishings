import { motion } from "framer-motion";
import { AnimateCss, BouncyWords, Float, PopIn, Reveal, Twinkle, Wiggle, t } from "@/components/ui/Animated";
import { Arrows, BookOutline, Burst, Clouds, GridPattern, PencilDoodle, Rain, Stars } from "@/components/HeroDoodles";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { useLeadModal } from "@/components/LeadModal";

interface WorldHeroProps {
    title?: string;
    description?: string;
    buttonLabel?: string;
    buttonHref?: string;
}

export default function WorldHero({
    title = "Worldwide Retail & Library Distribution",
    description = "Welcome to Kiddli Publishing, where stories travel across the globe to reach eager young readers. We connect your children's book with worldwide bookstores, online retailers, and library networks.",
    buttonLabel = "More About",
}: WorldHeroProps) {
    const titleDelay = 0.3;
    const titleWords = title.split(" ").length;
    const { openLeadModal } = useLeadModal();

    return (
        <section
            id="about-hero"
            className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light to-brand-dark"
        >
            <GridPattern />

            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <AnimateCss animation="bounceIn" delay={600} className="absolute left-[3.75%] top-[110px] h-[40px] w-[46px] lg:top-[20%] lg:h-[56px] lg:w-[64px]">
                    <Twinkle className="h-full w-full">
                        <Stars />
                    </Twinkle>
                </AnimateCss>

                <AnimateCss animation="backInLeft" delay={1300} className="absolute bottom-[90px] left-[5.5%] h-[24px] w-[36px] sm:bottom-[120px] lg:bottom-[150px] lg:h-[30px] lg:w-[44px]">
                    <motion.div
                        className="h-full w-full"
                        animate={{ x: [0, 6, 0], rotate: [0, -6, 0] }}
                        transition={{ duration: t(2), repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Arrows />
                    </motion.div>
                </AnimateCss>

                <AnimateCss animation="bounceInDown" delay={800} className="absolute right-[3.9%] top-[120px] hidden h-[40px] w-[64px] sm:block lg:top-[17%]">
                    <Float distance={8} duration={3.5}>
                        <BookOutline />
                    </Float>
                </AnimateCss>

                <AnimateCss animation="bounceInRight" delay={1000} className="absolute right-[4.4%] top-[36%] hidden h-[42px] w-[64px] lg:block">
                    <Wiggle angle={8} duration={2.4} className="h-full w-full">
                        <PencilDoodle />
                    </Wiggle>
                </AnimateCss>

                <AnimateCss animation="fadeInDown" delay={1100} className="absolute right-[7%] top-[68%] hidden h-[48px] w-[30px] lg:block">
                    <motion.div
                        className="h-full w-full"
                        animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: t(2.2), repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Rain />
                    </motion.div>
                </AnimateCss>
            </div>

            <div className="relative z-20 mx-auto flex max-w-[1680px] flex-col items-center px-6 pb-[130px] pt-[150px] text-center sm:px-10 sm:pb-[160px] lg:min-h-[clamp(560px,40vw,760px)] lg:justify-center lg:px-12 lg:pb-[170px] lg:pt-[140px]">
                <h1 className="mx-auto max-w-[900px] text-balance font-heading text-[38px] font-extrabold leading-[1.12] tracking-[-0.01em] text-white sm:text-[50px] lg:text-[clamp(48px,4.2vw,72px)]">
                    <span className="relative inline-block">
                        <AnimateCss
                            animation="zoomIn"
                            delay={900}
                            className="pointer-events-none absolute -left-[0.55em] -top-[0.4em] h-[0.55em] w-[0.7em]"
                        >
                            <motion.div
                                className="h-full w-full"
                                animate={{ scale: [1, 1.15, 1], opacity: [1, 0.6, 1] }}
                                transition={{ duration: t(2), repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="h-full w-full -scale-x-100">
                                    <Burst />
                                </div>
                            </motion.div>
                        </AnimateCss>
                        <BouncyWords text={title} delay={titleDelay} stagger={0.1} />
                    </span>
                </h1>

                <Reveal delay={titleDelay + titleWords * 0.1 + 0.3}>
                    <p className="mx-auto mt-5 max-w-[680px] font-body text-[17px] leading-[1.7] text-white/95 sm:text-[17px] lg:text-[clamp(17px,1.2vw,19px)]">
                        {description}
                    </p>
                </Reveal>

                <PopIn delay={titleDelay + titleWords * 0.1 + 0.5} className="mt-8 inline-block">
                    <AnimatedButton onClick={openLeadModal} variant="yellow" size="lg" idleWiggle>
                        {buttonLabel}
                    </AnimatedButton>
                </PopIn>
            </div>

            <Clouds />
        </section>
    );
}