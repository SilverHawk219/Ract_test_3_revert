import logo from "./logo.png";
import React from "react";
import { GlobalContext } from "./GlobalContext";

const Navbar = () => {
  const magenta = {
    background: "#e20074"
  };

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
      style={magenta}
    >
      <div className="navbar-brand">
        <img src={logo} width="112" height="28" />
        <p className="navbar-item title">React Test Website</p>
      </div>
      <div classname="navbar-end">
        <p>User:{global.user}</p>
      </div>
    </nav>
  );
};

export default Navbar;
