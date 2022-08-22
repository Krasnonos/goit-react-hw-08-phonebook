import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivatRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
