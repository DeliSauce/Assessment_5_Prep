
function myEach(arr, cb) {
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

myEach([1,2,3], (el) => {console.log(el);});


Array.prototype.myEach = function(cb) {
  for(let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

[1,2,3].myEach(el => console.log(el));


function myMap(arr, cb) {
  let finalArr = [];
  arr.forEach( (el) => {
    finalArr.push(cb(el));
  });
  return finalArr;
}

console.log(
  myMap([1,2,3], el => {return el * 2;})
);

Array.prototype.myMap = function(cb) {
  let finalArr = [];
  this.forEach( (el) => {
    finalArr.push(cb(el));
  });
  return finalArr;
};

console.log(
  [1,2,3].myMap(el => {return el * 2;})
);



// As the exercise describes, start the accumulator variable with the
// first value. Iterate through the rest.

function myInject(arr, cb) {
  let total = arr.shift();

  arr.forEach( (el) => {
    total = cb(total, el);
  });
  return total;
}

console.log(
  myInject([1,2,3,4], (accumulator, el) => {return accumulator + el;})
);

Array.prototype.myInject = function(cb) {
  let accumulator = this.shift();
  this.forEach( (el) => {
    accumulator = cb(accumulator, el);
  });
  return accumulator;
};

console.log(
  [1,2,3,4].myInject((a,b) => {return a + b;})
);

function mySelect(cb) {

}


Array.prototype.mySelect = function (cb) {
  let arr = [];
  this.forEach((el) => {if(cb(el)) arr.push(el);});
  return arr;
};

console.log(
  [1,2,3,4,5,6,7,8].mySelect((el) => isEven(el) ? true : false)
);

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
