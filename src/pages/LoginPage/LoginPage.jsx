import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Layout, LoginWrap, Tittle } from './LoginPage.styled.js';

const LoginPage = () => {
  return (
    <>
      <LoginWrap>
        <Tittle>LOGIN PAGE</Tittle>
        <LoginForm />
      </LoginWrap>
      <Layout></Layout>
    </>
  );
};

export default LoginPage;
