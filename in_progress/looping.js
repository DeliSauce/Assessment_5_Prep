
// fizzBuzz

//  Takes an array returns a new array of every number in the array
//  that is divisible by either 3 or 5, but not both.
function fizzBuzz(array) {
  let finalArr = [];
  array.forEach( (el) => {
    if (el % 3 === 0 ^ el % 5 === 0) finalArr.push(el);
  });
  return finalArr;
}

console.log(fizzBuzz([12, 15, 3, 10, 2, 30, 7])); // [12, 3, 10]

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(10)); // false
console.log(isPrime(15485863)); // true
console.log(isPrime(3548563)); // false


//iteration solution
function firstNPrimes(n) {
  let count = 0;
  let num = 2;
  let primes = [];

  while (count < n) {
    if (isPrime(num)) {
      primes.push(num);
      count++;
    }
    num++;
  }
  return primes;
}

//recursion solution
function firstNPrimesRecursively(n) {
  if (n === 1) return [2];

  let prevPrimes = firstNPrimes(n - 1);
  let lastPrime = prevPrimes[prevPrimes.length - 1];
  for (let i = lastPrime + 1; true; i++) {
    if (isPrime(i)) return prevPrimes.concat(i);
  }
}

console.log(firstNPrimes(12));


function sumOfNPrimes(n) {
  let count = 0;
  let sum = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) {
      sum += num;
      count++;
    }
    num++;
  }
  return sum;
}

console.log(sumOfNPrimes(0)); // 0
console.log(sumOfNPrimes(1)); // 2
console.log(sumOfNPrimes(4)); // 17

// return true if numbers are all divisible by mod

function allOrNothing(mod, ...numbers) {
  let bool = true;
  numbers.forEach( (el) => {
    if (el % mod !== 0) bool = false;
  });
  return bool;
}

console.log(allOrNothing(3, 9, 12, 6)); // true
console.log(allOrNothing(5, 1, 2, 10)); // false
