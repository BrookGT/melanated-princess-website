"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingElements from "@/components/shared/floating-elements";
import { Star, Heart, ShoppingCart, Eye, Search, Crown } from "lucide-react";

export default function RoyaltyCollectionPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const products = [
        {
            id: 1,
            name: "Royal Crown Princess Dress",
            price: 89.99,
            originalPrice: 109.99,
            rating: 4.9,
            reviews: 156,
            image: "/assets/h2.jpg",
            badge: "Bestseller",
            badgeColor: "from-gold-400 to-amber-500",
            description: "Luxurious princess dress with crown embellishments",
        },
        {
            id: 2,
            name: "Majestic Queen Gown",
            price: 124.99,
            originalPrice: 149.99,
            rating: 5.0,
            reviews: 89,
            image: "/assets/HB 2.jpg",
            badge: "Premium",
            badgeColor: "from-purple-500 to-pink-600",
            description: "Elegant floor-length gown for special occasions",
        },
        {
            id: 3,
            name: "Royal Court Ensemble",
            price: 199.99,
            originalPrice: 249.99,
            rating: 4.8,
            reviews: 124,
            image: "/assets/H1.jpg",
            badge: "Exclusive",
            badgeColor: "from-teal-400 to-cyan-500",
            description: "Complete royal outfit with accessories",
        },
        {
            id: 4,
            name: "Princess Tiara Set",
            price: 64.99,
            originalPrice: 79.99,
            rating: 4.7,
            reviews: 203,
            image: "/assets/HB 3.jpg",
            badge: "Popular",
            badgeColor: "from-fuchsia-400 to-pink-500",
            description: "Sparkling tiara with matching jewelry",
        },
    ];

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 relative overflow-hidden">
            <FloatingElements />
            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="text-center text-white">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <Crown className="w-20 h-20 text-yellow-300 animate-glow-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 rounded-full blur-2xl scale-150 animate-pulse"></div>
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
                            Royalty Collection
                        </h1>
                        <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                            Discover our most prestigious pieces designed for
                            true royalty. Each item in this collection embodies
                            elegance, luxury, and the regal spirit every
                            princess deserves ✨
                        </p>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-purple-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />
                            <Input
                                type="text"
                                placeholder="Search royal collection..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 pr-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-400 bg-white/90 backdrop-blur-sm shadow-lg text-gray-800 placeholder-gray-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <Card
                                key={product.id}
                                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/20"
                            >
                                <div className="relative overflow-hidden rounded-t-3xl">
                                    <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-4">
                                        <Image
                                            src={
                                                product.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={product.name}
                                            width={400}
                                            height={400}
                                            className="w-full h-72 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 shadow-lg"
                                        />
                                        <div className="absolute inset-4 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    <Badge
                                        className={`absolute top-6 left-6 bg-gradient-to-r ${product.badgeColor} text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/30`}
                                    >
                                        {product.badge}
                                    </Badge>

                                    <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                                        <Button
                                            size="icon"
                                            variant="secondary"
                                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border border-white/30 hover:scale-110 transition-all duration-300"
                                        >
                                            <Heart className="w-5 h-5 text-pink-500" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="secondary"
                                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border border-white/30 hover:scale-110 transition-all duration-300"
                                        >
                                            <Eye className="w-5 h-5 text-purple-500" />
                                        </Button>
                                    </div>
                                </div>

                                <CardContent className="p-8 bg-white/90 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 transition-all duration-300 ${
                                                        i <
                                                        Math.floor(
                                                            product.rating
                                                        )
                                                            ? "fill-yellow-400 text-yellow-400 scale-110"
                                                            : "text-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">
                                            ({product.reviews})
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-4">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-2xl font-bold text-purple-600">
                                            ${product.price}
                                        </span>
                                        <span className="text-lg text-gray-400 line-through">
                                            ${product.originalPrice}
                                        </span>
                                        <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                                            Save $
                                            {(
                                                product.originalPrice -
                                                product.price
                                            ).toFixed(2)}
                                        </Badge>
                                    </div>

                                    <div className="flex gap-3">
                                        <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-2xl shadow-xl shadow-purple-200/50 hover:shadow-purple-300/60 transform hover:scale-105 transition-all duration-500">
                                            <ShoppingCart className="w-5 h-5 mr-2" />
                                            Add to Cart
                                        </Button>
                                        <Link
                                            href={`/shop/product/${product.id}`}
                                        >
                                            <Button
                                                variant="outline"
                                                className="px-6 py-3 rounded-2xl border-2 border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                                            >
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-12 h-12 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                No products found
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Try adjusting your search criteria
                            </p>
                            <Button
                                onClick={() => setSearchTerm("")}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-2xl"
                            >
                                Clear Search
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
