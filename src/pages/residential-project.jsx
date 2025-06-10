import React, { useEffect } from "react";
import MainLayout from '@/layout/MainLayout';
import HeroSectionMain from "@/components/common/HeroSectionMain";
import ProjectPage from "../components/project/ProjectPage";
import NewLaunches from '@/components/NewLaunches';
import ClientSpeaks from '@/components/ClientSpeaks';
import Faq from '@/components/Faq';
import WhyChosesUs from "../components/common/why-choses-us";
import ProjectHeading from '@/components/project/ProjectHeading';
import allProjects from '@/data/projectsData';

const residentialProjects = allProjects.filter(project => project.type === 'Residential');

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
    <MainLayout title=" Residential Projects">
      <HeroSectionMain title="Residential Projects" />
      <ProjectPage projectType="Residential" />
      <ProjectHeading projects={residentialProjects} variant="residential" />
      <NewLaunches />
      <ClientSpeaks />
      <WhyChosesUs />
      <Faq />
    </MainLayout>
  );
};

export default Project;
