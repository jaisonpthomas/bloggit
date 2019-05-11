import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const PostItem = ({ post }) => {
  return (
    <div className="card z-depth-0 post-item grey lighten-4">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>
          {post.authorFirstName} {post.authorLastName}
        </p>
        <p className="grey-text">
          {moment(post.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;
