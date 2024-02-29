// NavBar.js
import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuthStateContext } from "../../AuthProvider";
import { useAuthActionContext } from "../../AuthProvider";
import { LogoutOutlined } from "@ant-design/icons";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />

function NavBar({ theme, setTheme }) {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const status = useAuthStateContext();
  const { logout } = useAuthActionContext();
  const toggle_light = "./img/light.jpg";
  const toggle_dark = "./img/dark.jpg";

  return (
    <nav className={`navbar ${theme}`}>
      <img
        src={theme === "light" ? toggle_dark : toggle_light}
        onClick={toggle_mode}
        alt="mode"
        className="toggle-icon"
      />

      <ul>
        <li>
          <Link to="/" className="custom-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Leaderboard" className="custom-link">
            Leaderboard
          </Link>
        </li>
        <li className="logout">
          <Link to="/Login" className="custom-links">
            <LogoutOutlined />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
