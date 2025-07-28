"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";
import {
    Star,
    Heart,
    ShoppingCart,
    Minus,
    Plus,
    Shield,
    Truck,
    RotateCcw,
    Sparkles,
    ChevronLeft,
} from "lucide-react";

export default function ProductPage({ params }: { params: { id: string } }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    // Mock product data - in real app, fetch based on params.id
    const product = {
        id: 1,
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
            "/placeholder.svg?height=600&width=600&text=Crown+Headband+1",
            "/placeholder.svg?height=600&width=600&text=Crown+Headband+2",
            "/placeholder.svg?height=600&width=600&text=Crown+Headband+3",
            "/placeholder.svg?height=600&width=600&text=Crown+Headband+4",
        ],
        badge: "Bestseller",
        badgeColor: "from-green-400 to-emerald-500",
        inStock: true,
        category: "accessories",
    };

    const relatedProducts = [
        {
            id: 2,
            name: "Princess Curl Cream",
            price: 18.99,
            image: "/placeholder.svg?height=300&width=300",
            rating: 4.9,
        },
        {
            id: 3,
            name: "Sparkle Hair Set",
            price: 32.99,
            image: "/placeholder.svg?height=300&width=300",
            rating: 4.7,
        },
        {
            id: 4,
            name: "Royal Treatment Oil",
            price: 21.99,
            image: "/placeholder.svg?height=300&width=300",
            rating: 4.8,
        },
    ];

    const reviews = [
        {
            name: "Sarah M.",
            rating: 5,
            date: "2 weeks ago",
            comment:
                "My daughter absolutely loves this crown! The quality is amazing and it fits perfectly. She wears it everywhere and feels like a real princess.",
            verified: true,
        },
        {
            name: "Jessica L.",
            rating: 5,
            date: "1 month ago",
            comment:
                "Beautiful headband! The crystals are so sparkly and it's very well made. Worth every penny to see my little girl's confidence shine.",
            verified: true,
        },
        {
            name: "Michelle K.",
            rating: 4,
            date: "3 weeks ago",
            comment:
                "Great quality and my daughter loves it. Only wish it came in more colors, but the gold is gorgeous!",
            verified: true,
        },
    ];

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () =>
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 relative overflow-hidden">
            <FloatingElements />
            <Header />

            {/* Breadcrumb */}
            <section className="pt-24 pb-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link
                            href="/"
                            className="hover:text-purple-600 transition-colors"
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <Link
                            href="/shop"
                            className="hover:text-purple-600 transition-colors"
                        >
                            Shop
                        </Link>
                        <span>/</span>
                        <span className="text-purple-600 font-medium">
                            {product.name}
                        </span>
                    </div>

                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 mt-4 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to Shop
                    </Link>
                </div>
            </section>

            {/* Product Details */}
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Product Images */}
                        <div className="space-y-6">
                            {/* Main Image */}
                            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-4 border border-white/30 shadow-2xl">
                                <Image
                                    src={
                                        product.images[selectedImage] ||
                                        "/placeholder.svg"
                                    }
                                    alt={product.name}
                                    width={600}
                                    height={600}
                                    className="w-full h-96 sm:h-[500px] object-cover rounded-2xl shadow-xl"
                                />

                                {product.badge && (
                                    <Badge
                                        className={`absolute top-8 left-8 bg-gradient-to-r ${product.badgeColor} text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg`}
                                    >
                                        {product.badge}
                                    </Badge>
                                )}
                            </div>

                            {/* Thumbnail Images */}
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                                            selectedImage === index
                                                ? "border-purple-400 shadow-lg scale-105"
                                                : "border-gray-200 hover:border-purple-300"
                                        }`}
                                    >
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${product.name} ${index + 1}`}
                                            width={150}
                                            height={150}
                                            className="w-full h-20 sm:h-24 object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-8">
                            {/* Title and Rating */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                                    {product.name}
                                </h1>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${
                                                        i <
                                                        Math.floor(
                                                            product.rating
                                                        )
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-600 font-medium">
                                            ({product.reviews} reviews)
                                        </span>
                                    </div>

                                    {product.inStock && (
                                        <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                                            In Stock
                                        </Badge>
                                    )}
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-4">
                                <span className="text-4xl font-bold text-purple-600">
                                    ${product.price}
                                </span>
                                <span className="text-2xl text-gray-400 line-through">
                                    ${product.originalPrice}
                                </span>
                                <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full">
                                    Save $
                                    {(
                                        product.originalPrice - product.price
                                    ).toFixed(2)}
                                </Badge>
                            </div>

                            {/* Description */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {product.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-purple-500" />
                                    Key Features
                                </h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-3 text-gray-700"
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-lg font-semibold text-gray-800">
                                        Quantity:
                                    </span>
                                    <div className="flex items-center bg-white rounded-2xl border-2 border-purple-200 shadow-lg">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={decreaseQuantity}
                                            className="w-12 h-12 rounded-l-2xl hover:bg-purple-50"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </Button>
                                        <span className="w-16 text-center font-semibold text-lg">
                                            {quantity}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={increaseQuantity}
                                            className="w-12 h-12 rounded-r-2xl hover:bg-purple-50"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-purple-200/50 hover:shadow-purple-300/60 transform hover:scale-105 transition-all duration-500"
                                    >
                                        <ShoppingCart className="w-5 h-5 mr-3" />
                                        Add to Cart - $
                                        {(product.price * quantity).toFixed(2)}
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="px-6 py-4 rounded-2xl border-2 border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                                    >
                                        <Heart className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
                                    <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                    <p className="text-sm font-semibold text-gray-800">
                                        Safe & Natural
                                    </p>
                                </div>

                                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
                                    <Truck className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                    <p className="text-sm font-semibold text-gray-800">
                                        Free Shipping
                                    </p>
                                </div>

                                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
                                    <RotateCcw className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                    <p className="text-sm font-semibold text-gray-800">
                                        30-Day Returns
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-16 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                            Customer Reviews
                        </h2>

                        <div className="space-y-6">
                            {reviews.map((review, index) => (
                                <Card
                                    key={index}
                                    className="border-0 shadow-lg bg-white/80 backdrop-blur-xl rounded-2xl border border-white/30"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h4 className="font-semibold text-gray-800">
                                                        {review.name}
                                                    </h4>
                                                    {review.verified && (
                                                        <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                                            Verified Purchase
                                                        </Badge>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className={`w-4 h-4 ${
                                                                        i <
                                                                        review.rating
                                                                            ? "fill-yellow-400 text-yellow-400"
                                                                            : "text-gray-300"
                                                                    }`}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                    <span className="text-sm text-gray-500">
                                                        {review.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            {review.comment}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-4">
                            You Might Also Love
                        </h2>
                        <p className="text-gray-600">
                            Complete your royal collection
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedProducts.map((relatedProduct) => (
                            <Card
                                key={relatedProduct.id}
                                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 transform hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden rounded-t-3xl">
                                    <Image
                                        src={
                                            relatedProduct.image ||
                                            "/placeholder.svg"
                                        }
                                        alt={relatedProduct.name}
                                        width={300}
                                        height={300}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${
                                                        i <
                                                        Math.floor(
                                                            relatedProduct.rating
                                                        )
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            ({relatedProduct.rating})
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                                        {relatedProduct.name}
                                    </h3>
                                    <p className="text-2xl font-bold text-purple-600 mb-4">
                                        ${relatedProduct.price}
                                    </p>

                                    <Link
                                        href={`/shop/product/${relatedProduct.id}`}
                                    >
                                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                                            View Product
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
