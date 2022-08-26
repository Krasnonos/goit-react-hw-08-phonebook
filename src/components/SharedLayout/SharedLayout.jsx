import { Outlet } from 'react-router-dom';
import { useEffect, useRef, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserMenu } from '../UserMenu/UserMenu';
import { changeTheme } from '../../redux/themeSlise';
import { Layout, Container, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isError = useSelector(state => state.auth.error);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isChekedTheme = useSelector(state => state.theme.isChecked);
  const input = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
  }, [isError]);

  useEffect(() => {
    input.current.checked = isChekedTheme;
  }, [isChekedTheme]);

  const onChecked = e => {
    const isChecked = e.target.checked;

    dispatch(changeTheme({ isChecked }));
  };

  return (
    <Layout>
      <Container>
        <Header>
          <input
            ref={input}
            type="checkbox"
            id="theme"
            className="toggle--checkbox"
            onClick={onChecked}
          />
          <label htmlFor="theme" className="toggle--label">
            <span className="toggle--label-background"></span>
          </label>
          {isLoggedIn && <UserMenu />}
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </Layout>
  );
};
