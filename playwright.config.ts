import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 600000,
  globalTimeout: 600000,
  reporter: 'list',
  testDir: '../',
  testMatch: ["**/*.js"]
});