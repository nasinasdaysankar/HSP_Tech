import React, { useState } from 'react';
import hspLogo from './logohsr.jpeg';
import { db, serverTimestamp } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const KeepInTouchForm = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceInterest, setServiceInterest] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      setSubmitting(true);
      await addDoc(collection(db, 'contactSubmissions'), {
        firstName,
        lastName,
        email,
        serviceInterest: serviceInterest || null,
        message: message || null,
        createdAt: serverTimestamp(),
      });
      setSuccess('Thanks! Your message has been sent.');
      // Optional: close after short delay
      setTimeout(() => onClose(), 1200);
    } catch (err) {
      console.error('Failed to submit contact form', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
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
                <input
                  type="text"
                  id="firstName"
                  placeholder="e.g., John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="e.g., Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="serviceInterest">Service Interest</label>
            <select
              id="serviceInterest"
              value={serviceInterest}
              onChange={(e) => setServiceInterest(e.target.value)}
            >
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
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {error && <div style={{ color: 'red', marginBottom: '0.75rem' }}>{error}</div>}
          {success && <div style={{ color: 'green', marginBottom: '0.75rem' }}>{success}</div>}

          <button type="submit" className="login-button" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default KeepInTouchForm;
