"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingElements from "@/components/shared/floating-elements";
import {
    ChevronDown,
    ChevronUp,
    Search,
    Crown,
    Heart,
    Sparkles,
    Mail,
    Phone,
    MessageCircle,
} from "lucide-react";

export default function FAQPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqCategories = [
        {
            title: "Products & Ingredients",
            icon: <Sparkles className="w-6 h-6 text-purple-500" />,
            faqs: [
                {
                    question: "Are your products safe for children?",
                    answer: "All our products are specifically formulated for children's delicate skin and hair. We use gentle, natural ingredients that are dermatologist-tested and free from harsh chemicals like sulfates, parabens, and artificial fragrances.",
                },
                {
                    question: "What age range are your products suitable for?",
                    answer: "Our products are designed for children ages 3-12, though many teens and adults love them too! We focus on gentle formulations that work beautifully on developing hair and skin.",
                },
                {
                    question: "Do you use natural ingredients?",
                    answer: "Yes! We prioritize natural, nourishing ingredients like shea butter, coconut oil, aloe vera, and botanical extracts. Every ingredient is carefully selected for its safety and effectiveness on textured hair.",
                },
                {
                    question: "Are your products suitable for all hair types?",
                    answer: "While our products are specifically formulated for textured and curly hair (types 3A-4C), they work wonderfully on all hair types. Our gentle formulations provide moisture and definition for any curl pattern.",
                },
            ],
        },
        {
            title: "Ordering & Shipping",
            icon: <Crown className="w-6 h-6 text-yellow-500" />,
            faqs: [
                {
                    question: "How long does shipping take?",
                    answer: "We offer free standard shipping (5-7 business days) on orders over $35. Express shipping (2-3 business days) is available for $9.99. We also offer next-day delivery in select areas.",
                },
                {
                    question: "Do you ship internationally?",
                    answer: "Currently, we ship within the United States and Canada. We're working on expanding to more countries soon! Sign up for our newsletter to be notified when we ship to your area.",
                },
                {
                    question: "Can I track my order?",
                    answer: "Yes! Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account on our website.",
                },
                {
                    question: "What if I'm not satisfied with my purchase?",
                    answer: "We offer a 30-day satisfaction guarantee! If you're not completely happy with your purchase, contact us for a full refund or exchange. Your little princess's happiness is our priority.",
                },
            ],
        },
        {
            title: "Hair Care Tips",
            icon: <Heart className="w-6 h-6 text-pink-500" />,
            faqs: [
                {
                    question: "How often should I wash my child's hair?",
                    answer: "For textured hair, we recommend washing 1-2 times per week with our gentle cleansing shampoo. Over-washing can strip natural oils. Between washes, use our refresh spray to keep hair moisturized.",
                },
                {
                    question: "What's the best way to detangle curly hair?",
                    answer: "Always detangle when hair is damp and coated with our leave-in conditioner. Use a wide-tooth comb or detangling brush, starting from the ends and working your way up. Be patient and gentle!",
                },
                {
                    question:
                        "How can I help my child embrace their natural hair?",
                    answer: "Celebrate their unique texture! Use positive language, let them choose fun accessories, and establish a enjoyable hair care routine together. Our products are designed to make hair care a bonding experience.",
                },
                {
                    question:
                        "What's the best nighttime routine for curly hair?",
                    answer: "Use a satin or silk pillowcase, or try a satin bonnet or scarf. Apply a small amount of our leave-in conditioner to keep hair moisturized overnight. This helps prevent tangles and maintains curl definition.",
                },
            ],
        },
    ];

    const allFAQs = faqCategories.flatMap((category) =>
        category.faqs.map((faq) => ({ ...faq, category: category.title }))
    );

    const filteredFAQs = searchTerm
        ? allFAQs.filter(
              (faq) =>
                  faq.question
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                  faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : faqCategories;

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
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
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 animate-bounce">
                                <MessageCircle className="w-8 h-8 text-yellow-300" />
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 drop-shadow-2xl">
                            Frequently Asked Questions
                        </h1>

                        <p className="text-xl text-purple-100 leading-relaxed mb-12">
                            Find answers to common questions about our products,
                            shipping, and hair care tips for your little
                            princess 👑
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-purple-300" />
                            <Input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-16 pr-6 py-4 text-lg rounded-2xl border-0 bg-white/20 backdrop-blur-xl text-white placeholder:text-purple-200 focus:bg-white/30 focus:ring-2 focus:ring-yellow-400 shadow-lg border border-white/30"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    {searchTerm ? (
                        /* Search Results */
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-8">
                                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full">
                                    {filteredFAQs.length} results found
                                </Badge>
                            </div>

                            <div className="space-y-6">
                                {(
                                    filteredFAQs as {
                                        category: string;
                                        question: string;
                                        answer: string;
                                    }[]
                                ).map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors duration-300"
                                        >
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                    {faq.question}
                                                </h3>
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs text-purple-600 border-purple-200"
                                                >
                                                    {faq.category}
                                                </Badge>
                                            </div>
                                            {openFAQ === index ? (
                                                <ChevronUp className="w-6 h-6 text-purple-500 flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-6 h-6 text-purple-500 flex-shrink-0" />
                                            )}
                                        </button>

                                        {openFAQ === index && (
                                            <div className="px-8 pb-6 border-t border-purple-100">
                                                <p className="text-gray-700 leading-relaxed pt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Category View */
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-3 gap-8">
                                {faqCategories.map(
                                    (category, categoryIndex) => (
                                        <div
                                            key={categoryIndex}
                                            className="space-y-6"
                                        >
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                                    {category.icon}
                                                </div>
                                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                                    {category.title}
                                                </h2>
                                            </div>

                                            <div className="space-y-4">
                                                {category.faqs.map(
                                                    (faq, faqIndex) => {
                                                        const globalIndex =
                                                            categoryIndex *
                                                                100 +
                                                            faqIndex;
                                                        return (
                                                            <div
                                                                key={faqIndex}
                                                                className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                                                            >
                                                                <button
                                                                    onClick={() =>
                                                                        toggleFAQ(
                                                                            globalIndex
                                                                        )
                                                                    }
                                                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors duration-300"
                                                                >
                                                                    <h3 className="text-base font-semibold text-gray-800 pr-4">
                                                                        {
                                                                            faq.question
                                                                        }
                                                                    </h3>
                                                                    {openFAQ ===
                                                                    globalIndex ? (
                                                                        <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                                                    ) : (
                                                                        <ChevronDown className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                                                    )}
                                                                </button>

                                                                {openFAQ ===
                                                                    globalIndex && (
                                                                    <div className="px-6 pb-5 border-t border-purple-100">
                                                                        <p className="text-gray-700 leading-relaxed pt-4 text-sm">
                                                                            {
                                                                                faq.answer
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <Crown className="w-16 h-16 text-yellow-300 mx-auto mb-8 animate-glow-pulse" />

                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-2xl">
                            Still Have Questions?
                        </h2>

                        <p className="text-xl text-purple-100 mb-12 leading-relaxed">
                            Our royal customer service team is here to help!
                            Reach out and we&apos;ll get back to you within 24 hours
                            ✨
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Mail className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Email Us</h3>
                                <p className="text-purple-100 text-sm">
                                    hello@melanatedprincess.com
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Phone className="w-8 h-8 text-pink-300 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Call Us</h3>
                                <p className="text-purple-100 text-sm">
                                    1-800-PRINCESS
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <MessageCircle className="w-8 h-8 text-purple-300 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">
                                    Live Chat
                                </h3>
                                <p className="text-purple-100 text-sm">
                                    Available 9AM-6PM EST
                                </p>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-amber-500 hover:from-purple-800 hover:via-fuchsia-700 hover:to-amber-600 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl shadow-black/30 hover:shadow-black/40 transform hover:scale-105 transition-all duration-500 border-2 border-white/20 ring-2 ring-white/10"
                        >
                            <Crown className="w-6 h-6 mr-3" />
                            Contact Support
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
