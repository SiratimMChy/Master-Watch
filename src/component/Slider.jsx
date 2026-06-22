import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

import img1 from '../assets/watch_slider_1.png';
import img2 from '../assets/watch_slider_2.png';
import img3 from '../assets/watch_slider_3.png';
import img4 from '../assets/watch_slider_4.png';

const slides = [
    {
        img: img1,
        tagline: ["Timeless Elegance on Your Wrist."]
    },
    {
        img: img2,
        tagline: ["Precision Meets Perfection."]
    },
    {
        img: img3,
        tagline: ["A Masterpiece for Every Moment."]
    },
    {
        img: img4,
        tagline: ["Elevate Your Style with Master Watch."]
    }
];

const Slider = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-5">
            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper rounded-xl overflow-hidden shadow-2xl"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative group">
                             <img className="w-full h-[550px] brightness-90" src={slide.img} alt="" />
                          
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 flex items-end justify-center pb-8 px-4">
                                <p className="text-2xl lg:text-5xl font-bold text-white text-center drop-shadow-lg bg-black/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
                                    <Typewriter
                                        words={slide.tagline}
                                        loop={true}
                                        typeSpeed={80}
                                        deleteSpeed={60}
                                        delaySpeed={3000}
                                        cursor
                                        cursorStyle="|"
                                    />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;