import React from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import blog1 from "@/assets/images/blog1.jpg";
import blog2 from "@/assets/images/blog2.jpg";
import blog3 from "@/assets/images/blog3.jpg"; 

const blogs = [
  {
    title: "WHY 4 BHK FLATS IN JAIPUR ARE THE ULTIMATE LUXURY LIVING CHOICE",
    desc: "In the vibrant and culturally rich city of Jaipur, the demand f",
    image: blog1,
  },
  {
    title: "7 CREATIVE WAYS TO DECORATE YOUR FLAT IN JAIPUR",
    desc: "Welcome to the energetic city of Jaipur, where charm abounds in every nook and cranny where heritage coexists with modernity.",
    image: blog2,
  },
  {
    title: "7 BENEFITS OF BUYING HOME IN A GATED SOCIETY FOR FAMILIES",
    desc: "Welcome to the energetic city of Jaipur, where charm abounds in every nook and cranny where heritage coexists with modernity.",
    image: blog3,
  },
  {
    title: "WHY 4 BHK FLATS IN JAIPUR ARE THE ULTIMATE LUXURY LIVING CHOICE",
    desc: "In the vibrant and culturally rich city of Jaipur, the demand f",
    image: blog1,
  },
  {
    title: "7 CREATIVE WAYS TO DECORATE YOUR FLAT IN JAIPUR",
    desc: "Welcome to the energetic city of Jaipur, where charm abounds in every nook and cranny where heritage coexists with modernity.",
    image: blog2,
  },
  {
    title: "7 BENEFITS OF BUYING HOME IN A GATED SOCIETY FOR FAMILIES",
    desc: "Welcome to the energetic city of Jaipur, where charm abounds in every nook and cranny where heritage coexists with modernity.",
    image: blog3,
  },
];

const Blogs = () => {
  return (
    <section className="lg:py-16 py-10" style={{
        background: 'linear-gradient(to bottom, #e6e6e6 60%, #ffffff 40%)',
      }}>
        <div className="lg:pr-[6rem] px-6 lg:px-0 pl-0 mb-4">
            <div className="flex items-center lg:justify-end mb-2">
                <div className="h-px bg-customGray1 flex-1 hidden sm:block"></div>
                <p className="text-primary uppercase lg:text-base text-sm  tracking-[2px] lg:ml-4 ml-6">
                Your Source for Real Estate Insights
                </p>
            </div>
        </div>

        <div className="relative container-fluid">
         <h2 className="text-left lg:text-end lg:text-4xl text-2xl text-dark mb-8"> Blogs </h2>

         <Swiper
          modules={[Pagination]}
          slidesPerView={1.2}
          spaceBetween={20}
          style={{ minHeight: "100%" }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination2",
          }}
          className="pb-8"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index} className="!h-auto">
            <div className="h-full flex flex-col">
              <div className="bg-white h-full rounded-xl overflow-hidden shadow-sm border flex flex-col">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-xl"
                />
                <div className="py-8 px-5 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-md font-semibold mb-3 leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-base text-gray-500">{blog.desc}</p>
                  </div>
                  <button className="mt-6 self-start border border-black text-black text-base px-8 py-2 hover:bg-black hover:text-white transition hover:border-secondary hover:bg-secondary hover:text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          
          ))}
        </Swiper>

        <div className="custom-pagination2 flex justify-center mt-4 space-x-2" />
    

        </div>

     
    </section>
  );
};

export default Blogs;
