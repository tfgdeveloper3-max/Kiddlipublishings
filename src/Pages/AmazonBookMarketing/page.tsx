import Footer from "@/components/Footer";
import AmazonBookMarketingAboutIntro from "@/components/InnerServices/AmazonBookMarketing/AmazonBookMarketingAbout";
import AmazonBookMarketingHero from "@/components/InnerServices/AmazonBookMarketing/AmazonBookMarketingHero";
import AmazonBookMarketingProcess from "@/components/InnerServices/AmazonBookMarketing/AmazonBookMarketingProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function AmazonBookMarketingPage() {
    return (
        <main>
            <AmazonBookMarketingHero />
            <AmazonBookMarketingAboutIntro />
            <AmazonBookMarketingProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}