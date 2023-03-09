import { NavLink } from 'react-router-dom';
import planetColors from '../images/planetColors.png';
import './Nav.css';

function Nav() {
  const activeLink = ({ isActive }) => `nav-link${(isActive ? ' activated' : '')}`;

  return (
    <nav>
      <div className="logo-conatiner">
        <img className="nav-logo" src={planetColors} alt="logo" />
        <h1 className="nav-h1">Space Travelers Hub</h1>
      </div>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink to="/" className={activeLink}>
            Rockets
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/missions" className={activeLink}>
            Missions
          </NavLink>
        </li>
        <span>|</span>
        <li className="nav-li">
          <NavLink to="/myProfile" className={activeLink}>
            My profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
