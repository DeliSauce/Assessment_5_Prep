// Recursion Practice

// Write a recursive method, range, that takes a start and an end and
// returns an array of all numbers between.
//

function range(start, end) {
  if (start + 1 === end) return [];
  return range(start, end - 1).concat([end - 1]);
}

console.log(range(1,10)); // [2,3,4,5,6,7,8,9]

// Write a recursive and an iterative Fibonacci method.
// The method should take in an integer n and return the first n Fibonacci
// numbers in an array.
//

function fib(n) {
  if (n === 1) return [1];
  if (n === 2) return [1,1];

  let count = 2;
  let fibs = [1,1];
  while (count < n) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    count++;
  }
  return fibs;

}

function fibrec(n) {
  if (n === 1) return [1];
  if (n === 2) return [1,1];
  let prevFibs = fibrec(n - 1);
  let newFib = prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2];
  return prevFibs.concat(newFib);
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(6)); // [1,1,2,3,5,8]
console.log(fibrec(1));
console.log(fibrec(2));
console.log(fibrec(6)); // [1,1,2,3,5,8]

// Write a recursive Binary Search. Note that binary search only works on
// sorted arrays. Make sure to return the location of the found object
// (or nil if not found!).

// Hint: you will probably want to use subarrays.
//

function bsearch(arr, target) {
  let midInd = Math.floor(arr.length / 2);
  // console.log(`mid index is ${midInd}`);
  let midVal = arr[midInd];
  if (target === midVal) return midInd;
  if (arr.length <= 1) return -1;

  let left = arr.slice(0,midInd);
  let right = arr.slice(midInd + 1);

  if (target < midVal) {
    return bsearch(left, target);
  } else {
    const rightB = bsearch(right, target);
    if(rightB === -1) {
      return -1;
    } else {
      return 1 + midInd + rightB;
    }
  }
}

console.log(bsearch([1, 2, 3], 1)); // => 0
console.log(bsearch([2, 3, 4, 5], 3)); // => 1
console.log(bsearch([2, 4, 6, 8, 10], 6)); // => 2
console.log(bsearch([1, 3, 4, 5, 9], 5)); // => 3
console.log(bsearch([1, 2, 3, 4, 5, 6], 6)); // => 5
console.log(bsearch([1, 2, 3, 4, 5, 6], 0)); // => -1
console.log(bsearch([1, 2, 3, 4, 5, 7], 6)); // => -1

// Write a recursive MergeSort
// hint: The base cases are for arrays of length zero or one.

function mergeSort(array) {
  if (array.length <= 1) return array;

  let midInd = Math.floor(array.length/2);
  let left = array.slice(0, midInd);
  let right = array.slice(midInd);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  let newArr = [];
  while (arr1.length !== 0 && arr2.length !== 0) {
    if(arr1[0] < arr2[0]) {
      newArr.push(arr1[0]);
      arr1.shift();
    } else {
      newArr.push(arr2[0]);
      arr2.shift();
    }
  }
  newArr = newArr.concat(arr1).concat(arr2);
  return newArr;
}
// console.log(merge([1,3,5,8], [2,5,7,9]));
console.log(mergeSort([192,28,43,29,1,2,200,4])); // [1,2,4,28,29,43,192,200]


// Write a method, subsets, that will return all subsets of an array.
//

function subsets(array) {
  if (array.length === 0) return [[]];
  if (array.length === 1) return [[], [array[0]]];

  let last = array.slice(array.length - 1, array.length);
  let sub = array.slice(0, array.length - 1);
  let prevSubs = subsets(sub);
  let newSubs = prevSubs.map((arr) => {
    return arr.concat(last);
  });
  return prevSubs.concat(newSubs);
}

console.log(subsets([])); // => [[]]
console.log(subsets([1])); // => [[], [1]]
console.log(subsets([1, 2])); // => [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])); // => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
