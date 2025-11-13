import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Header from './Header';
import HeroSection from './HeroSection';
import ScrollingLogos from './ScrollingLogos';
import DetailedServices from './DetailedServices';
import BookCatalogueSection from './BookCatalogueSection';
import DeliveryPolicySection from './DeliveryPolicySection';
import HspJournalsPage from './HspJournalsPage'; 
import Footer from './Footer';
import AboutModal from './AboutModal';
import KeepInTouchForm from './KeepInTouchForm';
import AdminLogin from './AdminLogin';             // ⭐ ADD THIS
import AdminDashboard from './AdminDashboard';     // ⭐ ADD THIS
import './App.css';

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

          {/* MAIN HOME PAGE */}
          <Route path="/" element={<HomePage />} />

          {/* BOOKS PAGE */}
          <Route path="/hsp-books" element={<DeliveryPolicySection />} />

          {/* JOURNALS PAGE */}
          <Route path="/hsp-journals" element={<HspJournalsPage />} />

          {/* ⭐ ADMIN LOGIN PAGE */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* ⭐ ADMIN DASHBOARD PAGE */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

        </Routes>
      </main>

      <Footer />

      {/* MODALS */}
      {isAboutModalOpen && <AboutModal onClose={closeAboutModal} />}
      {isKeepInTouchOpen && <KeepInTouchForm onClose={closeKeepInTouch} />}

      {/* FLOATING KEEP IN TOUCH BUTTON */}
      <button className="floating-keep-in-touch" onClick={openKeepInTouch}>
        Keep In Touch
      </button>
    </div>
  );
}

export default App;
