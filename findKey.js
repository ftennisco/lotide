const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};

assertEquals(findKey({ a: 1, b: 2, c: 3 }, (value) => value === 2), 'b');
assertEquals(findKey({ a: 1, b: 2, c: 3 }, (value) => value > 5), undefined);
assertEquals(findKey({ a: 'apple', b: 'banana', c: 'cherry' }, (value) => value.startsWith('b')), 'b');
assertEquals(findKey({ a: true, b: false, c: true }, (value) => !value), 'b');