import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bell_Icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>News and Popular</li>
          <li>My List</li>
          <li>Browse by launguage</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt=" " className="icons" />
        <p>Children</p>
        <img src={bell_Icon} alt=" " className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt=" " className="profile" />
          <img src={caret_icon} alt=" " />
          <div className="dropdown">
            <p>signOut of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
