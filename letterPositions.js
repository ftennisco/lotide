const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== " ") {
      if(!results[sentence[i]]) {
        results[sentence[i]] = []
      }
        results[sentence[i]].push(i)
      
    }
  }
  return results;
};



// these two code blocks are imported to help test code
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

// console.log("output of letter Position ", letterPositions("Hello"))

assertArraysEqual(letterPositions("hello").e, [1]);