"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Crown, Sparkles, Mail, Gift, Star } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-fuchsia-400 via-purple-400 to-yellow-300 relative overflow-hidden">
            {/* Liquid Glass Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-fuchsia-400/20 via-purple-400/20 to-yellow-300/20 animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-20"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-8 h-8 text-yellow-300 animate-bounce">
                <Crown className="w-full h-full animate-pulse" />
            </div>
            <div className="absolute bottom-10 right-10 w-6 h-6 text-pink-200 animate-bounce delay-500">
                <Sparkles
                    className="w-full h-full animate-spin"
                    style={{ animationDuration: "3s" }}
                />
            </div>
            <div className="absolute top-1/2 left-20 w-4 h-4 text-yellow-200 animate-bounce delay-1000">
                <Star className="w-full h-full animate-pulse" />
            </div>
            <div className="absolute top-20 right-1/4 w-5 h-5 text-purple-200 animate-bounce delay-700">
                <Gift className="w-full h-full animate-pulse" />
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="relative inline-block mb-6">
                            <Crown className="w-20 h-20 text-gold-300 mx-auto animate-pulse" />
                            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/30 via-purple-400/20 to-yellow-300/20 rounded-full blur-2xl scale-150"></div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                            Join the Royal Court
                        </h2>

                        <p className="text-xl text-purple-100 leading-relaxed max-w-2xl mx-auto">
                            Get exclusive updates, special offers, royal tips,
                            and empowering content delivered straight to your
                            inbox ✨
                        </p>
                    </div>

                    {/* Newsletter Form */}
                    <form onSubmit={handleSubmit} className="mb-8">
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <div className="relative flex-1">
                                <Input
                                    type="email"
                                    placeholder="Enter your royal email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl border-0 bg-white/20 backdrop-blur-xl text-white placeholder:text-lavender-200 focus:bg-white/30 focus:ring-2 focus:ring-gold-400 shadow-lg border border-white/30 text-lg"
                                />
                                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-lavender-200" />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubscribed}
                                className="group relative bg-gradient-to-r from-purple-700 via-fuchsia-600 to-amber-500 hover:from-purple-800 hover:via-fuchsia-700 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-black/30 hover:shadow-black/40 transform hover:scale-105 transition-all duration-500 border-2 border-white/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed ring-2 ring-white/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative flex items-center gap-2 drop-shadow-lg">
                                    {isSubscribed ? (
                                        <>
                                            <Crown className="w-5 h-5 animate-bounce" />
                                            Welcome, Princess!
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                                            Subscribe
                                        </>
                                    )}
                                </span>
                            </Button>
                        </div>
                    </form>

                    {/* Benefits */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                            <Gift className="w-8 h-8 text-gold-300 mx-auto mb-3 animate-pulse" />
                            <h3 className="text-white font-semibold mb-2">
                                Exclusive Offers
                            </h3>
                            <p className="text-lavender-100 text-sm">
                                First access to sales and special discounts
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                            <Crown className="w-8 h-8 text-fuchsia-300 mx-auto mb-3 animate-bounce" />
                            <h3 className="text-white font-semibold mb-2">
                                Royal Tips
                            </h3>
                            <p className="text-lavender-100 text-sm">
                                Hair care and confidence-building advice
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                            <Sparkles
                                className="w-8 h-8 text-lavender-300 mx-auto mb-3 animate-spin"
                                style={{ animationDuration: "2s" }}
                            />
                            <h3 className="text-white font-semibold mb-2">
                                New Products
                            </h3>
                            <p className="text-lavender-100 text-sm">
                                Be the first to know about new arrivals
                            </p>
                        </div>
                    </div>

                    {/* Trust Message */}
                    <p className="text-sm text-lavender-200 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-white/20">
                        ✨ No spam, just royal treatment. Unsubscribe anytime
                        with one click.
                    </p>
                </div>
            </div>
        </section>
    );
}
