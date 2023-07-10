import React from "react";
import { render } from "@testing-library/react";
import { PostsGrids } from "@/components/posts/posts-grid";

describe("PostsGrids", () => {
  test("Renderiza la lista de publicaciones correctamente", () => {
    const posts = [
      { slug: "post-1", title: "Post 1" },
      { slug: "post-2", title: "Post 2" },
      { slug: "post-3", title: "Post 3" },
    ];

    const { getAllByText } = render(<PostsGrids posts={posts} />);

    posts.forEach((post) => {
      const postElement = getAllByText(post.title);
      expect(postElement).toBeTruthy();
    });
  });

  test("Componente PostsGrid muestra la entrada correcta para un slug dado", () => {
    const slug = "1";
    const post = {
      slug: slug,
      title: "Post 1",
    };
    const { getByText } = render(<PostsGrids posts={[post]} />);
    expect(getByText(post.title)).toBeInTheDocument();
  });
});
