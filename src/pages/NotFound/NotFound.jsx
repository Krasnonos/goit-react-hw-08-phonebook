import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn
      ? navigate('/contacts', { replace: true })
      : navigate('/login', { replace: true });
  }, [isLoggedIn, navigate]);
};
