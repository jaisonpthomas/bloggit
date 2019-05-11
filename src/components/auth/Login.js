import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login, auth, authError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form className="white" onSubmit={e => onSubmit(e)}>
        <h5 className="grey-text text-darken-3">Login to bloggit</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <button className="btn grey darken-1 z-depth-0">Login</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
        <p>
          Not a member? <Link to="/register">Sign up today.</Link>
        </p>
      </form>
    </div>
  );
};

Login.propTypes = {
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
  { login }
)(Login);
