
import '../../App.css'
import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import AboutSection from '../InfluencerSection/AboutSection';


const App = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/> */}
      <HeroSection/>
      <AboutSection/>
    </div>
  );
};

export default App;