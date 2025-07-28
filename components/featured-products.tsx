"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Eye, Zap, ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    const products = [
        {
            id: 1,
            name: "Royal Crown Headband",
            price: 24.99,
            originalPrice: 29.99,
            rating: 4.8,
            reviews: 124,
            image: "/placeholder.svg?height=400&width=400",
            badge: "Bestseller",
            badgeColor: "from-green-400 to-emerald-500",
        },
        {
            id: 2,
            name: "Princess Curl Cream",
            price: 18.99,
            originalPrice: 22.99,
            rating: 4.9,
            reviews: 89,
            image: "/placeholder.svg?height=400&width=400",
            badge: "New",
            badgeColor: "from-blue-400 to-cyan-500",
        },
        {
            id: 3,
            name: "Sparkle Hair Accessories Set",
            price: 32.99,
            originalPrice: 39.99,
            rating: 4.7,
            reviews: 156,
            image: "/placeholder.svg?height=400&width=400",
            badge: "Sale",
            badgeColor: "from-red-400 to-pink-500",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-teal-50 via-fuchsia-50 to-lavender-50 relative overflow-hidden">
            {/* Liquid Glass Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-teal-400/15 via-fuchsia-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 right-32 w-32 h-32 bg-gradient-to-br from-gold-400/15 via-teal-400/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-fuchsia-400/20 via-teal-400/15 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-20">
                    <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full shadow-lg shadow-teal-200/50 backdrop-blur-sm border border-teal-300/30">
                        ✨ Featured Products
                    </Badge>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 via-fuchsia-600 to-gold-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
                        Crown Your Beauty
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our most loved products designed to make every
                        young queen feel beautiful, confident, and absolutely
                        radiant ✨
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div className="relative overflow-hidden rounded-t-3xl">
                                {/* Liquid Glass Image Container */}
                                <div className="relative bg-gradient-to-br from-lavender-50 to-fuchsia-50 p-4">
                                    <Image
                                        src={
                                            product.image || "/placeholder.svg"
                                        }
                                        alt={product.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-72 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 shadow-lg"
                                    />

                                    {/* Liquid Glass Overlay */}
                                    <div className="absolute inset-4 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Badge with Liquid Glass */}
                                <Badge
                                    className={`absolute top-6 left-6 bg-gradient-to-r ${product.badgeColor} text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/30`}
                                >
                                    {product.badge}
                                </Badge>

                                {/* Action Buttons */}
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
                                {/* Rating */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 transition-all duration-300 ${
                                                    i <
                                                    Math.floor(product.rating)
                                                        ? "fill-yellow-400 text-yellow-400 scale-110"
                                                        : "text-gray-300"
                                                }`}
                                                style={{
                                                    animationDelay: `${
                                                        i * 100
                                                    }ms`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600 font-medium">
                                        ({product.reviews} reviews)
                                    </span>
                                </div>

                                {/* Product Name */}
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                                    {product.name}
                                </h3>

                                {/* Price */}
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

                                {/* Add to Cart Button with Liquid Glass */}
                                <Button className="w-full bg-gradient-to-r from-teal-500 to-fuchsia-500 hover:from-teal-600 hover:to-fuchsia-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-teal-200/50 hover:shadow-teal-300/60 transform hover:scale-105 transition-all duration-500 backdrop-blur-sm border border-teal-300/30 group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative flex items-center justify-center gap-3">
                                        <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                                        Add to Cart
                                        {hoveredProduct === product.id && (
                                            <Zap className="w-4 h-4 animate-pulse" />
                                        )}
                                    </span>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-teal-300 text-teal-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-fuchsia-50 font-bold px-10 py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                    >
                        <span className="flex items-center gap-3">
                            View All Products
                            <ArrowRight className="w-5 h-5" />
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}
