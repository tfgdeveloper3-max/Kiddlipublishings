import Footer from "@/components/Footer";
import ReviewsHero from "@/components/Reviews/ReviewsHero";
import ReviewsList from "@/components/Reviews/ReviewsList";

export default function ReviewPage() {
    return (
        <main>
            <ReviewsHero />
            <ReviewsList />
            <Footer />
        </main>
    );
}