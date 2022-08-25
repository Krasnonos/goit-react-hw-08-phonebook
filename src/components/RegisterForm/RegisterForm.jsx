import { useState } from 'react';
import { toast } from 'react-toastify';
import { userRegistration } from '../../redux/authOperation';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  Form,
  Input,
  InputWrap,
  Label,
  PasswordIcon,
  EmailIcon,
  PersonIcon,
  BtnWrap,
  NavBtn,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

    dispatch(userRegistration({ name, email, password }));

    setName('');
    setEmail('');
    setPasword('');
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <InputWrap>
          <Label htmlFor="name">Name</Label>
          <PersonIcon />
          <Input
            type="text"
            value={name}
            name="name"
            id="name"
            onChange={onChange}
            required
            minLength={3}
            maxLength={20}
            placeholder="Jhon Dou"
          />
        </InputWrap>

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
            minLength={7}
            maxLength={15}
          />
        </InputWrap>
        <BtnWrap>
          <Button
            type="submit"
            variant={'contained'}
            size={'large'}
            color={'primary'}
          >
            sign up
          </Button>
        </BtnWrap>
      </Form>

      <NavBtn to="/login">login</NavBtn>
    </>
  );
};
