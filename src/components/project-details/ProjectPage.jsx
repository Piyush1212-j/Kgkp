import React, { useState, useEffect } from 'react';
import { CheckIcon, MapPin, Building2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import proj1 from '@/assets/images/proj1.jpg';
import proj2 from '@/assets/images/proj2.jpg';
import proj3 from '@/assets/images/proj3.jpg';
import projLogo1 from '@/assets/images/proj-logo1.png';
import projLogo2 from '@/assets/images/proj-logo2.png';
import projLogo3 from '@/assets/images/proj-logo3.png';

export const allProjects = [
  {
    name: 'KGK AAROHAN',
    address: '4, Sardar Patel Marg',
    locality: 'C Scheme',
    city: 'Jaipur',
    units: '5 & 4 bhk',
    image: proj1,
    logo: projLogo1,
    type: 'Residential',
  },
  {
    name: 'KGK AKSHAR',
    address: 'Vande Mataram Road',
    locality: 'Mansarovar',
    city: 'Jaipur',
    units: '4 & 3 bhk',
    image: proj2,
    logo: projLogo2,
    type: 'Residential',
  },
  {
    name: 'KGK AMULYA',
    address: 'Near 7 Number Stand, Airport Road',
    locality: 'Jagatpura',
    city: 'Jaipur',
    units: '3 & 2 bhk',
    image: proj3,
    logo: projLogo3,
    type: 'Residential',
  },
  {
    name: 'KGK ELITE',
    address: 'Tonk Road',
    locality: 'Pratap Nagar',
    city: 'Jaipur',
    units: '2 & 3 bhk',
    image: proj1,
    logo: projLogo1,
    type: 'Residential',
  },
  {
    name: 'KGK URBAN',
    address: 'Ajmer Road',
    locality: 'Vaishali Nagar',
    city: 'Jaipur',
    units: '1, 2 & 3 bhk',
    image: proj2,
    logo: projLogo2,
    type: 'Residential',
  },
];

const FilterComponent = () => {
  const [filters, setFilters] = useState({
    residential: '',
    location: '',
    propertyType: '',
    budget: '',
    availability: '',
  });
  const [openDropdown, setOpenDropdown] = useState(null);

  const residentialOptions = ['All', 'Apartments', 'Villas', 'Penthouses'];
  const locationOptions = ['All', 'C Scheme', 'Mansarovar', 'Jagatpura'];
  const propertyTypeOptions = ['All', '2 BHK', '3 BHK', '4 BHK', '5 BHK'];
  const budgetOptions = ['All', 'Under 50L', '50L - 1Cr', '1Cr - 2Cr', 'Above 2Cr'];
  const availabilityOptions = ['All', 'Ready to Move', 'Under Construction'];

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleOptionSelect = (category, value) => {
    setFilters({ ...filters, [category]: value });
    setOpenDropdown(null);
  };

  const handleReset = () => {
    setFilters({
      residential: '',
      location: '',
      propertyType: '',
      budget: '',
      availability: '',
    });
  };

  const renderDropdown = (title, options, category) => {
    const isOpen = openDropdown === category;
    return (
      <div className="relative">
        <button
          onClick={() => handleDropdownToggle(category)}
          className="flex items-center justify-between px-4 py-3 w-full border-r border-gray-200 bg-white focus:outline-none"
        >
          <span className="font-medium">{title}</span>
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 shadow-lg z-10">
            {options.map((option, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleOptionSelect(category, option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 p-0">
      <div className="flex flex-wrap bg-white m-3 items-center">
        <div className="flex-1 min-w-0">{renderDropdown(filters.residential || 'RESIDENTIAL', residentialOptions, 'residential')}</div>
        <div className="flex-1 min-w-0">{renderDropdown(filters.location || 'LOCATION', locationOptions, 'location')}</div>
        <div className="flex-1 min-w-0">{renderDropdown(filters.propertyType || 'PROPERTY TYPE', propertyTypeOptions, 'propertyType')}</div>
        <div className="flex-1 min-w-0">{renderDropdown(filters.budget || 'BUDGET', budgetOptions, 'budget')}</div>
        <div className="flex-1 min-w-0">{renderDropdown(filters.availability || 'AVAILABILITY', availabilityOptions, 'availability')}</div>
        <button
          onClick={handleReset}
          className="px-10 py-3 bg-black text-white font-medium hover:bg-gray-800 focus:outline-none m-3"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const groupedProjects = ['Residential'].map((type) => {
    const allTypeProjects = filteredProjects.filter((p) => p.type === type);
    const visibleProjects = isMobile && !showAll ? allTypeProjects.slice(0, 4) : allTypeProjects;

    return {
      type,
      projects: visibleProjects,
      total: allTypeProjects.length,
    };
  });

  return (
    <section id="projects" className="lg:py-16 py-10 bg-[#F1F1F1]">
      <div className="container-fluid pr-0">
        <div className="flex items-center mb-2">
          <p className="text-primary uppercase text-sm tracking-[2px] mr-4">
            Elevating luxury living through expert residential and commercial development.
          </p>
          <div className="h-px bg-customGray1 flex-1"></div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="text-xl lg:text-4xl text-dark mb-8"> Our Projects in Jaipur </h2>

        <FilterComponent />

        {groupedProjects.map(({ type, projects, total }) => (
          <div key={type} className="mb-14 mt-8">
            {projects.length > 0 ? (
              <>
                <div className="grid md:grid-cols-3 gap-10">
                  {projects.map((proj, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={proj.image}
                          alt={proj.name}
                          className="w-full h-80 object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                        {proj.logo && (
                          <img
                            src={proj.logo}
                            alt="Project Logo"
                            className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white p-1"
                          />
                        )}
                      </div>
                      <div className="p-3 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xl font-bold">{proj.name}</h4>
                          <div className="mt-1 flex gap-1 items-start text-sm text-gray-700">
                            <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                            <div>
                              <p>{proj.address}</p>
                              <p>{[proj.locality, proj.city].filter(Boolean).join(', ')}</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <p className="flex items-center gap-1">
                              <Building2 size={16} className="text-primary" />
                              Unit: {proj.units}
                            </p>
                            <p className="text-green-600 text-sm flex items-center gap-1">
                              <CheckIcon strokeWidth={4.5} className="text-green-500 text-xs" />
                              Rera Approved
                            </p>
                          </div>
                        </div>
                        <Link
                          to={`/projects/${encodeURIComponent(proj.name)}`}
                          className="border border-customGray3 px-8 py-2 hover:border-secondary hover:bg-secondary hover:text-white transition self-center mt-6 mb-4 text-center"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {isMobile && total > 4 && (
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setShowAll((prev) => !prev)}
                      className="px-6 py-2 bg-[#B17C47] text-white text-sm rounded"
                    >
                      {showAll ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p className="text-center text-gray-500 mt-6">No {type} projects available.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
