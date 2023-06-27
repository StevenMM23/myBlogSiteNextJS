import React from "react";
import classes from "./featured-posts.module.css";
import { PostsGrids } from "../posts/posts-grid";
const FeaturedPost = (props) => {
  return (
    <section className={classes.latest}>
<<<<<<< HEAD
      <h2>Publicaciones Destacadas</h2>
=======
      <h2>Publicaciones</h2>
>>>>>>> 6785166f0f785674c7bea5b7b8434d8a07671d27
      <PostsGrids posts={props.posts} />
    </section>
  );
};

export default FeaturedPost;
