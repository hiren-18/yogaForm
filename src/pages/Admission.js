import { useState, useEffect } from 'react';
import Form from '../components/Form';
import { getUserEnrollment } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

const Admission = ({ token, setToken }) => {
  const [enrolled, setEnrolled] = useState(false);
  const [batch, setBatch] = useState("");
  const [month, setMonth] = useState("");
  const navigate = useNavigate();
  
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleString('default', { month: 'long' })
  );

  useEffect(() => {
    const fetchEnrollment = async () => {
      if (token) {
        const response = await getUserEnrollment(token);
        if (response.enrolled) {
          setEnrolled(true);
          setBatch(response.batch);
          setMonth(response.month);
        }
      }
    };

    fetchEnrollment();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");  
    navigate('/'); 
    setToken(null);
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.leftSection}>
        <h1 style={styles.heading}>Yoga Class Admission</h1>
        <p style={styles.description}>
          Are you ready to embark on a journey of wellness, balance, and inner peace? 
          Our yoga classes are designed to help you achieve physical fitness, mental 
          clarity, and emotional well-being. 
        </p>
        
        {enrolled && month === currentMonth ? (
          <p style={styles.text}>
            You are already enrolled in the <b>{batch}</b> batch for the month of <b>{month}</b>!
          </p>
        ) : (
          currentMonth === new Date().toLocaleString('default', { month: 'long' }) && (
            <Form token={token} onSuccess={() => setEnrolled(true)} />
          )
        )}
      </div>

      
      <div style={styles.rightSection}>
        <img 
          src="https://www.shutterstock.com/image-vector/interior-arch-woman-yoga-pose-260nw-2091219037.jpg" 
          alt="Yoga"
          style={styles.image} 
        />
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5"
    
  },
  leftSection: {
    flex: 1,
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    
  },
  description: {
    fontSize: "18px",
    color: "#444",
    maxWidth: "500px",
    marginBottom: "25px",
    lineHeight: "1.5",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    maxWidth: "500px",
    marginBottom: "20px",
  },
  image: {
    width: "50wh",
    maxWidth: "500px",
    borderRadius: "10px",
    height:"40vh",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Admission;
