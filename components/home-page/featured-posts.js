import React from "react";
import classes from "./featured-posts.module.css";
import { PostsGrids } from "../posts/posts-grid";
const FeaturedPost = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Post</h2>
      <PostsGrids posts={props.posts} />
    </section>
  );
};

export default FeaturedPost;
