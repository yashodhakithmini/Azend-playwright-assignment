import { expect, Page } from "@playwright/test";

export class RegisterPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto("https://magento2-demo.magebit.com/", { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async goToRegister() {
    try {
      await this.page.waitForSelector("text=Create an Account", { timeout: 10000 });
      await this.page.click("text=Create an Account");
    } catch (e) {
      
      try {
        await this.page.click('a[href*="customer/account/create"]');
      } catch {
        // Registration link not found
      }
    }
  }

  async register(user: any) {
    try {
      await this.page.fill("#firstname", user.firstName);
      await this.page.fill("#lastname", user.lastName);
      await this.page.fill("#email_address", user.email);
      await this.page.fill("#password", user.password);
      await this.page.fill("#password-confirmation", user.password);
      await this.page.click('button[title="Create an Account"]');
    } catch (e) {

    }
  }

  async verifySuccess() {
    const successMsg = this.page.locator(".message-success");

  await expect(successMsg).toBeVisible();
  await expect(successMsg).toContainText("Thank you for registering");
  }

  async logout() {

      const menuToggle = await this.page.$(".customer-menu-toggle");
      if (menuToggle) {
        await this.page.click(".customer-menu-toggle");
        await this.page.waitForSelector("text=Sign Out", { timeout: 5000 });
        await this.page.click("text=Sign Out");
      }
  }
}