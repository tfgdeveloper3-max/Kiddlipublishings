import Footer from "@/components/Footer";
import BookFairsAboutIntro from "@/components/InnerServices/BookFairs/BookFairsAbout";
import BookFairsHero from "@/components/InnerServices/BookFairs/BookFairsHero";
import BookFairsProcess from "@/components/InnerServices/BookFairs/BookFairsProcess";
import ServicesPortfolio from "@/components/InnerServices/ServicesPortfolio";

export default function BookFairsPage() {
    return (
        <main>
            <BookFairsHero />
            <BookFairsAboutIntro />
            <BookFairsProcess />
            <ServicesPortfolio />
            <Footer />
        </main>
    );
}