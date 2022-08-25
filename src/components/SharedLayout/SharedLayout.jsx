import { Outlet } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeTheme } from '../../redux/themeSlise';
import { lightTeme, darkTheme } from '../../theme';
import { Layout, ToggleWrap } from './SharedLayout.styled';

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
      <ToggleWrap>
        <input
          type="checkbox"
          id="theme"
          className="toggle--checkbox"
          onClick={onChecked}
        />
        <label htmlFor="theme" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
      </ToggleWrap>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
