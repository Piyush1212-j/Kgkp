import MainLayout from '@/layout/MainLayout';
import HeroSectionMain from "@/components/common/HeroSectionMain";
import BlogSection from "@/components/blog/blog-section";
import LetestBlog from '../components/blog/letest-blog';
import BlogRight from '../components/blog/blog-right';
import BlogContact from '../components/blog/blog-contact';

const Blog = () => {
  return (
    <MainLayout title="Blog">
      <HeroSectionMain title="Blog" />

      <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto py-8 px-5">
        <div className="lg:col-span-8">
          <BlogSection />
          <LetestBlog />
        </div>
        <div className="lg:col-span-4">
          <BlogRight />
          <BlogContact />
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
