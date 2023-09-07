import React, { useState } from "react";
import axios from "axios";

const COMMENTS_SERVICE_URL = "http://posts.com";

const CreateComment = ({ postId }) => {
  const [comment, setComment] = useState("");

  const changeHandler = (e) => {
    setComment(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!comment) {
      alert("Please type some comment!!!");
      return;
    }

    await axios.post(`${COMMENTS_SERVICE_URL}/posts/${postId}/comments`, { comment });
    console.info("Comment posted successfully.");

    // reset comment input box after successful submission
    setComment("");
  };

  return (
    <div className="">
      <form onSubmit={submitHandler}>
        <div className="form-group mb-3" style={{ maxWidth: "440px" }}>
          <input
            type="text"
            className="form-control"
            value={comment}
            onChange={changeHandler}
            placeholder="type some comment and hit submit..."
          />
        </div>
        <button type="submit" className="btn btn-sm btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
