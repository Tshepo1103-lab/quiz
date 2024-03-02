// NavBar.js
import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider/context';
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

function NavBar({ theme, setTheme}) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const toggle_light = "./img/light.jpg";
  const toggle_dark = "./img/dark.jpg";

  const handleClick = () => {
    logout();
    navigate('/login'); // Redirect to login after logout
  };

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
          <button className="button-logout" onClick={handleClick}>
            <LogoutOutlined />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
