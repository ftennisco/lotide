// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// // Test case
// const testArray1 = [1, 2, 3, 4, 5];
// const testArray2 = [1, 2, 3];
// const testArray3 = [1, 2, 3, 4];
// const testArray4 = [1];
// const testArray5 = [];
// const testArray6 = ['a', 'b', 'c', 'd'];

// // Testing middle
// console.log(middle(testArray1)); // Expected: [3]
// console.log(middle(testArray2)); // Expected: [2]
// console.log(middle(testArray3)); // Expected: [2, 3]
// console.log(middle(testArray4)); // Expected: []
// console.log(middle(testArray5)); // Expected: []
// console.log(middle(testArray6)); // Expected: ['b', 'c']

// // Testing eqArrays and assertArrayEqual
// assertArraysEqual(middle(testArray1), [3]); // Expected: Assertion passed
// assertArraysEqual(middle(testArray2), [2]); // Expected: Assertion passed
// assertArraysEqual(middle(testArray3), [2, 3]); // Expected: Assertion passed
// assertArraysEqual(middle(testArray4), []); // Expected: Assertion passed
// assertArraysEqual(middle(testArray5), []); // Expected: Assertion passed
// assertArraysEqual(middle(testArray6), ['b', 'c']); // Expected: Assertion passed

const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('should return the middle element for an odd-length array', () => {
    const testArray1 = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(testArray1), [3]);
  });

  it('should return the middle element for an even-length array', () => {
    const testArray2 = [1, 2, 3];
    assert.deepEqual(middle(testArray2), [2]);

    const testArray3 = [1, 2, 3, 4];
    assert.deepEqual(middle(testArray3), [2, 3]);
  });

  it('should return an empty array for an array with a single element', () => {
    const testArray4 = [1];
    assert.deepEqual(middle(testArray4), []);
  });

  it('should return an empty array for an empty array', () => {
    const testArray5 = [];
    assert.deepEqual(middle(testArray5), []);
  });

  it('should return the middle elements for an array with non-numeric values', () => {
    const testArray6 = ['a', 'b', 'c', 'd'];
    assert.deepEqual(middle(testArray6), ['b', 'c']);
  });
});