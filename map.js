const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


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



// const schoolsOfMagic = ["Transmutation", "Evocation", "Divination", "Abjuration", "Illusion", "Necromancy", "Enchantment", "Conjuration"];

// const results1 = map(schoolsOfMagic, word => word[0]);

// console.log(results1);


const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);
