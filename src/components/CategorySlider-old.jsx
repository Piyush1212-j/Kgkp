import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import cat1 from '@/assets/images/cat-1.jpg';
import cat2 from '@/assets/images/cat-2.jpg';
import cat3 from '@/assets/images/cat-3.jpg';
import cat4 from '@/assets/images/cat-4.jpg';
import cat5 from '@/assets/images/cat-5.jpg';

import icon1 from '@/assets/images/value-proposition.png';
import icon2 from '@/assets/images/medal.png';
import icon3 from '@/assets/images/skyline.png';
import icon4 from '@/assets/images/location-pin.png';
import icon5 from '@/assets/images/talent.png';

const categories = [
  {
    title: 'Value for Excellence',
    icon: icon1,
    image: cat1,
    subtitle: 'Smart investments, lasting returns, where quality meets affordability',
  },
  {
    title: 'Quality Excellence',
    icon: icon2,
    image: cat2,
    subtitle: 'Meticulous craftsmanship and superior materials for timeless spaces.',
  },
  {
    title: 'Design Excellence',
    icon: icon3,
    image: cat3,
    subtitle: 'Innovating luxury with aesthetics, functionality, and sustainability.',
  },
  {
    title: 'Location Excellence',
    icon: icon4,
    image: cat4,
    subtitle: 'Prime locations that enhance lifestyle, convenience, and connectivity.',
  },
  {
    title: 'Customer Centricity',
    icon: icon5,
    image: cat5,
    subtitle: 'Built around you, your needs, your comfort and your future',
  },
];

const CategorySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="category-slider-section py-16 bg-white relative">
      <div className="mx-auto px-[15px] lg:pl-[3rem] lg:pr-0 flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-2/3 overflow-hidden pt-[32px]">
        <Swiper
  spaceBetween={10}
  centeredSlides={true} // Ensure the slides are centered
  slidesPerView={5} // Show 5 slides at once
  initialSlide={2} // Start with the 3rd slide (index 2) in the center
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
  modules={[Pagination, Navigation]}
  breakpoints={{
    0: {
      slidesPerView: 1, // 👈 Show 1 image on mobile
    },
    768: {
      slidesPerView: 5, // 👈 Show 5 on desktop
    },
  }}
  className="w-full"
>
  {categories.map((cat, index) => {
    const isActive = index === activeIndex;
    const widthClass = isActive ? 'md:!w-[30%] md:-mt-8 z-10' : 'md:!w-[16%]';
    const justifyClass = isActive ? 'pb-8 justify-end' : 'justify-end';

    return (
      <SwiperSlide key={index} className={`!w-full ${widthClass}`}>
        <div className="relative h-[24rem] rounded shadow-md group overflow-hidden transition-all duration-300">
          <img
            src={cat.image}
            alt={cat.title}
            className="absolute inset-0 w-full h-full object-cover object-center brightness-75 group-hover:brightness-50 transition-all"
          />
          <div
            className={`absolute inset-0 bg-black/40 p-4 flex flex-col ${justifyClass} text-white text-center`}
          >
            <img src={cat.icon} alt={cat.title} className="w-6 h-6 mb-2 mx-auto" />
            <div className="font-semibold text-sm">{cat.title}</div>
            <p className="category-slider-subtitle text-xs mt-1">{cat.subtitle}</p>
          </div>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>


        </div>
        <div className="lg:w-1/3 text-gray-800 text-3xl font-light leading-relaxed border-t border-customGray1 pt-6 lg:px-4">
          We develop quality infrastructure and real estate projects since 1999
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
