import { test, expect } from "@playwright/test";

test.only("e2e testing of K2", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");
  await page.getByRole("button", { name: "Users" }).click();
  await page.getByRole("button", { name: "Users" }).click();
  await page.getByRole("button", { name: "Projects" }).click();
  await page.getByRole("button", { name: "Projects" }).click();
  await page.getByRole("button", { name: "Tasks" }).click();
  await page.getByRole("button", { name: "Tasks" }).click();
  await page
    .getByRole("button", { name: "Timelogs 2022-11-20 - 2022-12-20" })
    .click();
  await page
    .getByRole("button", { name: "Timelogs 2022-11-20 - 2022-12-20" })
    .click();
  await page.getByRole("button", { name: "Invoices" }).click();
  await page.getByRole("button", { name: "Invoices" }).click();
  await page.getByRole("button", { name: "Invoiced 2022" }).click();
  await page.getByRole("button", { name: "Invoiced 2022" }).click();
  await page.getByRole("button", { name: "Line Chart" }).click();
  await page.getByRole("button", { name: "Line Chart" }).click();
  await page.getByRole("button", { name: "Bar Chart" }).click();
  await page.getByRole("button", { name: "Bar Chart" }).click();
  await page.getByRole("link").nth(2).click();
  await page
    .locator("#projects")
    .selectOption("daab98bb-3c49-4438-8dd6-368fee1f253b");
  await page
    .locator("label")
    .filter({ hasText: "TS-Task" })
    .locator("span")
    .first()
    .click();
  await page
    .locator("label")
    .filter({ hasText: "15" })
    .locator("span")
    .first()
    .click();
  await page.getByPlaceholder("Enter hourly rate").click();
  await page.getByPlaceholder("Enter hourly rate").fill("99");
  await page.getByPlaceholder("Customer name").click();
  await page.getByPlaceholder("Customer name").fill("Testing");
  await page.getByRole("button", { name: "Add Invoice" }).click();
  await page.getByRole("link").first().click();
  await page.getByRole("button", { name: "Users" }).click();
  await page.getByRole("button", { name: "Users" }).click();
  await page.getByRole("button", { name: "Invoiced 2022" }).click();
  await page.getByRole("button", { name: "Invoiced 2022" }).click();
  await page.getByRole("button", { name: "Invoices" }).click();
  await page.getByRole("button", { name: "Invoices" }).click();
  await page.getByRole("link").nth(1).click();
  await page.getByRole("button", { name: "Users" }).click();
  await page.getByRole("button", { name: "Users" }).click();
  await page.getByRole("button", { name: "Users" }).click();
  await page.getByRole("button", { name: "Invoices" }).click();
  await page.getByRole("button", { name: "Invoices" }).click();
  await page.getByRole("button", { name: "Timelogs" }).click();
  await page.getByRole("button", { name: "Timelogs" }).click();
  await page.getByRole("button", { name: "Tasks" }).click();
  await page.getByRole("button", { name: "Tasks" }).click();
  await page.getByRole("button", { name: "Projects" }).click();
  await page.getByRole("button", { name: "Projects" }).click();
  await page.getByRole("button", { name: "Users" }).click();
  await page.getByRole("button", { name: "Users" }).click();
  await page.getByRole("link").first().click();
});
