import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userRegistration } from '../../redux/authOperation';
import { useDispatch } from 'react-redux';

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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={onChange}
          required
          minLength={3}
          maxLength={20}
          placeholder="Jhon Dou"
        />
        <input
          type="email"
          value={email}
          name="email"
          onChange={onChange}
          required
          placeholder="jhondou@mail.com"
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
          required
          minLength={7}
          maxLength={15}
        />
        <button type="submit">LogIn</button>
      </form>

      <NavLink to="/login">Sign in</NavLink>
    </>
  );
};
