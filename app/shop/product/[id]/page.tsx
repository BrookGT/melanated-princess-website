import ProductClient from "./ProductClient";

// Define the shape of your dynamic route parameters.
interface ProductPageParams {
    id: string;
}

// Define the full props object that Next.js provides to the page component.
// It includes params and an optional searchParams object.
interface ProductPageProps {
    params: ProductPageParams;
    searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ProductPage({ params }: ProductPageProps) {
    const allProducts = [
        // Your product data array is here
        {
            id: "1",
            name: "Royal Crown Headband",
            price: 24.99,
            originalPrice: 29.99,
            rating: 4.8,
            reviews: 124,
            description:
                "Transform your little princess into royalty with our stunning Royal Crown Headband. Crafted with premium materials and adorned with sparkling gems, this headband is designed to make every young queen feel confident and beautiful. Perfect for special occasions, dress-up play, or everyday royal moments.",
            features: [
                "Premium quality materials",
                "Comfortable adjustable fit",
                "Sparkling crystal details",
                "Hypoallergenic metals",
                "Ages 3-12 suitable",
            ],
            ingredients: [
                "Hypoallergenic metal base",
                "Premium rhinestones",
                "Soft fabric padding",
                "Adjustable elastic band",
            ],
            images: [
                "/assets/profile1.jpg",
                "/assets/profile2.jpg",
                "/assets/profile3.jpg",
                "/assets/004.jpg",
            ],
            badge: "Bestseller",
            badgeColor: "from-green-400 to-emerald-500",
            inStock: true,
            category: "accessories",
        },
        {
            id: "2",
            name: "Princess Curl Cream",
            price: 18.99,
            originalPrice: 22.99,
            rating: 4.9,
            reviews: 89,
            description:
                "A nourishing curl cream for defined, frizz-free curls. Made with natural ingredients for delicate hair.",
            features: [
                "Defines curls",
                "Reduces frizz",
                "Hydrating formula",
                "Natural ingredients",
                "For all curl types",
            ],
            ingredients: [
                "Shea butter",
                "Coconut oil",
                "Aloe vera",
                "Jojoba oil",
            ],
            images: ["/assets/005.jpg", "/assets/006.jpg"],
            badge: "New Arrival",
            badgeColor: "from-blue-400 to-cyan-500",
            inStock: true,
            category: "haircare",
        },
        {
            id: "3",
            name: "Sparkle Hair Set",
            price: 32.99,
            originalPrice: 39.99,
            rating: 4.7,
            reviews: 156,
            description:
                "A magical hair accessory set with sparkling clips and ties to add a touch of glitter to any hairstyle.",
            features: [
                "Sparkling designs",
                "Gentle on hair",
                "Variety of clips and ties",
                "Perfect for parties",
                "Durable materials",
            ],
            ingredients: [],
            images: ["/assets/008.jpg", "/assets/0010.jpg"],
            badge: "Popular",
            badgeColor: "from-pink-400 to-purple-500",
            inStock: true,
            category: "accessories",
        },
        {
            id: "4",
            name: "Royal Treatment Oil",
            price: 21.99,
            originalPrice: 26.99,
            rating: 4.8,
            reviews: 98,
            description:
                "A lightweight, nourishing hair oil that adds shine and softness without greasiness. Perfect for a royal touch.",
            features: [
                "Adds shine",
                "Softens hair",
                "Non-greasy formula",
                "Protects from damage",
                "Subtle fragrance",
            ],
            ingredients: ["Argan oil", "Jojoba oil", "Vitamin E"],
            images: ["/assets/0014.jpg", "/assets/0016.jpg"],
            badge: "Must-Have",
            badgeColor: "from-gold-400 to-amber-500",
            inStock: true,
            category: "haircare",
        },
    ];

    const reviews = [
        // Your review data array is here
        {
            id: 1,
            name: "Sarah M.",
            rating: 5,
            text: "My daughter absolutely loves this crown! The quality is amazing and it fits perfectly. She wears it everywhere and feels like a real princess.",
            image: "/assets/profile1.jpg",
            role: "Customer",
            location: "New York, NY",
        },
        {
            id: 2,
            name: "Jessica L.",
            rating: 5,
            text: "Beautiful headband! The crystals are so sparkly and it's very well made. Worth every penny to see my little girl's confidence shine.",
            image: "/assets/profile2.jpg",
            role: "Customer",
            location: "Los Angeles, CA",
        },
        {
            id: 3,
            name: "Michelle K.",
            rating: 4,
            text: "Great quality and my daughter loves it. Only wish it came in more colors, but the gold is gorgeous!",
            image: "/assets/profile3.jpg",
            role: "Customer",
            location: "Chicago, IL",
        },
    ];

    const product = allProducts.find((p) => p.id === params.id);
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Product Not Found
                </h1>
            </div>
        );
    }
    const relatedProducts = allProducts.filter(
        (p) => p.category === product.category && p.id !== product.id
    );
    return (
        <ProductClient
            product={product}
            relatedProducts={relatedProducts}
            reviews={reviews}
        />
    );
}
