// src/pages/Home.jsx
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import HeroSection from '@/components/HeroSection';
import CategorySlider from '@/components/CategorySlider';
import ProjectCard from '@/components/ProjectCard';
import LocationMap from '@/components/LocationMap';
import AboutSection from '@/components/AboutSection';
import Awards from '@/components/Awards';
import NewLaunches from '@/components/NewLaunches';
import ClientSpeaks from '@/components/ClientSpeaks';
import Blogs from '@/components/Blogs';
import WhyWork from '@/components/WhyWork';
import KgkRealty from '@/components/KgkRealty';
import Faq from '@/components/Faq';

const Home = () => {
  return (
    <MainLayout title="Home">
      <HeroSection />
      <CategorySlider />
      <ProjectCard />
      <LocationMap />
      <AboutSection />
      <Awards />
      <NewLaunches />
      <ClientSpeaks />
      <Blogs />
      <WhyWork />
      <KgkRealty />
      <Faq />
    </MainLayout>
  );
};

export default Home;
