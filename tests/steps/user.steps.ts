import { Given, When, Then, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { RegisterPage } from "../page/RegisterPage";
import { LoginPage } from "../page/LoginPage";
import { userData } from "../utils/testData";

setDefaultTimeout(30 * 1000);

let registerPage: RegisterPage;
let loginPage: LoginPage;

Given('I open the homepage', async function () {

  registerPage = new RegisterPage(this.page);
  loginPage = new LoginPage(this.page);

  await registerPage.open();
});

When('I register a new user', async function () {
  await registerPage.goToRegister();
  await registerPage.register(userData);
});

Then('I should see registration success message', async function () {
  await registerPage.verifySuccess();
});

When('I logout', async function () {
  await registerPage.logout();
});

When('I login with the same user', async function () {
  await loginPage.login(userData.email, userData.password);
});

Then('I should see user dashboard', async function () {
  await loginPage.verifyDashboard();
});

