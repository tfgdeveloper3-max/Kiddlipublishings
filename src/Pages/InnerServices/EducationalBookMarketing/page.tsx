import Footer from "@/components/Footer";
import EducationalBookMarketingAboutIntro from "@/components/InnerServices/EducationalBookMarketing/EducationalBookMarketingAbout";
import EducationalBookMarketingHero from "@/components/InnerServices/EducationalBookMarketing/EducationalBookMarketingHero";
import EducationalBookMarketingProcess from "@/components/InnerServices/EducationalBookMarketing/EducationalBookMarketingProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function EducationalBookMarketingPage() {
    return (
        <main>
            <EducationalBookMarketingHero />
            <EducationalBookMarketingAboutIntro />
            <EducationalBookMarketingProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}