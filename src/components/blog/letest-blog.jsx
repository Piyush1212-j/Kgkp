import React, { useState } from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogData from '../../data/blogData';

const LetestBlog = () => {
  const blogsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const selectedBlogs = blogData.slice(startIndex, startIndex + blogsPerPage);

  return (
    <section className="py-10 px-4">
      {/* Section Heading */}
      <div className="mb-12">
        <h2 className="lg:text-4xl text-2xl text-black mb-4">Latest Blogs</h2>
        <div className="h-px bg-customGray1"></div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {selectedBlogs.map((blog) => (
          <div key={blog.id} className="overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-80 object-cover"
            />
            <div className="py-6 p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {blog.description1 ? `${blog.description1.slice(0, 100)}...` : ''}
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-5">
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span className="text-black">{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span className="text-black">{blog.date}</span>
                </div>
              </div>

              <Link
                to={`/blog/${blog.slug}`}
                className="inline-block text-[#C78B36] hover:underline bg-[#966326] text-white px-8 py-2.5 text-sm font-medium hover:bg-[#a9742d] transition flex mx-auto w-fit uppercase hover:decoration-none"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-9 h-9 flex items-center justify-center rounded-full border border-[#A77A3A] transition ${
                  currentPage === pageNum
                    ? 'bg-[#7B4F1D] text-white font-bold'
                    : 'text-black hover:bg-[#f5f5f5]'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`w-9 h-9 flex items-center justify-center text-xl rounded-full border transition ${
              currentPage === totalPages
                ? 'border-[#A77A3A] text-[#A77A3A] opacity-50 cursor-not-allowed'
                : 'border-[#A77A3A] bg-[#7B4F1D] text-white'
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
