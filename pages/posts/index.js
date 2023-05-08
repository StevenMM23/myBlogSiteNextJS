import AllPosts from "@/components/posts/all-posts";

import React, { Fragment } from "react";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";

const AllPostPage = (props) => {
  return (
    <Fragment>
    <Head>
      <title>All Post</title>
      <meta name="description" content="A list of all programming-related tutorials and posts!"/>
    </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostPage;
