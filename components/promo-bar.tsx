"use client";

import { useState, useEffect } from "react";
import { Sparkles, X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromoBar({
    isVisible,
    onClose,
}: {
    isVisible: boolean;
    onClose: () => void;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isVisible) return null;

    return (
        <div className="relative mt-16 lg:mt-20 bg-gradient-to-r from-teal-400 via-gold-400 to-teal-500 text-white py-4 px-4 text-center overflow-hidden">
            {/* Liquid Glass Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=40&width=40')] opacity-10"></div>

            {/* Animated Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                <div className="absolute -top-1 right-10 w-6 h-6 bg-white/15 rounded-full animate-bounce delay-500"></div>
                <div className="absolute -bottom-2 left-1/3 w-4 h-4 bg-white/25 rounded-full animate-bounce delay-1000"></div>
            </div>

            <div className="relative flex items-center justify-center gap-3 text-sm font-bold text-white drop-shadow-lg">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/40">
                    <Gift className="w-4 h-4 animate-pulse" />
                    <span className="font-bold text-white drop-shadow-md">
                        SPECIAL OFFER
                    </span>
                </div>

                <Sparkles className="w-4 h-4 animate-spin text-white drop-shadow-md" />

                <span className="font-bold text-white drop-shadow-md text-center">
                    First Purchase{" "}
                    <span className="text-lg font-black bg-black/40 px-2 py-1 rounded-md">
                        10% Off
                    </span>{" "}
                    - Use Code{" "}
                    <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg font-black tracking-wider text-yellow-200 border border-white/30">
                        FOD04
                    </span>{" "}
                    - Shop Today!
                </span>

                <Sparkles className="w-4 h-4 animate-spin text-white drop-shadow-md" />
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-white hover:bg-white/20 rounded-full backdrop-blur-sm"
            >
                <X className="w-4 h-4" />
            </Button>
        </div>
    );
}
