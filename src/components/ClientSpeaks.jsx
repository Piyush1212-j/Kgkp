import React from "react";

import client1 from '@/assets/images/client1.jpg';
import client2 from '@/assets/images/client2.jpg';
import client3 from '@/assets/images/client3.jpg';

const ClientSpeaks = () => {
  return (
    <section className="lg:py-16 py-8">
      {/* Title Section */}
      <div className="lg:pl-[6rem] px-6 lg:px-0 pr-0">
        <div className="flex items-center mb-2">
          <p className="text-primary uppercase lg:text-base text-sm  tracking-[2px] mr-4">
          Stories of Satisfaction and Success
          </p>
          <div className="h-px bg-customGray1 flex-1"></div>
        </div>
         <h2 className="lg:text-4xl text-2xl text-dark mb-2 mt-4">Client Speaks</h2>

      </div>

      <div className="container-fluid">
       
        <div className="flex lg:overflow-hidden overflow-x-auto sm:justify-center pb-4 gap-6 snap-x items-center ">
          {/* 1st Image */}
          <div className="w-48 h-80 lg:w-52 lg:h-64 rounded-xl overflow-hidden relative flex-shrink-0 snap-start">
            <img
              src={client1}
              alt="Client"  
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-black text-xl font-bold h-5">▶</span>
              </button>
            </div>
          </div>

          {/* 2 Text Cards */}
          <div className="flex flex-col gap-4 lg:w-52 w-44 flex-shrink-0 snap-start">
            <div className="border rounded-xl p-4 text-sm text-gray-700">
              <p>
                "We found KGK Realty work to be of a high standard, especially the finishes."
              </p>
              <p className="mt-2 font-semibold text-yellow-800">ABHINAV P</p>
            </div>
            <div className="border rounded-xl p-4 text-sm text-gray-700 ">
              <p>
                "We have no hesitation in recommending KGK Realty to any organization."
              </p>
              <div className="flex items-center gap-3 mt-2">
                  <img
              src={client1}
              alt="Client"  
              className="w-8 h-8 rounded-full object-cover"
            />
   <p className="mt-2 font-semibold text-yellow-800">HARRY PATEL</p>
           
              </div>
            </div>
          </div>

          {/* 2nd Image */}
          <div className="w-48 h-80 lg:w-60 lg:h-[23rem] rounded-xl overflow-hidden relative flex-shrink-0 snap-start">
            <img
              src={client2}
              alt="Main Client"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-black text-xl font-bold h-5">▶</span>
              </button>
            </div>
          </div>

          {/* 2 Text Cards */}
          <div className="flex flex-col gap-4 lg:w-52 w-64 flex-shrink-0 snap-start">
            <div className="border rounded-xl p-4 text-sm text-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <img
              src={client1}
              alt="Client"  
              className="w-8 h-8 rounded-full object-cover"
            />
              <p className="mt-2 font-semibold text-yellow-800">RAGHU RAM G</p>
           
              </div>
              <p>
                "The company is well-equipped with cutting-edge machinery for construction."
              </p>

            </div>
            <div className="border rounded-xl p-4 text-sm text-gray-700 h-32">
              <p>
                "I had a great overall experience dealing with your organization."
              </p>
              <p className="mt-2 font-semibold text-yellow-800">SMIT K</p>
            </div>
          </div>

          {/* 3rd Image */}
          <div className="w-52 h-60 rounded-xl overflow-hidden relative flex-shrink-0 snap-start">
            <img
              src={client3}
              alt="Client"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                <span className="text-black text-xl font-bold h-5">▶</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-2 lg:hidden block">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientSpeaks;