import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={classes.header}>
      <Link to={"/"}>
        <div className={classes.icon}>
          <i className="fa-solid fa-utensils"></i>
          <h3>Food Recipe </h3>
        </div>
      </Link>
      <nav>
        <ul className={classes.navList}>
          {isHome && (
            <li className={classes.list}>
              <NavLink to="/recipePage" activeClassName="active">
                Recipe
              </NavLink>
            </li>
          )}
          {!isHome && (
            <li className={classes.list}>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
