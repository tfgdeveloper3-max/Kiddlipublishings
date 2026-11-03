import Footer from "@/components/Footer";
import PrintableActivitiesAboutIntro from "@/components/InnerServices/PrintableActivities/PrintableActivitiesAbout";
import PrintableActivitiesHero from "@/components/InnerServices/PrintableActivities/PrintableActivitiesHero";
import PrintableActivitiesProcess from "@/components/InnerServices/PrintableActivities/PrintableActivitiesProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function PrintableActivitiesPage() {
    return (
        <main>
            <PrintableActivitiesHero />
            <PrintableActivitiesAboutIntro />
            <PrintableActivitiesProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}