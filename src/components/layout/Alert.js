import React from "react";
import NoInternet from "../../assets/Icons/NoInternet";
import classes from './Alert.module.css'

export default function Alert() {
  return (
    <div className={classes.alert}>
      <NoInternet />
      <div>
        <p>Phone Not Connected</p>
        <p>Make sure your phone has an active internet connection.</p>
        <a href="#">Learn more.</a>
      </div>
    </div>
  );
}
