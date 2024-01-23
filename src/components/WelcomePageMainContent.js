import React from "react";
import classes from "./WelcomePageMainContent.module.css";
import { Link } from "react-router-dom";

export default function WelcomePageMainContent() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.welcomeMain}>
        <div className={classes.welcomeContent}>
          <h2>Find your </h2>
          <h2>recipes</h2>
          <Link to={"/recipePage"}>
            <button className={classes.button}>Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
