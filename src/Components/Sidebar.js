import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ved_dp.png";

function Sidebar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <nav>
        <NavLink exact="true" className="house" to="/">
          <i className="fa-solid fa-house fa-2x"></i>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="house"
          to="/about"
        >
          <i className="fa-solid fa-user fa-2x"></i>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="house"
          to="/projects"
        >
          <i className="fa-solid fa-2x fa-folder"></i>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="house"
          to="/contact"
        >
          <i className="fa-solid fa-envelope fa-2x"></i>
        </NavLink>
      </nav>

      <ul className="social-links">
        <li>
          <a href="https://github.com/Vedant-Manjrekar">
            <i className="fa-brands fa-2x fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/vedstwt">
            <i className="fa-brands fa-2x fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vedant-manjrekar-705707222/">
            <i className="fa-brands fa-2x fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
