import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Menu } from './Menu';
import Sidebar from './Sidebar';

function Layout() {
  const token = localStorage.getItem('access_token');
  const errMessage = 'You are not logged in!';
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
          to={`/auth/sign-in?statusCode=401&message=${errMessage}&error=Unathorized`}
        />
      )}
    </>
  );
}

export default Layout;
