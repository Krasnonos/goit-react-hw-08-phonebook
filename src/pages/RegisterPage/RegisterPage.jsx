import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Layout, LoginWrap, Tittle } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <>
      <LoginWrap>
        <Tittle>Registration</Tittle>
        <RegisterForm />
      </LoginWrap>
      <Layout></Layout>
    </>
  );
};

export default RegisterPage;
