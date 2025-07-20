// pages/DashboardPage.js

/**
 * @param {import('@playwright/test').Page} page
 */
class DashboardPage {
  constructor(page) {
    this.page = page;
    this.header = page.locator('.navbar-brand'); // Adjust selector to match dashboard element

  }

  async goto() {
    await this.page.goto(process.env.dashboard); // Add this to .env if not already
  }

}

export { DashboardPage };
