import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../../actions/post";

const PostForm = ({ createPost, history }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    createPost({ title, content });
    history.push("/");
  };
  return (
    <div className="container">
      <form
        className="white"
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <h5 className="grey-text text-darken-3">Create a Post</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            name="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn grey darken-1 z-depth-0">Post</button>
        </div>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
