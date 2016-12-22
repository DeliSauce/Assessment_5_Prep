Function.prototype.inherits = function (Par) {
  function Surr() {}
  Surr.prototype = Par.prototype;
  this.prototype = new Surr();
  this.prototype.constructor = this;
};
