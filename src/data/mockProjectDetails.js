import HeroBac from '../assets/images/project-details.png';
import CommonImage from "@/assets/images/project-about.png";
import ProjectLogo from "@/assets/images/Aarohan-Logo.png";
import AarohanJaipur from "@/assets/images/aarohan-Jaipur.png";
import { FaBus, FaBuilding, FaShoppingCart, FaSchool, FaDumbbell, FaChild, FaFilm, FaGlassCheers } from "react-icons/fa";
import MapImage from "@/assets/images/location-Plan.png";

import GymImage from "@/assets/images/proj3.jpg";
import KidsRoomImage from "@/assets/images/proj-logo1.png";
import TheatreImage from "@/assets/images/proj-logo2.png";
import BanquetImage from "@/assets/images/proj3.jpg";

const modernFacilitiesData = [
  {
    image: GymImage,
    label: "GYMNASIUM",
    icon: <FaDumbbell />,
    description: "State-of-the-art gym with latest equipment for all fitness levels.",
  },
  {
    image: KidsRoomImage,
    label: "KIDS ACTIVITY",
    icon: <FaChild />,
    description: "A safe and fun space dedicated to children’s activities and creativity.",
  },
  {
    image: TheatreImage,
    label: "MINI THEATRE",
    icon: <FaFilm />,
    description: "Enjoy movies and entertainment in the comfort of your community.",
  },
  {
    image: BanquetImage,
    label: "BANQUET",
    icon: <FaGlassCheers />,
    description: "A spacious banquet hall perfect for celebrations and events.",
  },
];

const mockProjects = [
  {
    slug: 'kgk-aarohan',
    name: 'KGK AAROHAN',
    hero: {
      title: 'KGK AAROHAN',
      background: HeroBac,
      address: '4, Sardar Patel Marg, C Scheme, Jaipur',
      unitInfo: '3BHK + Servant | 150 Units',
      reraApproved: true,
    },
    about: {
      breadcrumb: ["Home", "Residential", "Jaipur", "Aarohan"],
      logo: ProjectLogo,
      image: CommonImage,
      fullWidthImage: AarohanJaipur,
      brochureLink: "#", // Replace with actual brochure link
      about: {
        text: `What makes Aarohan unique and different from other luxury residential projects?\n\nAarohan goes beyond the conventional luxury. This prestigious residential development presents thoughtfully designed 4 & 5 BHK residences that capture the true meaning of living a lifestyle that isn't just luxury but high-end luxury, raising the standards of upscale living.`
      }
    },
    location: {
      city: 'Jaipur',
      address: '4, Sardar Patel Marg, C Scheme, Jaipur',
      mapImage: MapImage,
      points: [
        {
          icon: <FaBus />,
          title: "TRANSPORTATION",
          items: ["Sindhi Camp Bus Stand (1.4 Km)", "Jaipur Railway Station (1.8 Km)"],
        },
        {
          icon: <FaBuilding />,
          title: "COMMERCIAL HUB",
          items: ["Genpact (0.6 Km)", "Jcb India Ltd (2.14 Km)", "Wipro (2.2 Km)"],
        },
        {
          icon: <FaShoppingCart />,
          title: "SHOPPING CENTRE",
          items: ["City Mall (1.0 Km)", "Alokik's Axis Mall (0.8 Km)", "Mgf Metropolitan Mall (1.0 Km)"],
        },
        {
          icon: <FaSchool />,
          title: "EDUCATIONAL INSTITUTE",
          items: [
            "College Of Commerce (1.0 Km)",
            "Kedia International School (2.5 Km)",
            "Iris School (5.5 Km)",
          ],
        },
      ],
    },
    facilities: {
      list: modernFacilitiesData
    },
    configuration: {
      units: 150,
      types: ['3BHK + Servant'],
    },
    pricing: {
      startingPrice: '₹1.2 Cr',
    },
    gallery: [
      '/images/aurum1.jpg',
      '/images/aurum2.jpg',
    ],
    rera: {
      approved: true,
      number: 'P123456789',
    },
  },
  {
    slug: 'kgk-akshar',
    name: 'KGK AKSHAR',
    hero: {
      title: 'KGK AKSHAR',
      background: '/images/akshar-banner.jpg',
      address: 'Vande Mataram Road, Mansarovar, Jaipur',
      unitInfo: '4BHK | 100 Units',
      reraApproved: false,
    },
    about: {
      text: 'KGK Akshar offers spacious 4 & 3 BHK homes in Jaipur.',
    },
    location: {
      city: 'Jaipur',
      address: 'Vande Mataram Road, Mansarovar',
    },
    facilities: {
      list: [
        {
          image: GymImage,
          label: "GYMNASIUM",
          icon: <FaDumbbell />,
          description: "State-of-the-art gym with latest equipment for all fitness levels.",
        },
        {
          image: BanquetImage,
          label: "BANQUET",
          icon: <FaGlassCheers />,
          description: "A spacious banquet hall perfect for celebrations and events.",
        },
      ],
      gym: true,
      pool: false,
      clubhouse: true,
    },
    configuration: {
      units: 100,
      types: ['4BHK', '3BHK'],
    },
    pricing: {
      startingPrice: '₹95 Lakh',
    },
    gallery: [
      '/images/akshar1.jpg',
      '/images/akshar2.jpg',
    ],
    rera: {
      approved: false,
    },
  },
];

export default mockProjects;
