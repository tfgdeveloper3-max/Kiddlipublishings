import Footer from "@/components/Footer";
import ProfessionalAuthorWebsitesAboutIntro from "@/components/InnerServices/ProfessionalAuthorWebsites/ProfessionalAuthorWebsitesAbout";
import ProfessionalAuthorWebsitesHero from "@/components/InnerServices/ProfessionalAuthorWebsites/ProfessionalAuthorWebsitesHero";
import ProfessionalAuthorWebsitesProcess from "@/components/InnerServices/ProfessionalAuthorWebsites/ProfessionalAuthorWebsitesProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function ProfessionalAuthorWebsitesPage() {
    return (
        <main>
            <ProfessionalAuthorWebsitesHero />
            <ProfessionalAuthorWebsitesAboutIntro />
            <ProfessionalAuthorWebsitesProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}