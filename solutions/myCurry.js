function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((n) => { total += n; });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// using spread
Function.prototype.curry = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};

// using apply
Function.prototype.curry1 = function(numArgs){
  const args = [];
  let fn = this;
  function _curried(arg){
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curried;
    }
  }
  return _curried;
};
