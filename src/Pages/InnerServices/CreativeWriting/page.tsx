import Footer from "@/components/Footer";
import CreativeIntro from "@/components/InnerServices/CreativeWriting/CreativeAbout";
import CreativeHero from "@/components/InnerServices/CreativeWriting/CreativeHero";
import CreativeProcess from "@/components/InnerServices/CreativeWriting/CreativeProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";


export default function CreativePage() {
    return (
        <main>
            <CreativeHero />
            <CreativeIntro />
            <CreativeProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}