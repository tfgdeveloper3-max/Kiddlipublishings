import Footer from "@/components/Footer";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";
import StrategicBookLaunchAboutIntro from "@/components/InnerServices/StrategicBookLaunch/StrategicBookLaunchAbout";
import StrategicBookLaunchHero from "@/components/InnerServices/StrategicBookLaunch/StrategicBookLaunchHero";
import StrategicBookLaunchProcess from "@/components/InnerServices/StrategicBookLaunch/StrategicBookLaunchProcess";

export default function StrategicBookLaunchPage() {
    return (
        <main>
            <StrategicBookLaunchHero />
            <StrategicBookLaunchAboutIntro />
            <StrategicBookLaunchProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}