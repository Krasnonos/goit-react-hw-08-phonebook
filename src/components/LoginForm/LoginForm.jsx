import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from '../../redux/authOperation';
import { useDispatch } from 'react-redux';

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
      <form onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          name="email"
          onChange={onChange}
          required
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
          required
        />
        <button type="submit">LogIn</button>
      </form>
      <NavLink to="/register">Sign up</NavLink>
    </>
  );
};
