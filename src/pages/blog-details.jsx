// src/pages/blog-details.js
import { useParams } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import HeroSectionMain from "@/components/common/HeroSectionMain";

import LetestBlog from '../components/blog/letest-blog';
import BlogRight from '../components/blog/blog-right';
import BlogContact from '../components/blog/blog-contact';
import BlogDetailsContent from '../components/blog-details/BlogDetailsContent';

const BlogDetails = () => {
  const { slug } = useParams();

  return (
    <MainLayout title="Blog Details">
      <HeroSectionMain title="Blog Details" />
      <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto py-12 px-5">
        <div className="lg:col-span-8">
          <BlogDetailsContent slug={slug} /> 
        </div>
        <div className="lg:col-span-4">
          <BlogRight />
          <BlogContact />
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetails;
