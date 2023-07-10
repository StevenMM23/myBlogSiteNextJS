import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import MainNavigation from "@/components/layout/main-navigation";

describe("MainNavigation", () => {
  test('Navegar a /posts cuando se clické el boton "Publicaciones"', () => {
    const pushMock = jest.fn();

    const router = {
      push: pushMock,
    };

    jest.spyOn(router, "push");

    const { getByText } = render(
      <RouterContext.Provider value={router}>
        <MainNavigation />
      </RouterContext.Provider>
    );

    const publicacionesLink = getByText("Publicaciones");

    fireEvent.click(publicacionesLink);

    const [route] = pushMock.mock.calls[0];

    expect(route).toBe("/posts");
  });
});
