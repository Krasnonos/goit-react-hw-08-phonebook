import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export const SharedLayout = () => {
  const isError = useSelector(state => state.auth.error);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
  }, [isError]);

  return (
    <div>
      <input type="checkbox" id="theme" />
      <label htmlFor="theme"></label>
      <Outlet />
    </div>
  );
};
