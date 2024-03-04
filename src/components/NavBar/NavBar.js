// NavBar.js
import React, { useContext,UseState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider/context';
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

function NavBar({ theme, setTheme}) {
  const { user,logout } = useContext(AuthContext);
  
  console.log(user)
  const navigate = useNavigate();

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  localStorage.setItem('theme',theme)
  const toggle_light = "./img/light.jpg";
  const toggle_dark = "./img/dark.jpg";
  var haveToken = localStorage.getItem("accessToken") == null ? false : true; 
  const handleClick = (e) => {
    logout();
    navigate('/',{ replace: true }); // Redirect to login after logout
  };

  return (
    <>
    {
      haveToken === true ? (
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
      ):''
    }
    </>
  );
}

export default NavBar;
