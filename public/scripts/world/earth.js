(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Earth = (function() {

    Earth.name = 'Earth';

    function Earth(context) {
      this.context = context;
      this.animate = __bind(this.animate, this);

      this.size = __bind(this.size, this);

      this.size();
      this.sea = new World.Sea(this.context);
      this.sky = new World.Sky(this.context);
      $(window).bind('resize', this.size);
    }

    Earth.prototype.size = function() {
      this.context.canvas.width = $(document).width();
      return this.context.canvas.height = $(document).height();
    };

    Earth.prototype.animate = function() {
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.sea.animate();
      return this.sky.animate();
    };

    return Earth;

  })();

}).call(this);
