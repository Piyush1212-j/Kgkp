import React from 'react';

import instaIcon from '@/assets/images/insta.png';

import property1 from '@/assets/images/property1.jpg';
import property2 from '@/assets/images/property2.jpg';
import property3 from '@/assets/images/property3.jpg';
import property4 from '@/assets/images/property4.jpg';
import property5 from '@/assets/images/property1.jpg';
import property6 from '@/assets/images/property2.jpg';
import property7 from '@/assets/images/property3.jpg';
import property8 from '@/assets/images/property4.jpg';

const images = [
  { src: property1, link: 'https://www.instagram.com/p/POST_ID_1/' },
  { src: property2, link: 'https://www.instagram.com/p/POST_ID_2/' },
  { src: property3, link: 'https://www.instagram.com/p/POST_ID_3/' },
  { src: property4, link: 'https://www.instagram.com/p/POST_ID_4/' },
  { src: property5, link: 'https://www.instagram.com/p/POST_ID_5/' },
  { src: property6, link: 'https://www.instagram.com/p/POST_ID_6/' },
  { src: property7, link: 'https://www.instagram.com/p/POST_ID_7/' },
  { src: property8, link: 'https://www.instagram.com/p/POST_ID_8/' },
];

const KgkRealty = () => {
  return (
    <section className="lg:py-12 py-8 bg-white">
      <div className="">
        {/* Heading */}
        <div className="text-center mb-10 flex items-center justify-center">
          <div className="flex-grow border-t border-customGray1 mr-12"></div>
          <h2 className=" text-2xl lg:text-4xl text-dark">kgk_realty</h2>
          <img src={instaIcon} alt="Instagram Icon" className="w-6 h-6 ml-2" />
          <div className="flex-grow border-t border-customGray1 ml-12"></div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex overflow-x-auto space-x-4 px-4 gap-5">
          {images.map((item, index) => (
            <div key={index} className="min-w-[90%] flex-shrink-0 overflow-hidden rounded">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.src}
                  alt={`KGK Realty ${index + 1}`}
                  className="w-full h-auto object-cover rounded transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {images.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.src}
                  alt={`KGK Realty ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KgkRealty;
