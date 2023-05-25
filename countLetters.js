const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letterCounts = {};
  for (let char of sentence) {
    if (char !== ' ') {
      if (letterCounts[char]) {
        letterCounts[char]++;
      } else {
        letterCounts[char] = 1;
      }
    }
  }
  return letterCounts;
};

const result = countLetters("Hello World");

console.log(result);