import { Product } from "@/types/product";

export const FEATURED_PRODUCTS_SECTION = {
    badge: "✨ Featured Products",
    title: "Crown Your Beauty",
    description:
        "Discover our most loved products designed to make every young queen feel beautiful, confident, and absolutely radiant ✨",
    viewAllButton: "View All Products",
};

export const FEATURED_PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Premium Fleece Hoodie",
        price: 24.99,
        originalPrice: 29.99,
        rating: 4.8,
        reviews: 124,
        image: "/assets/B1.jpg",
        badge: "Bestseller",
        badgeColor: "from-green-400 to-emerald-500",
    },
    {
        id: 2,
        name: "Classic Comfort Trousers",
        price: 18.99,
        originalPrice: 22.99,
        rating: 4.9,
        reviews: 89,
        image: "/assets/B2.jpg",
        badge: "New",
        badgeColor: "from-blue-400 to-cyan-500",
    },
    {
        id: 3,
        name: "Soft Cotton T-shirt",
        price: 32.99,
        originalPrice: 39.99,
        rating: 4.7,
        reviews: 156,
        image: "/assets/H1.jpg",
        badge: "Sale",
        badgeColor: "from-red-400 to-pink-500",
    },
];
