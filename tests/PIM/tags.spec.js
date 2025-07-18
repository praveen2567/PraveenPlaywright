import { test, expect } from '@playwright/test';

test.describe(" Group 1", () => {
  test.beforeAll(() => {
    console.log("Before all tests");
  });

  test.afterAll(() => {
    console.log("After all tests");
  });

  test.beforeEach(() => {
    console.log("Before each test");
  });

  test.afterEach(() => {
    console.log("After each test");
  });

  test("test1", () => {
    console.log("test1");
  });

  test("test2", () => {
    console.log("test2");
  });

  test("test3", () => {
    console.log("test3");
  });
});

test.describe(" Group 2", () => {
  test("test4", {tag : "@smoke"}, () => {
    console.log("test4");
  });

  test("test5", () => {
    console.log("test5");
  });

  test("test6", () => {
    console.log("test6");
  });
});