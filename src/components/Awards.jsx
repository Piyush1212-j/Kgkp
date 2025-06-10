import React, { useState } from 'react';
import award1 from "@/assets/images/award1.jpg";
import award2 from "@/assets/images/award2.jpg";
import award3 from "@/assets/images/award3.jpg";
import award4 from "@/assets/images/award4.jpg";
import award5 from "@/assets/images/award5.jpg";
import award6 from "@/assets/images/award6.jpg";

const AwardsSection = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const toggleMobileView = () => {
    setShowAllMobile(!showAllMobile);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:py-16 py-8">
      {/* Top Row - Yellow and Grey Boxes */}
      <div className="flex flex-col md:flex-row lg:gap-20 gap-4 relative z-10 md:px-[40px]">
        {/* Yellow Box */}
        <div className="bg-[#966326] text-white p-6 md:p-8 pb-12 md:pb-20 rounded-3xl md:w-6/12 w-full shadow-md">
          <h2 className="text-2xl lg:text-4xl font-light mb-4"> Recognized for Innovation </h2>
          <p className="text-sm leading-relaxed line-clamp-4 w-80">
At KGK Realty, industry accolades affirm our commitment to quality, innovation, and trust—delivering landmark developments that define modern urban living.
          </p>
        </div>  
        <div className="bg-[#777779] h-40 md:h-[18rem] md:w-5/12 w-full rounded-xl mt-4 md:mt-24"></div>
      </div>

      <div className="md:hidden mt-[-100px] relative z-20">
        <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg">
          <img src={award1} alt="Award 1" className="w-full h-full object-cover object-top" />
        </div>
      </div>
      {showAllMobile && (
        <div className="md:hidden mt-4 flex flex-col gap-4 relative z-20">
          <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg">
            <img src={award2} alt="Award 2" className="w-full h-full object-cover object-top" />
          </div>
          <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg">
            <img src={award3} alt="Award 3" className="w-full h-full object-cover object-top" />
          </div>
          <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg">
            <img src={award4} alt="Award 4" className="w-full h-full object-cover object-top" />
          </div>
          <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg">
            <img src={award5} alt="Award 5" className="w-full h-full object-cover object-top" />
          </div>
          <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg">
            <img src={award6} alt="Award 6" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      )}
      
      {/* Toggle Button for Mobile - Always at the bottom */}
      <div className="md:hidden flex justify-center mt-4">
        <button 
          onClick={toggleMobileView}
          className="bg-primary text-white px-6 py-2 rounded-sm font-medium mt-4"
        >
          {showAllMobile ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="hidden md:flex mt-[-265px] flex-row gap-4 items-end justify-center relative z-20 lg:-ml-4">
        <div className="w-[37%] h-64 rounded-3xl overflow-hidden shadow-lg">
          <img src={award1} alt="Award 1" className="w-full h-full object-cover object-top" />
        </div>
        <div className="w-[31%] h-[23rem] rounded-3xl overflow-hidden shadow-lg">
          <img src={award2} alt="Award 2" className="w-full h-full object-cover object-top" />
        </div>
        <div className="w-[28%] h-64 rounded-3xl overflow-hidden shadow-lg">
          <img src={award3} alt="Award 3" className="w-full h-full object-cover object-top" />
        </div>
      </div>
      <div className="hidden md:flex flex-row gap-4 items-start justify-center relative z-20 mt-3 lg:mb-4 lg:ml-6">
        <div className="h-64 w-[30%] rounded-3xl overflow-hidden shadow-lg">
          <img src={award4} alt="Award 4" className="w-full h-full object-cover object-top" />
        </div>
        <div className="h-80 w-1/4 rounded-3xl overflow-hidden shadow-lg">
          <img src={award5} alt="Award 5" className="w-full h-full object-cover object-top" />
        </div>
        <div className="h-64 w-[40%] rounded-3xl overflow-hidden shadow-lg">
          <img src={award6} alt="Award 6" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;