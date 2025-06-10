import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube
} from 'react-icons/fi';

import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.webp';

const Footer = () => {
  const IconCircle = ({ children }) => (
    <div className="min-w-[26px] min-h-[26px] w-6 h-6 rounded-full bg-white text-[#77787a] flex items-center justify-center">
      {children}
    </div>
  );

  const ContactRow = ({ icon, children, center = false }) => (
    <div className={`flex ${center ? 'items-center' : 'items-start'} gap-2 mb-6`}>
      <IconCircle>{icon}</IconCircle>
      <div className="text-white text-xs leading-tight">{children}</div>
    </div>
  );

  const locations = [
    {
      city: 'JAIPUR',
      phone: ['+91 9829625004', '+91 9829625005'],
      email: 'sales@kgkrealty.com',
      address: 'KGK Realty, Entertainment Paradise campus, Jawahar Circle, E.P. Marg, Jaipur - 302017',
    },
    {
      city: 'MUMBAI',
      phone: ['+91 9829625004', '+91 9829625005'],
      email: 'sales@kgkrealty.com',
      address: '7, 705th floor, Satra Plaza, Plot No.20, Sector-19D, Palm Beach Road, Vashi, Navi Mumbai - 400703.',
    },
    {
      city: 'DELHI',
      phone: ['+91 9829625004', '+91 9829625005'],
      email: 'sales@kgkrealty.com',
      address: '7, 705th floor, Satra Plaza, Plot No.20, Sector-19D, Palm Beach Road, Vashi, Navi Mumbai - 400703.',
    },
  ];

  const quickLinks = [
    { label: 'HOME', path: '/' },
    { label: 'PRIVACY POLICY', path: '/privacy-policy' },
    { label: 'ABOUT KGK GROUP', path: '/about-kgk-group' },
    { label: 'MEDIA - IN THE PRESS', path: '/media' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'PARTNERS IN GROWTH', path: '/partners' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'BLOGS', path: '/blog' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'LAURELS', path: '/laurels' },
  ];

  const socialIcons = [FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube];

  return (
    <footer className="bg-[#77787a] text-white text-xs">
      {/* Top Logo & Social Icons */}
      <div className="lg:px-12 px-6 pt-10 grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <img src={logo} alt="KGK Realty" className="w-16" />
        </div>
        <div>
          <div className="flex gap-3 lg:justify-end">
            {socialIcons.map((Icon, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center"
              >
                <Icon className="text-base" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact & Quick Links */}
      <div className="lg:px-12 px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {locations.map(({ city, phone, email, address }) => (
          <div key={city}>
            <h3 className="text-base font-semibold mb-5">{city}</h3>
            <ContactRow icon={<FaPhoneAlt className="text-xs" />} center>
              <div>
                {phone.map((num, i) => (
                  <p className='text-xs' key={i}>{num}</p>
                ))}
              </div>
            </ContactRow>
            <ContactRow icon={<FaEnvelope className="text-xs" />} center>
              <p className='text-xs'>{email}</p>
            </ContactRow>
            <ContactRow icon={<FaMapMarkerAlt className="text-xs" />}>
              <p className='text-xs'>{address}</p>
            </ContactRow>
          </div>
        ))}

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-5">QUICK LINKS</h3>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4">
            {quickLinks.map(({ label, path }, index) => (
              <Link
                to={path}
                key={index}
                className="text-xs hover:underline transition-colors duration-200 hover:no-underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs bg-[#a5a5a5] py-4">
        © 2024 KGK REALTY, ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
