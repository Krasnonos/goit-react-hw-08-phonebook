import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
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
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} pauseOnHover />
    </>
  );
};
