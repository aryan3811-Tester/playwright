// tests/login.spec.js
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login.js';
import dotenv from 'dotenv';
dotenv.config();

// Override default test with empty storage state
const test = base.extend({
  storageState: undefined,
});

test('Login test using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.username, process.env.password);
  await loginPage.isLoginSuccessful();
});
