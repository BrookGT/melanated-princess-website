import Image from "next/image";
import { Button } from "@/components/ui/button";

const OurStory = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-400 via-purple-400 to-yellow-300 p-1.5 sm:p-2 blur-[2px] opacity-80"></div>
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-200/30 via-purple-200/30 to-yellow-100/30 blur-2xl scale-105 opacity-60"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-clip-padding bg-white">
                            <Image
                                src="/images/our-story.jpg"
                                alt="Our Story"
                                width={700}
                                height={500}
                                className="rounded-2xl"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Our Journey to Excellence
                        </h2>
                        <p className="text-gray-700 text-lg mb-8">
                            Founded in 2005, we started as a small team with a
                            big dream: to revolutionize the way people
                            experience technology. Over the years, we've grown,
                            learned, and innovated, always staying true to our
                            core values of quality, integrity, and customer
                            satisfaction.
                        </p>
                        <p className="text-gray-700 text-lg mb-8">
                            From humble beginnings in a garage, we've expanded
                            to a global presence, serving millions of customers
                            worldwide. But despite our growth, we remain
                            committed to providing personalized service and
                            building lasting relationships with our clients.
                        </p>
                        <p className="text-gray-700 text-lg">
                            Join us as we continue to push the boundaries of
                            what's possible and create a brighter future for
                            all.
                        </p>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="text-center mt-16">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                        Ready to Experience the Difference?
                    </h3>
                    <p className="text-gray-600 text-lg mb-8">
                        Explore our products and services today!
                    </p>
                    <div className="space-x-4">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-gold-500 hover:from-fuchsia-600 hover:via-purple-600 hover:to-gold-600 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl shadow-purple-400/40 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-500"
                        >
                            Shop Our Products
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-blue-500 text-blue-500 font-bold px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-500 bg-transparent"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
