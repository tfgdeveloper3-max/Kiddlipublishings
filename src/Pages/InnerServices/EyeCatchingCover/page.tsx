import Footer from "@/components/Footer";
import EyeCatchingAboutIntro from "@/components/InnerServices/EyeCatchingCover/EyeCatchingAbout";
import EyeCatchingHero from "@/components/InnerServices/EyeCatchingCover/EyeCatchingHero";
import EyeCatchingProcess from "@/components/InnerServices/EyeCatchingCover/EyeCatchingProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function EyeCatchingPage() {
    return (
        <main>
            <EyeCatchingHero />
            <EyeCatchingAboutIntro />
            <EyeCatchingProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}