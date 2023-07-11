import React from "react";
import { render } from "@testing-library/react";
import Hero from "@/components/home-page/hero";
import Footer from "@/components/home-page/footer";

describe("Hero", () => {
  test("Renderizar La imagen", () => {
    const { getByAltText } = render(<Hero />);
    const image = getByAltText("An Image showing Steven");
    expect(image).toBeInTheDocument();
  });

  test("Renderizar el Heading", () => {
    const { getByText } = render(<Hero />);
    const heading = getByText("Economía Blog");
    expect(heading).toBeInTheDocument();
  });

  test('Validando que el texto "Economia Blog" este en un Heading 1', () => {
    const { getByRole } = render(<Hero />);
    const heading = getByRole("heading", { level: 1, name: /economía blog/i });

    expect(heading).toBeInTheDocument();
  });
});

describe("Footer", () => {
  test('Validar que el Link "https://eldinero.com.do" este en un href', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText("https://eldinero.com.do");

    expect(linkElement).toHaveAttribute("href", "https://eldinero.com.do");
  });
});
