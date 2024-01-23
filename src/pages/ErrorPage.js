import React from "react";
import { Link } from "react-router-dom";
import classes from "../common.module.css";

export default function ErrorPage() {
  return (
    <div className={classes.errorImgBg}>
      <div className={classes.errorContent}>
        <h2>404</h2>
        <h2>Something went wrong</h2>
        <Link to="/">
          <button className={classes.button}>Back</button>
        </Link>
      </div>
    </div>
  );
}
