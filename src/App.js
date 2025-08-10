import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ScrollingLogos from './ScrollingLogos';
import DetailedServices from './DetailedServices';
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
        <HeroSection onKeepInTouchClick={openKeepInTouch} />
        <ScrollingLogos />
        <DetailedServices />
      </main>
      
      <Footer />

      {isAboutModalOpen && <AboutModal onClose={closeAboutModal} />}
      {isKeepInTouchOpen && <KeepInTouchForm onClose={closeKeepInTouch} />}
    </div>
  );
}

export default App;