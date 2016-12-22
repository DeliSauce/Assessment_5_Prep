

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

console.log(isSubstring("time to program", "time")); // true
console.log(isSubstring("Jump for joy", "joys")); // false

// Write a function that takes three strings - a verb, an adjective, and a
// noun - uppercases and interpolates them into the sentence
// "We shall VERB the ADJECTIVE NOUN".

function madLib(a,b,c) {
  return `We shall ${a.toUpperCase()} the ${b.toUpperCase()} ${c.toUpperCase()}.`;
}

console.log(madLib('make', 'best', 'guac')); // "We shall MAKE the BEST GUAC."
