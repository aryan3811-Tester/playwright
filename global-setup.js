// global-setup.js
import { chromium } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Perform login manually here
  await page.goto(process.env.url);
  await page.locator('#username').fill(process.env.username);
  await page.locator('#password').fill(process.env.password);
  await page.locator('.radiotextsty').first().click();
  await page.locator('.form-control').last().selectOption('consult');
  await page.locator('#terms').check();
  await page.locator('#signInBtn').click();
  await page.context().storageState({ path: 'tests/storageState.json' });
  await browser.close();
}
