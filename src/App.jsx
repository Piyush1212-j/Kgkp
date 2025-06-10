import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/contact-us';
import ResidentialProject from './pages/residential-project';
import IndustrialProject from './pages/industrial-project';
import CommercialProject from './pages/commercial-project';
import ProjectDetailsPage from './pages/project-detail';
import Blog from './pages/blog';
import BlogDetails from './pages/blog-details';
import Philanthropy from './pages/philanthropy';
import AboutUs from './pages/about-us';
import Media from './pages/Media';

function App() {
  return (
    <Router basename="/kgk-test">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/project" element={<ResidentialProject />} />
        <Route path="/industrial-project" element={<IndustrialProject />} />
        <Route path="/commercial-project" element={<CommercialProject />} />
        <Route path="/project-details/:slug" element={<ProjectDetailsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/philanthropy" element={<Philanthropy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  );
}

export default App;
