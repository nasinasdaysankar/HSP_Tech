import React from 'react';
import hspLogo from './logohsr.jpeg'; // Assuming the logo is in the same folder

const LoginPage = ({ onClose }) => {
  return (
    <div className="login-page-overlay" onClick={onClose}>
      <div className="login-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="login-header">
          <img src={hspLogo} alt="HSP Logo" className="login-logo" />
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in.</p>
        </div>
        
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" className="forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit" className="login-button">Sign In</button>
        </form>
        
        <div className="signup-link">
          <p>Don't have an account? <a href="#signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;