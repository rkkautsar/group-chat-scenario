import { expect, test } from "@playwright/test";

test("muting a channel survives reload and suppresses its notifications", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Mute #general" }).click();
  await page.reload();
  await expect(page.getByRole("button", { name: "Unmute #general" })).toBeVisible();
  await page.getByRole("button", { name: "Notifications" }).click();
  await expect(page.getByText("No new notifications")).toBeVisible();
});
