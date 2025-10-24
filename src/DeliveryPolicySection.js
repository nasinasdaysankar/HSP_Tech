import React, { useState, useEffect } from 'react';

const DeliveryPolicySection = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('delivery-policy');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // ... (all your styles and component logic from the code you sent) ...
  // ... (I'm skipping pasting all 300 lines of styles here for brevity) ...

  const sectionStyle = {
    background: 'linear-gradient(225deg, #ffffff 0%, #ffffff 50%, #6f42c1 50%, #6f42c1 100%)',
    padding: '4rem 0',
    minHeight: '600px',
    position: 'relative',
    overflow: 'hidden'
  };

  const animatedBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(225deg, #ffffff 0%, #ffffff 50%, #6f42c1 50%, #6f42c1 100%)',
    transform: isVisible ? 'translateX(0) rotate(0deg)' : 'translateX(100%) rotate(5deg)',
    transition: 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    zIndex: 1
  };

  const contentWrapperStyle = {
    position: 'relative',
    zIndex: 2
  };

  const containerStyle = {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: '900',
    textAlign: 'center',
    color: '#0d47a1',
    marginBottom: '1rem',
    lineHeight: '1.1',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(0.8)',
    transition: 'all 0.8s ease-out 0.3s'
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.5s'
  };

  const tabsStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '3rem',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 0.8s ease-out 0.7s'
  };

  const tabButtonStyle = (isActive) => ({
    padding: '1rem 2rem',
    border: '2px solid #6f42c1',
    borderRadius: '8px',
    backgroundColor: isActive ? '#6f42c1' : 'rgba(255, 255, 255, 0.9)',
    color: isActive ? '#fff' : '#6f42c1',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    fontSize: '1.1rem',
    fontWeight: '600',
    boxShadow: isActive ? '0 8px 25px rgba(111, 66, 193, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)'
  });

  const contentContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.7',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
    transition: 'all 0.8s ease-out 0.9s'
  };

  const questionStyle = {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#0d47a1',
    marginTop: '2rem',
    marginBottom: '1rem'
  };

  const answerStyle = {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '1.5rem'
  };

  const highlightStyle = {
    backgroundColor: '#e3f2fd',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #1e88e5',
    marginBottom: '2rem'
  };

  const listStyle = {
    paddingLeft: '1.5rem',
    marginBottom: '1.5rem'
  };

  const listItemStyle = {
    marginBottom: '0.8rem',
    fontSize: '1.1rem'
  };

  const emailLinkStyle = {
    color: '#1e88e5',
    textDecoration: 'none',
    fontWeight: '600'
  };

  const paymentMethodStyle = {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    borderRadius: '6px',
    marginBottom: '0.8rem',
    borderLeft: '4px solid #1e88e5',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease'
  };

  const deliveryContent = (
    <div>
      <div style={highlightStyle}>
        <strong>🚚 FREE HOME DELIVERY</strong> on orders above ₹500!
      </div>

      <div style={questionStyle}>How much are the delivery charges?</div>
      <div style={answerStyle}>
        <strong>HSP BOOKS PUBLISHING HOUSE</strong> provides Free Home Delivery if your total order amount is more than INR 500. Otherwise, delivery charges will be applicable based on location and order value.
      </div>

      <div style={questionStyle}>What mode of delivery will be used?</div>
      <div style={answerStyle}>
        We generally send all of our orders through reputed couriers or Indian Postal Service.
      </div>

      <div style={questionStyle}>What is the estimated delivery time?</div>
      <div style={answerStyle}>
        Generally it will take 3 to 5 business days to reach your destination (Business days exclude Saturday, Sunday and Public Holidays).
      </div>

      <div style={questionStyle}>📦 For BULK ORDER</div>
      <div style={answerStyle}>
        <strong>Can I place bulk order in HSP BOOKS PUBLISHING HOUSE?</strong>
        <br />
        Yes. You can. Please send the book list to our mail ID{' '}
        <a href="mailto:hspbookspublishinghouse@gmail.com?subject=BULK ORDER" style={emailLinkStyle}>
          hspbookspublishinghouse@gmail.com
        </a>
        {' '}with subject line as "BULK ORDER"
      </div>
    </div>
  );

  const paymentContent = (
    <div>
      <div style={questionStyle}>💳 Payment Methods Available:</div>
      
      <div style={paymentMethodStyle}>
        <strong>1. Cash Deposit to our Bank</strong>
        <br />
        Direct bank deposit for secure transactions
      </div>

      <div 
        style={paymentMethodStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateX(5px)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(111, 66, 193, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <strong>2. National Electronic Fund Transfer (NEFT)</strong>
        <br />
        Transfer to our Bank account online. Please send the screenshot with Order ID to our email.
      </div>

      <div 
        style={paymentMethodStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateX(5px)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(111, 66, 193, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <strong>3. Credit Card / Debit Card / Net Banking</strong>
        <br />
        Secure online payment through our E-BillingSolutions gateway partner
      </div>

      <div 
        style={paymentMethodStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateX(5px)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(111, 66, 193, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <strong>4. Cash on Delivery</strong>
        <br />
        Pay when you receive your order (available in select locations)
      </div>

      <div style={highlightStyle}>
        <strong>📧 For payment confirmations and order tracking:</strong>
        <br />
        Send payment screenshots/receipts to{' '}
        <a href="mailto:hspbookspublishinghouse@gmail.com" style={emailLinkStyle}>
          hspbookspublishinghouse@gmail.com
        </a>
      </div>
    </div>
  );

  const faqContent = (
    <div>
      <div style={questionStyle}>❓ Frequently Asked Questions</div>
      
      <div style={questionStyle}>How do I track my order?</div>
      <div style={answerStyle}>
        Once your order is shipped, we will provide you with tracking information via email. You can track your package using the tracking number provided.
      </div>

      <div style={questionStyle}>What if my book arrives damaged?</div>
      <div style={answerStyle}>
        We take great care in packaging. However, if you receive a damaged book, please contact us immediately with photos of the damage, and we will arrange for a replacement.
      </div>

      <div style={questionStyle}>Can I cancel my order?</div>
      <div style={answerStyle}>
        Orders can be cancelled before they are shipped. Once shipped, cancellation is not possible, but you may return the books as per our return policy.
      </div>

      <div style={questionStyle}>Do you deliver internationally?</div>
      <div style={answerStyle}>
        Currently, we primarily serve within India. For international orders, please contact us directly at{' '}
        <a href="mailto:hspbookspublishinghouse@gmail.com" style={emailLinkStyle}>
          hspbookspublishinghouse@gmail.com
        </a>
      </div>

      <div style={questionStyle}>What is your return policy?</div>
      <div style={answerStyle}>
        We accept returns within 7 days of delivery for books in original condition. Return shipping costs may apply unless the return is due to our error.
      </div>
    </div>
  );

  const getCurrentContent = () => {
    switch (activeTab) {
      case 'delivery':
        return deliveryContent;
      case 'payment':
        return paymentContent;
      case 'faq':
        return faqContent;
      default:
        return deliveryContent;
    }
  };

  return (
    <section id="delivery-policy" style={sectionStyle}>
      <div style={animatedBackgroundStyle}></div>
      <div style={contentWrapperStyle}>
        <div style={containerStyle}>
          <h2 style={titleStyle}>Delivery & Payment Policy</h2>
          <p style={subtitleStyle}>
            Everything you need to know about ordering, payment, and delivery of your books
          </p>

          {/* Tabs */}
          <div style={tabsStyle}>
            <button
              style={tabButtonStyle(activeTab === 'delivery')}
              onClick={() => setActiveTab('delivery')}
              onMouseOver={(e) => {
                if (activeTab !== 'delivery') {
                  e.target.style.backgroundColor = '#1e88e5';
                  e.target.style.color = '#fff';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== 'delivery') {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.color = '#6f42c1';
                }
              }}
            >
              🚚 Delivery Policy
            </button>
            <button
              style={tabButtonStyle(activeTab === 'payment')}
              onClick={() => setActiveTab('payment')}
              onMouseOver={(e) => {
                if (activeTab !== 'payment') {
                  e.target.style.backgroundColor = '#1e88e5';
                  e.target.style.color = '#fff';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== 'payment') {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.color = '#6f42c1';
                }
              }}
            >
              💳 Payment Methods
            </button>
            <button
              style={tabButtonStyle(activeTab === 'faq')}
              onClick={() => setActiveTab('faq')}
              onMouseOver={(e) => {
                if (activeTab !== 'faq') {
                  e.target.style.backgroundColor = '#1e88e5';
                  e.target.style.color = '#fff';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== 'faq') {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.color = '#6f42c1';
                }
              }}
            >
              ❓ FAQ
            </button>
          </div>

          {/* Content */}
          <div style={contentContainerStyle}>
            {getCurrentContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPolicySection;