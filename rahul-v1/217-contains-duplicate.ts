// Problem: https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
  const store = new Map();
  for (let n of nums) {
    if (store.has(n)) return true
    else {
      store.set(n, 1);
    }
  }
  return false
};

function testContainsDuplicate(): void {
  let testCases = [
    { input: [], expected: false },
    { input: [1, 2, 3, 1], expected: true },
    { input: [1, 2, 3, 4], expected: false },
    { input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
  ];

  testCases.forEach((testCase, index) => {
    let result = containsDuplicate(testCase.input);
    if (result === testCase.expected) {
      console.log(`Test Case ${index + 1}: Passed`);
    } else {
      console.error(`Test Case ${index + 1}: Failed (Expected ${testCase.expected} but got ${result})`);
    }
  });
}

testContainsDuplicate();