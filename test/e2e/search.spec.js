import { expect, test } from "@playwright/test";

test("search finds matching messages across channels", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Search messages" }).fill("build notes");
  await page.getByRole("button", { name: "Search" }).click();
  await expect(page.getByText("Sam in #general: The build notes are ready for review.")).toBeVisible();
});
