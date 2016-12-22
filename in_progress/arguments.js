// Write a sum function that takes any number of arguments:

function mySum(...args) {
  let total = 0;
  args.forEach( (el) => {total += el;});
  return total;
}

console.log(mySum(1, 2, 3, 4) === 10);
console.log(mySum(1, 2, 3, 4, 5) === 15);





// Write your own myBind(context) method. Add it to Function.prototype.

Function.prototype.myBind = function (ctx, ...aArgs) {
  return (...bArgs) => {
    return this.apply(ctx, aArgs.concat(bArgs));
  };
};



//CurriedSum


function curriedSum(numArgs) {
  let nums = [];

  function _curry(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return nums.reduce((accum, el) => {return accum + el;});
    } else {
      return _curry;
    }
  }

  return _curry;
}


const sum = curriedSum(4);
console.log(sum(2)(3)(4)(5));

//Write your own curry
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

Function.prototype.curry = function (numArgs) {
  let func = this;
  let nums = [];

  function _curry(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return func.apply(null, nums);
    } else {
      return _curry;
    }
  }

  return _curry;
};

const trial = sumThree.curry(3);
console.log(trial(4)(5)(6));
//
