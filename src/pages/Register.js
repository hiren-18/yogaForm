
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/authApi';

const reviews = [
  { 
    text: "I have been attending these yoga sessions for over a year now, and the transformation in my physical and mental well-being has been incredible. The instructors are patient, skilled, and ensure everyone gets personalized attention. Highly recommend it to anyone looking to de-stress and stay fit!", 
    author: "Riya" 
  },
  { 
    text: "This yoga class has helped me improve my posture and reduce stress. The guided meditations at the end of every session leave me feeling refreshed and energized. The structured programs and well-explained postures make it beginner-friendly yet challenging for experienced practitioners!", 
    author: "Amit" 
  },
  { 
    text: "The ambiance and energy in the class are just perfect. I used to struggle with flexibility, but after a few months of regular practice, I feel so much better. The trainers are supportive, and the sessions are engaging. A must-try for everyone who wants to experience the benefits of yoga!", 
    author: "Sneha" 
  }
];

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', date_of_birth: '' });
  const [error, setError] = useState('');
  const [currentReview, setCurrentReview] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const response = await registerUser(formData);

    if (response.message) {
      alert("Registration successful! Redirecting to login...");
      navigate('/login');
    } else {
      setError(response.error || "An error occurred");
    }
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div style={styles.container}>
     
      <div style={styles.leftContainer}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            style={styles.input}
          />
          <input
            type="date"
            onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>

     
      <div style={styles.rightContainer}>
        <div style={styles.reviewCard}>
          <span style={styles.quote}>&#10077;</span>
          <p style={styles.reviewText}>{reviews[currentReview].text}</p>
          <p style={styles.author}>- {reviews[currentReview].author}</p>
          <img src="./person-295.png" alt="User" style={styles.avatar} />
          <div style={styles.sliderButtons}>
            <button onClick={prevReview} style={styles.navButton}>←</button>
            <button onClick={nextReview} style={styles.navButton}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f0f0f0'
  },
  leftContainer: {
    flex: 1,
    maxWidth: '400px',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  error: {
    color: 'red',
    marginTop: '10px',
    fontSize: '14px'
  },
  rightContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewCard: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '600px',
    position: 'relative'
  },
  quote: {
    fontSize: '60px',
    color: '#bbb',
    position: 'absolute',
    top: '10px',
    left: '20px'
  },
  reviewText: {
    fontSize: '18px',
    fontStyle: 'italic',
    marginBottom: '20px',
    color: '#333',
    lineHeight: '1.6'
  },
  author: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
    fontSize: '16px'
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#ddd',
    marginBottom: '15px'
  },
  sliderButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '15px'
  },
  navButton: {
    background: '#ddd',
    border: 'none',
    padding: '10px 15px',
    fontSize: '22px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: '0.3s'
  }
};

export default Register;
