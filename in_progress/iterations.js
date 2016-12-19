function bubbleSort(arr) {
  let cont = true;
  while (cont) {
    cont = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        cont = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([192,28,43,29,1,2,200,4])); // [1,2,4,28,29,43,192,200]

Array.prototype.bubbleSort = function () {
  // let arr = this;
  let cont = true;
  while (cont) {
    cont = false;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        cont = true;
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
  }
  return this;
};

console.log([192,28,43,29,1,2,200,4].bubbleSort()); // [1,2,4,28,29,43,192,200]


function substrings(string) {
  let arr = [];
  for(let i = 0; i <= string.length - 1; i++) {
    for(let j = i + 1; j <= string.length; j++) {
      arr.push(string.slice(i,j));
    }
  }
  return arr;
}

console.log(substrings("hello")); // ['h','he','hel','hell','hello','e','el','ell','ello','l','ll','llo','l','lo','o']

String.prototype.substrings = function () {
  let arr = [];
  for (let i = 0; i <= this.length - 1; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      arr.push(this.slice(i, j));
    }
  }
  return arr;
};

console.log("hello".substrings()); // ['h','he','hel','hell','hello','e','el','ell','ello','l','ll','llo','l','lo','o']
