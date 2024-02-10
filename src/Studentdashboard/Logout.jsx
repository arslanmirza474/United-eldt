import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router

function Logout() {
  const navigate = useNavigate(); // Corrected to useNavigate()

  useEffect(() => {
    // Remove userId from local storage
    localStorage.removeItem('userId');
    localStorage.clear()
    // Redirect to login page or any other desired page
    navigate('/login'); // Corrected to use navigate
  }, [navigate]);

  return null; // Since there's no content to render in the Logout component
}

export default Logout;
