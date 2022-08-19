import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';

export const LoginPage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <LoginForm />
    </div>
  );
};
