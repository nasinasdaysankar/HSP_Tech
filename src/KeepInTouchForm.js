import React from 'react';
import hspLogo from './logohsr.jpeg';

const KeepInTouchForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted!');
    onClose(); // Close form after submission
  };

  return (
    <div className="login-page-overlay" onClick={onClose}>
      <div className="login-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="login-header">
          <img src={hspLogo} alt="HSP Logo" className="login-logo" />
          <h2>Keep In Touch</h2>
          <p>Send us a message and we'll get back to you.</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group-inline">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="e.g., John" required />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="e.g., Doe" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="serviceInterest">Service Interest</label>
            <select id="serviceInterest" defaultValue="">
              <option value="" disabled>Select a service...</option>
              <option value="Journal Publication">Journal Publication</option>
              <option value="Book Publication">Book Publication</option>
              <option value="Patent & Copyright">Patent & Copyright</option>
              <option value="Funding Proposals">Funding Proposals</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Type your message here..."></textarea>
          </div>

          <button type="submit" className="login-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default KeepInTouchForm;