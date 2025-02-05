

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate('/');
  };

  const headerStyle = {
    background: "#FFA500",
    padding: "15px 20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "8px"
  };

  const navStyle = {
    display: "flex",
    gap: "15px"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "500",
    transition: "color 0.3s ease-in-out",
    padding: "8px 12px",
    borderRadius: "5px"
  };

  const linkHoverStyle = {
    color: "#0056b3",
    background: "rgba(0, 123, 255, 0.1)"
  };

  const buttonStyle = {
    background: "#dc3545",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease-in-out"
  };

  const buttonHoverStyle = {
    background: "#c82333"
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ color: "#333", fontSize: "24px", fontWeight: "bold", margin: "0" }}>Shri Chaitanya Yoga Class</h1>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        {!token ? (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        ) : (
          <button 
            style={buttonStyle} 
            onMouseOver={(e) => e.target.style.background = buttonHoverStyle.background}
            onMouseOut={(e) => e.target.style.background = buttonStyle.background}
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
