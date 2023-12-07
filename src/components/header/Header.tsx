import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <NavLink to="/" className="logo-container">
          <span className="logo">TRAVEL</span>
          <FontAwesomeIcon icon={faLocationDot} size="xl" color="white" />
        </NavLink>

        <nav>
          <ul>
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" className="sign-up">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
