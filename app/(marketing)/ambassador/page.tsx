"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingElements from "@/components/shared/floating-elements";
import {
    Crown,
    Star,
    Heart,
    Gift,
    Users,
    Camera,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

export default function AmbassadorPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        instagram: "",
        childAge: "",
        why: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This form is no longer used, but keeping the function for reference if needed elsewhere.
        console.log("Ambassador application (form removed from UI):", formData);
    };

    // New benefits content based on "Why Become an EmpowerHer Ambassadors?"
    const benefits = [
        {
            icon: <Gift className="w-8 h-8 text-purple-500" />,
            title: "Community Service",
            description:
                "Engage in meaningful community service initiatives, making a real difference.",
        },
        {
            icon: <Camera className="w-8 h-8 text-yellow-500" />,
            title: "Content Creation",
            description:
                "Showcase your unique journey and inspire others through creative content.",
        },
        {
            icon: <Users className="w-8 h-8 text-pink-500" />,
            title: "Events Participation",
            description:
                "Attend and lead exciting events, fostering connections and leadership.",
        },
    ];

    // New requirements content based on "How to Join Us"
    const requirements = [
        "Share your story and what empowerment means to you.",
        "Participate in our training and development workshops, and start making waves in your community.",
        "Get ready to be featured, sharing your journey and inspiring others.",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 relative overflow-hidden">
            <FloatingElements />
            <Header />

            {/* Hero Section - Updated Content */}
            <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <Crown className="w-20 h-20 text-yellow-300 animate-glow-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 rounded-full blur-2xl scale-150 animate-pulse"></div>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 drop-shadow-2xl">
                            EmpowerHer Ambassadors: The Heart of Melanated
                            Princess
                        </h1>

                        <p className="text-xl text-purple-100 leading-relaxed mb-12 sm:text-lg md:text-xl">
                            Welcome to the EmpowerHer Ambassadors program, a
                            radiant core of the Melanated Princess movement.
                            Here, we celebrate, empower, and unite girls and
                            young women of color from all walks of life, turning
                            individual stories into a powerful collective
                            narrative of strength, beauty, and resilience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-amber-500 hover:from-purple-800 hover:via-fuchsia-700 hover:to-amber-600 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl shadow-black/30 hover:shadow-black/40 transform hover:scale-105 transition-all duration-500 border-2 border-white/20 ring-2 ring-white/10"
                            >
                                <Crown className="w-6 h-6 mr-3" />
                                Join the Circle
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-3 border-white/60 text-white hover:bg-white/20 font-bold px-12 py-6 rounded-2xl backdrop-blur-xl bg-white/10 hover:border-white/80 shadow-xl shadow-black/20 ring-2 ring-white/20"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Become an EmpowerHer Ambassador? Section (using former Benefits structure) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full">
                            ✨ Why Become an EmpowerHer Ambassador?
                        </Badge>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                            Unleash Your Inner Leader
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            As part of our vibrant community, you&apos;ll wear
                            the Melanated Princess brand as a symbol of
                            empowerment and pride. But it&apos;s not just about
                            the apparel; it&apos;s about what you do in it. From
                            community service to content creation, and from
                            attending events to leading them, you&apos;ll have
                            endless opportunities to inspire and be inspired.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
                        {benefits.map((benefit, index) => (
                            <Card
                                key={index}
                                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/30 transform hover:-translate-y-2"
                            >
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shine Bright as a Featured Melanated Princess Section */}
            <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full">
                            💖 Shine Bright as a Featured Melanated Princess
                        </Badge>

                        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                            Your Story, Our Spotlight
                        </h2>

                        <p className="text-xl text-gray-600 sm:text-lg md:text-xl">
                            The most exciting part? We&apos;re committed to
                            keeping the Melanated Princess movement alive by
                            showcasing and highlighting different ambassadors.
                            Your stories, achievements, and impacts will be
                            celebrated across our platforms, shining a spotlight
                            on the incredible ways you&apos;re embodying the
                            essence of Melanated Princess in your communities
                            and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Join Us Section (using former Requirements structure) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full">
                                ✨ How to Join Us
                            </Badge>

                            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                                Ready to Make a Difference?
                            </h2>

                            <p className="text-xl text-gray-600 sm:text-lg md:text-xl">
                                Ready to make a difference and join a sisterhood
                                of empowering women? Here&apos;s how you can
                                start your journey:
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                            <div className="space-y-4">
                                {requirements.map((requirement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-gray-700 text-lg">
                                            {requirement}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Be the Spark & Contact Section (using former Application Form structure) */}
            <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
                        <Crown className="w-16 h-16 text-yellow-300 mx-auto mb-8 animate-glow-pulse" />

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 drop-shadow-2xl">
                            Be the Spark
                        </h2>

                        <p className="text-xl text-purple-100 mb-12 leading-relaxed sm:text-lg md:text-xl">
                            Join us and be the spark that keeps the Melanated
                            Princess movement glowing. Together, we&apos;ll turn
                            the spotlight on true beauty, strength, and
                            potential. Welcome to the family. Welcome to
                            empowerment. Welcome to the future.
                        </p>

                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                            onClick={() =>
                                (window.location.href =
                                    "mailto:info@melanatedprincess.com")
                            }
                        >
                            Contact us at info@melanatedprincess.com
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
