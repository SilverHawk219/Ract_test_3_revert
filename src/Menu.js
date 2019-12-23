import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "./axios";
import { GlobalContext } from "./GlobalContext";

const Menu = () => {
  //const [global, setGlobal] = useContext(GlobalContext);

  const logout = () => {
    setGlobal({});
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <aside className="menu">
        <p className="menu-label">Pages</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/Page1"} activeClassName="is-active">
              Page1(table)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Page2"} activeClassName="is-active">
              Page2
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Login"} activeClassName="is-active">
              Login
            </NavLink>
          </li>
          <li>
            <button class="button" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </aside>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Menu;
