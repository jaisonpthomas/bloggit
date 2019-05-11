import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <div className="post-list section">
      {posts.length > 0 ? (
        posts.map(post => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <PostItem post={post} />
          </Link>
        ))
      ) : (
        <p>No recent posts</p>
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
