import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogData from '../../data/blogData';

const BlogSection = () => {
  const blog = blogData[0]; // First blog highlight

  return (
    <section>
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6 text-center">
          <p className="text-sm uppercase text-black tracking-wide mb-4">{blog.category}</p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-12 underline">
            {blog.title}
          </h2>

          <div className="flex items-center gap-4 text-sm justify-center text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <User  size={14} />
              <span className="text-black">{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className='text-yellow-600' size={14} />
              <span className="text-black">{blog.date}</span>
            </div>
          </div>

          <p className="text-gray-700 text-base leading-6 mb-4">{blog.description1}</p>
          <p className="text-gray-700 text-base leading-6 mb-6">{blog.description2}</p>

          <Link
            to={`/blog/${blog.slug}`}
            className="inline-block bg-[#966326] text-white px-8 py-2 text-base font-medium hover:bg-[#a9742d] transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
