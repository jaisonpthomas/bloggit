import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetail from "./components/posts/PostDetail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PostForm from "./components/posts/PostForm";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/posts/new" component={PostForm} />
          <PrivateRoute exact path="/posts/:post_id" component={PostDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
