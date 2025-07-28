"use client";

import { useEffect, useState } from "react";
import { Crown, Sparkles, Star, Heart } from "lucide-react";

export default function FloatingElements() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Floating Crowns */}
            <div className="absolute top-20 left-10 w-8 h-8 text-gold-400/30 animate-glow-pulse">
                <Crown className="w-full h-full" />
            </div>
            <div className="absolute top-60 right-20 w-6 h-6 text-lavender-400/40 animate-glow-pulse">
                <Crown className="w-full h-full" />
            </div>
            <div className="absolute bottom-40 left-1/4 w-10 h-10 text-fuchsia-400/30 animate-glow-pulse">
                <Crown className="w-full h-full" />
            </div>

            {/* Floating Sparkles */}
            <div className="absolute top-40 right-1/3 w-5 h-5 text-gold-400/40 animate-pulse">
                <Sparkles
                    className="w-full h-full animate-spin"
                    style={{ animationDuration: "3s" }}
                />
            </div>
            <div className="absolute bottom-60 right-10 w-4 h-4 text-lavender-400/50 animate-pulse delay-700">
                <Sparkles
                    className="w-full h-full animate-spin"
                    style={{ animationDuration: "4s" }}
                />
            </div>
            <div className="absolute top-80 left-1/3 w-6 h-6 text-fuchsia-400/30 animate-pulse delay-1500">
                <Sparkles
                    className="w-full h-full animate-spin"
                    style={{ animationDuration: "2s" }}
                />
            </div>

            {/* Floating Stars */}
            <div className="absolute top-32 left-1/2 w-3 h-3 text-gold-300/50 animate-pulse delay-300">
                <Star
                    className="w-full h-full animate-ping"
                    style={{ animationDuration: "2s" }}
                />
            </div>
            <div className="absolute bottom-80 left-20 w-4 h-4 text-lavender-300/40 animate-pulse delay-800">
                <Star
                    className="w-full h-full animate-ping"
                    style={{ animationDuration: "3s" }}
                />
            </div>

            {/* Floating Hearts */}
            <div className="absolute top-96 right-1/4 w-5 h-5 text-fuchsia-300/40 animate-pulse delay-1200">
                <Heart
                    className="w-full h-full animate-bounce"
                    style={{ animationDuration: "2s" }}
                />
            </div>
            <div className="absolute bottom-20 right-1/3 w-4 h-4 text-lavender-300/30 animate-pulse delay-600">
                <Heart
                    className="w-full h-full animate-bounce"
                    style={{ animationDuration: "2.5s" }}
                />
            </div>

            {/* Liquid Glass Orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-lavender-400/20 via-fuchsia-400/20 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-gold-400/15 via-teal-400/15 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-fuchsia-400/25 via-lavender-400/25 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
    );
}
