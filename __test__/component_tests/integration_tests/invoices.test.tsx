import React from "react";
import { describe, expect, it } from "vitest";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { customRender } from "../../test-utils";
import { setupServer } from "msw/node";
import { buildHandlers } from "../../../__mock__/handlers";
import List from "../../../src/routes/List";
import Invoice from "../../../src/routes/Invoice";

const config = {
  baseUrl: `http://${import.meta.env.VITE_URL_KEY}`,
  idInvoice: "D1",
  status: "Unpaid",
  due_date: 1671746302714,
  sum: 1000,
  customer_name: "Linda",
  created_date: 1669154303130,
  hourly_rate: 100,
  idProject: "B1",
  nameProject: "Test code",
  idTask: "C1",
  nameTask: "Mock code",
  projectId: "B1",
};

const server = setupServer(...buildHandlers(config));

beforeAll(() => server.listen());

describe("Invoice integration", () => {
  it("Invoices list component render through List component", async () => {
    customRender(<List />);
    const openInvoices = screen.getByRole("button", { name: "Invoices" });
    fireEvent.click(openInvoices);
    const invoiceCustomer = await waitFor(() =>
      screen.getByText(config.customer_name)
    );
    expect(invoiceCustomer).toBeInTheDocument();
    screen.debug();
  });

  it("Invoice can be created", async () => {
    customRender(<Invoice />);
    const select = await waitFor(() => screen.getByText("Pick a project"));
    fireEvent.select(select, { target: { value: config.idProject } });
    const selectProjectEl = await waitFor(() =>
      screen.getByText(config.nameProject)
    );
    expect(selectProjectEl).toBeInTheDocument();
    const selectTaskEl = await waitFor(() => screen.getByText(config.nameTask));
    expect(selectTaskEl).toBeInTheDocument();
    const rateInput = await waitFor(() =>
      screen.getByPlaceholderText("Enter hourly rate")
    );
    userEvent.type(rateInput, config.hourly_rate.toString());
    const customerInput = await waitFor(() =>
      screen.getByPlaceholderText("Customer name")
    );
    userEvent.type(customerInput, config.customer_name);
    const createButton = screen.getByRole("button", { name: "Add Invoice" });
    fireEvent.click(createButton);
    customRender(<List />);
    const openInvoices = screen.getByRole("button", { name: "Invoices" });
    fireEvent.click(openInvoices);
    const invoiceCustomer = await waitFor(() =>
      screen.getByText(config.customer_name)
    );
    expect(invoiceCustomer).toBeInTheDocument();
    screen.debug();
  });
});
