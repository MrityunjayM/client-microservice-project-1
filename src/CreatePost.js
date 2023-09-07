import React, { useState } from "react";
import axios from "axios";

const POSTS_SERVICE_URL = "http://posts.com/posts/create";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const changeHandler = (e) => {
    setContent(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!content) {
      alert("Please type some post content!!!");
      return;
    }

    await axios.post(POSTS_SERVICE_URL, { content });
    console.info("Post created successfully.");

    // reset content input box after successful submission
    setContent("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="form-group mb-3" style={{ maxWidth: "440px" }}>
            <label htmlFor="content" className="form-label fs-4 fw-semibold">
              Create a Post
            </label>
            <input type="text" id="content" className="form-control" value={content} onChange={changeHandler} placeholder="type here" />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
