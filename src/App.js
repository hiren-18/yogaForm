

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  
import Landing from './components/Landing';
import Admission from './pages/Admission';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  return (
    <Router>
      <div className="app-container bg-gradient-to-b from-yellow-300 to-orange-500 min-h-screen text-gray-900 flex flex-col items-center">
      <Header token={token} setToken={setToken} /> 
        <div className="content-container p-6 max-w-5xl w-full bg-white/80 shadow-lg rounded-2xl mt-6">
          <Routes>
          <Route path="/" element={<Landing setToken={setToken} />} />
      
       <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
         <Route path="/admission" element={token ? <Admission token={token} setToken={setToken} /> : <Login setToken={setToken} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
