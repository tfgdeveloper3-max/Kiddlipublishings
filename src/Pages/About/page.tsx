import AboutHero from "@/components/About/AboutHero";
import AboutProcess from "@/components/About/AboutProcess";
import AboutStory from "@/components/About/AboutStory";
import AboutTestimonials from "@/components/About/AboutTestimonials";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutStory />
            <AboutProcess />
            <AboutTestimonials />
            <Footer />
        </main>
    );
}