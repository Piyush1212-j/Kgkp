import React, { useEffect, useState } from 'react';
import { Calendar, User, Eye } from 'lucide-react';
import whatsapp from '@/assets/images/whatsapp.png';
import linkedin from '@/assets/images/linkedin.png';
import pinterest from '@/assets/images/pinterest.png';
import Facebook from '@/assets/images/facebook.png';
import blogData from '@/data/blogData';

const BlogDetailsContent = ({ slug }) => {
  const blog = blogData.find((b) => b.slug === slug);
  const [authorImage, setAuthorImage] = useState(null);

  useEffect(() => {
    if (blog) {
      const fetchAuthorImage = async () => {
        try {
          const response = await fetch('https://randomuser.me/api/');
          const data = await response.json();
          setAuthorImage(data.results[0].picture.medium);
        } catch (error) {
          console.error('Failed to load author image:', error);
          setAuthorImage(null);
        }
      };
      fetchAuthorImage();
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Blog not found</h2>
        <p className="text-gray-600">The blog you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug mb-4">
        {blog.title}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2 pb-4">
        <div className="flex items-center gap-1">
          <User size={16} />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{blog.date}</span>
        </div>
        {blog.views && (
          <div className="flex items-center gap-1">
            <Eye size={16} />
            <span>{blog.views} views</span>
          </div>
        )}
      </div>

      {/* Banner Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[380px] object-cover mb-6 rounded-lg"
      />

      {/* Intro Paragraphs */}
      <div className="space-y-4 mb-8">
        {blog.content?.map((para, index) => (
          <p key={index} className="text-[16px] text-gray-700 leading-7">
            {para}
          </p>
        ))}
      </div>

      {/* Table of Contents */}
      {blog.tableOfContents?.length > 0 && (
        <div className="bg-gray-100 rounded-xl w-fit p-8 pr-10 mb-10">
          <h3 className="text-lg font-normal text-gray-800 mb-4">Table of Contents</h3>
          <ol className="list-decimal pl-4 space-y-2 text-[15px] text-blue-600">
            {blog.tableOfContents.map((item, idx) => (
              <li className="text-black" key={idx}>
                <a href={`#section-${idx}`} className="text-black hover:text-blue-600">
                  {item}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Sections */}
      <div className="space-y-12">
        {blog.sections?.map((section, index) => (
          <div key={index} id={`section-${index}`}>
            <h2 className="text-2xl font-normal text-gray-900 mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.content.map((p, i) => (
                <p key={i} className="text-[16px] text-gray-700 leading-7">
                  {p}
                </p>
              ))}
            </div>
            <hr className="mt-10 bg-black" />
          </div>
        ))}
      </div>

      {/* Conclusion */}
      {blog.conclusion && (
        <div className="mt-12 p-6 rounded-xl bg-gray-50">
          <h2 className="text-2xl font-normal text-gray-900 mb-4">Conclusion</h2>
          <p className="text-[16px] text-gray-700 leading-7">{blog.conclusion}</p>
        </div>
      )}

      <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t pt-6">
        {/* Tags */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-5">Tags:</h4>
          <div className="flex gap-2 flex-wrap">
            {blog.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="border border-gray-400 px-3 py-1.5 rounded-sm text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Share This Post:</h4>
          <div className="flex gap-3">

            <a href="#" className="hover:opacity-80 transition">
              <img src={Facebook} alt="Facebook" className="w-6 h-6 cursor-pointer" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={pinterest} alt="Pinterest" className="w-6 h-6 cursor-pointer" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:mt-10 mt-0">
        {authorImage ? (
          <img
            src={authorImage}
            alt={blog.author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-300" />
        )}
        <div>
          <p className="text-base font-semibold text-gray-900 mb-1">Author: {blog.author}</p>
          <p className="text-xs text-gray-500">{blog.date}</p>
        </div>
      </div>

    </div>
  );
};

export default BlogDetailsContent;