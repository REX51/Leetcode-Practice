// Problem: https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number) {
  let store = new Map()
  let i = 0
  for (let number of nums) {
    if (store.has(number)) return [store.get(number), i]
    else store.set(target - number, i++)
  }
}


function testTwoSum(): void {
  let testCases = [
    { input: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { input: [3, 2, 4], target: 6, expected: [1, 2] },
    { input: [3, 3], target: 6, expected: [0, 1] },
  ];

  testCases.forEach((testCase, index) => {
    let result = twoSum(testCase.input, testCase.target);
    if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
      console.log(`Test Case ${index + 1}: Passed`);
    } else {
      console.error(`Test Case ${index + 1}: Failed (Expected ${testCase.expected} but got ${result})`);
    }
  })
}


testTwoSum()