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

const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat FALSE!

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    } else if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!eqObjects(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const actualString = inspect(actual);
  const expectedString = inspect(expected);
  const isEqual = eqObjects(actual, expected);

  if (isEqual) {
    console.log(`✅✅✅ Assertion Passed: ${actualString} === ${expectedString}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualString} !== ${expectedString}`);
  }


console.log(`Example label: ${inspect(actual)}`);

};

const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };

assertObjectsEqual(obj1, obj2);