import React, { useState, useEffect } from "react";
import { db, storage, serverTimestamp } from "./firebase";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc, orderBy } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("books");

  // ── Book Upload State ──────────────────────────────────────────
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("research");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // ── Editorial Board State ──────────────────────────────────────
  const [memberName, setMemberName] = useState("");
  const [memberRole, setMemberRole] = useState("Member");
  const [memberAffiliation, setMemberAffiliation] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [isSavingMember, setIsSavingMember] = useState(false);
  const [boardMembers, setBoardMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(true);

  // ── Fetch existing board members ───────────────────────────────
  useEffect(() => {
    if (activeTab !== "editorial") return;
    const fetchMembers = async () => {
      setLoadingMembers(true);
      try {
        const q = query(collection(db, "editorial_board"), orderBy("createdAt", "asc"));
        const snapshot = await getDocs(q);
        setBoardMembers(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error("Failed to fetch editorial board:", e);
      } finally {
        setLoadingMembers(false);
      }
    };
    fetchMembers();
  }, [activeTab]);

  // ── Book Upload Handler ────────────────────────────────────────
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageFile) { alert("Please choose a book cover image!"); return; }
    if (!title || !author || !description || !price) { alert("Please fill in all fields!"); return; }

    setIsUploading(true);
    try {
      const dupQuery = query(collection(db, "books"), where("title", "==", title.trim()));
      const dupSnapshot = await getDocs(dupQuery);
      if (!dupSnapshot.empty) {
        alert(`⚠️ A book titled "${title}" already exists in the catalogue.`);
        setIsUploading(false);
        return;
      }
      const imageRef = ref(storage, `book_covers/${Date.now()}-${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const downloadURL = await getDownloadURL(imageRef);
      await addDoc(collection(db, "books"), {
        title: title.trim(), author: author.trim(), category,
        description: description.trim(),
        price: price.startsWith("₹") ? price : `₹${price}`,
        image: downloadURL, createdAt: serverTimestamp()
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

  // ── Editorial Board Save Handler ───────────────────────────────
  const handleAddMember = async (e) => {
    e.preventDefault();
    if (!memberName || !memberAffiliation) { alert("Please fill in Name and Affiliation!"); return; }
    setIsSavingMember(true);
    try {
      const newDoc = await addDoc(collection(db, "editorial_board"), {
        name: memberName.trim(),
        role: memberRole,
        affiliation: memberAffiliation.trim(),
        email: memberEmail.trim(),
        createdAt: serverTimestamp()
      });
      setBoardMembers((prev) => [...prev, {
        id: newDoc.id, name: memberName.trim(), role: memberRole,
        affiliation: memberAffiliation.trim(), email: memberEmail.trim()
      }]);
      setMemberName(""); setMemberRole("Member"); setMemberAffiliation(""); setMemberEmail("");
      alert("Editorial board member added successfully! ✅");
    } catch (error) {
      console.error("Save error:", error);
      alert("Error saving member: " + error.message);
    } finally {
      setIsSavingMember(false);
    }
  };

  // ── Delete Member Handler ──────────────────────────────────────
  const handleDeleteMember = async (id) => {
    if (!window.confirm("Remove this member from the editorial board?")) return;
    try {
      await deleteDoc(doc(db, "editorial_board", id));
      setBoardMembers((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      alert("Error deleting member: " + error.message);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        <h2 style={styles.pageTitle}>🛡️ Admin Dashboard</h2>

        {/* Tab Switcher */}
        <div style={styles.tabBar}>
          <button
            style={{ ...styles.tabBtn, ...(activeTab === "books" ? styles.tabActive : {}) }}
            onClick={() => setActiveTab("books")}
          >
            📚 Upload Book
          </button>
          <button
            style={{ ...styles.tabBtn, ...(activeTab === "editorial" ? styles.tabActive : {}) }}
            onClick={() => setActiveTab("editorial")}
          >
            🧑‍🔬 Editorial Board
          </button>
        </div>

        {/* ── BOOK UPLOAD TAB ── */}
        {activeTab === "books" && (
          <form style={styles.form} onSubmit={handleUpload}>
            <h3 style={styles.sectionTitle}>Upload New Book</h3>

            <div style={styles.group}>
              <label style={styles.label}>Book Title</label>
              <input type="text" style={styles.input} value={title}
                onChange={(e) => setTitle(e.target.value)} placeholder="Enter book title" required />
            </div>

            <div style={styles.group}>
              <label style={styles.label}>Author Name</label>
              <input type="text" style={styles.input} value={author}
                onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author name" required />
            </div>

            <div style={styles.group}>
              <label style={styles.label}>Price (e.g., ₹499)</label>
              <input type="text" style={styles.input} value={price}
                onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" required />
            </div>

            <div style={styles.group}>
              <label style={styles.label}>Category</label>
              <select style={styles.select} value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="research">Research Methodology</option>
                <option value="academic">Academic Writing</option>
                <option value="publication">Publication Guide</option>
                <option value="patents">Patent Filing</option>
              </select>
            </div>

            <div style={styles.group}>
              <label style={styles.label}>Book Description</label>
              <textarea style={styles.textarea} value={description}
                onChange={(e) => setDescription(e.target.value)} placeholder="Enter book description" required />
            </div>

            <div style={styles.group}>
              <label style={styles.label}>Book Cover Image</label>
              <input type="file" style={styles.fileInput} accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])} required />
            </div>

            <button type="submit" style={{ ...styles.button, opacity: isUploading ? 0.7 : 1, cursor: isUploading ? "not-allowed" : "pointer" }} disabled={isUploading}>
              {isUploading ? "Uploading..." : "Upload Book"}
            </button>
          </form>
        )}

        {/* ── EDITORIAL BOARD TAB ── */}
        {activeTab === "editorial" && (
          <div>
            <h3 style={styles.sectionTitle}>Add Editorial Board Member</h3>
            <form style={styles.form} onSubmit={handleAddMember}>
              <div style={styles.formRow}>
                <div style={{ ...styles.group, flex: 1 }}>
                  <label style={styles.label}>Full Name *</label>
                  <input type="text" style={styles.input} value={memberName}
                    onChange={(e) => setMemberName(e.target.value)} placeholder="e.g. Dr. John Smith" required />
                </div>
                <div style={{ ...styles.group, flex: 1 }}>
                  <label style={styles.label}>Role</label>
                  <select style={styles.select} value={memberRole} onChange={(e) => setMemberRole(e.target.value)}>
                    <option value="Editor in Chief">Editor in Chief</option>
                    <option value="Associate Editor">Associate Editor</option>
                    <option value="Member">Member</option>
                    <option value="Reviewer">Reviewer</option>
                  </select>
                </div>
              </div>

              <div style={styles.group}>
                <label style={styles.label}>Affiliation / Institution *</label>
                <input type="text" style={styles.input} value={memberAffiliation}
                  onChange={(e) => setMemberAffiliation(e.target.value)}
                  placeholder="e.g. IIT Bombay, India" required />
              </div>

              <div style={styles.group}>
                <label style={styles.label}>Email (optional)</label>
                <input type="email" style={styles.input} value={memberEmail}
                  onChange={(e) => setMemberEmail(e.target.value)} placeholder="e.g. editor@university.edu" />
              </div>

              <button type="submit" style={{ ...styles.button, background: "#222", opacity: isSavingMember ? 0.7 : 1, cursor: isSavingMember ? "not-allowed" : "pointer" }} disabled={isSavingMember}>
                {isSavingMember ? "Saving..." : "➕ Add Member"}
              </button>
            </form>

            {/* Current Members List */}
            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ ...styles.sectionTitle, fontSize: "1.1rem" }}>
                Current Editorial Board Members ({boardMembers.length})
              </h3>
              {loadingMembers ? (
                <p style={{ color: "#666", textAlign: "center" }}>Loading members...</p>
              ) : boardMembers.length === 0 ? (
                <p style={{ color: "#999", textAlign: "center", padding: "1rem" }}>No members added yet.</p>
              ) : (
                <div style={styles.memberList}>
                  {boardMembers.map((m) => (
                    <div key={m.id} style={styles.memberCard}>
                      <div style={styles.memberInfo}>
                        <span style={styles.roleBadge}>{m.role}</span>
                        <strong style={{ color: "#111" }}>{m.name}</strong>
                        <span style={{ color: "#555", fontSize: "0.85rem" }}>{m.affiliation}</span>
                        {m.email && <span style={{ color: "#888", fontSize: "0.8rem" }}>{m.email}</span>}
                      </div>
                      <button onClick={() => handleDeleteMember(m.id)} style={styles.deleteBtn} title="Remove member">✕</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

const styles = {
  pageWrapper: {
    width: "100%", minHeight: "100vh",
    background: "linear-gradient(135deg, #111, #333, #555)",
    display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "3rem 1rem",
  },
  card: {
    width: "95%", maxWidth: "750px",
    background: "rgba(255,255,255,0.97)", padding: "2.5rem",
    borderRadius: "20px", boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
  },
  pageTitle: {
    textAlign: "center", fontSize: "1.8rem", fontWeight: "800",
    color: "#111", marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.25rem", fontWeight: "700", color: "#111",
    marginBottom: "1.2rem", borderBottom: "2px solid #ddd", paddingBottom: "0.5rem",
  },
  tabBar: {
    display: "flex", gap: "1rem", marginBottom: "2rem",
    borderBottom: "2px solid #eee", paddingBottom: "0",
  },
  tabBtn: {
    padding: "0.7rem 1.5rem", border: "none", background: "transparent",
    fontSize: "1rem", fontWeight: "600", color: "#888", cursor: "pointer",
    borderBottom: "3px solid transparent", marginBottom: "-2px", transition: "all 0.2s",
  },
  tabActive: { color: "#111", borderBottom: "3px solid #111" },
  form: { display: "flex", flexDirection: "column", gap: "1.2rem" },
  formRow: { display: "flex", gap: "1rem", flexWrap: "wrap" },
  group: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  label: { fontSize: "0.9rem", fontWeight: "600", color: "#333" },
  input: { padding: "11px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", outline: "none" },
  select: { padding: "11px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", outline: "none" },
  textarea: { padding: "11px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", minHeight: "110px", resize: "vertical" },
  fileInput: { padding: "8px", fontSize: "1rem" },
  button: {
    padding: "13px", background: "#222", color: "white",
    fontSize: "1.1rem", fontWeight: "700", border: "none",
    borderRadius: "10px", cursor: "pointer", transition: "0.3s",
  },
  memberList: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  memberCard: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "0.9rem 1rem", borderRadius: "10px",
    background: "#f8f9fa", border: "1px solid #ddd",
  },
  memberInfo: { display: "flex", flexDirection: "column", gap: "2px" },
  roleBadge: {
    fontSize: "0.72rem", fontWeight: "700", color: "#222",
    background: "#eee", borderRadius: "20px", padding: "2px 10px",
    width: "fit-content", marginBottom: "2px",
  },
  deleteBtn: {
    background: "#ffebee", border: "none", color: "#c62828",
    borderRadius: "6px", padding: "6px 10px", cursor: "pointer",
    fontWeight: "700", fontSize: "0.9rem", flexShrink: 0,
  },
};
