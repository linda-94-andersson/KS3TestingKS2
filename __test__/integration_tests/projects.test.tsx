import React from "react";
import { describe, expect, it } from "vitest";
import {
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { customRender } from "../test-utils";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { buildHandlers } from "../../__mock__/handlers";
import List from "../../src/routes/List";

const config = {
  baseUrl: `http://${import.meta.env.VITE_URL_KEY}`,
  idProject: "B1",
  nameProject: "Mocka kod",
  color: "#d61c25ff",
  userId: "A1",
};

const server = setupServer(...buildHandlers(config));

beforeAll(() => server.listen());

describe("Project integration", () => {
  it("Projects list component render through List component", async () => {
    customRender(<List />);
    const openProjects = screen.getByRole("button", { name: "Projects" });
    fireEvent.click(openProjects);
    const projectName = await waitFor(() =>
      screen.getByText(config.nameProject)
    );
    expect(projectName).toBeInTheDocument();
    screen.debug();
  });

  it("Project can be deleted", async () => {
    customRender(<List />);
    const openProjects = screen.getByRole("button", { name: "Projects" });
    fireEvent.click(openProjects);
    let projectName = await waitFor(() => screen.getByText(config.nameProject));
    const deleteButton = screen.getByRole("button", { name: "delButton" });
    fireEvent.click(deleteButton);
    await waitForElementToBeRemoved(() => screen.getByText(config.nameProject));
    expect(projectName).not.toBeInTheDocument();
    screen.debug();
  });
});
