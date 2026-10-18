import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./test/e2e",
  use: { baseURL: "http://127.0.0.1:4173", headless: true },
  webServer: {
    command: "npm start",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
  },
});
