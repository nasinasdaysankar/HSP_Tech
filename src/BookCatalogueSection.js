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
          setBooks(sampleBooks);
        } else {
          const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          setBooks(items);
        }
      } catch (e) {
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
    background: '#ffffff', // Removed blue background gradient
    padding: '4rem 0',
    minHeight: '400px',
    position: 'relative'
  };

  const containerStyle = {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    fontWeight: '800',
    textAlign: 'center',
    color: '#0d47a1', // Dark blue text
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#666', // Grey text
    maxWidth: '600px',
    margin: '0 auto 3rem auto'
  };

  const filterBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '3rem'
  };

  const filterButtonStyle = (isActive) => ({
    padding: '0.6rem 1.2rem',
    border: '2px solid #1e88e5',
    borderRadius: '25px',
    backgroundColor: isActive ? '#1e88e5' : 'transparent',
    color: isActive ? '#ffffff' : '#1e88e5',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem'
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
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid #eee'
  };

  const bookImageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  };

  const bookContentStyle = { padding: '1.5rem' };

  const bookTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#0d47a1',
    marginBottom: '0.5rem'
  };

  const bookAuthorStyle = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '0.75rem'
  };

  const bookDescriptionStyle = {
    fontSize: '0.9rem',
    color: '#555',
    lineHeight: '1.4',
    marginBottom: '1rem'
  };

  const orderButtonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#1e88e5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer'
  };

  return (
    <section id="books" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Book Catalogue</h2>
        <p style={subtitleStyle}>
          Discover our comprehensive collection of academic and research books.
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
            <div key={book.id || index} style={bookCardStyle}>
              <img src={book.image} alt={book.title} style={bookImageStyle} />
              <div style={bookContentStyle}>
                <h3 style={bookTitleStyle}>{book.title}</h3>
                <p style={bookAuthorStyle}>By {book.author}</p>
                <p style={bookDescriptionStyle}>{book.description}</p>
                {book.price && <div style={{ fontWeight: 'bold', color: '#1e88e5', marginBottom: '1rem' }}>{book.price}</div>}
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
          padding: '2rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <h3 style={{ color: '#0d47a1', marginBottom: '0.5rem' }}>Bulk Orders Available</h3>
          <p style={{ color: '#555' }}>
            Email: <a href="mailto:hspbookspublishinghouse@gmail.com" style={{ color: '#1e88e5', fontWeight: 'bold' }}>hspbookspublishinghouse@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookCatalogueSection;