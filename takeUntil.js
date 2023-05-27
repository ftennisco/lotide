const takeUntil = function(array, callback) {
  const result = [];

  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }

  return result;
};


// const numbers = [1, 2, 3, 4, 5];
// const isEven = (number) => number % 2 === 0;

// const result = takeUntil(numbers, isEven);
// console.log(result);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);