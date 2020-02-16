import React from "react";

import PostLink from "../components/post-link";

// const getPosts = () => {
// For as many posts there are saved somewhere
// Post them
// }

const Posts = () => {
  return (
    <div className="Posts-Container">
      {/* getPosts() */}
      <PostLink name={"Another Post"} />
      <PostLink name={"Another Post 2"} />
      <PostLink name={"Another Post 3"} />
    </div>
  );
};

export default Posts;
