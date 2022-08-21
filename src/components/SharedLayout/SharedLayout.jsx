import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <input type="checkbox" id="theme" />
      <label htmlFor="theme"></label>
      <Outlet />
    </div>
  );
};
