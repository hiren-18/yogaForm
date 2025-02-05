

import { useState } from 'react';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Landing = ({ setToken }) => {
  const [view, setView] = useState(null);

  return (
    <div style={styles.container}>
      {view === "register" ? (
        <Register setToken={setToken} />
      ) : view === "login" ? (
        <Login setToken={setToken} />
      ) : (
        <div style={styles.overlay}>
          <h1 style={styles.heading} className="fade-in">
            Transform Your Life with Yoga
          </h1>
          <p style={styles.paragraph} className="fade-in">
            Achieve balance, flexibility, and inner peace. Join us today!
          </p>

        
          <div style={styles.socialContainer} className="fade-in">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" style={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style={styles.socialIcon} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

/* STYLES */
const styles = {
  container: {
    width: "100vw",
    height: "calc(100vh - 100px)", 
    marginTop: "30px", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: "url('https://marketplace.canva.com/EAE9iSaDkyw/2/0/1600w/canva-pastel-orange-mandala-yoga-class-instagram-post-VKbs_VUZRVw.jpg') center/cover no-repeat"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    padding: "20px"
  },
  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "10px",
    animation: "fadeIn 1.5s ease-in-out"
  },
  paragraph: {
    fontSize: "20px",
    marginBottom: "20px",
    maxWidth: "600px",
    animation: "fadeIn 1.8s ease-in-out"
  },
  socialContainer: {
    marginTop: "30px",
    display: "flex",
    gap: "15px"
  },
  socialLink: {
    textDecoration: "none",
  },
  socialIcon: {
    width: "40px",
    height: "40px",
    transition: "transform 0.3s"
  }
};

export default Landing;
