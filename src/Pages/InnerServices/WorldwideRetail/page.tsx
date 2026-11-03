import Footer from "@/components/Footer";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";
import WorldAboutIntro from "@/components/InnerServices/WorldwideRetail/WorldAbout";
import WorldHero from "@/components/InnerServices/WorldwideRetail/WorldHero";
import WorldProcess from "@/components/InnerServices/WorldwideRetail/WorldProcess";

export default function WorldPage() {
    return (
        <main>
            <WorldHero />
            <WorldAboutIntro />
            <WorldProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}