import ServiceFeatures from "@/components/Services/ServiceFeatures";
import ServiceHero from "@/components/Services/ServiceHero";
import Footer from "@/components/Footer";
import ServiceCounter from "@/components/Services/ServiceCounter";
import ServicePortfolio from "@/components/Services/ServicePortfolio";
import Partners from "@/components/Partners";
import ServiceIllustrations from "@/components/Services/ServiceIllustrations";

export default function ServicePage() {
    return (
        <main>
            <ServiceHero />
            <ServiceFeatures />
            <ServiceCounter />
            <ServicePortfolio />
            <Partners />
            <ServiceIllustrations />
            <Footer />
        </main>
    );
}