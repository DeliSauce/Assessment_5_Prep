// Write a sum function that takes any number of arguments:

function mySum(...args) {
  let total = 0;
  args.forEach( (el) => {total += el;});
  return total;
}

console.log(mySum(1, 2, 3, 4) === 10);
console.log(mySum(1, 2, 3, 4, 5) === 15);
