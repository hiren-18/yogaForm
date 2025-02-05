

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/authApi';
import './Login.css'; 

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const response = await loginUser(formData);

    if (response.token) {
      localStorage.setItem("token", response.token);
      setToken(response.token);
      navigate('/admission'); 
    } else {
      setError(response.error || "Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <div>
            <button type="submit">Login</button>
            {error && <p className="message error">{error}</p>}
          </div>
        </form>
      </div>
      <div className="login-right">
        <img src="./yoga.webp" alt="Yoga Class" />
      </div>
    </div>
  );
};

export default Login;
