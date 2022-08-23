import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivatRoute } from './PrivatRoute/PrivatRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { refreshUser } from '../redux/authOperation';
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const isRefreshing = useSelector(state => state.auth.refreshLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ToastContainer autoClose={2000} pauseOnHover />
      </>
    )
  );
};
