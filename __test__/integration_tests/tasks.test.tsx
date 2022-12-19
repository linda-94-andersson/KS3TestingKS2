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
  idTask: "C1",
  nameTask: "Mocka kod task",
  createdDate: 1668588544037,
  projectId: "B1",
};

const server = setupServer(...buildHandlers(config));

beforeAll(() => server.listen());

describe("Task integration", () => {
  it("Tasks list component render through List component", async () => {
    customRender(<List />);
    const openTasks = screen.getByRole("button", { name: "Tasks" });
    fireEvent.click(openTasks);
    const taskName = await waitFor(() => screen.getByText(config.nameTask));
    expect(taskName).toBeInTheDocument();
    screen.debug();
  });

  it("Task can be deleted", async () => {
    customRender(<List />);
    const openTasks = screen.getByRole("button", { name: "Tasks" });
    fireEvent.click(openTasks);
    let taskName = await waitFor(() => screen.getByText(config.nameTask));
    const deleteButton = screen.getByRole("button", { name: "delButton" });
    fireEvent.click(deleteButton);
    await waitForElementToBeRemoved(() => screen.getByText(config.nameTask));
    expect(taskName).not.toBeInTheDocument();
    screen.debug();
  });
});
