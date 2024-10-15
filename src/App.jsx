import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import AchievementsSection from './components/Achievements';
import Splash from './components/Splash'; // Import the Splash component

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  // Handler to hide the splash screen
  const handleSplashEnd = () => {
    setIsSplashVisible(false);
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {isSplashVisible ? (
        // Display the Splash component when isSplashVisible is true
        <Splash onAnimationEnd={handleSplashEnd} />
      ) : (
        // Display the main content when isSplashVisible is false
        <div className="relative">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>

          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Technology />
            {/* <Experience /> */}
            <Project />
            <AchievementsSection />
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
