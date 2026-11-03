import Footer from "@/components/Footer";
import FullColorAboutIntro from "@/components/InnerServices/FullColor/FullColorAbout";
import FullColorHero from "@/components/InnerServices/FullColor/FullColorHero";
import FullColorProcess from "@/components/InnerServices/FullColor/FullColorProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function FullColorPage() {
    return (
        <main>
            <FullColorHero />
            <FullColorAboutIntro />
            <FullColorProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}