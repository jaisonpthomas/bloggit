import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const AuthLinks = ({ logout, profile }) => {
  return (
    <Fragment>
      <li>
        <NavLink to="/posts/new">New Post</NavLink>
      </li>
      <li>
        <a onClick={logout}>Logout</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating grey darken-2">
          {profile.initials}
        </NavLink>
      </li>
    </Fragment>
  );
};

AuthLinks.propTypes = {
  profile: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  { logout }
)(AuthLinks);
