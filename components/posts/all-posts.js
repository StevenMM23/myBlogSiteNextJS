import React from "react";
import classes from "./all-posts.module.css";
import { PostsGrids } from "./posts-grid";
const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrids posts={props.posts} />
    </section>
  );
};


export default AllPosts;
