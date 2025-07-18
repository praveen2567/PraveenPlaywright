const { test } = require("@playwright/test");

// test.describe("My Test Suite", () => {
//   test.beforeAll(() => {
//     console.log("Before all tests");
//   });

//   test.afterAll(() => {
//     console.log("After all tests");
//   });

//   test.beforeEach(() => {
//     console.log("Before each test");
//   });

//   test.afterEach(() => {
//     console.log("After each test");
//   });

//  test.beforeAll(() => {
//     console.log("Before all tests");
//   });

//   test.afterAll(() => {
//     console.log("After all tests");
//   });

//   test.beforeEach(() => {
//     console.log("Before each test");
//   });

//   test.afterEach(() => {
//     console.log("After each test");
//   });

//   test("test1", () => {
//     console.log("test1");
//   });

//   test("test2", () => {
//     console.log("test2");
//   });

//   test("test3", () => {
//     console.log("test3");
//   });

// how hooks are useful in group its a single group
//  test.beforeAll(() => {
//     console.log("Before all tests");
//   });

//   test.afterAll(() => {
//     console.log("After all tests");
//   });

//   test.beforeEach(() => {
//     console.log("Before each test");
//   });

//   test.afterEach(() => {
//     console.log("After each test");
//   });

// test.describe(" Group 1", () => {
//   test("test1", () => {
//     console.log("test1");
//   });

//   test("test2", () => {
//     console.log("test2");
//   });

//   test("test3", () => {
//     console.log("test3");
//   });
// });

// what if i have multiples groups inside same file yes it is accesibble now also
// test.beforeAll(() => {
//     console.log("Before all tests");
//   });

//   test.afterAll(() => {
//     console.log("After all tests");
//   });

//   test.beforeEach(() => {
//     console.log("Before each test");
//   });

//   test.afterEach(() => {
//     console.log("After each test");
//   });

// test.describe(" Group 1", () => {
//   test("test1", () => {
//     console.log("test1");
//   });

//   test("test2", () => {
//     console.log("test2");
//   });

//   test("test3", () => {
//     console.log("test3");
//   });
// });

// test.describe(" Group 2", () => {
//   test("test4", () => {
//     console.log("test4");
//   });

//   test("test5", () => {
//     console.log("test5");
//   });

//   test("test6", () => {
//     console.log("test6");
//   });
// });

// i want to make it group specific all hooks write inside test.describe group
// group 1 only applicable not group 2

// test.describe(" Group 1", () => {
//   test.beforeAll(() => {
//     console.log("Before all tests");
//   });

//   test.afterAll(() => {
//     console.log("After all tests");
//   });

//   test.beforeEach(() => {
//     console.log("Before each test");
//   });

//   test.afterEach(() => {
//     console.log("After each test");
//   });

//   test("test1", () => {
//     console.log("test1");
//   });

//   test("test2", () => {
//     console.log("test2");
//   });

//   test("test3", () => {
//     console.log("test3");
//   });
// });

// test.describe(" Group 2", () => {
//   test("test4", () => {
//     console.log("test4");
//   });

//   test("test5", () => {
//     console.log("test5");
//   });

//   test("test6", () => {
//     console.log("test6");
//   });
// });

// Running 6 tests using 1 worker
// [Google Chrome] › tests/PIM/hooks.spec.js:158:3 ›  Group 2 › test4
// test4
// [Google Chrome] › tests/PIM/hooks.spec.js:162:3 ›  Group 2 › test5
// test5
// [Google Chrome] › tests/PIM/hooks.spec.js:166:3 ›  Group 2 › test6
// test6
// [Google Chrome] › tests/PIM/hooks.spec.js:144:3 ›  Group 1 › test1
// Before all tests
// Before each test
// test1
// After each test
// [Google Chrome] › tests/PIM/hooks.spec.js:148:3 ›  Group 1 › test2
// Before each test
// test2
// After each test
// [Google Chrome] › tests/PIM/hooks.spec.js:152:3 ›  Group 1 › test3
// Before each test
// test3
// After each test
// After all tests

// Running 6 tests using 1 worker
// [Google Chrome] › tests/PIM/hooks.spec.js:98:3 ›  Group 1 › test1
// Before all tests
// Before each test
// test1
// After each test
// [Google Chrome] › tests/PIM/hooks.spec.js:102:3 ›  Group 1 › test2
// Before each test
// test2
// After each test
// [Google Chrome] › tests/PIM/hooks.spec.js:106:3 ›  Group 1 › test3
// Before each test
// test3
// After each test
// [Google Chrome] › tests/PIM/hooks.spec.js:112:3 ›  Group 2 › test4
// Before each test
// test4
// After each test
// [Google Chrome] › tests/PIM/hooks.spec.js:116:3 ›  Group 2 › test5
// Before each test
// test5
// After each test
// [Google Chrome] › tests/PIM/hooks.spec.js:120:3 ›  Group 2 › test6
// Before each test
// test6
// After each test
// After all tests

// test.describe.serial('My Test Suite', () => { execute one by one serially not in parallel

// test.beforeAll(() => {
//     console.log("Before 1st test")
// })
// test.afterAll(() => {
//     console.log("After all test")
// })
// test.beforeEach(() => {
//     console.log("beforeEach hook")
// })
// test.afterEach(() => {
//     console.log("after each test")
// })

// test("test1 ",() =>{
//     console.log("test1")
// })
// test("test2 ",()=>{
//     console.log("test2")
// })
// test("tes3 ",()=>{
//     console.log("test3")
// })

//beforeEach()

// beforeEach hook
// test1
// [Google Chrome] › tests/PIM/hooks.spec.js:10:1 › test2
// beforeEach hook
// test2
// [Google Chrome] › tests/PIM/hooks.spec.js:13:1 › tes3
// beforeEach hook
// test3

//afterEach()

// beforeEach hook
// test1
// after each test
// [Google Chrome] › tests/PIM/hooks.spec.js:37:1 › test2
// beforeEach hook
// test2
// after each test
// [Google Chrome] › tests/PIM/hooks.spec.js:40:1 › tes3
// beforeEach hook
// test3
// after each test

// Hook	    Working?	How Often?
// beforeAll	✅ Yes	    Once before all tests
// beforeEach	✅ Yes	    Before every test
// afterEach	✅ Yes	    After every test
// afterAll	✅ Yes	    Once after all tests

// beforeAll	Runs once for all tests
// beforeEach	Runs before every test
// afterEach	Runs after every test

// ❌ DON'T	✅ DO
// Put many describe() blocks in one file	Put one describe() per file
// Expect parallelism within one file	Run multiple files with --workers
// Use .serial unless you want strict order	Use regular describe() for parallel-friendly setup

// ✅ How to Fix: Split Each describe() Into Its Own File
// 🎯 Suggested Structure:
// tests/
//   hooks/
//     suite1.spec.js
//     suite2.spec.js
//     suite3.spec.js
