import Hero from "@/components/home/hero";
import FeaturedProducts from "@/components/home/featured-products";
import Testimonials from "@/components/home/testimonials";
import Newsletter from "@/components/home/newsletter";
import Footer from "@/components/layout/footer";
import FloatingElements from "@/components/shared/floating-elements";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-lavender-50 to-fuchsia-50 relative overflow-hidden">
            <FloatingElements />
            <Hero />
            <FeaturedProducts />
            <Testimonials />
            <Newsletter />
            <Footer />
        </div>
    );
}
