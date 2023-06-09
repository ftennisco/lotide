// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('should return the tail of an array', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.lengthOf(result, 2);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });

  it('should not modify the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.lengthOf(words, 3);
  });
});