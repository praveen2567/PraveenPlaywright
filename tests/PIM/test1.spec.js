const { test } = require('@playwright/test');

test.beforeAll(() => console.log("🔥 Before all tests"));
test.afterAll(() => console.log("🧹 After all tests"));
test.beforeEach(() => console.log("➡️ Before each test"));
test.afterEach(() => console.log("⬅️ After each test"));

test('test1', () => {
  console.log('✅ test1');
});
