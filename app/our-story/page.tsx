import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";
import VideoPlayer from "@/components/video-player";
import { Crown, Heart, Star, Sparkles, Users, Award } from "lucide-react";

export default function OurStoryPage() {
    const milestones = [
        {
            year: "2020",
            title: "The Dream Begins",
            description:
                "Founded with a vision to celebrate the natural beauty of young melanated girls",
            icon: <Crown className="w-8 h-8 text-yellow-500" />,
        },
        {
            year: "2021",
            title: "First Products Launch",
            description:
                "Launched our signature hair care line designed specifically for textured hair",
            icon: <Sparkles className="w-8 h-8 text-purple-500" />,
        },
        {
            year: "2022",
            title: "Community Growth",
            description:
                "Reached 10,000+ happy families and expanded our product range",
            icon: <Users className="w-8 h-8 text-pink-500" />,
        },
        {
            year: "2023",
            title: "Award Recognition",
            description:
                "Recognized as 'Best Children's Beauty Brand' by industry experts",
            icon: <Award className="w-8 h-8 text-amber-500" />,
        },
    ];

    const values = [
        {
            title: "Empowerment",
            description:
                "Building confidence and self-love in every young queen",
            icon: <Crown className="w-12 h-12 text-yellow-500" />,
            color: "from-yellow-400 to-amber-500",
        },
        {
            title: "Natural Beauty",
            description:
                "Celebrating and enhancing natural hair textures and skin tones",
            icon: <Heart className="w-12 h-12 text-pink-500" />,
            color: "from-pink-400 to-rose-500",
        },
        {
            title: "Quality",
            description:
                "Premium, safe ingredients that parents trust and children love",
            icon: <Star className="w-12 h-12 text-purple-500" />,
            color: "from-purple-400 to-indigo-500",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 relative overflow-hidden">
            <FloatingElements />
            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <Badge className="bg-white/20 backdrop-blur-xl text-white border border-white/30 px-6 py-3 text-sm font-medium mb-8 rounded-full shadow-lg">
                            ✨ Our Journey
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 drop-shadow-2xl">
                            Every Princess Has a Story
                        </h1>

                        <p className="text-xl text-purple-100 leading-relaxed mb-12">
                            Discover how Melanated Princess was born from a
                            mother's love and a vision to celebrate the natural
                            beauty, strength, and magic of every young queen 👑
                        </p>

                        <div className="max-w-3xl mx-auto">
                            <VideoPlayer
                                title="Our Inspiring Story"
                                thumbnailUrl="/placeholder.svg?height=400&width=600&text=Our+Story+Video"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Story Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>

                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-4 border border-white/30 shadow-2xl">
                                <Image
                                    src="/placeholder.svg?height=600&width=500&text=Founder+Story"
                                    alt="Founder with daughter"
                                    width={500}
                                    height={600}
                                    className="rounded-2xl shadow-xl object-cover"
                                />

                                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full p-4 shadow-xl animate-glow-pulse">
                                    <Crown className="w-8 h-8 text-white" />
                                </div>

                                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full p-4 shadow-xl animate-pulse">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-semibold mb-6 rounded-full">
                                    💝 Founder's Message
                                </Badge>

                                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                                    A Mother's Love, A Daughter's Dream
                                </h2>
                            </div>

                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    "As a mother of a beautiful melanated
                                    daughter, I noticed the lack of products and
                                    representation that celebrated her natural
                                    beauty. I wanted her to see herself as the
                                    princess she truly is."
                                </p>

                                <p>
                                    "Melanated Princess was born from late-night
                                    conversations with my daughter about
                                    self-love, confidence, and embracing her
                                    natural hair texture. Every product we
                                    create is infused with love and the
                                    intention to make every young queen feel
                                    royal."
                                </p>

                                <p>
                                    "Our mission goes beyond hair care – we're
                                    building a community where every melanated
                                    princess knows she's beautiful, powerful,
                                    and worthy of celebrating her unique magic."
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                                <p className="text-purple-800 font-semibold text-lg italic">
                                    "Every child deserves to see their beauty
                                    reflected and celebrated. That's the heart
                                    of Melanated Princess."
                                </p>
                                <p className="text-purple-600 mt-2 font-medium">
                                    - Founder & CEO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full">
                            📅 Our Journey
                        </Badge>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                            Milestones & Memories
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From a dream to a thriving community of royal
                            families
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {milestone.icon}
                                    </div>

                                    <div className="text-center">
                                        <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-3 py-1 text-sm font-bold rounded-full mb-4">
                                            {milestone.year}
                                        </Badge>

                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold mb-6 rounded-full">
                            💎 Our Values
                        </Badge>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6">
                            What We Stand For
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="group text-center">
                                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                                    <div
                                        className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                    >
                                        {value.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <Crown className="w-16 h-16 text-yellow-300 mx-auto mb-8 animate-glow-pulse" />

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 drop-shadow-2xl">
                            Join Our Royal Family
                        </h2>

                        <p className="text-xl text-purple-100 mb-12 leading-relaxed">
                            Become part of a community that celebrates natural
                            beauty, builds confidence, and empowers young queens
                            to embrace their magic ✨
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                            >
                                Shop Our Products
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-white/40 text-white hover:bg-white/10 font-bold px-12 py-6 rounded-2xl backdrop-blur-xl bg-white/5"
                            >
                                Follow Our Journey
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
