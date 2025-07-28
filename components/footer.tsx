import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Instagram,
    Linkedin,
    Facebook,
    Mail,
    MapPin,
    Crown,
    Heart,
    Star,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Liquid Glass Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-lavender-400/5 via-fuchsia-400/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 right-32 w-40 h-40 bg-gradient-to-br from-gold-400/8 via-teal-400/5 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-fuchsia-400/10 via-lavender-400/5 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Brand Section - Keep as is */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center group">
                            <div className="relative">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-lavender-400 via-fuchsia-400 to-gold-400 p-1 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-lavender-400/20">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                        <Image
                                            src="/logo.png"
                                            alt="Melanated Princess"
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                                <Crown className="absolute -top-1 -right-1 w-5 h-5 text-gold-400 animate-glow-pulse" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lavender-400/20 to-gold-400/20 blur-xl scale-150 group-hover:scale-175 transition-transform duration-500"></div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-bold bg-gradient-to-r from-lavender-400 via-fuchsia-400 to-gold-400 bg-clip-text text-transparent">
                                    Melanated Princess
                                </h3>
                                <p className="text-xs text-gray-400">
                                    Embrace Your Reign ✨
                                </p>
                            </div>
                        </Link>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Celebrating the beauty, strength, and magic of every
                            young queen through premium products and empowering
                            experiences that build confidence and self-love.
                        </p>

                        <div className="flex gap-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-12 h-12 rounded-xl hover:bg-lavender-500/20 hover:text-lavender-400 transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-lavender-400/50"
                            >
                                <Instagram className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-12 h-12 rounded-xl hover:bg-lavender-500/20 hover:text-lavender-400 transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-lavender-400/50"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-12 h-12 rounded-xl hover:bg-lavender-500/20 hover:text-lavender-400 transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-lavender-400/50"
                            >
                                <Facebook className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links - Simplified */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 bg-gradient-to-r from-lavender-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center gap-2">
                            <Crown className="w-5 h-5 text-lavender-400" />
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { href: "/shop", label: "🛍️ Shop" },
                                { href: "/our-story", label: "📖 Our Story" },
                                { href: "/faq", label: "❓ FAQ" },
                                { href: "/contact", label: "💬 Contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Simplified */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 bg-gradient-to-r from-lavender-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center gap-2">
                            <Star className="w-5 h-5 text-gold-400" />
                            Get in Touch
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                                <div className="w-10 h-10 bg-gradient-to-br from-lavender-400 to-fuchsia-400 rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        Email
                                    </p>
                                    <span className="text-white font-medium">
                                        hello@melanatedprincess.com
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-teal-400 rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        Location
                                    </p>
                                    <span className="text-white font-medium">
                                        Atlanta, GA
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-16 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <p className="text-gray-400 text-sm">
                                © 2024 Melanated Princess. All rights reserved.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>Made with</span>
                                <Heart className="w-3 h-3 text-pink-400 animate-pulse" />
                                <span>for our little queens</span>
                            </div>
                        </div>

                        <div className="flex gap-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
