import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';

export default function App() {
 return (
    <div className="bg-white text-[#0B1B3A] min-h-screen overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}