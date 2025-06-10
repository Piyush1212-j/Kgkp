import React from 'react';

import circleBg1 from '@/assets/images/circle-bg-1.webp';
import circleBg2 from '@/assets/images/circle-bg-2.webp';
import circleBg3 from '@/assets/images/circle-bg-3.webp';

import about1 from '@/assets/images/about1.jpg';
import about2 from '@/assets/images/about2.png';
import about3 from '@/assets/images/about3.jpg';
import about4 from '@/assets/images/about4.jpg';

const CircleWithContent = ({
  children,
  bgColor = 'transparent',
  size = 'w-[350px] h-[360px]',
  sizeSm = 'sm:w-[398px] sm:h-[360px]',
  sizeLg = 'lg:w-[375px] lg:h-[400px]',
  backgroundImage = circleBg1, // default background image
}) => {
  const className = `relative ${size} ${sizeSm} ${sizeLg}`;

  return (
    <div className={className} style={{ backgroundColor: bgColor }}>
      <img
        src={backgroundImage}
        alt="circle background"
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        {children}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className=" bg-white">
      {/* Top Row */}
      <div className="flex flex-wrap">
        {/* Image 1 */}
        <div className="w-full md:w-6/12 lg:w-[36.6%] relative">
          <img
            src={about1}
            alt="About 1"
            className="w-full h-[360px] sm:h-[360px] lg:h-[400px] object-cover"
          />
        </div>

        {/* Circle Content */}
        <div className="w-full md:w-6/12 lg:w-[27%] flex items-center justify-center">
          <CircleWithContent
            size="w-full h-[360px]"
            sizeSm="sm:w-full sm:h-[360px]"
            sizeLg="lg:w-full lg:h-[400px]"
            bgColor="#ffffff"
            backgroundImage={circleBg1}
          >
            {/* <h2 className="text-lg sm:text-xl font-bold mb-2">ABOUT US</h2> */}
            <p className="text-xs sm:text-base p-2 lg:p-4 lg:w-9/12 !leading-7">
           Backed by the global KGK Group, KGK Realty redefines real estate with quality, innovation, and care—delivering excellence in every thoughtfully built project.
            </p>
          </CircleWithContent>
        </div>

        {/* Image 2 */}
        <div className="w-full lg:w-[36.4%]">
          <img
            src={about2}
            alt="About 2"
            className="w-full h-[360px] sm:h-[360px] lg:h-[400px] "
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap relative">
        {/* Image 3 with Overlapping Circle */}
        <div className="w-full md:w-6/12 lg:w-[36.6%] relative">
          <img
            src={about3}
            alt="About 3"
            className="w-full h-[360px] sm:h-[360px] lg:h-[400px] object-cover"
          />
          <div className="absolute top-1/2 lg:right-0 -right-9 -translate-y-1/2 z-10">
            <CircleWithContent bgColor="#966326" backgroundImage={circleBg2}>
              <p className="text-xs sm:text-sm p-2 lg:p-4 py-4 lg:py-10 lg:w-11/12 w-10/12 !leading-7">
              We create more than homes—we craft experiences. Our smart, sustainable designs in prime locations offer lasting value to residents and forward-thinking investors.
              </p>
            </CircleWithContent>
          </div>
        </div>

        {/* Image 4 with Circle */}
        <div className="w-full md:w-6/12 lg:w-[63.4%] relative ">
          <img
            src={about4}
            alt="About 4"
            className="w-full h-[360px] sm:h-[360px] lg:h-[400px] object-cover object-right"
          />
          <div className="absolute top-1/2 lg:-right-1 -right-10 -translate-y-1/2 z-10 hidden sm:block">
            <CircleWithContent backgroundImage={circleBg3}>
              <p className="text-xs sm:text-sm p-2 lg:p-4 py-4 lg:py-10 w-11/12  !leading-7">
              With deep expertise and integrity, KGK Realty puts trust, clarity, and innovation first—ensuring every customer enjoys seamless service and long-term satisfaction.

              </p>
            </CircleWithContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
