import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/auth";

const Register = ({ auth, authError, register }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) setPasswordMismatch(true);
    else {
      setPasswordMismatch(false);
      register(formData);
    }
  };
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form className="white" onSubmit={e => onSubmit(e)}>
        <h5 className="grey-text text-darken-3">Create a bloggit account</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="red-text">
          {passwordMismatch ? <p>Passwords do not match</p> : null}
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div className="input-field">
          <button className="btn grey darken-1 z-depth-0">Register</button>
        </div>
      </form>
      <div className="red-text center">
        {authError ? <p>{authError}</p> : null}
      </div>
      <p>
        Already a member? <Link to="/login">Login to your account.</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
