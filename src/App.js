import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ScrollingLogos from './ScrollingLogos';
import DetailedServices from './DetailedServices';
import BookCatalogueSection from './BookCatalogueSection'; // New import
import DeliveryPolicySection from './DeliveryPolicySection'; // New import
import Footer from './Footer';
import AboutModal from './AboutModal';
import KeepInTouchForm from './KeepInTouchForm';
import './App.css';

function App() {
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  const [isKeepInTouchOpen, setKeepInTouchOpen] = useState(false);

  const openAboutModal = () => setAboutModalOpen(true);
  const closeAboutModal = () => setAboutModalOpen(false);

  const openKeepInTouch = () => setKeepInTouchOpen(true);
  const closeKeepInTouch = () => setKeepInTouchOpen(false);

  return (
    <div className="App">
      <Header onAboutClick={openAboutModal} />
      
      <main>
        <HeroSection />
        <ScrollingLogos />
        <DetailedServices />
        
        {/* New sections added here */}
        <BookCatalogueSection />
        <DeliveryPolicySection />
      </main>
      
      <Footer />

      {/* Modals */}
      {isAboutModalOpen && <AboutModal onClose={closeAboutModal} />}
      {isKeepInTouchOpen && <KeepInTouchForm onClose={closeKeepInTouch} />}

      {/* The floating button */}
      <button className="floating-keep-in-touch" onClick={openKeepInTouch}>
        Keep In Touch
      </button>
    </div>
  );
}

export default App;