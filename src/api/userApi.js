export const getUserEnrollment = async (token) => {
    const response = await fetch('https://yogaformserver.onrender.com/api/users/enrollment', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  };
  
  export const enrollUser = async (token, userData) => {
    const response = await fetch('https://yogaformserver.onrender.com/api/users/enrollment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  };
  