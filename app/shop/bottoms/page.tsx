"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";
import { Star, Heart, ShoppingCart, Eye, Search, Zap } from "lucide-react";

export default function BottomsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    const products = [
        {
            id: 1,
            name: "Royal Leggings",
            price: 29.99,
            originalPrice: 36.99,
            rating: 4.8,
            reviews: 167,
            image: "/placeholder.svg?height=400&width=400&text=Royal+Leggings",
            badge: "Bestseller",
            badgeColor: "from-purple-400 to-indigo-500",
            description: "Comfortable leggings with royal crown pattern",
        },
        {
            id: 2,
            name: "Princess Tutu Skirt",
            price: 39.99,
            originalPrice: 47.99,
            rating: 4.9,
            reviews: 134,
            image: "/placeholder.svg?height=400&width=400&text=Tutu+Skirt",
            badge: "New",
            badgeColor: "from-pink-400 to-rose-500",
            description: "Fluffy tutu perfect for twirling princesses",
        },
        {
            id: 3,
            name: "Confidence Joggers",
            price: 34.99,
            originalPrice: 42.99,
            rating: 4.7,
            reviews: 198,
            image: "/placeholder.svg?height=400&width=400&text=Confidence+Joggers",
            badge: "Comfort",
            badgeColor: "from-teal-400 to-cyan-500",
            description: "Soft joggers for active young queens",
        },
        {
            id: 4,
            name: "Sparkle Shorts",
            price: 24.99,
            originalPrice: 29.99,
            rating: 4.6,
            reviews: 156,
            image: "/placeholder.svg?height=400&width=400&text=Sparkle+Shorts",
            badge: "Summer",
            badgeColor: "from-yellow-400 to-amber-500",
            description: "Glittery shorts perfect for summer adventures",
        },
        {
            id: 5,
            name: "Majestic Palazzo Pants",
            price: 44.99,
            originalPrice: 54.99,
            rating: 4.8,
            reviews: 89,
            image: "/placeholder.svg?height=400&width=400&text=Palazzo+Pants",
            badge: "Elegant",
            badgeColor: "from-lavender-400 to-purple-500",
            description: "Flowy palazzo pants for graceful movement",
        },
        {
            id: 6,
            name: "Queen Denim Jeans",
            price: 49.99,
            originalPrice: 59.99,
            rating: 5.0,
            reviews: 76,
            image: "/placeholder.svg?height=400&width=400&text=Queen+Jeans",
            badge: "Classic",
            badgeColor: "from-blue-400 to-indigo-500",
            description: "Premium denim with empowering embroidery",
        },
    ];

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50 relative overflow-hidden">
            <FloatingElements />
            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="text-center text-white">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <Zap className="w-20 h-20 text-teal-300 animate-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-purple-400/30 rounded-full blur-2xl scale-150 animate-pulse"></div>
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
                            Bottoms Collection
                        </h1>
                        <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
                            Complete your royal look with our comfortable and
                            stylish bottoms. From playful skirts to cozy
                            joggers, find the perfect fit for every adventure 💫
                        </p>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-teal-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Search bottoms..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 pr-4 py-3 rounded-2xl border-2 border-teal-200 focus:border-teal-400 bg-white/90 backdrop-blur-sm shadow-lg"
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
                                onMouseEnter={() =>
                                    setHoveredProduct(product.id)
                                }
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <div className="relative overflow-hidden rounded-t-3xl">
                                    <div className="relative bg-gradient-to-br from-teal-50 to-purple-50 p-4">
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

                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-4">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-2xl font-bold text-teal-600">
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
                                        <Button className="flex-1 bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white font-bold py-3 rounded-2xl shadow-xl shadow-teal-200/50 hover:shadow-teal-300/60 transform hover:scale-105 transition-all duration-500">
                                            <ShoppingCart className="w-5 h-5 mr-2" />
                                            Add to Cart
                                        </Button>
                                        <Link
                                            href={`/shop/product/${product.id}`}
                                        >
                                            <Button
                                                variant="outline"
                                                className="px-6 py-3 rounded-2xl border-2 border-teal-300 text-teal-600 hover:bg-teal-50 bg-transparent"
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
                            <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-12 h-12 text-teal-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                No products found
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Try adjusting your search criteria
                            </p>
                            <Button
                                onClick={() => setSearchTerm("")}
                                className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-8 py-3 rounded-2xl"
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
