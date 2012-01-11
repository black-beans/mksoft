(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MK.World = (function() {

    function World() {
      this.move = __bind(this.move, this);      this.sea = new MK.Sea();
      this.sky = new MK.Sky();
      $('body').append(this.sea.el);
      $('body').append(this.sky.el);
      setInterval(this.move, 10);
    }

    World.prototype.move = function() {
      this.sea.move();
      return this.sky.move();
    };

    return World;

  })();

}).call(this);
