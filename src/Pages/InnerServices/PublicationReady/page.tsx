import Footer from "@/components/Footer";
import PublicationReadyAboutIntro from "@/components/InnerServices/PublicationReady/PublicationReadyAbout";
import PublicationReadyHero from "@/components/InnerServices/PublicationReady/PublicationReadyHero";
import PublicationReadyProcess from "@/components/InnerServices/PublicationReady/PublicationReadyProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function PublishingReadyPage() {
    return (
        <main>
            <PublicationReadyHero />
            <PublicationReadyAboutIntro />
            <PublicationReadyProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}