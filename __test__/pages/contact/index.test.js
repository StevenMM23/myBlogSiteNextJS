import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactPage from "@/pages/contact";

describe("ContactPage", () => {
  test("renders the page title", () => {
    const { getByText } = render(<ContactPage />);
    const pageTitle = getByText("Correo electrónico");
    expect(pageTitle).toBeInTheDocument();
  });

  test("Muestra la palabra Queremos escucharte", () => {
    const { getByText } = render(<ContactPage />);
    const pageDescription = getByText("Queremos escucharte");
    expect(pageDescription).toBeInTheDocument();
  });
});
