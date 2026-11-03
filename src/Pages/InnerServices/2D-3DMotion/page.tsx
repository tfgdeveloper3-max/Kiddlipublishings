import Footer from "@/components/Footer";
import MotionAboutIntro from "@/components/InnerServices/2D-3DMotion/MotionAbout";
import MotionHero from "@/components/InnerServices/2D-3DMotion/MotionHero";
import MotionProcess from "@/components/InnerServices/2D-3DMotion/MotionProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";



export default function MotionPage() {
    return (
        <main>
            <MotionHero />
            <MotionAboutIntro />
            <MotionProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}