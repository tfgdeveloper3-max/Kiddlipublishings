import Services from "@/components/landing/Services";
import Hero from "../../components/landing/Hero";
import About from "@/components/landing/About";
import Portfolio from "@/components/landing/Portfolio";
import Process from "@/components/landing/Process";
import Illustrations from "@/components/landing/Illustrations";
import Partners from "@/components/Partners";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <main>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Process />
            <Illustrations />
            <Partners />
            <Testimonials />
            <Footer />
        </main>
    );
}