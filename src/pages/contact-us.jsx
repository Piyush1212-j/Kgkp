import React, { useEffect } from "react";
import MainLayout from '@/layout/MainLayout';
import HeroSection from "@/components/common/HeroSection";
import ContactForm from "../components/contact-us/contact-form";
import OfficeAddress from "../components/contact-us/office-address";

const ContactUs = () => {

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
    <MainLayout title="Contact Us">
      <HeroSection title="Contact Us" />
      <ContactForm />
      <OfficeAddress />
    </MainLayout>
  );
};

export default ContactUs;
