import React from "react";

const CommentsList = ({ comments }) => {
  const getCommnetText = (_comment) => {
    let { id, comment, status } = _comment;

    if (status === "pending") return <li key={id}>{"comment pending"}</li>;
    if (status === "rejected") return <li key={id}>{"comment rejected"}</li>;
    if (status === "approved") return <li key={id}>{comment}</li>;

    return null;
  };
  const renderdComments = comments.map(getCommnetText);

  return <ul>{renderdComments}</ul>;
};

export default CommentsList;
