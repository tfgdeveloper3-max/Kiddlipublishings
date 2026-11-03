import Footer from "@/components/Footer";
import CharacterBrandingAboutIntro from "@/components/InnerServices/CharacterBranding/CharacterBrandingAbout";
import CharacterBrandingHero from "@/components/InnerServices/CharacterBranding/CharacterBrandingHero";
import CharacterBrandingProcess from "@/components/InnerServices/CharacterBranding/CharacterBrandingProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function CharacterBrandingPage() {
    return (
        <main>
            <CharacterBrandingHero />
            <CharacterBrandingAboutIntro />
            <CharacterBrandingProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}