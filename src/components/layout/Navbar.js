import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AuthLinks from "./AuthLinks";
import GuestLinks from "./GuestLinks";

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? <AuthLinks profile={profile} /> : <GuestLinks />;
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper blue darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">
              bloggit
            </Link>
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">{links}</ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-links">
        {links}
      </ul>
    </Fragment>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
