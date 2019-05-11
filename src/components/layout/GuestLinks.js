import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const GuestLinks = () => {
  return (
    <Fragment>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </Fragment>
  );
};

export default GuestLinks;
