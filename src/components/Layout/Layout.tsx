import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from './Menu';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <>
      <Menu />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
}

export default Layout;
