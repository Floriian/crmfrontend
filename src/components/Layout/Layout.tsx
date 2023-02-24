import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Menu } from './Menu';
import Sidebar from './Sidebar';
import { useAxios } from '../../hooks';
import { TUser } from '../../types';
import { getAccessToken } from '../../utils';

function Layout() {
  const navigate = useNavigate();
  const token = getAccessToken();
  const errMessage = 'You are not logged in!';

  useEffect(() => {
    if (token) {
      navigate(
        `/auth/sign-in?statusCode=401&message=${errMessage}&error=Unauthorized`,
      );
    }
  }, [token]);

  return (
    <>
      {token ? (
        <>
          {/* <Menu /> */}
          <Sidebar>
            <Outlet />
          </Sidebar>
        </>
      ) : (
        <Navigate
          to={`/auth/sign-in?statusCode=401&message=${errMessage}&error=Unauthorized`}
        />
      )}
    </>
  );
}

export default Layout;
