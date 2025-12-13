import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "hsptech@ac.in" && password === "Hsp@*12345") {
      localStorage.setItem("admin", "true");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials!");
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 Admin Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.group}>
            <label style={styles.label}>Admin Email</label>
            <input
              type="email"
              style={styles.input}
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Admin Password</label>
            <input
              type="password"
              style={styles.input}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

// ⭐ Modern UI Styles
const styles = {
  pageWrapper: {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0d47a1, #1976d2, #42a5f5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },

  card: {
    width: "90%",
    maxWidth: "480px",
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
    gap: "1.5rem",
  },

  group: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  label: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#0d47a1",
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #90caf9",
    fontSize: "1rem",
    outline: "none",
  },

  button: {
    marginTop: "1rem",
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
