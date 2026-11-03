import Footer from "@/components/Footer";
import InteractiveMotionAboutIntro from "@/components/InnerServices/InteractiveMotion/InteractiveMotionAbout";
import InteractiveMotionHero from "@/components/InnerServices/InteractiveMotion/InteractiveMotionHero";
import InteractiveMotionProcess from "@/components/InnerServices/InteractiveMotion/InteractiveMotionProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function InteractiveMotionPage() {
    return (
        <main>
            <InteractiveMotionHero />
            <InteractiveMotionAboutIntro />
            <InteractiveMotionProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}