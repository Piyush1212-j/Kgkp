import React, { useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import mockProjects from '../data/mockProjectDetails';


import HeroSectionDetails from '../components/project-details/HeroSectionDetails';
import AboutDetails from '../components/project-details/about-details';
import LocationExcellence from '../components/project-details/location-excellence';
import ModernFacilities from '../components/project-details/modern-facilities';
import ProjectGallery from '../components/project-details/project-gallery';
import ConstructionUpdate from '../components/project-details/construction-update';
import FloorPlan from '../components/project-details/floor-plan';
import BookVisitSite from '../components/project-details/book-visit-site';
import ClientSpeaks from '../components/ClientSpeaks';
import Faq from '../components/Faq';

const ProjectDetailsPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = mockProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <MainLayout title="Project Not Found">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">404 - Project Not Found</h1>
          <Link to="/" className="text-blue-600 underline">
            ← Back to all projects
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={project.name}>
      <HeroSectionDetails data={project.hero} />
      <AboutDetails data={project.about} />
      <LocationExcellence
        data={project.location.points}
        mapImage={project.location.mapImage}
      />
      <ModernFacilities data={project.facilities} />
      <ProjectGallery images={project.gallery} />
      <ConstructionUpdate />
      <FloorPlan />
      <BookVisitSite />
      <ClientSpeaks />
      <Faq />
    </MainLayout>
  );
};

export default ProjectDetailsPage;
