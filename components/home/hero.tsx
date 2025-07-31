"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Crown, Sparkles, ArrowRight, Heart } from "lucide-react";
import VideoPlayer from "@/components/home/video-player";
import { HERO_TEXT } from "@/constants/hero-content";

export default function Hero() {
    const IconMap: Record<string, React.ElementType> = {
        Crown: Crown,
        Heart: Heart,
        Sparkles: Sparkles,
    };

    return (
        <section className="relative min-h-[90vh] sm:min-h-[95vh] overflow-hidden flex flex-col justify-center">
            {/* Modern Brand Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#bca7f7] via-[#f15bb5] to-[#ffd700]">
                {/* Subtle Glassmorphism Layer */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl" />

                {/* Floating Orbs for Depth */}
                <div className="absolute top-24 left-24 w-40 h-40 bg-gradient-to-br from-[#20cfcf]/30 via-[#bca7f7]/20 to-transparent rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-32 right-40 w-56 h-56 bg-gradient-to-br from-[#f15bb5]/20 via-[#ffd700]/15 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
                <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-gradient-to-br from-[#bca7f7]/30 via-[#a259f7]/20 to-transparent rounded-full blur-xl animate-pulse delay-1000" />
                <div className="absolute bottom-10 left-1/2 w-24 h-24 bg-gradient-to-br from-[#20cfcf]/20 via-[#a259f7]/10 to-transparent rounded-full blur-2xl animate-pulse delay-1500" />

                {/* Gold Accent Glow */}
                <div className="absolute top-10 right-1/3 w-32 h-32 bg-gradient-to-br from-[#ffd700]/30 to-transparent rounded-full blur-3xl opacity-70 animate-pulse" />

                {/* Minimal Animated Pattern (Crown, Sparkles, Heart) */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <div className="absolute top-20 left-20 w-8 h-8 text-[#ffd700] animate-glow-pulse">
                        <Crown className="w-full h-full animate-pulse" />
                    </div>
                    <div className="absolute top-40 right-32 w-6 h-6 text-[#f15bb5] animate-bounce delay-500">
                        <Sparkles
                            className="w-full h-full animate-spin"
                            style={{ animationDuration: "3s" }}
                        />
                    </div>
                    <div className="absolute bottom-32 left-16 w-10 h-10 text-[#a259f7] animate-glow-pulse">
                        <Crown className="w-full h-full animate-pulse delay-500" />
                    </div>
                    <div className="absolute top-60 left-1/3 w-4 h-4 text-[#ffd700] animate-bounce delay-700">
                        <Sparkles
                            className="w-full h-full animate-spin"
                            style={{ animationDuration: "2s" }}
                        />
                    </div>
                    <div className="absolute bottom-60 right-20 w-5 h-5 text-[#f15bb5] animate-bounce delay-300">
                        <Heart className="w-full h-full animate-pulse" />
                    </div>
                </div>
            </div>

            <div className="relative w-full max-w-[100vw] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center">
                {/* Top Section - Logo and Badge + Main Text */}
                <div className="flex flex-col items-center w-full mb-8 sm:mb-10 md:mb-12">
                    {/* Customer Badge with Liquid Glass - always top center */}
                    <Badge className="bg-white/20 backdrop-blur-xl text-white border border-white/30 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium hover:bg-white/30 transition-all duration-500 rounded-full shadow-lg shadow-white/10 mb-6 sm:mb-8">
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-[#FFD700] text-[#FFD700] animate-pulse drop-shadow-[0_0_8px_#FFD700]"
                                        style={{
                                            animationDelay: `${i * 100}ms`,
                                        }}
                                    />
                                ))}
                            </div>
                            <span className="font-semibold text-xs sm:text-sm md:text-base">
                                {HERO_TEXT.customerCount}
                            </span>
                        </div>
                    </Badge>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-12 xl:gap-20 w-full">
                        {/* Logo */}
                        <div className="flex justify-center items-center mb-6 sm:mb-8 mb-0 lg:mb-0">
                            <div className="relative group bg-white rounded-full sm:p-3 shadow-lg shadow-white/10">
                                {/* Logo image without background container */}
                                <Image
                                    src="/logo.png"
                                    alt="Melanated Princess Logo"
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                                {/* Floating Crown with Glow and Animation */}
                                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full p-2 sm:p-3 shadow-xl animate-bounce animate-glow-pulse">
                                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-[0_0_20px_gold]" />
                                </div>
                            </div>
                        </div>
                        {/* Main Text Section */}
                        <div className="flex flex-col items-center justify-center w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-2xl xl:max-w-3xl">
                            {/* Main Heading with Gradient Text */}
                            <h1
                                className="font-extrabold leading-tight mb-6 sm:mb-8"
                                style={{
                                    fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
                                    lineHeight: 1.08,
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                <span
                                    className="block text- bg-clip-text drop-shadow-[0_2px_24px_#a259f799] whitespace-pre-line"
                                    style={{
                                        fontWeight: 800,
                                        WebkitTextStroke: "0.5px #fff3",
                                    }}
                                >
                                    {HERO_TEXT.mainHeading.line1}
                                </span>
                                <span
                                    className="block text- bg-clip-text drop-shadow-[0_2px_24px_#a259f799] whitespace-pre-line"
                                    style={{
                                        fontWeight: 800,
                                        WebkitTextStroke: "0.5px #fff3",
                                    }}
                                >
                                    {HERO_TEXT.mainHeading.line2}
                                </span>
                            </h1>
                            {/* Liquid Glass Underline */}
                            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                                <div className="relative w-32 xs:w-36 sm:w-40 h-2 mx-auto lg:mx-0">
                                    <div className="w-full h-2 rounded-full shadow-lg shadow-yellow-200/40 bg-gradient-to-r from-[#ffd700] to-[#ff0080]"></div>
                                </div>
                            </div>
                            {/* Subtitle with Liquid Glass Background */}
                            <div className="relative max-w-md xs:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-12">
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
                                <p className="relative text-base xs:text-lg sm:text-xl md:text-2xl text-purple-100 text-center lg:text-left font-light px-2 xs:px-4 sm:px-6 py-4 leading-relaxed">
                                    {HERO_TEXT.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Section - Main Attraction */}
                <div className="mb-10 sm:mb-14 md:mb-16">
                    <div className="max-w-md xs:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
                        {/* Video Title */}
                        <div className="text-center mb-6 sm:mb-8">
                            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
                                {HERO_TEXT.videoSection.title}
                            </h2>
                            <p className="text-sm xs:text-base sm:text-lg text-purple-100 max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
                                {HERO_TEXT.videoSection.description}
                            </p>
                        </div>

                        {/* Enhanced Video Player */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg mx-auto w-full aspect-video min-h-[180px] max-h-[320px] sm:max-h-[400px] md:max-h-[480px] flex flex-col items-center justify-center">
                            <VideoPlayer
                                videoUrl="/Recording.mp4"
                                thumbnailUrl="/placeholder.svg?height=600&width=800&text=Our+Inspiring+Story"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-xs xs:max-w-md sm:max-w-2xl mx-auto">
                        <Button
                            size="lg"
                            className="group relative bg-gradient-to-r from-purple-700 via-fuchsia-600 to-amber-500 hover:from-purple-800 hover:via-fuchsia-700 hover:to-amber-600 text-white font-bold px-8 py-4 sm:px-12 sm:py-6 rounded-2xl shadow-2xl shadow-black/30 hover:shadow-black/40 transform hover:scale-105 transition-all duration-500 border-2 border-white/20 backdrop-blur-sm text-base sm:text-lg ring-2 ring-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            <span className="relative flex items-center gap-2 sm:gap-3 drop-shadow-lg text-white">
                                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                {HERO_TEXT.ctaButtons.shopNow}
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="group relative border-2 border-white/60 text-white hover:bg-white/20 font-bold px-8 py-4 sm:px-12 sm:py-6 rounded-2xl backdrop-blur-xl bg-white/10 hover:border-white/80 transition-all duration-500 shadow-xl shadow-black/20 text-base sm:text-lg ring-2 ring-white/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center gap-2 sm:gap-3 drop-shadow-lg">
                                {HERO_TEXT.ctaButtons.learnMore}
                                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                            </span>
                        </Button>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 text-xs xs:text-sm sm:text-base text-purple-100">
                    {HERO_TEXT.trustIndicators.map((indicator, index) => {
                        const IconComponent = IconMap[indicator.icon];
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-lg"
                            >
                                {IconComponent && (
                                    <IconComponent
                                        className={`w-5 h-5 ${
                                            indicator.icon === "Crown"
                                                ? "text-gold-400"
                                                : indicator.icon === "Heart"
                                                ? "text-fuchsia-400"
                                                : "text-lavender-400"
                                        }`}
                                    />
                                )}
                                <span className="font-semibold">
                                    {indicator.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
