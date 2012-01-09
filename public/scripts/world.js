(function() {

  MK.World = (function() {

    function World() {}

    World.prototype.initialize = function() {
      this.sea = new Sea();
      return this.sky = new Sky();
    };

    return World;

  })();

}).call(this);
