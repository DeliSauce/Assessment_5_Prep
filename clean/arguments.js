// Write a sum function that takes any number of arguments:

function mySum() {

}

console.log(mySum(1, 2, 3, 4) === 10);
console.log(mySum(1, 2, 3, 4, 5) === 15);



Function.prototype.myCurry = function (numArgs) {
  let args = [];
  let func = this;

  function _curry(num) {
    args.push(num);
    if (args.length === numArgs) {
      return func.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};


Function.prototype.myBind = function (ctx, ...aArgs) {
    return (...bArgs) => {
      return this.apply(ctx, aArgs.concat(bArgs));
    };
};
