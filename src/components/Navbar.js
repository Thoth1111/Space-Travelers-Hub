import { NavLink } from "react-router-dom";
import "../styles/nav.css";

export const Navbar = () => {
    return (
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
    )
}