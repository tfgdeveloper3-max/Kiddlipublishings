import Footer from "@/components/Footer";
import InteriorAboutIntro from "@/components/InnerServices/InteriorFormatting/InteriorAbout";
import InteriorHero from "@/components/InnerServices/InteriorFormatting/InteriorHero";
import InteriorProcess from "@/components/InnerServices/InteriorFormatting/InteriorProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";



export default function InteriorPage() {
    return (
        <main>
            <InteriorHero />
            <InteriorAboutIntro />
            <InteriorProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}