import React, { useState } from "react";
import { db, storage, serverTimestamp } from "./firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("research");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please choose a book cover image!");
      return;
    }

    if (!title || !author || !description || !price) {
      alert("Please fill in all fields!");
      return;
    }

    setIsUploading(true);
    try {
      // 0. Duplicate check — block if same title already exists
      const dupQuery = query(collection(db, "books"), where("title", "==", title.trim()));
      const dupSnapshot = await getDocs(dupQuery);
      if (!dupSnapshot.empty) {
        alert(`⚠️ A book titled "${title}" already exists in the catalogue. Please use a unique title.`);
        setIsUploading(false);
        return;
      }

      // 1. Upload Image to Firebase Storage
      const imageRef = ref(storage, `book_covers/${Date.now()}-${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const downloadURL = await getDownloadURL(imageRef);

      // 2. Add Book Metadata to Firestore
      await addDoc(collection(db, "books"), {
        title: title.trim(),
        author: author.trim(),
        category,
        description: description.trim(),
        price: price.startsWith('₹') ? price : `₹${price}`,
        image: downloadURL,
        createdAt: serverTimestamp()
      });

      alert("Book uploaded successfully! 🎉");
      navigate("/");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading book: " + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>📚 Admin Dashboard – Upload Book</h2>

        <form style={styles.form} onSubmit={handleUpload}>
          <div style={styles.group}>
            <label style={styles.label}>Book Title</label>
            <input
              type="text"
              style={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
              required
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Author Name</label>
            <input
              type="text"
              style={styles.input}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              required
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Price (e.g., ₹499)</label>
            <input
              type="text"
              style={styles.input}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Category</label>
            <select
              style={styles.select}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="research">Research Methodology</option>
              <option value="academic">Academic Writing</option>
              <option value="publication">Publication Guide</option>
              <option value="patents">Patent Filing</option>
            </select>
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Book Description</label>
            <textarea
              style={styles.textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter book description"
              required
            ></textarea>
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Book Cover Image</label>
            <input
              type="file"
              style={styles.fileInput}
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              required
            />
          </div>

          <button 
            type="submit" 
            style={{
              ...styles.button,
              opacity: isUploading ? 0.7 : 1,
              cursor: isUploading ? "not-allowed" : "pointer"
            }}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;

// ⭐ Modern UI Styles
const styles = {
  pageWrapper: {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0d47a1, #1976d2, #42a5f5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
  },

  card: {
    width: "95%",
    maxWidth: "700px",
    background: "rgba(255, 255, 255, 0.95)",
    padding: "2.5rem",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
    backdropFilter: "blur(8px)",
  },

  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "700",
    color: "#0d47a1",
    marginBottom: "2rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.4rem",
  },

  group: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },

  label: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "2px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #90caf9",
    fontSize: "1rem",
    outline: "none",
  },

  select: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #90caf9",
    fontSize: "1rem",
    outline: "none",
  },

  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #90caf9",
    fontSize: "1rem",
    minHeight: "120px",
    resize: "vertical",
  },

  fileInput: {
    padding: "8px",
    fontSize: "1rem",
  },

  button: {
    padding: "14px",
    background: "#0d47a1",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "0.3s",
  },
};
