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

const eqArrays = require('./eqArrays');

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};