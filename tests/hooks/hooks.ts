import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

let browser: Browser;

Before(async function () {
  browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();
  const page = await context.newPage();

  this.page = page;
});

After(async function () {
  await this.page.close();
  await browser.close();
});