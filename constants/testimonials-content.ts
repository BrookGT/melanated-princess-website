import { Testimonial } from "@/types/testimonial";

export const TESTIMONIALS_SECTION = {
    badge: "💬 Testimonials",
    title: "Royal Reviews",
    description:
        "See what other royal families are saying about our products and the confidence they bring to their little princesses ✨",
    trustIndicators: [
        {
            label: "10,000+ Happy Families",
            icon: "Crown",
            color: "text-gold-500",
        },
        { label: "4.9/5 Average Rating", icon: "Star", color: "text-gold-500" },
        { label: "Made with Love", icon: "Heart", color: "text-fuchsia-500" },
    ],
};

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Maya Johnson",
        role: "Mother of Princess Zoe (Age 8)",
        rating: 5,
        text: "My daughter absolutely loves her crown headband! It makes her feel so confident and beautiful. The quality is amazing and it's become her favorite accessory. She wears it everywhere! 👑",
        image: "/assets/profile1.jpg",
        location: "Atlanta, GA",
    },
    {
        id: 2,
        name: "Keisha Williams",
        role: "Mother of Princess Ava (Age 6)",
        rating: 5,
        text: "The curl cream works wonders on my daughter's natural hair. It's gentle, smells amazing, and keeps her curls defined all day. Finally, a product made just for us! ✨",
        image: "/assets/profile2.jpg",
        location: "Houston, TX",
    },
    {
        id: 3,
        name: "Jasmine Davis",
        role: "Mother of Princess Nyla (Age 10)",
        rating: 5,
        text: "Finally, a brand that celebrates our daughters' natural beauty! The products are high quality and the message is empowering. My daughter feels like royalty every day! 💕",
        image: "/assets/profile3.jpg",
        location: "Chicago, IL",
    },
];
