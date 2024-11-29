import React from 'react';
import Menu from './menu.jsx';

const Main = () => {
  const menuItems = [
    { id: 1, name: 'ข้าวมันไก่', price: 40 },
    { id: 2, name: 'ผัดไทย', price: 50 },
    { id: 3, name: 'ส้มตำ', price: 35 },
    { id: 4, name: 'ก๋วยเตี๋ยวเรือ', price: 45 },
  ];

  return (
    <div>
      <h1>เมนูอาหาร</h1>
      <Menu items={menuItems} />
    </div>
  );
};

export default Main;
