// Problem: https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false;

  let freqObj = {};
  for(let i=0;i<s.length;i++){
    freqObj[s[i]] = (freqObj[s[i]] || 0) + 1;
    freqObj[t[i]] = (freqObj[t[i]] || 0) - 1;
  }
  return Object.keys(freqObj).every((key) => freqObj[key] === 0)
}

function testIsAnagram(): void {
  let testCases = [
    { input: ["anagram", "nagaram"], expected: true },
    { input: ["rat", "car"], expected: false },
  ];

  testCases.forEach((testCase, index) => {
    let result = isAnagram(testCase.input[0], testCase.input[1]);
    if (result === testCase.expected) {
      console.log(`Test Case ${index + 1}: Passed`);
    } else {
      console.error(`Test Case ${index + 1}: Failed (Expected ${testCase.expected} but got ${result})`);
    }
  })
}

testIsAnagram();