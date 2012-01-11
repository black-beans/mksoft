(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Wave = (function() {

    function Wave(sea, pos) {
      this.sea = sea;
      this.pos = pos;
      this.update = __bind(this.update, this);
      this.move = __bind(this.move, this);
      this.x = -500 + Math.floor(Math.random() * 250) + 1;
      this.y = 100 + this.pos * 20;
      this.swellXDeg = Math.floor(Math.random() * 360) + 1;
      this.swellYDeg = Math.floor(Math.random() * 360) + 1;
      this.el = $("<div>");
      this.el.css('background', "transparent url(images/wave_" + this.sea.swell + ".png) left top repeat-x");
      this.el.css('position', 'absolute');
      this.el.css('opacity', 100 / (100 + (10 * (World.Sea.waves - this.pos))));
      this.el.css('z-index', World.Sea.waves - this.pos);
      this.el.css('height', 200);
      this.update();
      this.sea.el.append(this.el);
    }

    Wave.prototype.move = function() {
      this.swellXDeg = this.swellXDeg + this.sea.swell;
      if (this.swellXDeg > 360) this.swellXDeg = 0;
      this.swellYDeg = this.swellYDeg + this.sea.swell;
      if (this.swellYDeg > 360) this.swellYDeg = 0;
      return this.update();
    };

    Wave.prototype.update = function() {
      this.el.css('left', this.x + Math.sin(Trig.Util.deg2rad(this.swellXDeg)) * 5 * this.sea.swell);
      this.el.css('top', this.y + Math.sin(Trig.Util.deg2rad(this.swellYDeg)) * 5 * this.sea.swell);
      return this.el.css('width', this.sea.width + 1000);
    };

    return Wave;

  })();

}).call(this);
