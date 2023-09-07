import React, { useState, useEffect } from "react";
import axios from "axios";

import CreateComment from "./CreateComment";
import CommentsList from "./CommentsList";
import PostPlaceholder from "./PostPlaceholder";

const QUERY_SERVICE_URL = "http://posts.com/posts";

const Post = ({ post }) => (
  <div className="col col-12 col-md-4 mb-2">
    <div className="card">
      <div className="card-body">
        <span className="card-text">{post?.content}</span>
        <hr />
        <CommentsList comments={post.comments} />
        <CreateComment postId={post.id} />
      </div>
    </div>
  </div>
);

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPosts() {
    setLoading(true);

    const { data } = await axios.get(QUERY_SERVICE_URL);

    setPosts(data);
    setLoading(false);

    return data;
  }

  useEffect(() => {
    getPosts();
  }, []);

  const refresh = async () => {
    await getPosts();
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-start align-items-center">
        <h3 className="me-2 mb-0">Posts</h3>
        <button className="btn btn-sm btn-secondary" onClick={() => refresh()}>
          refresh
        </button>
      </div>

      <div className="card-body">
        <div className="row justify-content-start">
          {loading ? <PostPlaceholder /> : Object.values(posts).map((post) => <Post key={post.id} post={post} />)}
        </div>

        {/* <div className="d-flex flex-wrap justify-content-start gap-4">
          {loading ? <PostPlaceholder /> : Object.values(posts).map((post) => <Post key={post.id} post={post} />)}
        </div> */}
      </div>
    </div>
  );
};

export default PostsList;
