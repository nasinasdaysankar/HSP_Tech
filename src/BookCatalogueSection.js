import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const BookCatalogueSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

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
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "Comprehensive guide to research methodologies in engineering disciplines."
    },
    {
      id: 2,
      title: "Academic Writing Excellence",
      author: "Prof. Academic Expert",
      category: 'academic',
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
      description: "Master the art of academic writing with proven techniques."
    },
    {
      id: 3,
      title: "Publication Success Guide",
      author: "Dr. Publication Pro",
      category: 'publication',
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      description: "Step-by-step guide to successful academic publishing."
    },
    {
      id: 4,
      title: "Patent Filing Handbook",
      author: "Legal Expert Team",
      category: 'patents',
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=400&fit=crop",
      description: "Complete handbook for patent filing and intellectual property."
    },
    {
      id: 5,
      title: "Data Analysis for Researchers",
      author: "Dr. Data Scientist",
      category: 'research',
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop",
      description: "Statistical analysis and data interpretation for research."
    },
    {
      id: 6,
      title: "Grant Writing Mastery",
      author: "Funding Expert",
      category: 'academic',
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=400&fit=crop",
      description: "Master the art of writing successful grant proposals."
    }
  ];

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'), orderBy('title'));
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
          console.log('No books found in Firestore, using sample books.');
          setBooks(sampleBooks);
        } else {
          const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          setBooks(items);
        }
      } catch (e) {
        console.warn('Falling back to sample books because Firestore read failed:', e);
        setBooks(sampleBooks);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filtered = activeCategory === 'all' 
    ? books
    : books.filter(book => book.category === activeCategory);

  const sectionStyle = {
    background: 'linear-gradient(135deg, #1e88e5 0%, #1e88e5 50%, #f8f9fa 50%, #f8f9fa 100%)',
    padding: '4rem 0',
    minHeight: '600px',
    position: 'relative'
  };

  const containerStyle = {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: '900',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: '1rem',
    lineHeight: '1.1'
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#f0f8ff',
    maxWidth: '600px',
    margin: '0 auto 3rem auto'
  };

  const filterBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '3rem'
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  };

  const bookCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    cursor: 'pointer'
  };

  const bookImageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  };

  const bookContentStyle = { padding: '1.5rem' };

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

  return (
    <section id="books" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Book Catalogue</h2>
        <p style={subtitleStyle}>
          Discover our comprehensive collection of academic and research books designed to enhance your scholarly journey
        </p>

        <div style={filterBarStyle}>
          {bookCategories.map(category => (
            <button
              key={category.id}
              style={filterButtonStyle(activeCategory === category.id)}
              onClick={() => setActiveCategory(category.id)}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div style={booksGridStyle}>
          {(loading ? sampleBooks : filtered).map((book, index) => (
            <div
              key={book.id || index}
              style={bookCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
            >
              <img src={book.image} alt={book.title} style={bookImageStyle} />
              <div style={bookContentStyle}>
                <h3 style={bookTitleStyle}>{book.title}</h3>
                <p style={bookAuthorStyle}>By {book.author}</p>
                <p style={bookDescriptionStyle}>{book.description}</p>
                {book.price && <div style={bookPriceStyle}>{book.price}</div>}
                <button
                  style={orderButtonStyle}
                  onClick={() => window.open('mailto:hspbookspublishinghouse@gmail.com?subject=Book Order - ' + book.title, '_blank')}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0d47a1', marginBottom: '1rem' }}>📦 Bulk Orders Available</h3>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Email us at <a href="mailto:hspbookspublishinghouse@gmail.com" style={{ color: '#1e88e5', textDecoration: 'none', fontWeight: '600' }}>hspbookspublishinghouse@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookCatalogueSection;