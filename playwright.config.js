// @ts-check
import { defineConfig, devices } from '@playwright/test';
require('dotenv').config()

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  globalTimeout : 60 * 60 * 1000, //3600000
  timeout: 60000, // default 30sec
  expect: {
    timeout: 30000, // by default 5sec
  },
  testDir: './tests', // by default we write in tests folder we can change also like e2e
  /* Run tests in files in parallel */
  fullyParallel: true, // false one by one sequentially
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1, //any test cases fail we run one more time just give 1 like that
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1, // how many browser instances to open parallel purpose
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],["allure-playwright"]],
  // reporter: [['html'], ['dot'],['json', {outputFile: 'results.json'}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    headless : false,
    baseURL : "https://opensource-demo.orangehrmlive.com",
    screenshot : "on",
    video: "on",
    trace : 'on',
    
    // video : "retain-on-failure",
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on',
  },

  /* Configure projects for major browsers */
  // set up login.setup.js - one time
  projects: [
      
    {
      name: "setup",
      testMatch: /.*\.setup\.js/,
      use: {
          ...devices['Desktop Chrome'],
          channel: 'chrome',
      },
    },
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      //dependencies: ["setup"],
      use: {
        ...devices['Desktop Chrome'], 
        channel: 'chrome',
        //storageState: '.auth/user.json',
        // viewport: { width: 375, height: 667 },
      },
    }
  


    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome',
    //     viewport: { width: 1280, height: 720},
    //   }
       
    // },

  ],
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

