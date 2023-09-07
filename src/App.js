import React from "react";
import PostsList from "./PostsList";

// import bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import CreatePost from "./CreatePost";

function App() {
  return (
    <div className="container">
      <h2>Microservices Projet - 1 | Posts & Comments</h2>
      <CreatePost />
      <hr />
      <PostsList />
    </div>
  );
}

export default App;
