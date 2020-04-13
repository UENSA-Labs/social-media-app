// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <ul>
      <li>
        <Link to="/es">Home</Link>
      </li>
      <li>
        <Link to="/es/profile">Profile</Link>
      </li>
    </ul>
  </div>
);

export default Header;
