import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';
const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
