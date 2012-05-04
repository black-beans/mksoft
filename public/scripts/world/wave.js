(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Wave = (function() {

    Wave.name = 'Wave';

    function Wave(context, sea, pos) {
      var _this = this;
      this.context = context;
      this.sea = sea;
      this.pos = pos;
      this.animate = __bind(this.animate, this);

      this.size = __bind(this.size, this);

      $(window).bind('resize', this.size);
      this.size();
      this.x = -500 + Math.floor(Math.random() * 250) + 1;
      this.z = World.Sea.waves - this.pos;
      this.swellXDeg = Math.floor(Math.random() * 360) + 1;
      this.swellYDeg = Math.floor(Math.random() * 360) + 1;
      this.image = new Image();
      this.image.onload = function() {
        return _this.pattern = _this.context.createPattern(_this.image, 'repeat-x');
      };
      this.image.src = "images/wave_" + this.sea.swell + ".png";
      this.opacity = 100 / (100 + (10 * (World.Sea.waves - this.pos)));
    }

    Wave.prototype.size = function() {
      return this.y = $(document).height() - this.sea.height + this.pos * 20;
    };

    Wave.prototype.animate = function() {
      var x, y;
      this.swellXDeg = this.swellXDeg + this.sea.swell * 3;
      if (this.swellXDeg > 360) {
        this.swellXDeg = 0;
      }
      this.swellYDeg = this.swellYDeg + this.sea.swell * 3;
      if (this.swellYDeg > 360) {
        this.swellYDeg = 0;
      }
      if (this.pattern) {
        x = this.x + Math.sin(Trig.Util.deg2rad(this.swellXDeg)) * 5 * this.sea.swell;
        y = this.y + Math.sin(Trig.Util.deg2rad(this.swellYDeg)) * 5 * this.sea.swell;
        this.context.save();
        this.context.translate(x, y);
        this.context.globalAlpha = this.opacity;
        this.context.fillStyle = this.pattern;
        this.context.fillRect(0, 0, this.context.canvas.width - this.x + 20, this.image.height);
        return this.context.restore();
      }
    };

    return Wave;

  })();

}).call(this);
