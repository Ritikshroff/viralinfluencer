
import './App.css'
// import { Navbar } from 'flowbite-react';
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactFormSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WorkflowSection from './components/WorkflowSection';
import InfluencerCategoriesSection from './components/InfluencerCategoriesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import HighlightedSection from './components/HighlightedSection';
import Button from './components/ButtonContainer';
import ButtonContainer from './components/ButtonContainer';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <HeroSection/>
      <AboutSection/>
      <HighlightedSection/>
      <ServicesSection/>
      <ButtonContainer name='Get Started →'/>
      <WorkflowSection/>
      <InfluencerCategoriesSection/>
      <CaseStudiesSection/>
      <TestimonialsSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;