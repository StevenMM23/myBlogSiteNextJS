import React from "react";
import classes from "./featured-posts.module.css";
import { PostsGrids } from "../posts/posts-grid";

const FeaturedPost = (props) => {
  return (
    <section className={classes.latest} data-testid="featured-post">
      <h2 data-testid="featured-post-title">Publicaciones</h2>
      <PostsGrids posts={props.posts} />
    </section>
  );
};

export default FeaturedPost;
