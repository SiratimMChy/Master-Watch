import React from 'react';
import { Shield, Sparkles, Clock, Award, Gem, ThumbsUp } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Award,
            title: "Premium Quality",
            description: "We prioritize the craftsmanship, durability, and authenticity of every watch in our collection."
        },
        {
            icon: Shield,
            title: "Authenticity & Trust",
            description: "Building trust through certified genuine products, honest communication, and transparent pricing."
        },
        {
            icon: Gem,
            title: "Style & Elegance",
            description: "Curating timeless accessories that help you elevate your personal style and leave a lasting impression."
        },
        {
            icon: ThumbsUp,
            title: "Customer Satisfaction",
            description: "Dedicated to providing exceptional service, expert guidance, and ongoing support for our customers."
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-6">
            {/* Hero Section */}
            <section className="px-5 py-6 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                            <Clock className="w-4 h-4" />
                            About Master Watch
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
                            Bangladesh's Premier <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Luxury Watch Destination</span>
                        </h1>

                        <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                            Master Watch connects watch enthusiasts with timeless elegance across Bangladesh. We provide a secure, transparent platform
                            for discovering premium timepieces and accessories, making sophisticated style accessible to everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="px-5 py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                            <Sparkles className="w-4 h-4" />
                            Our Core Values
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
                            What <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Guides</span> Our Excellence
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Our commitment to quality, authenticity, and our valued customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white w-full max-w-sm rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full p-8"
                                >
                                    {/* Icon container */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -translate-y-2">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;