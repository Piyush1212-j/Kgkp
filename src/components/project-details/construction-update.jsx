import React from "react";


const ConstructionUpdate = ({ data }) => {
  return (
    <section className="bg-[#e6e6e6] lg:pt-16 pt-8 pl-4 md:pl-8 lg:mb-10 lg:mb-0">
      <div className="pl-0 lg:pl-20 ">
        <div className="pr-0">
          <p className="text-primary uppercase text-sm tracking-[2px] mr-4 mb-3">
            Lorem ipsum Dolor Sit Amet
          </p>
          <div className="flex items-center mb-4">
            <h2 className="lg:text-4xl text-2xl text-black lg:mr-[6rem] mr-[1rem]"> Construction Updates </h2>
            <div className="h-px bg-customGray1 flex-1"></div>
          </div>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-12 lg:gap-16 gap-10 items-center">

            <div className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="lg:text-2xl text-lg lg:font-semibold text-gray-800 lg:mb-6 mb-2">
                  Under Construction
                </h3>
                <p className="text-gray-600 leading-relaxed lg:text-lg mb-8 lg:w-11/12 pr-4 lg:pr-0">
                  RCC framed strategically constructed structure keeping in mind the best of
                  architecture and specifications both from inside as well as outside.
                </p>
                <button className="bg-[#966326] text-white px-10 py-3 font-medium tracking-wide transition-colors duration-300">
                  BOOK A SITE VISIT
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 relative lg:pl-8">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern architectural construction with curved wooden structure"
                  className="w-full h-[450px] object-cover lg:pr-10 pr-4"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ConstructionUpdate;
