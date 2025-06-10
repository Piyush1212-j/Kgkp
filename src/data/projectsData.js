import proj1 from '@/assets/images/proj1.jpg';
import proj2 from '@/assets/images/proj2.jpg';
import proj3 from '@/assets/images/proj3.jpg';
import proj4 from '@/assets/images/proj4.webp';
import proj5 from '@/assets/images/proj5.webp';
import proj6 from '@/assets/images/proj6.webp';
import proj7 from '@/assets/images/proj7.webp';
import proj8 from '@/assets/images/proj8.jpg';

import projLogo1 from '@/assets/images/proj-logo1.png';
import projLogo2 from '@/assets/images/proj-logo2.png';
import projLogo3 from '@/assets/images/proj-logo3.png';
import projLogo4 from '@/assets/images/proj-logo4.png';
import projLogo5 from '@/assets/images/proj-logo5.png';

const allProjects = [
  {
    slug: 'kgk-aarohan',
    name: 'KGK AAROHAN',
    address: 'Sardar Patel Marg',
    locality: 'C-Scheme',
    city: 'Jaipur',
    units: '4 & 5 BHK',
    price: 'On Request',
    reraNo: 'RAJ/P/2023/2818',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj1,
    logo: projLogo1,
    type: 'Residential',
    description: 'Luxury residential apartments in the heart of Jaipur',
    amenities: ['Swimming Pool', 'Gym', 'Children Play Area', 'Security', 'Power Backup'],
    status: 'Under Construction',
    possession: '2025',
    area: '2500-3500 sq ft',
    floors: 15,
    totalUnits: 120
  },
  {
    slug: 'kgk-akshar',
    name: 'KGK AKSHAR',
    address: 'Vande Mataram Road',
    locality: 'Mansarovar Extension',
    city: 'Jaipur',
    units: '3 & 4 BHK',
    price: 'On Request',
    reraNo: 'RAJ/P/2022/1884',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj2,
    logo: projLogo2,
    type: 'Residential',
    description: 'Modern living spaces with contemporary amenities',
    amenities: ['Clubhouse', 'Swimming Pool', 'Landscaped Gardens', '24/7 Security'],
    status: 'Ready to Move',
    possession: 'Immediate',
    area: '1800-2800 sq ft',
    floors: 12,
    totalUnits: 96
  },
  {
    slug: 'kgk-amulya',
    name: 'KGK AMULYA',
    address: '7 No. Bus Stand Airport Road',
    locality: 'Jagatpura',
    city: 'Jaipur',
    units: '2 & 3 BHK',
    price: 'On Request',
    reraNo: 'RAJ/P/2021/1425',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj3,
    logo: projLogo3,
    type: 'Residential',
    description: 'Affordable luxury homes near Airport Road',
    amenities: ['Gym', 'Community Hall', 'Children Play Area', 'Parking'],
    status: 'Ready to Move',
    possession: 'Immediate',
    area: '1200-1800 sq ft',
    floors: 10,
    totalUnits: 144
  },
  {
    slug: 'kgk-nav-nilay',
    name: 'KGK NAV NILAY',
    address: 'Near Bagru, Ajmer Road',
    locality: 'Jaipur Central',
    city: 'Jaipur',
    units: '1 & 2 BHK',
    price: 'On Request',
    reraNo: 'RAJ/P/2019/966',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj4,
    logo: projLogo4,
    type: 'Residential',
    description: 'Compact homes for modern families',
    amenities: ['Security', 'Power Backup', 'Water Supply', 'Parking'],
    status: 'Ready to Move',
    possession: 'Immediate',
    area: '600-1200 sq ft',
    floors: 8,
    totalUnits: 80
  },
  {
    slug: 'kgk-aayam',
    name: 'KGK AAYAM',
    address: 'Tonk Road, Near Chokhi Dhani',
    locality: 'Delhi Ajmer Expressway',
    city: 'Jaipur',
    units: '2 & 3 BHK',
    price: 'On Request',
    reraNo: 'RAJ/P/2019/1074',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj5,
    logo: projLogo5,
    type: 'Residential',
    description: 'Premium residential complex with modern facilities',
    amenities: ['Swimming Pool', 'Clubhouse', 'Landscaped Gardens', 'Gym', 'Security'],
    status: 'Ready to Move',
    possession: 'Immediate',
    area: '1400-2200 sq ft',
    floors: 14,
    totalUnits: 168
  },
  {
    slug: 'kgk-oasis',
    name: 'KGK OASIS',
    address: 'Siddharth Nagar',
    locality: 'Malviya Nagar',
    city: 'Jaipur',
    units: '2 & 3 BHK',
    price: 'On Request',
    reraNo: 'RAJ/P/2017/258',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj6,
    logo: null,
    type: 'Residential',
    description: 'Peaceful residential oasis in the city',
    amenities: ['Green Spaces', 'Community Center', 'Security', 'Power Backup'],
    status: 'Ready to Move',
    possession: 'Immediate',
    area: '1300-2000 sq ft',
    floors: 9,
    totalUnits: 72
  },
  {
    slug: 'kgk-solitaire-park',
    name: 'KGK SOLITAIRE PARK',
    address: 'Jaipur Ajmer Highway Near Bagru',
    locality: 'Bagru',
    city: 'Jaipur',
    units: 'Residential and Commercial Space',
    price: 'On Request',
    reraNo: 'RAJ/P/2018/456',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj7,
    logo: null,
    type: 'Mixed Use',
    description: 'Integrated township with residential and commercial spaces',
    amenities: ['Shopping Complex', 'Restaurants', 'ATM', 'Parking', 'Security'],
    status: 'Under Construction',
    possession: '2025',
    area: 'Varies',
    floors: 12,
    totalUnits: 200
  },
  {
    slug: 'kgk-infiniti-homes',
    name: 'KGK INFINITI HOMES',
    address: 'Narsingpura, Jaipur - Ajmer Highway',
    locality: 'Narsingpura',
    city: 'Jaipur',
    units: 'Residential Plots',
    price: 'On Request',
    reraNo: 'RAJ/P/2020/1346',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj8,
    logo: null,
    type: 'Plots',
    description: 'Premium residential plots for your dream home',
    amenities: ['Wide Roads', 'Electricity', 'Water Connection', 'Boundary Wall'],
    status: 'Available',
    possession: 'Immediate',
    area: '100-500 sq yards',
    floors: 'N/A',
    totalUnits: 250
  },
  {
    slug: 'kgk-samridhi',
    name: 'KGK SAMRIDHI',
    address: 'Village Vimalpura, Sanganer',
    locality: 'Sanganer',
    city: 'Jaipur',
    units: '1 & 2 BHK',
    price: 'On Request',
    reraNo: 'RAJ/P/2017/261',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj1,
    logo: null,
    type: 'Residential',
    description: 'Affordable housing solution for middle-class families',
    amenities: ['Basic Amenities', 'Security', 'Water Supply', 'Electricity'],
    status: 'Ready to Move',
    possession: 'Immediate',
    area: '500-1000 sq ft',
    floors: 6,
    totalUnits: 64
  },
  // Commercial Projects
  {
    slug: 'lehariya-commercial',
    name: 'LEHARIYA',
    subtitle: 'CRAFTED FOR BUSINESS',
    address: 'Near Jaipur International Airport',
    locality: 'Airport Road',
    city: 'Jaipur',
    units: 'Commercial',
    price: 'On Request',
    reraNo: 'RAJ/P/2023/2788',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj4,
    logo: null,
    type: 'Commercial',
    description: 'Premium commercial spaces crafted for business success near Jaipur International Airport',
    amenities: ['Modern Architecture', 'High-Speed Elevators', 'Ample Parking', '24/7 Security', 'Power Backup', 'Fire Safety Systems', 'CCTV Surveillance'],
    status: 'Under Construction',
    possession: '2025',
    area: '300-3000 sq ft',
    floors: 20,
    totalUnits: 200,
    features: ['Prime Location', 'Airport Connectivity', 'Modern Design', 'Business Hub']
  },
  {
    slug: 'solitaire-commercial-park',
    name: 'SOLITAIRE COMMERCIAL PARK',
    address: 'Jaipur-Ajmer Highway Near Bagru',
    locality: 'Near Bagru',
    city: 'Jaipur',
    units: 'Residential and Commercial Space',
    price: 'On Request',
    reraNo: 'RAJ/P/2018/456',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj7,
    logo: null,
    type: 'Mixed Use',
    description: 'Integrated commercial park with residential and commercial spaces on Jaipur-Ajmer Highway',
    amenities: ['Shopping Complex', 'Restaurants', 'ATM', 'Ample Parking', '24/7 Security', 'Landscaped Gardens', 'Wide Roads'],
    status: 'Under Construction',
    possession: '2025',
    area: '200-2500 sq ft',
    floors: 12,
    totalUnits: 250,
    features: ['Highway Connectivity', 'Mixed Use Development', 'Investment Opportunity', 'Strategic Location']
  },
  {
    slug: 'kgk-aarohan-commercial',
    name: 'KGK AAROHAN COMMERCIAL',
    address: 'Near Jaipur International Airport',
    locality: 'Airport Road',
    city: 'Jaipur',
    units: 'Commercial',
    price: 'On Request',
    reraNo: 'RAJ/P/2023/2819',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj4,
    logo: projLogo4,
    type: 'Commercial',
    description: 'Prime commercial spaces near airport',
    amenities: ['Parking', 'Security', 'Power Backup', 'Elevators'],
    status: 'Under Construction',
    possession: '2025',
    area: '200-2000 sq ft',
    floors: 8,
    totalUnits: 80
  },
  {
    slug: 'kgk-akshar-commercial',
    name: 'KGK AKSHAR COMMERCIAL',
    address: 'Jaipur-Ajmer Highway',
    locality: 'Near Bagru',
    city: 'Jaipur',
    units: 'Commercial',
    price: 'On Request',
    reraNo: 'RAJ/P/2022/1885',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj5,
    logo: projLogo5,
    type: 'Commercial',
    description: 'Strategic commercial complex on highway',
    amenities: ['High Street Retail', 'Food Court', 'Ample Parking', 'ATM'],
    status: 'Ready to Move',
    possession: 'Immediate',
    area: '150-1500 sq ft',
    floors: 6,
    totalUnits: 120
  },
  // Industrial Projects (RSM)
  {
    slug: 'rsm-niyati',
    name: 'RSM NIYATI',
    address: 'Industrial Area, Bhiwadi',
    locality: 'Bhiwadi',
    city: 'Alwar',
    units: 'Industrial',
    price: 'On Request',
    reraNo: 'RAJ/P/2020/789',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj6,
    logo: null,
    type: 'Industrial',
    description: 'Modern industrial development for manufacturing units',
    amenities: ['Wide Roads', 'Power Supply', 'Water Connection', 'Security'],
    status: 'Available',
    possession: 'Immediate',
    area: '1000-10000 sq ft',
    floors: 'Ground + 1',
    totalUnits: 50
  },
  {
    slug: 'rsm-diamond',
    name: 'RSM DIAMOND',
    address: 'RIICO Industrial Area',
    locality: 'Neemrana',
    city: 'Alwar',
    units: 'Industrial',
    price: 'On Request',
    reraNo: 'RAJ/P/2019/567',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj7,
    logo: null,
    type: 'Industrial',
    description: 'Premium industrial warehouses with modern facilities',
    amenities: ['Loading Docks', 'High Ceiling', 'Power Backup', 'Fire Safety'],
    status: 'Under Construction',
    possession: '2024',
    area: '5000-25000 sq ft',
    floors: 'Ground Floor',
    totalUnits: 30
  },
  {
    slug: 'rsm-pearl',
    name: 'RSM PEARL',
    address: 'Delhi-Mumbai Industrial Corridor',
    locality: 'Khushkhera',
    city: 'Alwar',
    units: 'Logistics',
    price: 'On Request',
    reraNo: 'RAJ/P/2021/234',
    reraUrl: 'www.rera.rajasthan.gov.in',
    image: proj8,
    logo: null,
    type: 'Industrial',
    description: 'Strategic logistics hub on DMIC corridor',
    amenities: ['Highway Connectivity', 'Rail Connectivity', 'Custom Clearance', 'Cold Storage'],
    status: 'Planning Stage',
    possession: '2026',
    area: '10000-50000 sq ft',
    floors: 'Ground + Mezzanine',
    totalUnits: 25
  }
];

// Helper functions for filtering and sorting
export const getProjectsByType = (type) => {
  return allProjects.filter(project => project.type === type);
};

export const getProjectsByCity = (city) => {
  return allProjects.filter(project => project.city === city);
};

export const getProjectsByStatus = (status) => {
  return allProjects.filter(project => project.status === status);
};

export const getCommercialProjects = () => {
  return allProjects.filter(project =>
    project.type === 'Commercial' || project.type === 'Mixed Use'
  );
};

export const getResidentialProjects = () => {
  return allProjects.filter(project => project.type === 'Residential');
};

export const getIndustrialProjects = () => {
  return allProjects.filter(project => project.type === 'Industrial');
};

export const getPlotProjects = () => {
  return allProjects.filter(project => project.type === 'Plots');
};

export const searchProjects = (query) => {
  const searchTerm = query.toLowerCase();
  return allProjects.filter(project =>
    project.name.toLowerCase().includes(searchTerm) ||
    project.locality?.toLowerCase().includes(searchTerm) ||
    project.address?.toLowerCase().includes(searchTerm) ||
    project.units.toLowerCase().includes(searchTerm)
  );
};

export default allProjects;