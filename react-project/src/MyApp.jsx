import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const MyApp = () => {
  return (
    <div className='wrap'>
      {/* 選單 */}
      <Nav />
      <hr/>
        <Routes>
      {/* 內容區 */}
      <div>MyApp</div>

      {/* 頁尾 */}
      <Footer />
    </div>
  );
};
