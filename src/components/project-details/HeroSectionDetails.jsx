import React from "react";
import { Building2, CheckIcon } from "lucide-react";
import CommonImage from "@/assets/images/project-details.png"; // fallback image

const HeroSectionDetails = ({ data }) => {
  const {
    title = "Project Title",
    background = CommonImage,
    address = "Project Address",
    unitInfo = "Unit Info",
    reraApproved = false,
  } = data || {};

  return (
    <section
      className="hero-section relative sm:h-[70vh] h-[65vh] bg-cover bg-top bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute bg-black sm:bottom-10 bottom-0 left-0 z-10 text-white px-7 pl-12 py-8 w-full lg:w-[29rem]">
        <h1 className="text-2xl lg:text-4xl font-normal mb-3 drop-shadow-lg">{title}</h1>

        <div className="flex items-center mb-3 gap-3">
          <p className="flex items-center gap-1 text-sm">
            <Building2 size={15} className="text-primary" />
            <span>{address}</span>
          </p>
        </div>

        <div className="lg:flex justify-between items-center gap-3 mt-2">
          <p className="flex items-center gap-1 text-sm mb-2 lg:mb-0">
            <Building2 size={16} className="text-primary" />
            <span>Unit: {unitInfo}</span>
          </p>

          {reraApproved && (
            <p className="text-green-600 text-sm flex items-center gap-1 mb-2 lg:mb-0">
              <CheckIcon strokeWidth={4.5} className="text-green-500 text-xs" />
              RERA Approved
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionDetails;
