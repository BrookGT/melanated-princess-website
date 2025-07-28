"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    Instagram,
    Linkedin,
    Facebook,
    ShoppingCart,
    User,
    Menu,
    Crown,
    Search,
    Heart,
} from "lucide-react";

export default function Header() {
    const [cartCount] = useState(3);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-white/90 backdrop-blur-2xl border-b border-purple-200/60 shadow-2xl shadow-purple-100/30"
                    : "bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-lg"
            }`}
        >
            {/* Liquid Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative">
                            {/* Liquid Glass Logo Container */}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lavender-400 via-fuchsia-400 to-gold-400 p-1 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-lavender-200/50">
                                <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                    <Image
                                        src="/logo.png"
                                        alt="Melanated Princess"
                                        width={60}
                                        height={60}
                                        className="rounded-full scale-110"
                                    />
                                </div>
                            </div>

                            {/* Floating Crown */}
                            <div className="absolute -top-2 -right-2 bg-white/90 rounded-full p-1.5 shadow-lg  flex items-center justify-center">
                                <Crown className="w-5 h-5 text-yellow-400" />
                            </div>

                            {/* Liquid Glass Glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lavender-400/20 via-fuchsia-400/20 to-gold-400/20 blur-xl scale-150 group-hover:scale-175 transition-transform duration-500"></div>
                        </div>

                        <div className="ml-4 hidden sm:block">
                            <h1 className="text-xl font-medium bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                                Melanated Princess
                            </h1>
                            <p className="text-xs font-normal text-gray-700 bg-white/70 px-2 py-0.5 rounded-full shadow-sm inline-block mt-1">
                                Embrace Your Reign ✨
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/"
                                    className={`group inline-flex h-10 w-max items-center justify-center rounded-xl px-4 py-2 text-base font-normal transition-all duration-300 focus:outline-none ${
                                        pathname === "/"
                                            ? "bg-gradient-to-r from-yellow-200 via-pink-100 to-purple-100 text-yellow-700 font-bold shadow-md border border-yellow-300"
                                            : "bg-transparent text-gray-900 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-pink-100 hover:text-yellow-600 focus:bg-yellow-50 focus:text-yellow-700"
                                    }`}
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={`rounded-xl text-base font-normal px-6 py-2 transition-all duration-300 ${
                                        pathname.startsWith("/shop") ||
                                        pathname.startsWith("/product")
                                            ? "bg-gradient-to-r from-yellow-200 via-pink-100 to-purple-100 text-yellow-700 font-bold border-yellow-300"
                                            : "bg-white/80 text-gray-900 border-gray-200 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-pink-100 hover:text-yellow-600"
                                    }`}
                                >
                                    Shop
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-6 w-[600px] bg-white/90 backdrop-blur-xl border border-yellow-100/50 shadow-2xl rounded-2xl">
                                        <div className="grid grid-cols-2 gap-8">
                                            {/* Collections Section */}
                                            <div>
                                                <h3 className="text-xs font-bold text-yellow-500 mb-4 uppercase tracking-wide">
                                                    COLLECTIONS
                                                </h3>
                                                <div className="space-y-3">
                                                    <Link
                                                        href="/shop/collections/royalty"
                                                        className="group block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 bg-white shadow-sm hover:bg-gradient-to-br hover:from-yellow-50 hover:to-pink-50 hover:shadow-lg"
                                                    >
                                                        <div className="flex items-center gap-2 text-base font-bold text-purple-700 group-hover:text-yellow-600">
                                                            <span className="text-lg">
                                                                👑
                                                            </span>{" "}
                                                            Royalty Collection
                                                        </div>
                                                        <p className="text-xs leading-snug text-gray-500">
                                                            Premium pieces fit
                                                            for a queen
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/shop/collections/radiant"
                                                        className="group block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 bg-white shadow-sm hover:bg-gradient-to-br hover:from-yellow-50 hover:to-pink-50 hover:shadow-lg"
                                                    >
                                                        <div className="flex items-center gap-2 text-base font-bold text-purple-700 group-hover:text-yellow-600">
                                                            <span className="text-lg">
                                                                ✨
                                                            </span>{" "}
                                                            Radiant Collection
                                                        </div>
                                                        <p className="text-xs leading-snug text-gray-500">
                                                            Shine bright with
                                                            confidence
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/shop"
                                                        className="group block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 bg-white shadow-sm hover:bg-gradient-to-br hover:from-yellow-50 hover:to-pink-50 hover:shadow-lg"
                                                    >
                                                        <div className="flex items-center gap-2 text-base font-bold text-purple-700 group-hover:text-yellow-600">
                                                            <span className="text-lg">
                                                                🛍️
                                                            </span>{" "}
                                                            All Products
                                                        </div>
                                                        <p className="text-xs leading-snug text-gray-500">
                                                            Browse everything
                                                            from all categories
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* Product Categories Section */}
                                            <div>
                                                <h3 className="text-xs font-bold text-yellow-500 mb-4 uppercase tracking-wide">
                                                    CATEGORIES
                                                </h3>
                                                <div className="space-y-3">
                                                    <Link
                                                        href="/shop/tops"
                                                        className="group block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 bg-white shadow-sm hover:bg-gradient-to-br hover:from-yellow-50 hover:to-pink-50 hover:shadow-lg"
                                                    >
                                                        <div className="flex items-center gap-2 text-base font-bold text-purple-700 group-hover:text-yellow-600">
                                                            <span className="text-lg">
                                                                👕
                                                            </span>{" "}
                                                            Tops
                                                        </div>
                                                        <p className="text-xs leading-snug text-gray-500">
                                                            Stylish tops for
                                                            every princess
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/shop/bottoms"
                                                        className="group block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 bg-white shadow-sm hover:bg-gradient-to-br hover:from-yellow-50 hover:to-pink-50 hover:shadow-lg"
                                                    >
                                                        <div className="flex items-center gap-2 text-base font-bold text-purple-700 group-hover:text-yellow-600">
                                                            <span className="text-lg">
                                                                👖
                                                            </span>{" "}
                                                            Bottoms
                                                        </div>
                                                        <p className="text-xs leading-snug text-gray-500">
                                                            Comfortable and cute
                                                            bottoms
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/shop/sets"
                                                        className="group block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 bg-white shadow-sm hover:bg-gradient-to-br hover:from-yellow-50 hover:to-pink-50 hover:shadow-lg"
                                                    >
                                                        <div className="flex items-center gap-2 text-base font-bold text-purple-700 group-hover:text-yellow-600">
                                                            <span className="text-lg">
                                                                👗
                                                            </span>{" "}
                                                            Sets
                                                        </div>
                                                        <p className="text-xs leading-snug text-gray-500">
                                                            Complete coordinated
                                                            outfits
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/our-story"
                                    className={`group inline-flex h-10 w-max items-center justify-center rounded-xl px-4 py-2 text-base font-normal transition-all duration-300 focus:outline-none ${
                                        pathname.startsWith("/our-story")
                                            ? "bg-gradient-to-r from-yellow-200 via-pink-100 to-purple-100 text-yellow-700 font-bold shadow-md border border-yellow-300"
                                            : "bg-transparent text-gray-900 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-pink-100 hover:text-yellow-600 focus:bg-yellow-50 focus:text-yellow-700"
                                    }`}
                                >
                                    Our Story
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/ambassador"
                                    className={`group inline-flex h-10 w-max items-center justify-center rounded-xl px-4 py-2 text-base font-normal transition-all duration-300 focus:outline-none ${
                                        pathname.startsWith("/ambassador")
                                            ? "bg-gradient-to-r from-yellow-200 via-pink-100 to-purple-100 text-yellow-700 font-bold shadow-md border border-yellow-300"
                                            : "bg-transparent text-gray-900 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-pink-100 hover:text-yellow-600 focus:bg-yellow-50 focus:text-yellow-700"
                                    }`}
                                >
                                    Brand Ambassador
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/faq"
                                    className={`group inline-flex h-10 w-max items-center justify-center rounded-xl px-4 py-2 text-base font-normal transition-all duration-300 focus:outline-none ${
                                        pathname.startsWith("/faq")
                                            ? "bg-gradient-to-r from-yellow-200 via-pink-100 to-purple-100 text-yellow-700 font-bold shadow-md border border-yellow-300"
                                            : "bg-transparent text-gray-900 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-pink-100 hover:text-yellow-600 focus:bg-yellow-50 focus:text-yellow-700"
                                    }`}
                                >
                                    FAQ
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {/* Social Links */}
                        <div className="hidden md:flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-9 h-9 rounded-xl group hover:bg-gradient-to-br hover:from-lavender-50 hover:to-fuchsia-50 transition-all duration-300"
                            >
                                <Instagram className="w-4 h-4 text-black group-hover:text-fuchsia-500 group-hover:drop-shadow-[0_0_6px_#ffd700] transition-all duration-300" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-9 h-9 rounded-xl group hover:bg-gradient-to-br hover:from-lavender-50 hover:to-fuchsia-50 transition-all duration-300"
                            >
                                <Linkedin className="w-4 h-4 text-black group-hover:text-teal-500 group-hover:drop-shadow-[0_0_6px_#ffd700] transition-all duration-300" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-9 h-9 rounded-xl group hover:bg-gradient-to-br hover:from-lavender-50 hover:to-fuchsia-50 transition-all duration-300"
                            >
                                <Facebook className="w-4 h-4 text-black group-hover:text-blue-500 group-hover:drop-shadow-[0_0_6px_#ffd700] transition-all duration-300" />
                            </Button>
                        </div>

                        {/* Search */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="w-10 h-10 rounded-xl group hover:bg-gradient-to-br hover:from-lavender-50 hover:to-fuchsia-50 transition-all duration-300"
                        >
                            <Search className="w-5 h-5 text-black group-hover:text-fuchsia-500 group-hover:drop-shadow-[0_0_6px_#ffd700] transition-all duration-300" />
                        </Button>

                        {/* Wishlist */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="w-10 h-10 rounded-xl group hover:bg-gradient-to-br hover:from-lavender-50 hover:to-fuchsia-50 transition-all duration-300"
                        >
                            <Heart className="w-5 h-5 text-black group-hover:text-pink-500 group-hover:drop-shadow-[0_0_6px_#ffd700] transition-all duration-300" />
                        </Button>

                        {/* User Account */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="w-10 h-10 rounded-xl group hover:bg-gradient-to-br hover:from-lavender-50 hover:to-fuchsia-50 transition-all duration-300"
                        >
                            <User className="w-5 h-5 text-black group-hover:text-purple-500 group-hover:drop-shadow-[0_0_6px_#ffd700] transition-all duration-300" />
                        </Button>

                        {/* Shopping Cart with Liquid Glass Effect */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative w-10 h-10 rounded-xl group hover:bg-gradient-to-br hover:from-lavender-50 hover:to-fuchsia-50 transition-all duration-300"
                        >
                            <ShoppingCart className="w-5 h-5 text-black group-hover:text-yellow-500 group-hover:drop-shadow-[0_0_6px_#ffd700] transition-all duration-300" />
                        </Button>

                        {/* Mobile Menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="lg:hidden w-10 h-10 rounded-xl text-black"
                                >
                                    <Menu className="w-5 h-5 text-black" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="bg-white/95 backdrop-blur-xl border-l border-purple-100/50">
                                <SheetTitle className="sr-only">
                                    Main Navigation
                                </SheetTitle>
                                <SheetClose className="absolute top-4 right-4 z-10 text-black">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                    <span className="sr-only">Close</span>
                                </SheetClose>
                                <div className="flex flex-col gap-6 mt-8">
                                    <Link
                                        href="/"
                                        className="text-lg font-semibold text-black transition-all duration-500 rounded-xl px-3 py-2 hover:bg-yellow-50 hover:border-l-4 hover:border-yellow-400 hover:text-yellow-600"
                                    >
                                        🏠 Home
                                    </Link>
                                    <Link
                                        href="/shop"
                                        className="text-lg font-semibold text-black transition-all duration-500 rounded-xl px-3 py-2 hover:bg-yellow-50 hover:border-l-4 hover:border-yellow-400 hover:text-yellow-600"
                                    >
                                        🛍️ Shop
                                    </Link>
                                    <Link
                                        href="/our-story"
                                        className="text-lg font-semibold text-black transition-all duration-500 rounded-xl px-3 py-2 hover:bg-yellow-50 hover:border-l-4 hover:border-yellow-400 hover:text-yellow-600"
                                    >
                                        📖 Our Story
                                    </Link>
                                    <Link
                                        href="/ambassador"
                                        className="text-lg font-semibold text-black transition-all duration-500 rounded-xl px-3 py-2 hover:bg-yellow-50 hover:border-l-4 hover:border-yellow-400 hover:text-yellow-600"
                                    >
                                        👑 Brand Ambassador
                                    </Link>
                                    <Link
                                        href="/faq"
                                        className="text-lg font-semibold text-black transition-all duration-500 rounded-xl px-3 py-2 hover:bg-yellow-50 hover:border-l-4 hover:border-yellow-400 hover:text-yellow-600"
                                    >
                                        ❓ FAQ
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
