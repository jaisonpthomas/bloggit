import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";

const PostDetail = ({ post }) => {
  if (post) {
    return (
      <div className="container section post-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.content}</p>
          </div>
          <div className="card-action grey lighten-5 grey-text">
            <div>
              {post.authorFirstName} {post.authorLastName}{" "}
            </div>
            <div>{moment(post.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading post...</p>
      </div>
    );
  }
};
PostDetail.propTypes = {
  post: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "posts"
    }
  ])
)(PostDetail);
