import Footer from "@/components/Footer";
import ProfessionalAudioIntro from "@/components/InnerServices/ProfessionalAudiobooks/ProfessionalAudioAbout";
import ProfessionalAudioHero from "@/components/InnerServices/ProfessionalAudiobooks/ProfessionalAudioHero";
import ProfessionalAudioProcess from "@/components/InnerServices/ProfessionalAudiobooks/ProfessionalAudioProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function ProfessionalAudiobooksPage() {
    return (
        <main>
            <ProfessionalAudioHero />
            <ProfessionalAudioIntro />
            <ProfessionalAudioProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}