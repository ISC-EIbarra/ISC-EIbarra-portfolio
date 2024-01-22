import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarMenu from '../Navbar';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarMenu />

      <main className="flex flex-1 bg-blue-600">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
