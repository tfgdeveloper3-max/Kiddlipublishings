import Footer from "@/components/Footer";
import CinematicBookIntro from "@/components/InnerServices/CinematicBook/CinematicBookAbout";
import CinematicBookHero from "@/components/InnerServices/CinematicBook/CinematicBookHero";
import CinematicBookProcess from "@/components/InnerServices/CinematicBook/CinematicBookProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function CinematicBookPage() {
    return (
        <main>
            <CinematicBookHero />
            <CinematicBookIntro />
            <CinematicBookProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}