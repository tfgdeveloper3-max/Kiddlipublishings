import Footer from "@/components/Footer";
import ProfessionalAboutIntro from "@/components/InnerServices/ProfessionalEditing/ProfessionalAbout";
import ProfessionalHero from "@/components/InnerServices/ProfessionalEditing/ProfessionalHero";
import ProfessionalProcess from "@/components/InnerServices/ProfessionalEditing/ProfessionalProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";



export default function ProfessionalEditingPage() {
    return (
        <main>
            <ProfessionalHero />
            <ProfessionalAboutIntro />
            <ProfessionalProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}