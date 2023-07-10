import React from "react";
import classes from "./posts-grid.module.css";
import PostItems from "./post-item";

export const PostsGrids = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid} data-testid="posts-grid">
      {posts.map((post) => (
        <PostItems key={post.slug} post={post} />
      ))}
    </ul>
  );
};
