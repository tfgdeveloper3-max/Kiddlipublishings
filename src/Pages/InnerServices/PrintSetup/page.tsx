import Footer from "@/components/Footer";
import PrintAboutIntro from "@/components/InnerServices/PrintSetup/PrintAbout";
import PrintHero from "@/components/InnerServices/PrintSetup/PrintHero";
import PrintProcess from "@/components/InnerServices/PrintSetup/PrintProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function PrintPage() {
    return (
        <main>
            <PrintHero />
            <PrintAboutIntro />
            <PrintProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}