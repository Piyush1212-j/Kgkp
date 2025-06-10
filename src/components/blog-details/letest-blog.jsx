import React, { useState } from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogimage from '@/assets/images/cat-1.jpg';

// Sample blog data (add more items to test pagination)
const blogData = [
  {
    id: 1,
    category: 'Real Estate',
    title: 'Affordable Flats in Jaipur – A Smart Investment for the Future',
    author: 'Admin',
    date: 'May 7, 2025',
    description1:
      'When we hear the word affordable, the first thing that comes to our mind is a basic home...',
    image: blogimage,
    link: '/blog/affordable-flats-in-jaipur',
  },
  {
    id: 2,
    category: 'Real Estate',
    title: 'Ultra Luxury 5 BHK Flats in Jaipur | KGK Realty',
    author: 'Admin',
    date: 'May 10, 2025',
    description1:
      'Buying a home is a big decision. Here are some important tips...',
    image: blogimage,
    link: '/blog/top-tips-to-buy-your-dream-home',
  },
  {
    id: 3,
    category: 'Real Estate',
    title: 'Top Locations to Invest in Jaipur',
    author: 'Admin',
    date: 'May 12, 2025',
    description1:
      'Explore the most promising neighborhoods in Jaipur for real estate investment...',
    image: blogimage,
    link: '/blog/top-locations-jaipur',
  },
  {
    id: 4,
    category: 'Real Estate',
    title: 'Benefits of Buying Property in Tier-2 Cities',
    author: 'Admin',
    date: 'May 14, 2025',
    description1:
      'Tier-2 cities are emerging as real estate hotspots. Here’s why they make great investments...',
    image: blogimage,
    link: '/blog/tier-2-property-benefits',
  },
  {
    id: 5,
    category: 'Real Estate',
    title: 'RERA-Approved Projects: Why They Matter',
    author: 'Admin',
    date: 'May 16, 2025',
    description1:
      'RERA ensures transparency and security for home buyers. Here’s why it’s crucial...',
    image: blogimage,
    link: '/blog/rera-importance',
  },
  {
    id: 6,
    category: 'Real Estate',
    title: 'Ready-to-Move vs Under-Construction Homes',
    author: 'Admin',
    date: 'May 18, 2025',
    description1:
      'Understand the pros and cons of both options before making your real estate decision...',
    image: blogimage,
    link: '/blog/ready-vs-under-construction',
  },
  {
    id: 7,
    category: 'Real Estate',
    title: 'Is Jaipur a Good Place to Settle After Retirement?',
    author: 'Admin',
    date: 'May 20, 2025',
    description1:
      'Discover why Jaipur is becoming a top choice for peaceful retirement living...',
    image: blogimage,
    link: '/blog/jaipur-retirement',
  },
];

const ITEMS_PER_PAGE = 6;

const LetestBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="py-8">
      <div className="mb-12">
        <h2 className="lg:text-4xl text-2xl text-black mb-4">Latest Blogs</h2>
        <div className="h-px bg-customGray1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
        {currentBlogs.map((blog) => (
          <div key={blog.id}>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="py-8 px-3 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight line-clamp-2">
                {blog.title}
              </h2>
              <div className="h-[1px] bg-[#c1c1c1] w-full mb-6" />
              <p className="text-gray-700 text-base leading-6 mb-4 line-clamp-3">
                {blog.description1}
              </p>
              <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-1 text-black">
                  <User size={14} />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1 text-black">
                  <Calendar size={14} />
                  <span>{blog.date}</span>
                </div>
              </div>
              <Link
                to={blog.link}
                className="inline-block bg-[#C78B36] text-white px-8 py-2 text-base font-medium hover:bg-[#a9742d] transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`w-9 h-9 flex items-center justify-center text-2xl rounded-full border border-[#A77A3A] ${currentPage === 1
                ? 'text-[#A77A3A] opacity-50 cursor-not-allowed'
                : 'text-[#A77A3A]'
              }`}
          >
            &lt;
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            const isActive = currentPage === pageNum;

            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-9 h-9 flex items-center justify-center rounded-full border border-[#A77A3A] ${isActive
                    ? 'text-[#7B4F1D] font-bold'
                    : 'text-[#000000] hover:bg-[#f5f5f5]'
                  }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`w-9 h-9 flex items-center justify-center rounded-full text-2xl border border-[#A77A3A] ${currentPage === totalPages
                ? 'text-[#A77A3A] opacity-50 cursor-not-allowed'
                : 'bg-[#7B4F1D] text-white'
              }`}
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
};

export default LetestBlog;
