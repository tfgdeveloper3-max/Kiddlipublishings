import Footer from "@/components/Footer";
import CustomAboutIntro from "@/components/InnerServices/CustomCharacter/CustomAbout";
import CustomHero from "@/components/InnerServices/CustomCharacter/CustomHero";
import CustomProcess from "@/components/InnerServices/CustomCharacter/CustomProcess";

import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function CustomCharacterPage() {
    return (
        <main>
            <CustomHero />
            <CustomAboutIntro />
            <CustomProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}