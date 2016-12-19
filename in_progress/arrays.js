// Create an unique method for arrays
//

function myUniq(arr) {
  let finalArr = [];
  arr.forEach( (el) => {
    if (!finalArr.includes(el)) finalArr.push(el);
  });
  return finalArr;

}
console.log(myUniq([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])); // [1,2,3,4,5]

// Write a unique method for arrays directly on the array class
//

Array.prototype.myUnique = function () {
  let finalArr = [];
  this.forEach( (el) => {
    if (!finalArr.includes(el)) finalArr.push(el);
  });
  return finalArr;
};

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].myUnique()); // [1,2,3,4,5]


// Write a new twoSum(Array) method that finds all pairs of
// positions where the elements at those positions sum to zero.
//
//

function twoSum(arr) {
  let pairs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) pairs.push([i,j]);
    }
  }
  return pairs;
}

console.log(twoSum([-1, 0, 2, -2, 1])); // => [[0, 4], [2, 3]]

// Write a Two sum

Array.prototype.twoSum = function () {
  let pairs = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) pairs.push([i, j]);
    }
  }
  return pairs;
};

console.log([-1, 0, 2, -2, 1].twoSum()); // => [[0, 4], [2, 3]]

// Write a method, my_transpose, which will convert between the
// row-oriented and column-oriented representations.
//
//

function myTranspose(arr) {
  let transArr = [];
  for(let i = 0; i < arr.length; i++) {
    let rows = [];
    for(let j = 0; j < arr.length; j++) {
      rows.push(arr[j][i]);
    }
    transArr.push(rows);
  }
  return transArr;
}

console.log(myTranspose([
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8]
 ]));
// => [[0, 3, 6],
//    [1, 4, 7],
//    [2, 5, 8]]

//irregular shaped matrix
function myTranspose2(arr) {
  let transArr = [];
  let numRows = arr.length;
  let numCols = arr[0].length;

  for(let i = 0; i < numCols; i++) {
    let rows = [];
    for(let j = 0; j < numRows; j++) {
      rows.push(arr[j][i]);
    }
    transArr.push(rows);
  }
  return transArr;
}

console.log(myTranspose2([
   [0, 1, 2, 'x'],
   [3, 4, 5, 'y'],
   [6, 7, 8, 'z']
 ]));
// => [[0, 3, 6],
//    [1, 4, 7],
//    [2, 5, 8]
//    [x, y, z]]
