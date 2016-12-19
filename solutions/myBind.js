// Write your own myBind(context) method. Add it to Function.prototype.
Function.prototype.myBind = function (ctx) {
  return () => this.apply(ctx);
};

// myBind with arguments
Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(`${this.name} says meow!`);
  }
}

const curie = new Cat("Curie");
setTimeout(curie.meow.myBind(curie), 1000); //'Curie says meow!'

setTimeout(curie.meow, 1000); //'undefined says meow!'
setTimeout(meow.myBind(curie), 1000);
