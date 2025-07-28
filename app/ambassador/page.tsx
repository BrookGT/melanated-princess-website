"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";
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

    const benefits = [
        {
            icon: <Gift className="w-8 h-8 text-purple-500" />,
            title: "Free Products",
            description:
                "Receive our latest products before anyone else, completely free!",
        },
        {
            icon: <Crown className="w-8 h-8 text-yellow-500" />,
            title: "Exclusive Discounts",
            description:
                "Get 30% off all purchases and exclusive ambassador-only deals",
        },
        {
            icon: <Camera className="w-8 h-8 text-pink-500" />,
            title: "Content Creation",
            description:
                "Share your princess's journey and inspire other families",
        },
        {
            icon: <Users className="w-8 h-8 text-blue-500" />,
            title: "Community Access",
            description:
                "Join our private ambassador community and connect with other royal families",
        },
        {
            icon: <Star className="w-8 h-8 text-amber-500" />,
            title: "Early Access",
            description: "Be the first to try new products and give feedback",
        },
        {
            icon: <Heart className="w-8 h-8 text-rose-500" />,
            title: "Recognition",
            description: "Get featured on our social media and website",
        },
    ];

    const requirements = [
        "Have a child aged 3-12 who loves our products",
        "Active on social media (Instagram preferred)",
        "Passionate about natural hair care and self-love",
        "Willing to create authentic content monthly",
        "Committed to our brand values and mission",
    ];

    const currentAmbassadors = [
        {
            name: "Princess Zara & Mom Sarah",
            location: "Atlanta, GA",
            image: "/placeholder.svg?height=300&width=300",
            quote: "Being a Melanated Princess ambassador has been amazing! Zara loves trying new products and sharing her hair journey.",
            followers: "12K",
        },
        {
            name: "Princess Maya & Mom Jessica",
            location: "Houston, TX",
            image: "/placeholder.svg?height=300&width=300",
            quote: "This program helped Maya embrace her natural curls and build so much confidence. We love being part of this community!",
            followers: "8K",
        },
        {
            name: "Princess Ava & Mom Michelle",
            location: "Chicago, IL",
            image: "/placeholder.svg?height=300&width=300",
            quote: "The products are incredible and the ambassador family is so supportive. Ava feels like a true princess every day!",
            followers: "15K",
        },
    ];

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
        // Handle form submission
        console.log("Ambassador application:", formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 relative overflow-hidden">
            <FloatingElements />
            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <Crown className="w-20 h-20 text-yellow-300 animate-glow-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 rounded-full blur-2xl scale-150 animate-pulse"></div>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 drop-shadow-2xl">
                            Become a Brand Ambassador
                        </h1>

                        <p className="text-xl text-purple-100 leading-relaxed mb-12">
                            Join our royal family and help us celebrate the
                            beauty and confidence of young melanated princesses
                            around the world 👑✨
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-amber-500 hover:from-purple-800 hover:via-fuchsia-700 hover:to-amber-600 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl shadow-black/30 hover:shadow-black/40 transform hover:scale-105 transition-all duration-500 border-2 border-white/20 ring-2 ring-white/10"
                            >
                                <Crown className="w-6 h-6 mr-3" />
                                Apply Now
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

            {/* Benefits Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full">
                            ✨ Ambassador Benefits
                        </Badge>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                            Royal Perks Await
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enjoy exclusive benefits while helping us spread the
                            message of self-love and natural beauty
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            {/* Current Ambassadors */}
            <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full">
                            👑 Meet Our Ambassadors
                        </Badge>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                            Our Royal Family
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See how our amazing ambassador families are
                            spreading joy and confidence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {currentAmbassadors.map((ambassador, index) => (
                            <Card
                                key={index}
                                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 transform hover:-translate-y-4 overflow-hidden"
                            >
                                <div className="relative">
                                    <Image
                                        src={
                                            ambassador.image ||
                                            "/placeholder.svg"
                                        }
                                        alt={ambassador.name}
                                        width={300}
                                        height={300}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {ambassador.followers} followers
                                    </div>
                                </div>

                                <CardContent className="p-8">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {ambassador.name}
                                    </h3>
                                    <p className="text-purple-600 font-medium mb-4">
                                        📍 {ambassador.location}
                                    </p>
                                    <p className="text-gray-600 italic leading-relaxed">
                                        "{ambassador.quote}"
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full">
                                📋 Requirements
                            </Badge>

                            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                                What We're Looking For
                            </h2>

                            <p className="text-xl text-gray-600">
                                We're seeking passionate families who align with
                                our mission and values
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

            {/* Application Form */}
            <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full">
                                📝 Apply Now
                            </Badge>

                            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                                Join Our Royal Family
                            </h2>

                            <p className="text-xl text-gray-600">
                                Fill out the form below and we'll be in touch
                                within 48 hours!
                            </p>
                        </div>

                        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30">
                            <CardContent className="p-8">
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="rounded-xl border-2 border-purple-200 focus:border-purple-400 py-3"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="rounded-xl border-2 border-purple-200 focus:border-purple-400 py-3"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Instagram Handle
                                            </label>
                                            <Input
                                                name="instagram"
                                                value={formData.instagram}
                                                onChange={handleInputChange}
                                                className="rounded-xl border-2 border-purple-200 focus:border-purple-400 py-3"
                                                placeholder="@yourusername"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Child's Age *
                                            </label>
                                            <Input
                                                name="childAge"
                                                value={formData.childAge}
                                                onChange={handleInputChange}
                                                required
                                                className="rounded-xl border-2 border-purple-200 focus:border-purple-400 py-3"
                                                placeholder="e.g., 7 years old"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Why do you want to be an ambassador?
                                            *
                                        </label>
                                        <textarea
                                            name="why"
                                            value={formData.why}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="w-full rounded-xl border-2 border-purple-200 focus:border-purple-400 p-4 resize-none"
                                            placeholder="Tell us about your passion for natural hair care and why you'd be a great ambassador..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-amber-500 hover:from-purple-800 hover:via-fuchsia-700 hover:to-amber-600 text-white font-bold py-4 rounded-2xl shadow-2xl shadow-black/30 hover:shadow-black/40 transform hover:scale-105 transition-all duration-500 border-2 border-white/20 ring-2 ring-white/10"
                                    >
                                        <span className="flex items-center justify-center gap-3 drop-shadow-lg">
                                            <Crown className="w-5 h-5" />
                                            Submit Application
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
