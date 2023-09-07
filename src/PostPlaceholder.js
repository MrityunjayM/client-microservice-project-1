import React from "react";

const CardPlaceholder = () => {
  return (
    <div className="card" aria-hidden="true" style={{ width: "clamp(300px, 100%, 350px)" }}>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>

        <p className="card-text placeholder-glow">
          <span className="placeholder col-7" />
          <span className="placeholder col-4" />
          <span className="placeholder col-4" />
          <span className="placeholder col-6" />
          <span className="placeholder col-8" />
        </p>
        <button className="btn btn-primary disabled placeholder col-6" aria-disabled="true" />
      </div>
    </div>
  );
};

const PostPlaceholder = () => {
  return (
    <>
      <CardPlaceholder />
      <CardPlaceholder />
      <CardPlaceholder />
      <CardPlaceholder />
    </>
  );
};

export default PostPlaceholder;
