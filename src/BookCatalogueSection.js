import React, { useState, useEffect } from 'react';

const BookCatalogueSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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

    const section = document.getElementById('books');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const bookCategories = [
    { id: 'all', name: 'All Books', icon: '📚' },
    { id: 'research', name: 'Research Methodology', icon: '🔬' },
    { id: 'academic', name: 'Academic Writing', icon: '✍️' },
    { id: 'publication', name: 'Publication Guide', icon: '📖' },
    { id: 'patents', name: 'Patent Filing', icon: '⚖️' }
  ];

  const sampleBooks = [
    {
      id: 1,
      title: "Research Methodology in Engineering",
      author: "Dr. HSP Team",
      category: 'research',
      price: "₹450",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "Comprehensive guide to research methodologies in engineering disciplines."
    },
    {
      id: 2,
      title: "Academic Writing Excellence",
      author: "Prof. Academic Expert",
      category: 'academic',
      price: "₹350",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
      description: "Master the art of academic writing with proven techniques."
    },
    {
      id: 3,
      title: "Publication Success Guide",
      author: "Dr. Publication Pro",
      category: 'publication',
      price: "₹550",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      description: "Step-by-step guide to successful academic publishing."
    },
    {
      id: 4,
      title: "Patent Filing Handbook",
      author: "Legal Expert Team",
      category: 'patents',
      price: "₹650",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=400&fit=crop",
      description: "Complete handbook for patent filing and intellectual property."
    },
    {
      id: 5,
      title: "Data Analysis for Researchers",
      author: "Dr. Data Scientist",
      category: 'research',
      price: "₹500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop",
      description: "Statistical analysis and data interpretation for research."
    },
    {
      id: 6,
      title: "Grant Writing Mastery",
      author: "Funding Expert",
      category: 'academic',
      price: "₹400",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=400&fit=crop",
      description: "Master the art of writing successful grant proposals."
    }
  ];

  const filteredBooks = activeCategory === 'all' 
    ? sampleBooks 
    : sampleBooks.filter(book => book.category === activeCategory);

  const sectionStyle = {
    background: 'linear-gradient(135deg, #1e88e5 0%, #1e88e5 50%, #ffffff 50%, #ffffff 100%)',
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
    background: 'linear-gradient(135deg, #1e88e5 0%, #1e88e5 50%, #ffffff 50%, #ffffff 100%)',
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
    color: '#ffffff',
    marginBottom: '1rem',
    lineHeight: '1.1',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'all 0.8s ease-out 0.3s'
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#f0f8ff',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.5s'
  };

  const filterBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '3rem',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.7s'
  };

  const filterButtonStyle = (isActive) => ({
    padding: '0.8rem 1.5rem',
    border: '2px solid #ffffff',
    borderRadius: '25px',
    backgroundColor: isActive ? '#ffffff' : 'transparent',
    color: isActive ? '#1e88e5' : '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: isActive ? '0 4px 15px rgba(255, 255, 255, 0.3)' : 'none'
  });

  const booksGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  };

  const bookCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
  };

  const bookImageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  };

  const bookContentStyle = {
    padding: '1.5rem'
  };

  const bookTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#0d47a1',
    marginBottom: '0.5rem',
    lineHeight: '1.3'
  };

  const bookAuthorStyle = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '0.75rem'
  };

  const bookDescriptionStyle = {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.5',
    marginBottom: '1rem'
  };

  const bookPriceStyle = {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#1e88e5',
    marginBottom: '1rem'
  };

  const orderButtonStyle = {
    width: '100%',
    padding: '0.8rem 1rem',
    backgroundColor: '#1e88e5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const bulkOrderStyle = {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '2rem',
    borderRadius: '12px',
    border: '2px solid #ffffff',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 1.2s'
  };

  const bulkOrderTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#0d47a1',
    marginBottom: '1rem'
  };

  const bulkOrderTextStyle = {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '1.5rem'
  };

  const emailLinkStyle = {
    color: '#1e88e5',
    textDecoration: 'none',
    fontWeight: '600'
  };

  return (
    <section id="books" style={sectionStyle}>
      <div style={animatedBackgroundStyle}></div>
      <div style={contentWrapperStyle}>
        <div style={containerStyle}>
          <h2 style={titleStyle}>Book Catalogue</h2>
          <p style={subtitleStyle}>
            Discover our comprehensive collection of academic and research books designed to enhance your scholarly journey
          </p>

          {/* Category Filter */}
          <div style={filterBarStyle}>
            {bookCategories.map(category => (
              <button
                key={category.id}
                style={filterButtonStyle(activeCategory === category.id)}
                onClick={() => setActiveCategory(category.id)}
                onMouseOver={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.backgroundColor = '#ffffff';
                    e.target.style.color = '#1e88e5';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Books Grid */}
          <div style={booksGridStyle}>
            {filteredBooks.map((book, index) => (
              <div
                key={book.id}
                style={{
                  ...bookCardStyle,
                  animationDelay: `${0.9 + index * 0.1}s`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
              >
                <img src={book.image} alt={book.title} style={bookImageStyle} />
                <div style={bookContentStyle}>
                  <h3 style={bookTitleStyle}>{book.title}</h3>
                  <p style={bookAuthorStyle}>By {book.author}</p>
                  <p style={bookDescriptionStyle}>{book.description}</p>
                  <div style={bookPriceStyle}>{book.price}</div>
                  <button
                    style={orderButtonStyle}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#0d47a1';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 15px rgba(13, 71, 161, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#1e88e5';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onClick={() => window.open('mailto:hspbookspublishinghouse@gmail.com?subject=Book Order - ' + book.title, '_blank')}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bulk Order Section */}
          <div style={bulkOrderStyle}>
            <h3 style={bulkOrderTitleStyle}>📦 Bulk Orders Available</h3>
            <p style={bulkOrderTextStyle}>
              Need multiple copies? We offer special pricing for bulk orders. 
              Send us your book list and quantities for a custom quote.
            </p>
            <p style={bulkOrderTextStyle}>
              Email us at{' '}
              <a 
                href="mailto:hspbookspublishinghouse@gmail.com?subject=BULK ORDER - Book List Request" 
                style={emailLinkStyle}
              >
                hspbookspublishinghouse@gmail.com
              </a>
              {' '}with subject line "BULK ORDER - Book List"
            </p>
          </div>
        </div>
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideInDiagonal {
          from {
            transform: translate(-100px, -100px);
            opacity: 0;
          }
          to {
            transform: translate(0, 0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default BookCatalogueSection;