"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Heart, Crown } from "lucide-react";

export default function Testimonials() {
    const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
        null
    );

    const testimonials = [
        {
            id: 1,
            name: "Maya Johnson",
            role: "Mother of Princess Zoe (Age 8)",
            rating: 5,
            text: "My daughter absolutely loves her crown headband! It makes her feel so confident and beautiful. The quality is amazing and it's become her favorite accessory. She wears it everywhere! 👑",
            image: "/placeholder.svg?height=80&width=80",
            location: "Atlanta, GA",
        },
        {
            id: 2,
            name: "Keisha Williams",
            role: "Mother of Princess Ava (Age 6)",
            rating: 5,
            text: "The curl cream works wonders on my daughter's natural hair. It's gentle, smells amazing, and keeps her curls defined all day. Finally, a product made just for us! ✨",
            image: "/placeholder.svg?height=80&width=80",
            location: "Houston, TX",
        },
        {
            id: 3,
            name: "Jasmine Davis",
            role: "Mother of Princess Nyla (Age 10)",
            rating: 5,
            text: "Finally, a brand that celebrates our daughters' natural beauty! The products are high quality and the message is empowering. My daughter feels like royalty every day! 💕",
            image: "/placeholder.svg?height=80&width=80",
            location: "Chicago, IL",
        },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Liquid Glass Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-32 right-20 w-36 h-36 bg-gradient-to-br from-lavender-400/8 via-fuchsia-400/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-32 w-28 h-28 bg-gradient-to-br from-gold-400/12 via-teal-400/8 to-transparent rounded-full blur-2xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-fuchsia-400/15 via-lavender-400/10 to-transparent rounded-full blur-xl animate-pulse delay-300"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-20">
                    <Badge className="bg-gradient-to-r from-lavender-500 to-fuchsia-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full shadow-lg shadow-lavender-200/50 backdrop-blur-sm border border-lavender-300/30">
                        💬 Testimonials
                    </Badge>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-lavender-600 via-fuchsia-600 to-gold-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
                        Royal Reviews
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        See what other royal families are saying about our
                        products and the confidence they bring to their little
                        princesses ✨
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-lavender-50/80 via-fuchsia-50/80 to-white/80 backdrop-blur-xl rounded-3xl border border-white/30 transform hover:-translate-y-2 hover:scale-105"
                            onMouseEnter={() =>
                                setHoveredTestimonial(testimonial.id)
                            }
                            onMouseLeave={() => setHoveredTestimonial(null)}
                        >
                            <CardContent className="p-8 relative">
                                {/* Liquid Glass Quote Icon */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-fuchsia-400 rounded-full flex items-center justify-center shadow-lg shadow-lavender-200/50 backdrop-blur-sm border border-lavender-300/30">
                                            <Quote className="w-6 h-6 text-white" />
                                        </div>
                                        {hoveredTestimonial ===
                                            testimonial.id && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-lg scale-150 animate-pulse"></div>
                                        )}
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse hover:scale-125 transition-transform duration-300"
                                                    style={{
                                                        animationDelay: `${
                                                            i * 100
                                                        }ms`,
                                                    }}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 text-lg mb-8 italic leading-relaxed font-medium">
                                    "{testimonial.text}"
                                </p>

                                {/* Customer Info with Liquid Glass */}
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-amber-400 p-0.5 shadow-lg shadow-purple-200/50">
                                            <Image
                                                src={
                                                    testimonial.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={testimonial.name}
                                                width={64}
                                                height={64}
                                                className="w-full h-full rounded-full object-cover border-2 border-white"
                                            />
                                        </div>

                                        {/* Floating Crown for VIP customers */}
                                        <div className="absolute -top-1 -right-1 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full p-1 shadow-md animate-glow-pulse">
                                            <Crown className="w-3 h-3 text-white" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 text-lg">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-purple-600 font-medium mb-1">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                            📍 {testimonial.location}
                                        </p>
                                    </div>

                                    {/* Love Icon */}
                                    <div className="text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Heart className="w-6 h-6 animate-pulse" />
                                    </div>
                                </div>

                                {/* Liquid Glass Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-50/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-20 text-center">
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-lavender-100">
                            <Crown className="w-5 h-5 text-gold-500" />
                            <span className="font-semibold">
                                10,000+ Happy Families
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-lavender-100">
                            <Star className="w-5 h-5 text-gold-500" />
                            <span className="font-semibold">
                                4.9/5 Average Rating
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-lavender-100">
                            <Heart className="w-5 h-5 text-fuchsia-500" />
                            <span className="font-semibold">
                                Made with Love
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
