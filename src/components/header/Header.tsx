import {
  faBars,
  faLocationDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header>
      <div className="header-container">
        <NavLink to="/" className="logo-container" onClick={closeMobileMenu}>
          <span className="logo">VOYAGE</span>
          <FontAwesomeIcon icon={faLocationDot} size="xl" color="white" />
        </NavLink>

        <nav>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="about"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="contact"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="sign-up"
                className="sign-up-link"
                onClick={closeMobileMenu}
              >
                <button className="sign-up-button">Sign Up</button>
              </NavLink>
            </li>
          </ul>

          <div className="mobile-menu-icon" onClick={handleClick}>
            <FontAwesomeIcon
              icon={click ? faXmark : faBars}
              color="white"
              size="xl"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
