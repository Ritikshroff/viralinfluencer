import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const ProtectedRoute = ({ children }) => {
  const [isValidating, setIsValidating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        setIsAuthenticated(false);
        setIsValidating(false);
        return;
      }

      try {
        // Optional: Verify token with your backend
        // const response = await axios.get('https://viralfluencerbackend.onrender.com/verify-token', {
        //   headers: { Authorization: `Bearer ${token}` }
        // });
        // setIsAuthenticated(response.data.isValid);
        
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Token validation error:', error);
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
      } finally {
        setIsValidating(false);
      }
    };

    validateToken();
  }, []);

  if (isValidating) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedRoute; 