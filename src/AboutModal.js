import React, { useEffect } from 'react';

const AboutModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const modalStyles = {
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '1rem'
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      width: '90vw',
      maxWidth: '950px',
      maxHeight: '90vh',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden' // Important: prevent overflow on container
    },
    closeButton: {
      position: 'absolute',
      top: '15px',
      right: '20px',
      background: 'none',
      border: 'none',
      fontSize: '2.5rem',
      fontWeight: 300,
      color: '#aaa',
      cursor: 'pointer',
      lineHeight: 1,
      zIndex: 10
    },
    modalBody: {
      padding: '2.5rem',
      paddingTop: '3.5rem', // Extra padding for close button
      overflow: 'auto', // Enable scrolling on body
      maxHeight: '100%'
    },
    chairmanMessage: {
      backgroundColor: '#f4f7f6',
      borderLeft: '4px solid #1e88e5',
      padding: '1.5rem',
      borderRadius: '8px',
      margin: '2rem 0'
    },
    missionVisionValues: {
      display: 'flex',
      gap: '2rem',
      marginTop: '3rem',
      textAlign: 'center',
      justifyContent: 'space-between'
    },
    valueItem: {
      flex: 1,
      padding: '1rem'
    },
    valueIcon: {
      width: '70px',
      height: '70px',
      margin: '0 auto 1.5rem auto',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      color: '#fff',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
    },
    missionIcon: {
      backgroundColor: '#28a745'
    },
    visionIcon: {
      backgroundColor: '#1e88e5'
    },
    valuesIcon: {
      backgroundColor: '#6f42c1'
    },
    valueTitle: {
      color: '#0d47a1',
      fontSize: '1.4rem',
      marginBottom: '0.75rem'
    },
    valueText: {
      lineHeight: 1.6,
      color: '#555',
      margin: 0
    },
    // Mobile responsive styles
    mobileStyles: {
      '@media (max-width: 768px)': {
        missionVisionValues: {
          flexDirection: 'column',
          gap: '1.5rem'
        },
        modalContent: {
          width: '95vw',
          maxHeight: '85vh'
        },
        valueItem: {
          padding: '0.5rem'
        }
      }
    }
  };

  // Check if screen is mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={modalStyles.modalOverlay} onClick={onClose}>
      <div 
        style={{
          ...modalStyles.modalContent,
          ...(isMobile ? { width: '95vw', maxHeight: '85vh' } : {})
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          style={modalStyles.closeButton} 
          onClick={onClose}
          onMouseOver={(e) => e.target.style.color = '#333'}
          onMouseOut={(e) => e.target.style.color = '#aaa'}
        >
          ×
        </button>
        
        <div style={modalStyles.modalBody}>
          <h2 style={{ fontSize: '2.2rem', color: '#0d47a1', margin: '0 0 1rem 0', textAlign: 'center' }}>
            About HSP Technologies
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333', marginBottom: '2rem' }}>
            HSP Technologies is a premier organization dedicated to advancing academic and research excellence. We provide a comprehensive suite of services designed to support researchers, scholars, and innovators at every stage of their journey. From securing publications in high-impact journals to filing patents and obtaining research funding, our expert team is your trusted partner.
          </p>
          
          <div style={modalStyles.chairmanMessage}>
            <h3 style={{ marginTop: 0, color: '#0d47a1' }}>Chairman's Message</h3>
            <p style={{ fontStyle: 'italic', marginBottom: 0, color: '#444' }}>
              "Our mission is to empower the brilliant minds of today by providing a streamlined path to publication, innovation, and academic success. We are committed to upholding the highest standards of quality and integrity in all our endeavors."
            </p>
          </div>
          
          <div style={{
            ...modalStyles.missionVisionValues,
            ...(isMobile ? { flexDirection: 'column', gap: '1.5rem' } : {})
          }}>
            <div style={modalStyles.valueItem}>
              <div style={{
                ...modalStyles.valueIcon,
                ...modalStyles.missionIcon
              }}>
                <span>🎯</span>
              </div>
              <h3 style={modalStyles.valueTitle}>Our Mission</h3>
              <p style={modalStyles.valueText}>
                To empower researchers and academics worldwide by delivering innovative solutions for publication, patent filing, and funding opportunities.
              </p>
            </div>
            
            <div style={modalStyles.valueItem}>
              <div style={{
                ...modalStyles.valueIcon,
                ...modalStyles.visionIcon
              }}>
                <span>🔭</span>
              </div>
              <h3 style={modalStyles.valueTitle}>Our Vision</h3>
              <p style={modalStyles.valueText}>
                To be the leading global partner in academic and research advancement, driving innovation and supporting scholars in achieving international recognition.
              </p>
            </div>
            
            <div style={modalStyles.valueItem}>
              <div style={{
                ...modalStyles.valueIcon,
                ...modalStyles.valuesIcon
              }}>
                <span>✨</span>
              </div>
              <h3 style={modalStyles.valueTitle}>Our Values</h3>
              <p style={modalStyles.valueText}>
                Integrity, Excellence, Collaboration, and Innovation – these core principles guide our commitment to supporting the academic community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;