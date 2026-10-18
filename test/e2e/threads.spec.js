import { expect, test } from "@playwright/test";

test("a message can open a thread and post a reply", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Reply" }).first().click();
  await page.getByRole("textbox", { name: "Reply" }).fill("Thanks, I will add the deployment notes.");
  await page.getByRole("button", { name: "Send reply" }).click();
  await expect(page.getByText("Thanks, I will add the deployment notes.")).toBeVisible();
  await expect(page.getByText("1 reply")).toBeVisible();
});
