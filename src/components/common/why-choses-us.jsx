import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import CommonImage from "@/assets/images/about1.jpg";
import GroupImage from "@/assets/images/about2.jpg";
import ThirdImage from "@/assets/images/about3.jpg";
import { Umbrella, Users, Settings } from 'lucide-react';

SwiperCore.use([Pagination]);

const slides = [
  { src: CommonImage, alt: "Building Exterior" },
  { src: GroupImage, alt: "Team Photo" },
  { src: ThirdImage, alt: "Office Scene" },
];

const features = [
  { icon: <Umbrella size={48} />, strong: "PARTNERSHIP", description: "Built on strong values and lasting relationships, we treat every industrial project as our own, ensuring trust and a personalized approach at every stage.", },
  { icon: <Users size={48} />, strong: "EXPERTISE", description: "With decades of specialized industry experience, we deliver meticulous planning, strategic execution, and dependable completion to maximize the potential of your industrial assets.", },
  { icon: <Settings size={48} />, strong: "INNOVATION", description: "We go beyond construction by integrating cutting-edge technology and progressive design principles, creating industrial spaces that meet the evolving demands of modern businesses.", },
];

const WhyChosesUs = () => (
  <section className="bg-[#A36A2B] text-white py-10 px-6 ">
    <div className="text-center mx-auto max-w-3xl">
      <h2 className="text-2xl lg:text-4xl font-light leading-tight mb-2"> Why Choose KGK Realty? </h2>
      <p className="text-[16px] font-normal leading-relaxed max-w-3xl mx-auto">
        At KGK Realty, we place your industrial investment at the forefront, offering expert insights and customized solutions tailored to your business needs.
        <br /> Our steadfast dedication to integrity, transparency, and excellence guarantees a smooth and reliable real estate journey.

      </p>
    </div>
    <div className="container-fluid">
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 justify-items-center">
        <div className="w-full lg:col-span-4">
          <Swiper slidesPerView={1} spaceBetween={20} pagination={{ clickable: true }} className="h-full">
            {slides.map((slide, sIdx) => (
              <SwiperSlide key={sIdx}>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full lg:col-span-8">
          <Swiper slidesPerView={1} spaceBetween={20} pagination={{ clickable: true }} className="h-full">
            {slides.map((slide, sIdx) => (
              <SwiperSlide key={sIdx}>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-2">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center px-4">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-[20px] font-light leading-snug text-black">
              THE POWER OF <span className="font-bold">{feature.strong}</span>
            </h3>
            <p className="mt-2 text-sm font-normal leading-relaxed max-w-[280px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </div>

    <style jsx global>{`
      .swiper-pagination {
        bottom: -20px;
      }
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: rgba(255,255,255,0.4);
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background: #ffffff;
      }
    `}</style>
  </section>
);

export default WhyChosesUs;