(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Earth = (function() {

    function Earth() {
      this.move = __bind(this.move, this);      this.sea = new World.Sea();
      this.sky = new World.Sky();
      $('body').append(this.sea.el);
      $('body').append(this.sky.el);
    }

    Earth.prototype.move = function() {
      this.sea.move();
      return this.sky.move();
    };

    return Earth;

  })();

}).call(this);
