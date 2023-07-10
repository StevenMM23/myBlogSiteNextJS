import React from "react";
import { render } from "@testing-library/react";
import Hero from "@/components/home-page/hero";
import Footer from "@/components/home-page/footer";

describe("Hero", () => {
  test("renders the image", () => {
    const { getByAltText } = render(<Hero />);
    const image = getByAltText("An Image showing Steven");
    expect(image).toBeInTheDocument();
  });

  test("renders the heading", () => {
    const { getByText } = render(<Hero />);
    const heading = getByText("Economía Blog");
    expect(heading).toBeInTheDocument();
  });

  test('renders "Economía Blog" within an h1 element', () => {
    const { getByRole } = render(<Hero />);
    const heading = getByRole("heading", { level: 1, name: /economía blog/i });

    expect(heading).toBeInTheDocument();
  });
});

describe("Footer", () => {
  test('validates the link to "https://eldinero.com.do"', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText("https://eldinero.com.do");

    expect(linkElement).toHaveAttribute("href", "https://eldinero.com.do");
  });
});
