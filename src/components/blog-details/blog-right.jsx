import React, { useState } from 'react';
import { Calendar, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogimage from '@/assets/images/cat-1.jpg';

const blogData = [
  {
    id: 1,
    title: 'Affordable Flats in Jaipur – A Smart Investment for the Future',
    date: 'September 21, 2024',
    image: blogimage,
    link: '/blog/affordable-flats-in-jaipur',
  },
  {
    id: 2,
    title: 'Ultra Luxury 5 BHK Flats in Jaipur | KGK Realty',
    date: 'September 21, 2024',
    image: blogimage,
    link: '/blog/top-tips-to-buy-your-dream-home',
  },
  {
    id: 3,
    title: 'Top Locations to Invest in Jaipur',
    date: 'September 21, 2024',
    image: blogimage,
    link: '/blog/top-locations-jaipur',
  },
  {
    id: 4,
    title: 'Smart Apartments in Mansarovar',
    date: 'September 21, 2024',
    image: blogimage,
    link: '/blog/smart-apartments-mansarovar',
  },
];

const tags = [
  'Residential',
  'Flats',
  'Industrial',
  'Commercial',
  'Real Estate',
  'Apartments',
];

const BlogRight = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="w-full">
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 pr-12 rounded-md text-sm"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C78B36] text-white px-3 py-2 rounded-md">
          <Search size={18} />
        </button>
      </div>
      <div className=" mb-10">
        <h3 className="text-2xl font-semibold text-black mb-6">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <button
              key={i}
              className="border border-gray-300 px-4 py-1.5 text-sm rounded text-gray-800 hover:bg-gray-100"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className=" mb-10">
        <h3 className="text-2xl font-semibold text-black mb-6">Popular Posts</h3>
        <div className="space-y-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <Link
                to={post.link}
                key={post.id}
                className="flex items-start gap-4"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-16 object-cover rounded-sm"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500">No posts found.</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default BlogRight;
