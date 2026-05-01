# Azend Playwright Assignment

A Behavior-Driven Development (BDD) test automation project using Cucumber and Playwright for end-to-end testing.

## Project Overview

This project demonstrates automated testing of user registration and login workflows using:
- **Cucumber** - BDD framework for writing tests in Gherkin language
- **Playwright** - Modern browser automation library
- **TypeScript** - Type-safe automation code

## Prerequisites

Before setting up the project, ensure you have:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning the repository)

Verify installation:
```bash
node --version
npm --version
```

## Installation

### 1. Clone or Navigate to Project Directory

```bash
cd Azend-playwright-assignment
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- `@cucumber/cucumber` - BDD test framework
- `@playwright/test` - Browser automation library
- `ts-node` - TypeScript execution
- `@types/node` - TypeScript type definitions

### 3. Verify Installation

```bash
npm test
```

You should see the test runner execute the Cucumber scenarios.

## Project Structure

```
.
├── tests/
│   ├── feature/              # Gherkin feature files
│   │   └── user.feature      # User registration & login scenarios
│   ├── step-definitions/     # Step definitions (if using this path)
│   ├── steps/                # Step implementation files
│   │   └── user.steps.ts     # User scenario steps
│   ├── page/                 # Page Object Model (POM) classes
│   │   ├── RegisterPage.ts   # Registration page interactions
│   │   └── LoginPage.ts      # Login page interactions
│   ├── hooks/                # Setup/teardown hooks
│   │   └── hooks.ts          # Before/After hooks
│   └── utils/                # Utility files
│       └── testData.ts       # Test data
├── cucumber.js               # Cucumber configuration
├── cucumber.json             # Alternate Cucumber config (JSON)
├── tsconfig.json             # TypeScript configuration
├── playwright.config.ts      # Playwright configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests with Specific Feature

```bash
npx cucumber-js tests/feature/user.feature --require-module ts-node/register --require tests/steps/**/*.ts --require tests/hooks/**/*.ts
```

### Run with Verbose Output

```bash
npx cucumber-js --format progress-bar
```

### Generate HTML Report

```bash
npx cucumber-js --format html:cucumber-report.html
```

The HTML report will be generated as `cucumber-report.html`.

## Test Architecture

### Page Object Model (POM)

The project uses the Page Object Model pattern for maintainability:

```
RegisterPage.ts  → Handles registration interactions
LoginPage.ts     → Handles login interactions
user.steps.ts    → Connects Gherkin steps to page objects
```

### Test Flow

1. **Feature File** (`user.feature`) - Defines test scenarios in Gherkin
2. **Step Definitions** (`user.steps.ts`) - Maps Gherkin steps to code
3. **Page Objects** (`RegisterPage.ts`, `LoginPage.ts`) - Encapsulates page interactions
4. **Hooks** (`hooks.ts`) - Manages browser setup/cleanup

## Configuration Files

### `cucumber.js`
Defines Cucumber test execution configuration:
- Feature file paths
- Step definition requirements
- Timeout settings
- Report formatting

### `tsconfig.json`
TypeScript compiler options for the project.

### `playwright.config.ts`
Playwright-specific configuration (browser selection, test options).

## Common Issues & Solutions

### Issue: Tests Timeout
**Solution:** Increase the default timeout in `cucumber.js` or step definitions:
```typescript
setDefaultTimeout(60 * 1000); // 60 seconds
```

### Issue: Element Not Found
**Solution:** 
- Add wait for element: `await this.page.waitForSelector(selector)`
- Use try-catch for optional elements
- Verify selectors are correct for the website

### Issue: External Website Connection
**Solution:**
- Ensure internet connection
- Check if the website is accessible
- Increase goto timeout in page objects

## Browser Support

The project is configured to run tests in:
- **Chromium** (headless mode recommended)
- Additional browser support can be added via `playwright.config.ts`

## Writing New Tests

### 1. Add Feature File
Create a new `.feature` file in `tests/feature/`:
```gherkin
Feature: New Test Feature
  Scenario: Test scenario
    Given precondition
    When action
    Then result
```

### 2. Create Step Definition
Add steps in `tests/steps/new.steps.ts`:
```typescript
import { Given, When, Then } from "@cucumber/cucumber";

Given('precondition', async function () {
  // implementation
});
```

### 3. Add Page Object (if needed)
Create new page class in `tests/page/`:
```typescript
export class NewPage {
  constructor(private page: Page) {}
  
  async interact() {
    // interactions
  }
}
```

## Test Data

Test data is managed in `tests/utils/testData.ts`:
```typescript
export const userData = {
  firstName: "Test",
  lastName: "User",
  email: `testuser${Date.now()}@example.com`,
  password: "Test@1234"
};
```

## Troubleshooting

### Clear node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Update Dependencies
```bash
npm update
```

### Check TypeScript Compilation
```bash
npx tsc --noEmit
```

## Resources

- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

ISC

## Support

For issues or questions, please refer to the [GitHub repository](https://github.com/yashodhakithmini/Azend-playwright-assignment).
