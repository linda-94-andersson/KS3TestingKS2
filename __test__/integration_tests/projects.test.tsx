import React from "react";
import { describe, expect, it } from "vitest";
import {
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../test-utils";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { buildHandlers } from "../../__mock__/handlers";

const config = {
  baseUrl: `http://${import.meta.env.VITE_URL_KEY}`,
  idProject: "B1",
  nameProject: "Mocka kod",
  color: "#d61c25ff",
  userId: "A1",
};

const server = setupServer(...buildHandlers(config));

beforeAll(() => server.listen());
