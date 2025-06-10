import React, { useEffect } from "react";
import MainLayout from '@/layout/MainLayout';
import HeroSection from "@/components/common/HeroSection";
import OfficeAddress from "../components/contact-us/office-address";
import AboutInfo from "../components/about-us/about-us";

const AboutUs = () => {

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
    <MainLayout title=" About Us ">
      <HeroSection title=" About Us " />
      {/* <AboutInfo /> */}
      <OfficeAddress />
    </MainLayout>
  );
};

export default AboutUs;
