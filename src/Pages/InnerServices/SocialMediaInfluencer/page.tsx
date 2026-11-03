import Footer from "@/components/Footer";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";
import SocialMediaInfluencerAboutIntro from "@/components/InnerServices/SocialMediaInfluencer/SocialMediaInfluencerAbout";
import SocialMediaInfluencerHero from "@/components/InnerServices/SocialMediaInfluencer/SocialMediaInfluencerHero";
import SocialMediaInfluencerProcess from "@/components/InnerServices/SocialMediaInfluencer/SocialMediaInfluencerProcess";

export default function SocialMediaInfluencerPage() {
    return (
        <main>
            <SocialMediaInfluencerHero />
            <SocialMediaInfluencerAboutIntro />
            <SocialMediaInfluencerProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}