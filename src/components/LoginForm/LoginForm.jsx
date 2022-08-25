import { useState } from 'react';
import { toast } from 'react-toastify';
import { userLogin } from '../../redux/authOperation';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  Form,
  Input,
  InputWrap,
  Label,
  PasswordIcon,
  EmailIcon,
  BtnWrap,
  NavBtn,
} from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPasword(value);
        break;

      default:
        toast.error(`case ${name} doesn't support`);
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch(userLogin({ email, password }));

    setEmail('');
    setPasword('');
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <InputWrap>
          <Label htmlFor="email">Email</Label>
          <EmailIcon />
          <Input
            type="email"
            value={email}
            name="email"
            id="email"
            onChange={onChange}
            required
            placeholder="Johndou@mail.com"
          />
        </InputWrap>

        <InputWrap>
          <Label htmlFor="password">Password</Label>
          <PasswordIcon />
          <Input
            type="password"
            value={password}
            name="password"
            id="password"
            onChange={onChange}
            required
          />
        </InputWrap>
        <BtnWrap>
          <Button
            type="submit"
            variant={'contained'}
            size={'large'}
            color={'primary'}
          >
            LogIn
          </Button>
        </BtnWrap>
      </Form>
      <NavBtn to="/register">Sign up</NavBtn>
    </>
  );
};
