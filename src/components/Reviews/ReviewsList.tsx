import Testimonials, { type Testimonial } from "./ReviewsTestimonial";
import { reviews } from "@/lib/reviewsData";

interface ReviewsListProps {
    label?: string;
    title?: string;
    items?: Testimonial[];
}

export default function ReviewsList({
    label = "Testimonials",
    title = "What Families & Authors Say About Kiddli Publishing",
    items = reviews,
}: ReviewsListProps) {
    return (
        <div id="reviews">
            <Testimonials label={label} title={title} testimonials={items} />
        </div>
    );
}