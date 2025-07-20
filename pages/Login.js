// pages/LoginPage.js
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("#username");  // e.g., '#username'
    this.passwordInput = page.locator("#password");  // e.g., '#password'
    this.admin = page.locator('.radiotextsty').first();       // added dot before class
    this.dropdown = page.locator('.form-control').last();  // fixed
    this.terms = page.locator('#terms');
    this.loginButton = page.locator('#signInBtn');
  }

  async goto() {
    await this.page.goto(process.env.url);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.admin.click();
    await this.dropdown.selectOption('consult'); 
    await this.terms.check();
    await this.loginButton.click();
  }

    async isLoginSuccessful() {
        // Implement a method to check if login was successful
        // This could be checking for a specific element that appears after login
        return await this.page.isVisible(".navbar-brand"); // Adjust selector as needed
    }
}

export { LoginPage };
