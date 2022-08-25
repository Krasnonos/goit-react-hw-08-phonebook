import { Outlet } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeTheme } from '../../redux/themeSlise';
import { lightTeme, darkTheme } from '../../theme';
import { Layout } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isError = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
  }, [isError]);

  const onChecked = e => {
    const isChecked = e.target.checked;

    if (isChecked) {
      dispatch(changeTheme(darkTheme));
    } else {
      dispatch(changeTheme(lightTeme));
    }
  };

  return (
    <Layout>
      <input type="checkbox" id="theme" onChange={onChecked} />
      <label htmlFor="theme"></label>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
