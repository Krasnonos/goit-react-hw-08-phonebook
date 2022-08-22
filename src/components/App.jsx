import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivatRoute } from './PrivatRoute/PrivatRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { refreshUser } from '../redux/authOperation';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivatRoute>
                <ContactsPage />
              </PrivatRoute>
            }
          />
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} pauseOnHover />
    </>
  );
};
