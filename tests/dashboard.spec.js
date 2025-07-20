import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/Dashboard.js';

test.use({ storageState: 'tests/storageState.json' }); // Reuse logged-in session

test('User should be able to access dashboard', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.goto();

});
