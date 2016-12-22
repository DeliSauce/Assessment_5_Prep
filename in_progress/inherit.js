Function.prototype.inherit = function (Parent) {
  const Surrogate = function(){};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
