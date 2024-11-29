import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.price} บาท
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Menu;
