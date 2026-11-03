import Footer from "@/components/Footer";
import CharacterMerchandiseAboutIntro from "@/components/InnerServices/CharacterMerchandise/CharacterMerchandiseAbout";
import CharacterMerchandiseHero from "@/components/InnerServices/CharacterMerchandise/CharacterMerchandiseHero";
import CharacterMerchandiseProcess from "@/components/InnerServices/CharacterMerchandise/CharacterMerchandiseProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function CharacterMerchandisePage() {
    return (
        <main>
            <CharacterMerchandiseHero />
            <CharacterMerchandiseAboutIntro />
            <CharacterMerchandiseProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}