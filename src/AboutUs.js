import React from 'react';

const AboutUs = () => {
  return (
    // The id="about" allows the new navigation link to scroll here
    <section id="about" className="about-us-section">
      <div className="container">
        <div className="about-us-content">
          <div className="about-intro">
            <h2>About HSP Technologies</h2>
            <p>
              HSP Technologies is a premier, multifaceted organization dedicated to advancing academic and research excellence globally. Based in Tirupati, India, we provide a comprehensive suite of services designed to support researchers, scholars, and innovators at every stage of their journey. From securing publications in high-impact journals to filing patents and obtaining research funding, our expert team is your trusted partner in navigating the complexities of the academic world.
            </p>
          </div>
          <div className="chairman-message">
            <h3>Chairman's Message</h3>
            <p>
              "Welcome to HSP Research Navigator. Our mission is to empower the brilliant minds of today by providing a streamlined path to publication, innovation, and academic success. We are committed to upholding the highest standards of quality and integrity in all our endeavors, ensuring your work receives the recognition it deserves."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;