import Header from "@/components/header";
import Hero from "@/components/hero";
import PromoBar from "@/components/promo-bar";
import FeaturedProducts from "@/components/featured-products";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";

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
