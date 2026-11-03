import Footer from "@/components/Footer";
import CharacterLicensingAboutIntro from "@/components/InnerServices/CharacterLicensing/CharacterLicensingAbout";
import CharacterLicensingHero from "@/components/InnerServices/CharacterLicensing/CharacterLicensingHero";
import CharacterLicensingProcess from "@/components/InnerServices/CharacterLicensing/CharacterLicensingProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function CharacterLicensingPage() {
    return (
        <main>
            <CharacterLicensingHero />
            <CharacterLicensingAboutIntro />
            <CharacterLicensingProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}