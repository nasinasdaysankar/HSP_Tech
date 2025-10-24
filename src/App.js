import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Header from './Header';
import HeroSection from './HeroSection';
import ScrollingLogos from './ScrollingLogos';
import DetailedServices from './DetailedServices';
import BookCatalogueSection from './BookCatalogueSection';
import DeliveryPolicySection from './DeliveryPolicySection';
// --- 1. IMPORT YOUR NEW PAGE ---
import HspJournalsPage from './HspJournalsPage'; 

import Footer from './Footer';
import AboutModal from './AboutModal';
import KeepInTouchForm from './KeepInTouchForm';
import './App.css';

// This component groups all the sections you want to see on the main page.
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ScrollingLogos />
      <DetailedServices />
      <BookCatalogueSection />
    </>
  );
};


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
        <Routes>
          
          {/* Path 1: The Home Page (URL: "/") */}
          <Route path="/" element={<HomePage />} />
          
          {/* Path 2: The Delivery Policy Page (URL: "/hsp-books") */}
          <Route path="/hsp-books" element={<DeliveryPolicySection />} />

          {/* --- 2. ADD THE NEW ROUTE FOR YOUR JOURNALS PAGE --- */}
          <Route path="/hsp-journals" element={<HspJournalsPage />} />
          
        </Routes>
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