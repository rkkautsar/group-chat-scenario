import { expect, test } from "@playwright/test";

test("mentioning a teammate creates a notification that links to its message", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Message in general" }).fill("@maya can you review the launch checklist?");
  await page.getByRole("button", { name: "Send" }).click();
  await page.getByRole("button", { name: "Mentions" }).click();
  await expect(page.getByText("Maya mentioned you in #general")).toBeVisible();
  await expect(page.getByText("can you review the launch checklist?")).toBeVisible();
});
