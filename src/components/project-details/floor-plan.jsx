import React, { useState, useEffect } from 'react';
import CommonImage from "@/assets/images/Floor-Plan.png";

const floorPlans = [
  {
    title: '5 BHK',
    size: '5327 sq.ft.',
    description: 'Specification:\nLorem ipsum dolor sit amet, adipiscing elit. Vestibulum non rhoncus magna.',
    image: CommonImage,
  },
  {
    title: '4 BHK (TYPE 1)',
    size: '4171 sq.ft.',
    description: 'Specification:\nLorem ipsum dolor sit amet, adipiscing elit. Vestibulum non rhoncus magna.',
    image: CommonImage,
  },
  {
    title: '4 BHK (TYPE 2)',
    size: '4171 sq.ft.',
    description: 'Specification:\nLorem ipsum dolor sit amet, adipiscing elit. Vestibulum non rhoncus magna.',
    image: CommonImage,
  },
  {
    title: '4 BHK (TYPE 3)',
    size: '4171 sq.ft.',
    description: 'Specification:\nLorem ipsum dolor sit amet, adipiscing elit. Vestibulum non rhoncus magna.',
    image: CommonImage,
  },
];

const FloorPlan = () => {
  const [zoomImage, setZoomImage] = useState(null);
  const [activeTab, setActiveTab] = useState('unit');

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setZoomImage(null);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const renderFloorCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {floorPlans.map((plan, index) => (
        <div key={index} className="relative group bg-white">
          <div
            className="relative overflow-hidden cursor-pointer border-2 border-[#b8966b] p-4"
            onClick={() => setZoomImage(plan.image)}
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-3xl font-light text-black mb-2 bg-[#b8966b] w-10 h-10 rounded-full flex justify-center items-center">+</div>
              <div className="text-xs uppercase text-black tracking-widest">Click to view</div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-bold mb-1">{plan.title}</h3>
            <p className="text-sm text-gray-700 mb-1">{plan.size}</p>
            <p className="text-sm text-gray-500 whitespace-pre-line">{plan.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full lg:py-14 py-8 bg-white">
      <div className="mx-auto">

        <div className="text-center mb-20">
          <p className="text-amber-700 uppercase text-sm tracking-widest mb-6 bg-white inline-block px-10 py-2">
            Lorem ipsum dolor sit amet
          </p>

          <div className="bg-[#e8e8e8] w-full h-[2px] rounded-full mb-10 relative">
            <p className="text-2xl lg:text-4xl font-light text-gray-800 absolute -top-6 left-1/2 -translate-x-1/2 bg-white lg:px-10 px-6 py-2">
              Floor Plan
            </p>
          </div>

        </div>

<div className='lg:px-10 px-6'>
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('master')}
            className={`border px-8 py-3 text-sm ${activeTab === 'master' ? 'bg-[#77787a] text-white' : 'border-black text-black'}`}
          >
            MASTER PLAN
          </button>
          <button
            onClick={() => setActiveTab('unit')}
            className={`border px-8 py-3 text-sm ${activeTab === 'unit' ? 'bg-[#77787a] text-white' : 'border-black text-black'}`}
          >
            UNIT PLAN
          </button>
        </div>

        {renderFloorCards()}

        {zoomImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            onClick={() => setZoomImage(null)} // Close on outside click
          >
            <div
              className="relative bg-white p-4 rounded-lg max-w-6xl w-[90%] max-h-[700px] overflow-auto shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inside click
            >
              <button
                onClick={() => setZoomImage(null)}
                className="absolute top-2 right-2 bg-black w-10 h-10 rounded-full flex justify-center text-white items-center text-4xl font-bold hover:text-red-600"
              >
                ×
              </button>
              <img
                src={zoomImage}
                alt="Zoomed Floor Plan"
                className="w-full h-[700px] object-contain p-4"
              />
            </div>
          </div>
        )}
</div>

      </div>
    </section>
  );
};

export default FloorPlan;
