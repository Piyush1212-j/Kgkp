import React from "react";

const AboutDetails = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-8 bg-white">
      <div className="w-full px-6 lg:px-16 bg-white">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-24 gap-5 mt-2 mb-10 lg:px-8">
          <div className="lg:w-7/12 w-full">
            <div className="text-sm text-gray-500 mb-5 lg:mb-10">
              {data.breadcrumb?.join(" > ")}
            </div>

            <div className="mb-4">
              <img src={data.logo} alt="Project Logo" className="w-28 mb-8 object-contain" />
            </div>

            <p className="text-base text-[#3a3a3a] leading-6 mb-7">
              {data.about?.text || "No description available."}
            </p>

            <a
              href={data.brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#996633] text-white px-6 py-3 text-sm font-medium hover:bg-[#7a512a] transition inline-block"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>

          <div className="lg:w-5/12 w-full">
            <img
              src={data.image}
              alt="Project Detail"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

<div className="w-full px-6 lg:px-10">
      {data.fullWidthImage && (
        <div className="w-full">
          <img
            src={data.fullWidthImage}
            alt="Project Detail"
            className="w-full lg:h-[500px] object-cover"
          />
        </div>
      )}
      </div>
    </section>
  );
};

export default AboutDetails;
