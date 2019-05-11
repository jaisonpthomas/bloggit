import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import PostList from "../posts/PostList";

const Dashboard = ({ posts, auth }) => (
  <div className="dashboard container">
    {posts && <PostList posts={posts} />}
  </div>
);

Dashboard.propTypes = {
  posts: PropTypes.array
};

const mapStateToProps = state => ({
  posts: state.firestore.ordered.posts,
  auth: state.firebase.auth
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
