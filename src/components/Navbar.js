import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/missions" activeClassName="active">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
