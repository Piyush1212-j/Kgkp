import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogimage from '@/assets/images/cat-1.jpg';
const BlogSection = () => {
  return (
    <section>
      <div className=" overflow-hidden">

        <img
          src={blogimage}
          alt="Affordable Flats in Jaipur"
          className="w-full h-96 object-cover"
        />

        <div className="p-6 text-center">
          <p className="text-sm uppercase text-black tracking-wide mb-4">Real Estate</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-12">
            {` Affordable Flats in Jaipur – A Smart Investment for the Future`}
          </h2>

          <div className="flex items-center gap-4 text-sm flex justify-center items-center text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <User size={14} />
              <span className='text-black'>Admin</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span className='text-black'>May 7, 2025</span>
            </div>
          </div>


          <p className="text-gray-700 text-base leading-6 mb-4">
            {`When we hear the word affordable, the first thing that comes to our mind is a basic home. Whereas, they are just the residences that a middle-class person or an upper-middle-class person can afford to buy. In layman’s language, affordable simply means that most people have the money to buy it.`}  </p>


          <p className="text-gray-700 text-base leading-6 mb-6">
            {`
In Jaipur, affordable flats come with thoughtfully designed layouts and modern facilities like parking facilities, common areas for various activities, security and CCTV surveillance, a children’s play area, and landscaped gardens, etc.`}  </p>

          <Link
            to="/blog/affordable-flats-in-jaipur"
            className="inline-block bg-[#C78B36] text-white px-8 py-2 text-base font-medium hover:bg-[#a9742d] transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
