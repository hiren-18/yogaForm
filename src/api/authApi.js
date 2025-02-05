export const registerUser = async (userData) => {
    const response = await fetch('https://yogaformserver.onrender.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  };
  
  export const loginUser = async (userData) => {
    const response = await fetch('https://yogaformserver.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  };
  